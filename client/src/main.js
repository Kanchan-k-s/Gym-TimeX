import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import routes from "./routes";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(BootstrapVue);
const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  render: function (h) { return h(App) },
  router
}).$mount('#app')
