import api from "./api";

export default {
    allEquipments(){
        return api.get("http://localhost:3000/admin/equipment/all");
    },
    allSlots(){
        return api.get("http://localhost:3000/admin/slot/all");
    }
    

}