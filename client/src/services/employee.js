import api from "./api";

export default {
    slotDate(curr_date){
        return api.post("http://localhost:3000/employee/slot/date",curr_date);
    },
    showEquipments(){
        return api.get("http://localhost:3000/employee/equipments")
    },
    showEquipmentsCategory(){
        return api.get("http://localhost:3000/employee/equipments/category")
    }
    ,
    updateSlot(id){
        return api.get("http://localhost:3000/employee/slot/"+id)
    }
}