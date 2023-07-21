<template>
    <div>
        <EmployeeNav></EmployeeNav>
        <div class="container" style="padding-top:10%">
            <h1>Slots for Current Date : </h1>
            <div class="card w-100" v-for="slot in slots" style="margin-top:2%">
                <div class="card-body">
                    <h4 class="text-center"><span class="float-center">DATE: {{ slot.date.split("T")[0] }}</span></h4>
                    <h5 class="card-title"><span>FROM: {{slot.slot_in}}</span> <span class="float-end" >TO: {{slot.slot_out}}</span></h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Button</a>
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
    data(){
        return {
            slots:[]
        }
    }
    ,
    methods: {
        showData: function (currentDate) {
            Employee.slotDate({ curr_date: currentDate }).then((res) => {
                this.slots=res.data
            }).catch((e) => {
                console.log(e)
            })
        }
    },
    created() {
        var currentDate = new Date();
        this.showData(currentDate);
    }
}
</script>