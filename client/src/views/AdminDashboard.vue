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
                            <div class="add-row-container">
                                <button class="add-row-button" @click="addRow">Add Row</button>
                            </div>
                            <div>
                                <table border="1px" class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Slot In</th>
                                            <th scope="col">Slot Out</th>
                                            <th scope="col">People Booked</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="slot in slots">
                                            <th scope="row">{{ slot.id }}</th>
                                            <td>{{ slot.slot_in }}</td>
                                            <td>{{ slot.slot_out }}</td>
                                            <td>{{ slot.nop }}</td>
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
import AdminNavbar from "../components/AdminNavbar.vue"

import AdminApi from "../services/admin"

export default {

    data() {
        return {
            users: [
                { Id: '01', Name: 'Mark', Email: 'Mark@argusoft.com' }
            ],
            bookedslots: [
                { id: '01', fullname: 'James', slotin: '12:00:00', slotout: '13:00:00' }
            ],
            slots: [

            ],
            equipments: [
            ]
        }
    },
    components: {
        AdminNavbar
    },
    methods: {
        addRow() {
            const newRow = {
                id: this.tableData.length + 1,
                slot_in: "",
                slot_out: "",
                nop: ""
            };
            this.tableData.push(newRow);
        }

    },
    beforeCreate() {
        AdminApi.allEquipments().then((res) => {
            this.equipments = res.data
        });
        AdminApi.allSlots().then((res) => {
            this.slots = res.data
        });
    }
}
</script>
<style>
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
