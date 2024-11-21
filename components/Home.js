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
};
