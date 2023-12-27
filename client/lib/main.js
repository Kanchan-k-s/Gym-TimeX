"use strict";

var _vue = _interopRequireDefault(require("vue"));
var _App = _interopRequireDefault(require("./App.vue"));
var _vuelidate = _interopRequireDefault(require("vuelidate"));
var _vueRouter = _interopRequireDefault(require("vue-router"));
var _routes = _interopRequireDefault(require("./routes"));
var _bootstrapVue = require("bootstrap-vue");
require("bootstrap/dist/css/bootstrap.css");
require("bootstrap/dist/js/bootstrap.js");
require("bootstrap-vue/dist/bootstrap-vue.css");
var _vueToastNotification = _interopRequireDefault(require("vue-toast-notification"));
require("vue-toast-notification/dist/theme-bootstrap.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Import Bootstrap and BootstrapVue CSS files (order is important)

// import 'mdb-vue-ui-kit/css/mdb.min.css';

_vue.default.use(_vueToastNotification.default);
_vue.default.use(_vuelidate.default);
_vue.default.config.productionTip = false;
_vue.default.use(_vueRouter.default);
_vue.default.use(_bootstrapVue.BootstrapVue);
_vue.default.use(_bootstrapVue.IconsPlugin);
const router = new _vueRouter.default({
  routes: _routes.default,
  mode: "history",
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
  }
});
new _vue.default({
  render: function (h) {
    return h(_App.default);
  },
  router
}).$mount('#app');