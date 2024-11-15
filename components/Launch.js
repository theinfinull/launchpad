import header from "./Header.js";

export default {
  data() {
    return {
      urls: [],
      isPostRequest: false,
      urlInput: "", // for GET form input
      placeHolder:
        "Paste your URLs here (comma-separated) to launch them.\ne.g. https://example1.com, https://example2.com",
    };
  },
  template: `
    ${header.template}
    <div class="launch">
      <!-- GET Request -->
      <h1 v-if="!isPostRequest">Enter the URLs you want to launch 🚀!</h1>
      <div v-if="!isPostRequest" class="form-container">
      <textarea v-model="urlInput" type="text" :placeholder=placeHolder />
      <button @click="handleGet()">Launch</button>
      </div>

      <!-- POST Request Launch Button -->
      <h1 v-else>Launch All URLs</h1>
      <div v-else class="button-container">
        <button @click="handlePost(urls)">Launch</button>
      </div>
    </div>
  `,
  created() {
    if (this.$route.query.post === "true") {
      this.isPostRequest = true;
      this.urls = this.$route.query.urls
        ? JSON.parse(this.$route.query.urls)
        : [];
    }
  },
  methods: {
    handleGet() {
      const urls = this.preprocessUrls(this.urlInput);
      this.launchUrls(urls);
    },

    handlePost() {
      const urls = this.preprocessUrls(this.urls);
      this.launchUrls(urls);
    },

    preprocessUrls(rawUrls) {
      const processedUrls = rawUrls
        .split(",")
        .map((rawUrl) => rawUrl.trim())
        .filter((rawUrl) => rawUrl);

      return processedUrls;
    },

    launchUrls(urls) {
      urls.forEach((url) => {
        const validUrl = url.includes("://") ? url : `https://${url}`;
        window.open(validUrl, "_blank");
      });
    },
  },
};
