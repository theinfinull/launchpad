import header from "./Header.js";
import footer from "./Footer.js";

export default {
  data() {
    return {
      urls: [],
      isPostRequest: false,
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
      <h1 v-if="isPostRequest && urls.length === 0">No URLs found (or) Error Parsing URLs 🚫!</h1>
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
        const urlsQuery = this.$route.query.urls
          ? decodeURIComponent(this.$route.query.urls) // Decode query parameters
          : "[]"; // Default to empty array if not found
        this.urls = JSON.parse(urlsQuery); // Parse the decoded JSON string
        this.visibleUrls = this.urls.slice(0, 3); // Show first 3 URLs
        this.hiddenCount = this.urls.length - this.visibleUrls.length; // Calculate the hidden URLs
      } catch (error) {
        console.error("Error parsing URLs:", error);
      }
    }
  },
  methods: {
    handleGet() {
      // Split & Trim the URLs, then encode them before passing them around
      const urls = this.urlInput
        .split(",")
        .map((url) => url.trim())
        .map((url) => encodeURIComponent(url));
      this.launchUrls(urls);
    },

    handlePost() {
      // Just Trim and encode the URLs
      const urls = this.urls.map((url) => encodeURIComponent(url.trim()));
      this.launchUrls(urls);
    },

    launchUrls(urls) {
      // Open URLs in a new tab. Ensure that the URL is prefixed with 'https://' if not already provided.
      urls.forEach((encodedUrl) => {
        const decodedUrl = decodeURIComponent(encodedUrl); // Decode URL before opening
        const validUrl = decodedUrl.includes("://")
          ? decodedUrl
          : `https://${decodedUrl}`;
        window.open(validUrl, "_blank");
      });
    },
  },
};
