<template>
    <div :class="isLoading ? 'white' : 'black'" style="">
        <EmployeeNav> </EmployeeNav>
        <div v-if="isLoading">
            <img style="height:30vh; width:30vh;margin-left:40%; margin-top:20% "
                src="https://media.tenor.com/PIBkS64H2EwAAAAj/tkthao219-bubududu.gif">
        </div>

        <!-- <EmployeeNav></EmployeeNav> -->
        <div class="slot" v-else>


            <div class="container" style="padding-top:20vh">
                <h1>Slots for Current Date : </h1>
                <div class="hover">

                
                <div class="card w-100 " v-for="slot in slots" :key="slot.id" style="margin-top:2%">
                    <div class="card-body " :class="{ book: slot.Active }" 
                        v-on:click="slot.Active = !slot.Active; oneClick(slot.id)">
                        <!-- <p>{{ slot }}</p> -->
                        <h4 class="text-center"><span class="float-center">DATE: {{ slot.date.split("T")[0] }}</span></h4>
                        <h5 class="card-title"><span>FROM: {{ slot.slot_in }}</span> <span class="float-end">TO:
                                {{ slot.slot_out }}</span></h5>
                        <p>Available : {{ slot.nop }}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>

    </div>
</template>

<script>
import EmployeeNav from '../components/EmployeeNav.vue';
import Employee from '../services/employee'
export default {
    components: {
        EmployeeNav
    },
    data() {
        return {
            slots: [],
            currentDate: new Date(),
            isLoading: false
        }
    }
    ,
    methods: {
        showData: function (currentDate) {
            this.isLoading = true
            Employee.slotDate({ curr_date: currentDate }).then((res) => {
                    setTimeout(() => {
                        this.isLoading = false;
                    }, 1000);
                    this.slots = res.data
                    console.log(res.data)
                    console.log(this.slots)
                }).catch((e) => {
                    console.log(e)
                })
            },
                oneClick: function (id) {
                    Employee.updateSlot(id).then((res) => {
                        console.log(res.data)
                        this.showData(this.currentDate);
                    })
                },
                toggleSlotActive(slot) {
                console.log("inside toggle fn with value : " + slot.Active)
            slot.Active = !slot.Active;
                console.log("after toggle fn with value : " + slot.Active)
            }
    },
    created() {
        this.currentDate.setDate(this.currentDate.getDate()-1)
        console.log(this.currentDate)
        this.showData(this.currentDate);
    }
}
</script>

<style scoped>
.slot {
    background-color: #ffffff;
}
.hover {
    box-shadow: 0 0 3px black;
  margin-top: -10px;
}
.book {
    background-color: #c58620;
    color: white;
}

.container {
    width: 60%
}
</style>