"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _jsCookie = _interopRequireDefault(require("js-cookie"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = {
  methods: {
    logout() {
      localStorage.clear();
      this.$toast.success('Logged out ^-^ ');
      _jsCookie.default.remove("token");
      this.$router.push("/sign/in");
    }
  }
};