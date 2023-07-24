import api from "./api";

export default {
    allEquipments(){
        return api.get("http://localhost:3000/admin/equipment/all");
    },
    createEquip(newRow){
        return api.post("http://localhost:3000/admin/equipment/add",newRow);
    },
    deleteEquip(id){
        return api.delete("http://localhost:3000/admin/equipment/"+id);
    },
    updateEquip(newRow){
        return api.put("http://localhost:3000/admin/equipment/update/"+newRow.id,newRow);
    },
    allSlots(){
        return api.get("http://localhost:3000/admin/slot/all");
    },
    deleteSlot(id){
        return api.delete("http://localhost:3000/admin/slot/"+id);
    },
    createSlot(newRow){
        return api.post("http://localhost:3000/admin/slot/add",newRow);
    },
    updateSlot(newRow){
        return api.put("http://localhost:3000/admin/slot/update/"+newRow.id,newRow);
    },
    showGym(){
        return api.get("http://localhost:3000/admin/gyms/all")
    },

    updateGym(gym){
        return api.put("http://localhost:3000/admin/gyms/update/"+gym.id,gym)
    }

}