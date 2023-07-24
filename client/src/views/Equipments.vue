<template>
  <div>
    <EmployeeNav> </EmployeeNav>
    <div
      style="background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 4%, rgba(232,232,232,1) 13%, rgba(198,198,198,1) 19%, rgba(153,153,153,1) 25%, rgba(99,99,99,1) 30%, rgba(0,0,0,1) 50%, rgba(99,99,99,1) 70%, rgba(153,153,153,1) 75%, rgba(198,198,198,1) 81%, rgba(232,232,232,1) 87%, rgba(255,255,255,1) 96%);;margin-left:3%;margin-right:3%; padding-top: 10%">
      <div class="text-center" style="color:white;width:50%;margin-left:25%;margin-bottom: 2%;">
        <h1> GYM TimeX Equipments</h1>
      </div>
      <div class="container mt-4">

        <div class="d-flex justify-content-end">
          <!-- <h6> Choose Category :</h6> -->
          <select class="form-select w-25 float-end" aria-label="Default select example">
            <option value="all">All</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3" v-for="equipment in equipments" style="margin-top: 2%;">
          <div class="card" style="height: 400px;">
            <p>Category:{{equipment.category}}</p>
            <div class="card-header">
              {{ equipment.name }}
            </div>
            <img :src=equipment.img class="card-img-top img" alt="...">
            <div class="card-body">
              <p class="card-text">{{ equipment.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BIconThreeDotsVertical } from "bootstrap-vue"
import EmployeeNav from "../components/EmployeeNav.vue"
import Employee from "../services/employee.js"
export default {
  components: {
    EmployeeNav
  },
  data() {
    return {
      equipments: [],
      category: []
    }
  },
  methods: {
    ShowCategory: function () {
      Employee.showEquipmentsCategory().then((res) => {
        console.log(res.data)
      });
    },
  },
  created() {
    Employee.showEquipments().then((res) => {
      this.equipments = res.data.result
      console.log(res.data.categoryCounts)
    });
    this.ShowCategory()
  }
}
</script>

<style scoped>
.body {
  background-color: black;
}

.img {
  height: 90%;
}
</style>
<!-- 
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        Treadmill
      </div>
      <img
        src="https://media.istockphoto.com/id/185097876/photo/treadmill.jpg?s=612x612&w=0&k=20&c=gndW2QG1T5v5I0U5hRTiF3-Yw-yIzB9yOUVu74CVIls="
        class="card-img-top" alt="...">
      <div class="card-body"> -->
        <!-- <h5 class="card-title">Special title treatment</h5> -->
        <!-- <p class="card-text">Treadmills are classified as a glute-ham developer because it targets the glutes, back
          muscles, leg muscles, and abdomen muscles.</p> -->
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      <!-- </div>
    </div> -->
    


