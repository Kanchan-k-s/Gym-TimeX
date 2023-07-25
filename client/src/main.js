import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate';
import VueRouter from "vue-router";
import routes from "./routes";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import 'mdb-vue-ui-kit/css/mdb.min.css';

import ToastPlugin from 'vue-toast-notification';
import "vue-toast-notification/dist/theme-bootstrap.css";
Vue.use(ToastPlugin);
Vue.use(Vuelidate)

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
});

new Vue({
  render: function (h) { return h(App) },
  router
}).$mount('#app')
