"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _jsCookie = _interopRequireDefault(require("js-cookie"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const api = _axios.default.create({
  baseURL: `http://localhost:3000/`
});
_axios.default.defaults.headers.common['Time-Zone'] = 'Asia/Kolkata';
api.interceptors.request.use(config => {
  const token = _jsCookie.default.get("token");
  config.headers.Authorization = `Bearer ${token}`;
  config.headers['cache-control'] = 'no-cache';
  return config;
});
var _default = exports.default = api;