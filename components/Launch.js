import header from "./Header.js";
import footer from "./Footer.js";

export default {
  data() {
    return {
      urls: [],
      isPostRequest: false,
      isURLArray: true,
      urlInput: "", // for GET form input
      placeHolder:
        "Paste your URLs here (comma-separated) to launch them.\ne.g. https://example1.com, https://example2.com",
      visibleUrls: [],
      hiddenCount: 0,
    };
  },
  template: `
    ${header.template}
    <div class="launch">
      <!-- GET Request -->
      <h1 v-if="!isPostRequest">Enter the URLs you want to launch 🚀!</h1>
      <div v-if="!isPostRequest" class="form-container">
        <textarea v-model="urlInput" type="text" :placeholder="placeHolder"></textarea>
        <button @click="handleGet()">Launch</button>
      </div>

      <!-- POST Request Launch Button -->
      <h1 v-if="isPostRequest && !isURLArray">No URLs found (or) Error Parsing URLs 🚫!</h1>
      <p v-if="isPostRequest && !isURLArray">Kindly refer docs & check console for error details!</p>
      <h1 v-if="isPostRequest && urls.length > 0">URLs Ready to take off 🚀!</h1>
      <div v-if="isPostRequest && urls.length > 0" class="button-container">
        <ul class="url-list">
          <p><strong>The following action will open:</strong></p>
          <li v-for="url in visibleUrls" :key="url">{{ url }}</li>
          <li v-if="hiddenCount > 0">
            ...and <strong>{{ hiddenCount }} more</strong>.
          </li>
        </ul>
        <button @click="handlePost(urls)">Launch</button>
      </div>
    </div>
    ${footer.template}
  `,
  created() {
    if (this.$route.query.post === "true") {
      this.isPostRequest = true;
      try {
        // Safely extract and decode URLs
        const rawUrls = this.$route.query.urls || "[]"; // Default to empty JSON array if not found
        const decodedUrls = JSON.parse(decodeURIComponent(rawUrls)); // Decode once and parse as JSON

        if (Array.isArray(decodedUrls)) {
          this.urls = decodedUrls;
          this.visibleUrls = this.urls.slice(0, 3); // Show first 3 URLs
          this.hiddenCount = this.urls.length - this.visibleUrls.length; // Calculate hidden count
        } else {
          throw new Error("URLs parameter is not an array. Refer Docs.");
        }
      } catch (error) {
        this.isURLArray = false;
        console.error("Error parsing URLs:", error);
      }
    }
  },
  methods: {
    handleGet() {
      const urls = this.urlInput
        .split(",")
        .map((url) => url.trim())
        .filter((url) => url); // Remove empty strings
      this.launchUrls(urls);
    },

    handlePost() {
      const urls = this.urls.map((url) => url.trim()).filter((url) => url); // Remove empty strings
      this.launchUrls(urls);
    },

    launchUrls(urls) {
      let popUpBlocked = false;

      urls.forEach((url) => {
        if (!url) return; // Skip empty URLs

        const decodedUrl = decodeURIComponent(url); // Decode once
        const validUrl = decodedUrl.includes("://")
          ? decodedUrl
          : `https://${decodedUrl}`;
        console.log("Opening:", validUrl);

        const newWindow = window.open(validUrl, "_blank");
        if (!newWindow) {
          popUpBlocked = true; // If pop-up is blocked, mark as blocked
        }
      });

      if (popUpBlocked) {
        window.alert(
          "Make sure to enable pop-ups! Or else it won't work.\nRefer Docs for more info."
        );
      }

      console.log("Done!");
    },
  },
};
