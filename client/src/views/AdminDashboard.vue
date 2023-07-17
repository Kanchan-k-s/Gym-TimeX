<template>
    <div>

        <AdminNavbar></AdminNavbar>
        <div class="container" style="padding-top:7%">


            <div class="accordion accordion-flush" id="accordionFlushExample">
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
                                <button class="btn btn-info" @click="toggleCreateRow">Add Row</button>
                            </div>
                            <div>
                                <table border="1px" class="table">
                                    <thead>
                                        <tr>
                                            <!-- <th scope="col">Id</th> -->
                                            <th scope="col">Slot In</th>
                                            <th scope="col">Slot Out</th>
                                            <th scope="col">People Booked</th>
                                            <th scope="col">Action</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                            <td><input class="form-control" type="time" v-model="newRow.slot_in"
                                                    v-show="showCreateRow" /></td>
                                            <td><input class="form-control" type="time" v-model="newRow.slot_out"
                                                    v-show="showCreateRow" /></td>
                                            <td><input class="form-control" type="number" v-model="newRow.nop"
                                                    v-show="showCreateRow" /></td>
                                            <td>
                                                <button class="btn btn-success" @click="createSlot()"
                                                    v-if="showCreateRow">Create
                                                    Row</button>
                                            </td>
                                        </tr>
                                        <tr v-for="slot in slots">
                                            <th scope="row">
                                                {{ slot.id }}
                                            </th>
                                            <td><span v-if="onUpdate === false">
                                                    {{ slot.slot_in }}
                                                </span>
                                                <span v-else>
                                                    <input type="time" :placeholder="slot.slot_in" />
                                                </span>
                                            </td>
                                            <td>{{ slot.slot_out }}</td>
                                            <td>{{ slot.nop }}</td>
                                            <td>
                                                <button class="btn btn-warning" @click="onUpdate = true">Update</button>
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
                        <div class="add-row-container" v-show="!showEquipCreateRow">
                            <button class="btn btn-info" @click="toggleEquipCreateRow">Add Row</button>
                        </div>
                        <div class="accordion-body">
                            <div>
                                <table border="1px" class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Name of Equipment</th>
                                            <th scope="col">Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr v-for="equipment in equipments">
                                            <th scope="row">{{ equipment.id }}</th>
                                            <td>{{ equipment.name }}</td>
                                            <td>{{ equipment.qty }}</td>
                                            <td>
                                                <button class="btn btn-warning" @click="onUpdate = true">Update</button>
                                            </td>
                                            <td>
                                                <button class="btn btn-danger"
                                                    @click="delEuip(equipment.id)">Delete</button>
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
                nop: ''
            },
            showCreateRow: false,
            onUpdate: false,
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
            console.log("hi")
            AdminApi.allEquipments().then((res) => {
                this.equipments = res.data
            });
        },
        allSlots: function () {
            AdminApi.allSlots().then((res) => {
                this.slots = res.data
            });
        },
        delSlot: function (id) {
            AdminApi.deleteSlot(id).then((res) => {
                console.log(res)
                this.allSlots()
            });
        },
        delEuip: function (id) {
            AdminApi.deleteEuip(id).then((res) => {
                console.log(res)
                this.allEquipments()
            });
        },
        createSlot: function () {
            console.log("In create")
            AdminApi.createSlot(this.newRow).then((res) => {
                console.log(res)
                this.allSlots()
                this.resetNewRow();
            });
        },
        createEquip: function () {
            console.log("In create")
            AdminApi.createEuip(this.newRow).then((res) => {
                console.log(res)
                this.allEquipments()
                this.resetEuipRow();
            });
        },
        upateSlot: function () {
            console.log("In update")
            AdminApi.updateSlot(this.newRow).then((res) => {
                console.log(res)
                this.allSlots()
                this.resetNewRow();
            });
        },
        updateData() {
            // Perform the update logic here
            const updatedValue = 'New Value';
            const rowIndex = 1;
            const columnIndex = 2;
            this.slots[rowIndex][columnIndex] = updatedValue;
        },
        toggleCreateRow() {
            this.showCreateRow = !this.showCreateRow;
            // this.resetNewRow();
        },
        toggleEquipCreateRow() {
            this.showCreateEquipRow = !this.showCreateEquipRow;
             this.resetEquipRow();
        },
        resetEuipRow() {
            this.EquipRow = {
                slot_in: '',
                slot_out: '',
                nop: ''
            };
        },
        resetNewRow() {
            this.newRow = {
                name: '',
                qty: ''
            };
        },
        created() {
            this.allEquipments();
            this.allSlots();
        }
    
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
}
</style>
