"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _api = _interopRequireDefault(require("./api"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = {
  slotDate(curr_date) {
    return _api.default.post("http://localhost:3000/employee/slot/date", curr_date);
  },
  showEquipments() {
    return _api.default.get("http://localhost:3000/employee/equipments");
  },
  showEquipmentsCategory(cat) {
    return _api.default.get("http://localhost:3000/employee/equipments/category/" + cat);
  },
  updateSlot(id) {
    return _api.default.get("http://localhost:3000/employee/slot/" + id);
  },
  showAdds() {
    return _api.default.get("http://localhost:3000/user/sponser/");
  },
  addRevenue(id) {
    return _api.default.get("http://localhost:3000/user/sponser/" + id);
  }
};