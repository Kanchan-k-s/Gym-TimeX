<template>
    <div class="">
        <div :class="isLoading ? 'white' : 'black'" style="">
            <EmployeeNav> </EmployeeNav>
            <div v-if="isLoading">
                <video style="height:30vh; width:30vh;margin-left:43%; margin-top:20% "
                    src="https://cdnl.iconscout.com/lottie/premium/thumb/dumbbells-9139454-7459468.mp4" autoplay="autoplay"
                    muted="muted" loop="loop" playsinline="" type="video/mp4"></video>
            </div>

            <!-- <EmployeeNav></EmployeeNav> -->
            <div class="slot bg" v-else>


                <div class="container " style="padding-top:20vh">
                    <h1 class="text-center" style=" margin-bottom: 5%;">Slots for Current Date : </h1>
                    <div class="hover">
                        <div class="card w-100 " :class="{ book: slot.Active, 'bg-light-red': slot.nop === 0 }"
                            v-for="slot in slots" :key="slot.id" style="margin-top:2%">
                            <div class="card-body " :class="{ book: slot.Active }"
                                v-on:click="slot.Active = !slot.Active; oneClick(slot.id)">
                                <!-- <p>{{ slot }}</p> -->
                                <h4 class="text-center"><span class="float-center">DATE: {{ slot.date.split("T")[0]
                                }}</span></h4>
                                <h5 class="card-title"><span>FROM: {{ slot.slot_in }}</span> <span class="float-end">TO:
                                        {{ slot.slot_out }}</span></h5>
                                <p :style="{ color: slot.nop === 0 ? 'red' : 'black' }">Available : {{ slot.nop }}</p>
                            </div>
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
import errorToast from "@/mixins/errorToast";
export default {
    mixins: [errorToast],
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
            this.isLoading = true
            Employee.updateSlot(id).then((res) => {
                console.log(res.data)
                if (res.data.success) {
                    this.$toast.success("Slot Booked")
                }
                else {
                    this.$toast.warning("Not Booked")
                }
                setTimeout(() => {
                    this.isLoading = false;
                }, 1000);
                this.showData(this.currentDate);
            }).catch((error) => {
                this.isLoading = false;
                const errors = !error.response
                    ? [{ msg: error.message }]
                    : error.response.data.errors;
                this.toast(errors);
                this.errorMessage = errors[0].msg;
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
        this.currentDate.setDate(this.currentDate.getDate() - 1)
        console.log(this.currentDate)
        this.showData(this.currentDate);
    }
}
</script>

<style scoped>
.bg {
    background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO9uUa7XZX6cO2SrHP-0uz3E1EdD2GjlZcng&usqp=CAU") no-repeat center fixed;
    background-size: cover;
}

.slot {
    background-color: #ffffff;
}

.hover {
    /* box-shadow: 0 0 3px black; */
    margin-top: -10px;
}

.book {
    background-color: #90b418ce;
    color: white;
}

.color {
    background-color: #b418189a;
    color: white;
}

.container {
    width: 60%
}
</style>