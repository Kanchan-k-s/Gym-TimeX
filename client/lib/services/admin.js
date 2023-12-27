"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _api = _interopRequireDefault(require("./api"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = {
  allUsers() {
    return _api.default.get("http://localhost:3000/admin/user/all");
  },
  allUsersToday(current_date) {
    return _api.default.post("http://localhost:3000/admin/booking", current_date);
  },
  allEquipments() {
    return _api.default.get("http://localhost:3000/admin/equipment/all");
  },
  createEquip(newRow) {
    return _api.default.post("http://localhost:3000/admin/equipment/add", newRow);
  },
  deleteEquip(id) {
    return _api.default.delete("http://localhost:3000/admin/equipment/" + id);
  },
  updateEquip(newRow) {
    return _api.default.put("http://localhost:3000/admin/equipment/update/" + newRow.id, newRow);
  },
  allSlots() {
    return _api.default.get("http://localhost:3000/admin/slot/all");
  },
  deleteSlot(id) {
    return _api.default.delete("http://localhost:3000/admin/slot/" + id);
  },
  createSlot(newRow) {
    return _api.default.post("http://localhost:3000/admin/slot/add", newRow);
  },
  updateSlot(newRow) {
    return _api.default.put("http://localhost:3000/admin/slot/update/" + newRow.id, newRow);
  },
  showGym() {
    return _api.default.get("http://localhost:3000/admin/gyms/all");
  },
  updateGym(gym) {
    return _api.default.put("http://localhost:3000/admin/gyms/update/" + gym.id, gym);
  },
  createSponsor(Row) {
    return _api.default.post("http://localhost:3000/admin/sponsor/add", Row);
  },
  updateSponsor(Row) {
    return _api.default.put("http://localhost:3000/admin/sponsor/update/" + Row.id, Row);
  },
  showSponsor() {
    return _api.default.get("http://localhost:3000/admin/sponsor/all");
  },
  deleteSponsor(id) {
    return _api.default.delete("http://localhost:3000/admin/sponsor/" + id);
  }
};