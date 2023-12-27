"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Register = _interopRequireDefault(require("./views/Register"));
var _AdminDashboard = _interopRequireDefault(require("./views/AdminDashboard"));
var _AdminSettings = _interopRequireDefault(require("./views/AdminSettings"));
var _AboutUs = _interopRequireDefault(require("./views/AboutUs"));
var _employeeHome = _interopRequireDefault(require("./views/employeeHome"));
var _employeeBooking = _interopRequireDefault(require("./views/employeeBooking.vue"));
var _Equipments = _interopRequireDefault(require("./views/Equipments"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = [{
  path: "/",
  component: _employeeHome.default,
  name: "Employee Home"
}, {
  path: "/sign/:id",
  component: _Register.default,
  name: "Register"
}, {
  path: "/admin/panel",
  component: _AdminDashboard.default,
  name: "AdminDashboard"
}, {
  path: "/settings",
  component: _AdminSettings.default,
  name: "AdminSettings"
}, {
  path: "/about",
  component: _AboutUs.default,
  name: "AboutUs"
}, {
  path: "/employee/booking",
  component: _employeeBooking.default,
  name: 'Booking'
}, {
  path: "/employee/equipments",
  component: _Equipments.default,
  name: "equipments"
}];