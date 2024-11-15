import header from "./Header.js";
import footer from "./Footer.js";

export default {
  template: `
        ${header.template}
        <div class="err404">
            <h1>Oops! Page Not Found</h1>
            <p>Go back to <router-link to="/">Home</router-link></p>
        </div>
        ${footer.template}
        `,
};
