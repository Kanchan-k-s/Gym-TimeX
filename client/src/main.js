

import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate';
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import 'mdb-vue-ui-kit/css/mdb.min.css';


import ToastPlugin from 'vue-toast-notification';
import "vue-toast-notification/dist/theme-bootstrap.css";

console.log(App)
const app = Vue.createApp(App)
app.use(ToastPlugin);
app.use(Vuelidate)

// Vue.config.productionTip = false //deprecated
 
app.use(BootstrapVue);
app.use(IconsPlugin);

const router = new createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
  // scrollBehavior: function (to) {
  //   if (to.hash) {
  //     return {
  //       selector: to.hash
  //     }
  //   }
  // }
})


// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

// const router = new VueRouter({
//   routes,
//   mode: "history",
//   scrollBehavior: function (to) {
//     if (to.hash) {
//       return {
//         selector: to.hash
//       }
//     }
//   },
// });

// new Vue({
//   render: function (h) { return h(App) },
//   router
// }).$mount('#app')
