import header from "./Header.js";
import footer from "./Footer.js";

export default {
  template: `
    ${header.template}
    <div class="home">
        <h1>Open Multiple URLs with a single click!</h1>
    </div>
    ${footer.template}
    `,
};
