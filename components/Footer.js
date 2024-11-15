export default {
  template: `
    <div class="footer">
        <span>Made by</span>
        <a class="namecard" href='https://github.com/theinfinull' target="_blank">
            <img src="../img/theinfinull.jpg" alt="Launch Pad Logo" />
        infinull
        </a>
        <span>&amp;</span> 
        <a class="namecard" href="https://github.com/blackberry24" target="_blank">
            <img src="../img/blackberry.jpg" alt="Launch Pad Logo" />
        blackberry
        </a>
    </div>
    `,
  methods: {
    openUrl(url) {
      window.open(url, "_blank");
    },
  },
};
