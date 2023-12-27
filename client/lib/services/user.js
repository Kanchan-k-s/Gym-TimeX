"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _api = _interopRequireDefault(require("./api"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = {
  register(body) {
    return _api.default.post("http://localhost:3000/user/register", body);
  },
  login(body) {
    return _api.default.post("http://localhost:3000/user/login", body);
  },
  getUserInfo() {
    return _api.default.get("http://localhost:3000/user/info/");
  },
  updateUser(body) {
    return _api.default.post("http://localhost:3000/user/info/update", body);
  },
  changePassword(body) {
    return _api.default.post("http://localhost:3000/user/password/update", body);
  }
};