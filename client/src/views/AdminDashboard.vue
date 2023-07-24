<template>
    <div>

        <AdminNavbar></AdminNavbar>
        <div class="container" style="padding-top:25vh">


            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingGym">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseGym" aria-expanded="false" aria-controls="flush-collapseGym">
                            Gym Info
                        </button>
                    </h2>
                    <div id="flush-collapseGym" class="accordion-collapse collapse" aria-labelledby="flush-headingGym"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <div>
                                <table border="1px" class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Opening Time</th>
                                            <th scope="col">Closing Time</th>
                                            <th scope="col">Capacity</th>
                                            <th scope="col">Action</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="!clickUpdateGym">
                                            <td>{{gym.opening_time }}</td>
                                            <td>{{gym.closing_time }}</td>
                                            <td>{{ gym.capacity }}</td>
                                            <td><button class="btn btn-warning" @click="clickUpdateGym=!clickUpdateGym">Update</button></td>
                                        </tr>
                                        <tr v-else>
                                            <td><input class="form-control" type="time" v-model="gym.opening_time " /></td>
                                            <td><input class="form-control" type="time" v-model="gym.closing_time" /></td>
                                            <td><input class="form-control" type="number" v-model="gym.capacity" /></td>
                                            <td>
                                                <button class="btn btn-success" @click="UpdateGym()">Create
                                                    Slot</button>
                                            </td>
                                            <td><button class="btn btn-info"
                                                    @click="clickUpdateGym=!clickUpdateGym">Back</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            People Registered
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <div>
                                <table border="1px" class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="user in users">
                                            <th scope="row">{{ user.Id }}</th>
                                            <td>{{ user.Name }}</td>
                                            <td>{{ user.Email }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Number of People Booked
                        </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <div>
                                <table border="1px" class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Full name</th>
                                            <th scope="col">Slot In</th>
                                            <th scope="col">Slot Out</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="Bookedslot in bookedslots">
                                            <th scope="row">{{ Bookedslot.id }}</th>
                                            <td>{{ Bookedslot.fullname }}</td>
                                            <td>{{ Bookedslot.slotin }}</td>
                                            <td>{{ Bookedslot.slotout }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Number of Slots
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <div class="add-row-container" v-show="!showCreateRow">
                                <button class="btn btn-info" @click="toggleCreateRow">Add Slot</button>
                            </div>
                            <div>
                                <table border="1px" class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Slot In</th>
                                            <th scope="col">Slot Out</th>
                                            <th scope="col">People Booked</th>
                                            <th scope="col">Action</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-show="showCreateRow">
                                            <td></td>
                                            <td><input class="form-control" type="date" v-model="newRow.date" /></td>
                                            <td><input class="form-control" type="time" v-model="newRow.slot_in" /></td>
                                            <td><input class="form-control" type="time" v-model="newRow.slot_out" /></td>
                                            <td>{{ newRow.nop }}</td>
                                            <td>
                                                <button class="btn btn-success" @click="createSlot()">Create
                                                    Slot</button>
                                            </td>
                                            <td><button class="btn btn-info"
                                                    @click="showCreateRow = !showCreateRow">Back</button></td>
                                        </tr>
                                        <tr v-if="onUpdate">
                                            <th scope="row"> {{ newObject.id }} </th>
                                            <td><input class="form-control" type="date"
                                                    v-model="newObject.date" /></td>
                                            <td><input class="form-control" type="time" v-model="newObject.slot_in" /></td>
                                            <td><input class="form-control" type="time" v-model="newObject.slot_out" /></td>
                                            <td>{{ newObject.nop }}</td>
                                            <td>
                                                <button class="btn btn-success" @click="updateSlot()">Update</button>
                                            </td>
                                            <td><button class="btn btn-info" @click="backUpdate()">Back</button></td>
                                        </tr>
                                        <tr v-for="slot in slots">
                                            <th scope="row">
                                                {{ slot.id }}
                                            </th>
                                            <td>
                                                {{ slot.date.split("T")[0] }}
                                            </td>
                                            <td>
                                                {{ slot.slot_in }}
                                            </td>
                                            <td>{{ slot.slot_out }}</td>
                                            <td>{{ slot.nop }}</td>
                                            <td>
                                                <button class="btn btn-warning" @click="clickUpdate(slot)">Update</button>
                                            </td>
                                            <td>
                                                <button class="btn btn-danger" @click="delSlot(slot.id)">Delete</button>
                                            </td>

                                            <!-- <div v-if="onUpdate" >
                                                <th scope="row"> <input> </th>
                                                <td><input type="time" :placeholder="slot.slot_in" v-show="showCreateRow" /></td>
                                            <td><input type="time" :placeholder="slot.slot_out" v-show="showCreateRow" /></td>
                                            <td><input type="number" v-model="slot.nop" v-show="showCreateRow" /></td>
                                            <td>
                                                <button class="btn btn-warning" >Update</button>
                                            </td>
                                            
                                            </div> -->

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Equipments
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample">

                        <div class="accordion-body">
                            <div class="add-row-container" v-if="!showEquipCreateRow">
                                <button class="btn btn-info" @click="toggleEquipCreateRow">Add Equipment</button>
                            </div>
                            <div>
                                <table border="1px" class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Name of Equipment</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Image link</th>
                                            <th scope="col">Action</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="showEquipCreateRow">
                                            <td></td>
                                            <td><input class="form-control" type="text" v-model="newEquipRow.name" /></td>
                                            <td><input class="form-control" type="number" v-model="newEquipRow.qty" /></td>
                                            <td><input class="form-control" type="text" v-model="newEquipRow.desc" /></td>
                                            <td><input class="form-control" type="text" v-model="newEquipRow.img" /></td>
                                            <td>
                                                <button class="btn btn-success" @click="createEquip()">Add
                                                    Equipment</button>
                                            </td>
                                            <td><button class="btn btn-info"
                                                    @click="showEquipCreateRow = !showEquipCreateRow">Back</button></td>
                                        </tr>
                                        <tr v-if="onEquipUpdate">
                                            <th scope="row"> {{ newEquipObject.id }} </th>

                                            <td> <input class="form-control" type="text" v-model="newEquipObject.name"></td>
                                            <td><input class="form-control" type="number" v-model="newEquipObject.qty"></td>
                                            <td>
                                                <div class="input-group">
                                                    <span class="input-group-text"></span>
                                                    <textarea class="form-control" aria-label="With textarea"
                                                        v-model="newEquipObject.desc"></textarea>
                                                </div>

                                            </td>
                                            <td>
                                                <div class="input-group">
                                                    <span class="input-group-text"></span>
                                                    <textarea class="form-control" aria-label="With textarea"
                                                        v-model="newEquipObject.img"></textarea>
                                                </div>
                                                <!-- <input class="form-control" type="text" v-model="newEquipObject.name" /> -->
                                            </td>
                                            <!-- <td><input class="form-control" type="number" v-model="newEquipObject.qty" />
                                            </td>
                                            <td><input class="form-control" type="text-area"
                                                    v-model="newEquipObject.desc" /></td>
                                            <td><input class="form-control" type="text-area" v-model="newEquipObject.img" />
                                            </td> -->
                                            <td>
                                                <button class="btn btn-success" @click="updateEquipment()">Update</button>
                                            </td>
                                            <td><button class="btn btn-info" @click="backEquipUpdate()">Back</button></td>
                                        </tr>
                                        <tr v-for="equipment in equipments">
                                            <th scope="row">{{ equipment.id }}</th>
                                            <td>{{ equipment.name }}</td>
                                            <td>{{ equipment.qty }}</td>
                                            <td>{{ equipment.desc }}</td>
                                            <td>{{ equipment.img }}</td>
                                            <td>
                                                <button class="btn btn-warning"
                                                    @click="clickEquiUpdate(equipment)">Update</button>
                                            </td>
                                            <td>
                                                <button class="btn btn-danger"
                                                    @click="delEquip(equipment.id)">Delete</button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { BIconHandThumbsDown } from "bootstrap-vue";
import AdminNavbar from "../components/AdminNavbar.vue"

import AdminApi from "../services/admin"

export default {

    data() {
        return {
            users: [
                { Id: '01', Name: 'Mark', Email: 'Mark@argusoft.com' }
            ],
            slots: [],
            bookedslots: []
            ,
            equipments: [],
            newRow: {
                slot_in: '',
                slot_out: '',
                nop: 0
            },
            newEquipRow: {
                name: '',
                qty: '',
                desc: '',
                img: ''
            },
            gym:{
                opening_time:'',
                closing_time:'',
                capacity:''
            },
            newObject: {},
            newEquipObject: {},
            showCreateRow: false,
            showEquipCreateRow: false,
            onUpdate: false,
            onEquipUpdate: false,
            clickUpdateGym:false,
        }
    },
    computed: {
        isRowValid() {
            return this.newRow.slot_in && this.newRow.slot_out && this.nop;
        }
    },
    components: {
        AdminNavbar
    },
    methods: {

        allEquipments: function () {
            AdminApi.allEquipments().then((res) => {
                this.equipments = res.data
            });
        },
        allSlots: function () {
            AdminApi.allSlots().then((res) => {
                this.slots = res.data
            });
        },
        getGym:function(){
            AdminApi.showGym().then((res) => {
                this.gym = res.data[0]
                // console.log(res.data[0])
            });
        },
        delSlot: function (id) {
            AdminApi.deleteSlot(id).then((res) => {
                this.$toast.success("Slot Deleted");
                this.allSlots()
            });
        },
        delEquip: function (id) {
            AdminApi.deleteEquip(id).then((res) => {
                this.$toast.success("Equipment Deleted");
                this.allEquipments()
            });
        },
        createSlot: function () {
            AdminApi.createSlot(this.newRow).then((res) => {
                this.allSlots()
                this.toggleCreateRow()
                this.resetNewRow();
                this.$toast.success("Slot Added");
            });
        },
        createEquip: function () {
            AdminApi.createEquip(this.newEquipRow).then((res) => {
                this.$toast.success("Equipment Added");
                this.allEquipments()
                this.toggleEquipCreateRow()
            });
        },
        updateSlot: function () {
            AdminApi.updateSlot(this.newObject).then((res) => {
                this.onUpdate = false;
                this.allSlots()
                this.resetNewRow();
                this.newObject = {}
                this.$toast.success("Slot Updated");
            });
        },
        updateEquipment: function () {
            AdminApi.updateEquip(this.newEquipObject).then((res) => {
                this.onEquipUpdate = false;
                this.allEquipments()
                this.newEquipObject = {}
                this.$toast.success("Equipment Updated");
            });
        },
        UpdateGym:function(){
            AdminApi.updateGym(this.gym).then((res)=>{
                this.getGym();
                this.clickUpdateGym=!this.clickUpdateGym
                this.$toast.success("Gym Updated");
            })
        },
        toggleCreateRow() {
            this.showCreateRow = !this.showCreateRow;
            // this.resetNewRow();
        },
        toggleEquipCreateRow() {
            this.showEquipCreateRow = !this.showEquipCreateRow;
            this.resetEquipRow();
        },
        resetEquipRow() {
            this.newEquipRow = {};
        },
        resetNewRow() {
            this.newRow = {
                name: '',
                qty: ''
            };
        },
        clickUpdate(slot) {
            this.onUpdate = true;
            this.newObject = slot;
            this.newObject['date']=this.newObject['date'].split('T')[0]
            this.slots = this.slots.filter((item) => {
                return item.id !== slot.id
            })
        },
        clickEquiUpdate(equip) {
            this.onEquipUpdate = true;
            this.newEquipObject = equip;
            this.equipments = this.equipments.filter((item) => {
                return item.id !== equip.id
            })
        },
        backUpdate() {
            this.onUpdate = false;
            this.allSlots();
            this.newObject = {}
        },
        backEquipUpdate() {
            this.onEquipUpdate = false;
            this.allEquipments();
            this.newEquipObject = {}
        }
    },
    created() {
        this.allEquipments();
        this.allSlots();
        this.getGym();
    }
}

</script>
<style scoped>
.add-row-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    align-items: center;
    height: 50px;
}

.add-row-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.add-row-button:hover {
    background-color: #0056b3;
}</style>
