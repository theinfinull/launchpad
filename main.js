import Home from "./components/Home.js";
import Docs from "./components/Docs.js";
import Launch from "./components/Launch.js";
import ERR404 from "./components/404.js";

// Define routes
const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/docs", name: "docs", component: Docs },
  // LAUNCH
  { path: "/launch", component: Launch }, // for both GET/POST
  // ERROR
  { path: "/404", name: "404", component: ERR404 },
  { path: "/:catchAll(.*)", redirect: "/404" },
];

// Create Vue Router instance
const router = VueRouter.createRouter({
  // history: VueRouter.createWebHashHistory(),
  history: VueRouter.createWebHistory(),
  routes,
});

// Create and mount the Vue 3 app
const app = Vue.createApp({});
app.use(router);
app.mount("#app");
