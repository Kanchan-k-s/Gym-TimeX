<template>
  <div :class="isLoading ? 'white' : 'black'" style="">
    <EmployeeNav> </EmployeeNav>
    <div v-if="isLoading">
      <!-- <img style="height:30vh; width:30vh;margin-left:50%; margin-top:20% "
        src="https://media.tenor.com/eAWUMLOkGigAAAAj/bike-biking.gif"> -->
      <video style="height:30vh; width:30vh;margin-left:43%; margin-top:20% "
        src="https://cdnl.iconscout.com/lottie/premium/thumb/dumbbells-9139454-7459468.mp4" autoplay="autoplay"
        muted="muted" loop="loop" playsinline="" type="video/mp4"></video>
    </div>
    <div v-else>
      <div class="bg">

        <div class="text-center"
          style="color:rgb(255, 255, 255);padding-top: 9%;width:50%;margin-left:25%;margin-bottom: 2%; text-decoration: underline;">
          <h1> GYM TimeX Equipments</h1>
        </div>
        <div class="container mt-4">

          <div class="d-flex justify-content-end">
            <!-- <h6> Choose Category :</h6> -->
            <select class="form-select w-25 float-end" @change="categorySelect()" v-model="choice"
              aria-label="Default select example">
              <option value="All" selected>All</option>
              <option :value="cat" v-for="cat in category">{{ cat }}</option>
              <!-- <option value="1">One</option>
            
            <option value="3">Three</option> -->
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-3" v-for="equipment in equipments" style="margin-top: 2%;">
            <div class="card" style="height: 430px;">
              <!-- <p>Category:{{equipment.category}}</p> -->
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
      category: [],
      isLoading: false,
      choice: 'All'
    }
  },
  methods: {
    ShowCategory: function () {
      Employee.showEquipments().then((res) => {
        setTimeout(() => {
          this.isLoading = false;
        }, 1300);
        this.equipments = res.data.result
        res.data.categoryCounts.forEach(element => {
          this.category.push(element.category)
        });

      });
    },
    categorySelect: function () {
      console.log(this.choice)

      Employee.showEquipmentsCategory(this.choice).then((res) => {
        this.equipments = res.data.result
        this.category = res.data.result
      });
    }
  },
  created() {
    this.isLoading = true
    this.ShowCategory()
  }
}
</script>

<style scoped>
.bg{
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://media.istockphoto.com/id/1310435262/photo/young-athletic-man-fitness-instructor-training-in-gym-in-mixed-neon-light.jpg?s=612x612&w=0&k=20&c=4xoMNjanekU7CFoqiK5EtZQprXplHFoUU0ui2VdLA_E=");
}
.body {
  background-color: black;
}

.black {
  background: rgba(0, 0, 0, 0.651);
}

.white {
  background: white;
}

.img {
  height: 180px;
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
    


