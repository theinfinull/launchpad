import header from "./Header.js";
import footer from "./Footer.js";
import features from "./FeatureSection.js";

export default {
  template: `
    ${header.template}
    <div class="home">
      <!-- LOADER -->
      <div class="loader-container">
        <div class="loader"></div>
      </div>
      <!-- SPLINE CONTENT -->
      <div ref="splineContainer" class="spline-container">
        <spline-viewer
          ref="splineViewer"
          url="https://prod.spline.design/qS0vegZw36uSv7Da/scene.splinecode"
        ></spline-viewer>
      </div>
      <!-- spline hider -->
      <div class="spline-overlay"></div>
      <div class="spline-hider0"></div>
      <div class="spline-hider1">
        <a href="#first_heading" class="direction">Scroll Down ↘</a>
      </div>
      <!-- PAGE CONTENT -->
      <section class="hero">
        <h1 id="first_heading">Open Multiple URLs with a single click!</h1>
        <p class="para">LaunchPad is a free tool that allows you to launch multiple URLs in one click. Just copy and paste the URLs into the text box, and click "Launch". Made exclusively for Zoho Cliq!</p>
      </section>
      <hr>
      <!-- Sections... -->
      ${features.template}
      <hr>
    </div>
    ${footer.template}
  `,

  mounted() {
    this.initHideHeader(); // Mount the scroll logic
    this.initSplineVisibility(); // Monitor spline visibility
  },

  unmounted() {
    this.cleanupHideHeader(); // Remove scroll listener
    this.cleanupSplineVisibility(); // Cleanup observer
  },

  methods: {
    // HEADER CODE
    initHideHeader() {
      this.lastScrollTop = 0;
      this.header = document.querySelector(".header");

      if (!this.header) {
        console.error("ERR: Header Not Found!");
        return;
      }

      this.scrollHandler = this.onScroll.bind(this); // Save reference to allow removal
      window.addEventListener("scroll", this.scrollHandler);
    },

    cleanupHideHeader() {
      if (this.scrollHandler) {
        window.removeEventListener("scroll", this.scrollHandler);
      }
    },

    onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > this.lastScrollTop) {
        this.header.classList.add("hide");
      } else {
        this.header.classList.remove("hide");
      }
      this.lastScrollTop = scrollTop;
    },

    // SPLINE CODE
    initSplineVisibility() {
      this.splineViewer = this.$refs.splineViewer;

      if (!this.splineViewer) {
        console.error("ERR: Spline elements not found!");
        return;
      }

      this.splineObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Fully in view (intersectionRatio >= 1)
              this.splineViewer.style.opacity = 1;
            } else if (entry.intersectionRatio === 0) {
              // Fully out of view (intersectionRatio === 0)
              this.splineViewer.style.opacity = 0;
            }
          });
        },
        {
          root: null, // Observe within the viewport
          threshold: [0, 1], // Trigger when fully visible (1) and fully out (0)
        }
      );
      this.splineObserver.observe(this.splineViewer);
    },

    cleanupSplineVisibility() {
      if (this.splineObserver) {
        this.splineObserver.disconnect();
      }
    },
  },
};
