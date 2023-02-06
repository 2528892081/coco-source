import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./router/routes.js";
import { storageOptions } from "./utils/vue-ls";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(storageOptions);
Vue.config.silent = true;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
