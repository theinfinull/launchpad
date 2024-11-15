export default {
  template: `
        <div class="header">
            <div class="left">
                <img src="../img/favicon.png" alt="Launch Pad Logo" />
                <span>Launch Pad</span>
            </div>
            <div class="right">
                <router-link v-if="$route.path !== '/'" to="/">Home</router-link>
                <router-link v-if="$route.path !== '/launch'" to="/launch">Launch</router-link>
                <router-link v-if="$route.path !== '/docs'" to="/docs">Docs</router-link>
            </div>
        </div>
        `,
};
