<template>
    <div>

        <AdminNavbar></AdminNavbar>
        <div class="container" style="padding-top:25vh">
            <h1 class="text-center">Admin Dashboard</h1>

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
                            <div class="table-responsive">
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
                                            <td>{{ gym.opening_time }}</td>
                                            <td>{{ gym.closing_time }}</td>
                                            <td>{{ gym.capacity }}</td>
                                            <td><button class="btn btn-warning"
                                                    @click="clickUpdateGym = !clickUpdateGym">Update</button></td>
                                        </tr>
                                        <tr v-else>
                                            <td><input class="form-control" type="time" v-model="gym.opening_time" /></td>
                                            <td><input class="form-control" type="time" v-model="gym.closing_time" /></td>
                                            <td><input class="form-control" type="number" v-model="gym.capacity" /></td>
                                            <td>
                                                <button class="btn btn-success" @click="UpdateGym()">Update Gym
                                                    Info</button>
                                            </td>
                                            <td><button class="btn btn-info"
                                                    @click="clickUpdateGym = !clickUpdateGym">Back</button></td>
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
                            <div class="table-responsive">
                                <table border="1px" class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Slot In</th>
                                            <th scope="col">Slot Out</th>
                                            <th scope="col">Check in</th>
                                            <th scope="col">Check out</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="user in users" :key="user.id">
                                            <th scope="row">{{ user.id }}</th>
                                            <td>{{ user.name }}</td>
                                            <td>{{ user.email }}</td>
                                            <td>{{ user.date === null ? '' : user.date.split('T')[0] }}</td>
                                            <td>{{ user.slot_in }}</td>
                                            <td>{{ user.slot_out }}</td>
                                            <td>{{ user.check_in }}</td>
                                            <td>{{ user.check_out }}</td>
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
                            People Booked
                        </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <div class="text-center col-sm-4">
                                <input class="form-control" type="date" @change="allUsersToday" v-model="currentDate" />
                            </div>

                            <br>
                            <div class="table-responsive">
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

                                        <tr v-for="user in usertoday" :key="user.id">
                                            <!-- <td>{{ user }}</td> -->
                                            <th scope="row">{{ user.id }}</th>
                                            <td>{{ user.name }}</td>
                                            <td>{{ user.slot_in }}</td>
                                            <td>{{ user.slot_out }}</td>
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
                            <div class="table-responsive">
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
                                            <td>{{ newObject.date }} </td>
                                            <td><input class="form-control" type="time" v-model="newObject.slot_in" /></td>
                                            <td><input class="form-control" type="time" v-model="newObject.slot_out" /></td>
                                            <td>{{ newObject.nop }}</td>
                                            <td>
                                                <button class="btn btn-success" @click="updateSlot()">Update</button>
                                            </td>
                                            <td><button class="btn btn-info" @click="backUpdate()">Back</button></td>
                                        </tr>
                                        <tr v-for="slot in slots" :key = "slot.id">
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
                            <div class="">
                                <table border="1px" class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Name of Equipment</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Category</th>
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
                                            <td><input class="form-control" type="text" v-model="newEquipRow.category" />
                                            </td>
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
                                            <td><input class="form-control" type="text" v-model="newEquipObject.category">
                                            </td>
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
                                        <tr v-for="equipment in equipments" :key="equipment.id">
                                            <th scope="row">{{ equipment.id }}</th>
                                            <td>{{ equipment.name }}</td>
                                            <td>{{ equipment.qty }}</td>
                                            <td>{{ equipment.category }}</td>
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

                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
                            Sponsors
                        </button>
                    </h2>
                    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                        data-bs-parent="#accordionFlushExample">

                        <div class="accordion-body">
                            <div class="add-row-container" v-if="!showsponsorCreateRow">
                                <button class="btn btn-info" @click="toggleSponsorCreateRow">Add Sponsor</button>
                            </div>
                            <div class="table-responsive">
                                <table border="1px" class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Company</th>
                                            <th scope="col">Product</th>
                                            <th scope="col">Image Link</th>
                                            <th scope="col">Product Link</th>
                                            <th scope="col">Revenue</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Action</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="showsponsorCreateRow">
                                            <td></td>
                                            <td><input class="form-control" type="text" v-model="newsponsorRow.Company" />
                                            </td>
                                            <td><input class="form-control" type="text" v-model="newsponsorRow.Product" />
                                            </td>
                                            <td><input class="form-control" type="text"
                                                    v-model="newsponsorRow.Image_link" />
                                            </td>
                                            <td><input class="form-control" type="text"
                                                    v-model="newsponsorRow.Product_link" /></td>
                                            <!-- <td><input class="form-control" type="text" v-model="newsponsorRow.Revenue" /> -->
                                            <!-- </td> -->
                                            <!-- <td><input class="form-control" type="text" v-model="newsponsorRow.Product_link" /></td> -->
                                            <td><input class="form-control" type="number" v-model="newsponsorRow.Revenue" />
                                            </td>
                                            <td><input class="form-control" type="number" v-model="newsponsorRow.Amount" />
                                            </td>
                                            <td>
                                                <button class="btn btn-success" @click="createSponsor()">Add
                                                    Sponsor</button>
                                            </td>
                                            <td><button class="btn btn-info"
                                                    @click="showsponsorCreateRow = !showsponsorCreateRow">Back</button></td>
                                        </tr>
                                        <tr v-if="onsponsorUpdate">
                                            <th scope="row"> {{ newsponsorObject.id }} </th>

                                            <td> <input class="form-control" type="text" v-model="newsponsorObject.Company">
                                            </td>
                                            <td> <input class="form-control" type="text" v-model="newsponsorObject.Product">
                                            </td>
                                            <td>
                                                <div class="input-group">
                                                    <span class="input-group-text"></span>
                                                    <textarea class="form-control" aria-label="With textarea"
                                                        v-model="newsponsorObject.Image_link"></textarea>
                                                </div>

                                            </td>
                                            <td>
                                                <div class="input-group">
                                                    <span class="input-group-text"></span>
                                                    <textarea class="form-control" aria-label="With textarea"
                                                        v-model="newsponsorObject.Product_link"></textarea>
                                                </div>

                                            </td>
                                            <td> <input class="form-control" type="number"
                                                    v-model="newsponsorObject.Revenue">
                                            </td>
                                            <td> <input class="form-control" type="number"
                                                    v-model="newsponsorObject.Amount"></td>
                                            <td><button class="btn btn-success" @click="updateSponsor()">Update</button>
                                            </td>
                                            <td><button class="btn btn-info" @click="backsponsorUpdate()">Back</button></td>
                                        </tr>

                                        <tr v-for="sponsor in sponsors" :key="sponsor.id">
                                            <th scope="row">{{ sponsor.id }}</th>
                                            <td>{{ sponsor.Company }}</td>
                                            <td>{{ sponsor.Product }}</td>
                                            <td class="w-25">{{ sponsor.Image_link }}</td>
                                            <td class="w-25">{{ sponsor.Product_link }}</td>
                                            <td>{{ sponsor.Revenue }}</td>
                                            <td>{{ sponsor.Amount }}</td>
                                            <td>
                                                <button class="btn btn-warning"
                                                    @click="clicksponsorUpdate(sponsor)">Update</button>
                                            </td>
                                            <td>
                                                <button class="btn btn-danger"
                                                    @click="delSponsor(sponsor.id)">Delete</button>
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
// import { BIconHandThumbsDown, BIconThreeDotsVertical } from "bootstrap-vue";
import AdminNavbar from "../components/AdminNavbar.vue"
import errorToast from "../mixins/errorToast";

import AdminApi from "../services/admin"

export default {
    mixins: [errorToast],
    data() {
        return {
            users: [],
            slots: [],
            bookedslots: []
            ,
            usertoday: [],
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
            gym: {
                opening_time: '',
                closing_time: '',
                capacity: ''
            },
            sponsors: {
                Company: '',
                Product: '',
                Image_link: '',
                Product_link: '',
                Revenue: '',
                Amount: ''
            },
            newObject: {},
            newEquipObject: {},
            newsponsorObject: {},
            showCreateRow: false,
            showEquipCreateRow: false,
            showsponsorCreateRow: false,
            onUpdate: false,
            onsponsorUpdate: false,
            onEquipUpdate: false,
            clickUpdateGym: false,
            currentDate: new Date()
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

        allSponsor: async function () {
            try {
                const res = await AdminApi.showSponsor()
                if (res.data.success) {
                    this.sponsors = res.data.result
                }
            } catch (error) {
                const errors = !error.response
                    ? [{ msg: error.message }]
                    : error.response.data.errors;
                this.toast(errors);
                this.errorMessage = errors[0].msg;
            }

        },
        allEquipments: async function () {
            try {
                const res = await AdminApi.allEquipments()
                if (res.data.success) {
                    this.equipments = res.data.result
                }
            } catch (error) {
                const errors = !error.response
                    ? [{ msg: error.message }]
                    : error.response.data.errors;
                this.toast(errors);
                this.errorMessage = errors[0].msg;
            }
            
        },
        allSlots: async function () {
            try {
                const res = await AdminApi.allSlots()
                if (res.data.success) {
                    this.slots = res.data.result
                }
            } catch (error) {
                const errors = !error.response
                    ? [{ msg: error.message }]
                    : error.response.data.errors;
                this.toast(errors);
                this.errorMessage = errors[0].msg;
            }
        },
        allUsers: async function () {
            
            AdminApi.allUsers().then((res) => {
                this.users = res.data.usersWithSlotInfo
                // console.log(res.data)
            })
        },
        allUsersToday: function () {
            // console.log(this.currentDate)
            AdminApi.allUsersToday({ curr_date: this.currentDate }).then((res) => {
                this.usertoday = res.data
                // console.log("hi"+res.data.usersWithSlotInfo)
                // console.log(res.data)
            })
        },
        getGym: async function () {
            try {
                const res = await AdminApi.showGym()
                if (res.data.success) {
                    this.gym = res.data.result[0]
                }
            } catch (error) {
                const errors = !error.response
                    ? [{ msg: error.message }]
                    : error.response.data.errors;
                this.toast(errors);
                this.errorMessage = errors[0].msg;
            }
            
        },
        delSponsor: async function (id) {
            try {
                const result = await AdminApi.deleteSponsor(id)
                if (result.data.success) {
                    this.$toast.success("Sponsor Deleted");
                    this.allSponsor()
                }
            } catch (error) {
                const errors = !error.response
                    ? [{ msg: error.message }]
                    : error.response.data.errors;
                this.toast(errors);
                this.errorMessage = errors[0].msg;
            }
        },
        delSlot: async function (id) {
            try {
                const result = await AdminApi.deleteSlot(id)
                if (result.data.success) {
                    this.$toast.success("Slot Deleted");
                    this.allSlots()
                }
            } catch (error) {
                const errors = !error.response
                    ? [{ msg: error.message }]
                    : error.response.data.errors;
                this.toast(errors);
                this.errorMessage = errors[0].msg;
            }
        },
        delEquip: async function (id) {
            try {
                const result = await AdminApi.deleteEquip(id)
                if (result.data.success) {
                    this.$toast.success("Equipment Deleted");
                this.allEquipments()
                }
            } catch (error) {
                const errors = !error.response
                    ? [{ msg: error.message }]
                    : error.response.data.errors;
                this.toast(errors);
                this.errorMessage = errors[0].msg;
            }
            
        },
        createSlot: async function () {
            try {
                const result = await AdminApi.createSlot(this.newRow)
                if (result.data.success) {
                    this.allSlots()
                this.toggleCreateRow()
                this.resetNewRow();
                this.$toast.success("Slot Added");
                }

            }
            catch (error) {
                const errors = !error.response
                    ? [{ msg: error.message }]
                    : error.response.data.errors;
                this.toast(errors);
                this.errorMessage = errors[0].msg;
            }
            
        },
        createEquip: async function () {
            try {
                const result = await AdminApi.createEquip(this.newEquipRow)
                if (result.data.success) {
                    this.$toast.success("Equipment Added");
                this.allEquipments()
                this.toggleEquipCreateRow()
                }

            }
            catch (error) {
                const errors = !error.response
                    ? [{ msg: error.message }]
                    : error.response.data.errors;
                this.toast(errors);
                this.errorMessage = errors[0].msg;
            }
            
        },
        createSponsor: async function () {
            try {
                const result = await AdminApi.createSponsor(this.newsponsorRow)
                if (result.data.success) {
                    this.$toast.success("Sponsor Added");
                    this.allSponsor()
                    this.toggleSponsorCreateRow()
                }

            }
            catch (error) {
                const errors = !error.response
                    ? [{ msg: error.message }]
                    : error.response.data.errors;
                this.toast(errors);
                this.errorMessage = errors[0].msg;
            }

        },
        updateSponsor: async function () {
            // console.log(this.newsponsorObject)
            try {
                 await AdminApi.updateSponsor(this.newsponsorObject)

                this.onsponsorUpdate = false;
                this.allSponsor()
                this.resetNewRow();
                this.newsponsorObject = {}
                this.$toast.success("Sponsor Updated");
            }
            catch (error) {
                const errors = !error.response
                    ? [{ msg: error.message }]
                    : error.response.data.errors;
                this.toast(errors);
                this.errorMessage = errors[0].msg;
            }

        },
        updateSlot: async function () {
            try {
                 await AdminApi.updateSlot(this.newObject)
                this.onUpdate = false;
                this.allSlots()
                this.resetNewRow();
                this.newObject = {}
                this.$toast.success("Slot Updated");
            }
            catch (error) {
                const errors = !error.response
                    ? [{ msg: error.message }]
                    : error.response.data.errors;
                this.toast(errors);
                this.errorMessage = errors[0].msg;
            }
            
        },
        updateEquipment: async function () {
            try {
                await AdminApi.updateEquip(this.newEquipObject)
                this.onEquipUpdate = false;
                this.allEquipments()
                this.newEquipObject = {}
                this.$toast.success("Equipment Updated");
            }
            catch (error) {
                const errors = !error.response
                    ? [{ msg: error.message }]
                    : error.response.data.errors;
                this.toast(errors);
                this.errorMessage = errors[0].msg;
            }
            
        },
        UpdateGym: async function () {
            try {
                await AdminApi.updateGym(this.gym)
                this.getGym();
                this.clickUpdateGym = !this.clickUpdateGym
                this.$toast.success("Gym Updated");
            }
            catch (error) {
                const errors = !error.response
                    ? [{ msg: error.message }]
                    : error.response.data.errors;
                this.toast(errors);
                this.errorMessage = errors[0].msg;
            }
            
        },
        toggleCreateRow() {
            this.showCreateRow = !this.showCreateRow;
            // this.resetNewRow();
        },
        toggleEquipCreateRow() {
            this.showEquipCreateRow = !this.showEquipCreateRow;
            this.resetEquipRow();
        },
        toggleSponsorCreateRow() {
            this.showsponsorCreateRow = !this.showsponsorCreateRow;
            this.resetsponsorRow();
        },
        resetEquipRow() {
            this.newEquipRow = {};
        },
        resetsponsorRow() {
            this.newsponsorRow = {};
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
            this.newObject['date'] = this.newObject['date'].split('T')[0]
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
        clicksponsorUpdate(sponsor) {
            // console.log(sponsor)
            this.onsponsorUpdate = true;
            this.newsponsorObject = sponsor;
            this.sponsors = this.sponsors.filter((item) => {
                return item.id !== sponsor.id
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
        },
        backsponsorUpdate() {
            this.onsponsorUpdate = false;
            this.allsponsor();
            this.newsponsorObject = {}
        }
    },
    created() {
        this.allEquipments();
        this.allSlots();
        this.getGym();
        this.allUsers();
        this.allSponsor();
        // this.currentDate.setDate(this.currentDate.getDate()-1)
        // console.log(this.currentDate)
        this.allUsersToday();
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

.table td {
    /* display: block; */
    overflow: hidden;
    /* white-space: nowrap;
  text-overflow: ellipsis; */
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
