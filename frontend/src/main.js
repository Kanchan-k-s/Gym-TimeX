import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VuelidatePlugin  from '@vuelidate/core'
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import ToastPlugin from 'vue-toast-notification';
import "vue-toast-notification/dist/theme-bootstrap.css";


import routes from "./routes";

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)
app.use(ToastPlugin);
app.use(VuelidatePlugin)


// app.use(BootstrapVue);
// app.use(IconsPlugin);
app.mount('#app')