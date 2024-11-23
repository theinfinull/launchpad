import header from "./Header.js";

export default {
  template: `
    ${header.template}
    <div class="home">
      <!-- LOADER -->
      <div class="loader-container">
        <div class="loader"></div>
      </div>
      <!-- SPLINE CONTENT -->
      <spline-viewer url="https://prod.spline.design/qS0vegZw36uSv7Da/scene.splinecode"></spline-viewer>
      <!-- spline hider -->
      <div class="spline-overlay"></div>
      <div class="spline-hider0"></div>
      <div class="spline-hider1">
        <div class="direction">Scroll Down ↘</div>
      </div>
      <!-- SPLINE CONTENT ENDS -->
      <!-- PAGE CONTENT -->
      <h1>Open Multiple URLs with a single click!</h1>
    </div>
  `,

  mounted() {
    this.initHideHeader(); // Mount the scroll logic
  },

  unmounted() {
    this.cleanupHideHeader(); // Remove the scroll listener on unmount
  },

  methods: {
    initHideHeader() {
      this.lastScrollTop = 0;
      this.header = document.querySelector(".header");

      // Ensure the header element exists
      if (!this.header) {
        console.error("ERR: Header Not Found!");
        return;
      }

      // Bind the scroll event listener
      this.scrollHandler = this.onScroll.bind(this); // Save reference to allow removal
      window.addEventListener("scroll", this.scrollHandler);
    },

    cleanupHideHeader() {
      // Remove the scroll event listener
      if (this.scrollHandler) {
        window.removeEventListener("scroll", this.scrollHandler);
      }
    },

    onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Add or remove the "hide" class based on scroll direction
      if (scrollTop > this.lastScrollTop) {
        this.header.classList.add("hide");
      } else {
        this.header.classList.remove("hide");
      }

      // Update the last scroll position
      this.lastScrollTop = scrollTop;
    },
  },
};
