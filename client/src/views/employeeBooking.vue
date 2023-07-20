<template>
    <div>
        <EmployeeNav></EmployeeNav>
        <div class="container" style="padding-top:10%">
            <h1>Hi</h1>
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
    methods: {
        showData: function(currentDate) {
            Employee.slotDate({ curr_date: currentDate }).then((res) => {
                console.log(res.data)
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