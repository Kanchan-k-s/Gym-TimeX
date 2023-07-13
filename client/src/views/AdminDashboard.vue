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
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Number of Slots Booked
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
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
                                            <th scope="row">{{ slot.Id }}</th>
                                            <td>{{ slot.SlotIn }}</td>
                                            <td>{{ slot.SlotOut }}</td>
                                            <td>{{ slot.PeopleBooked }}</td>
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
            slots: [
                { Id: '01', SlotIn: '09:00:00', SlotOut: '10:00:00', PeopleBooked: '30' }
            ],
            equipments: [
            ]
        }
    },
    components: {
        AdminNavbar
    },
    methods: {

    },
    beforeCreate() {
        AdminApi.allEquipments().then((res) => {
            this.equipments = res.data
        });
    }
}
</script>
