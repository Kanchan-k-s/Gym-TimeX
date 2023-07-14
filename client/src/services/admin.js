import api from "./api";

export default {
    allEquipments(){
        return api.get("http://localhost:3000/admin/equipment/all");
    },
    allSlots(){
        return api.get("http://localhost:3000/admin/slot/all");
    },
    deleteSlot(id){
        return api.delete("http://localhost:3000/admin/slot/"+id);
    }
    

}