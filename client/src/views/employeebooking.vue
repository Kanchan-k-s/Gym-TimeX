<template>
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <EmployeeNavbar></EmployeeNavbar>
    <div class="carousel-inner">
      <!-- <div class="container" style="padding-top:7%"> -->
      <div class="carousel-item active" data-bs-interval="2000">
        <img
          src="https://png.pngtree.com/thumb_back/fw800/background/20230609/pngtree-gym-treadmills-are-lined-in-an-empty-gym-image_2884906.png"
          class=" d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block " style="background:rgba(0, 0, 0, 0.562)">
            <h1> GYM TimeX </h1>
            <p>"Strength does not come from physical capacity. It comes from an indomitable will."</p>
            <button type="button" class="btn btn-light btn-lg"> Get Started! </button>
            <!-- <button type="button" class="btn btn-dark btn-lg"> Get Started! </button> -->
         
        </div>

      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="../assets/colousel1.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block " style="background:rgba(0, 0, 0, 0.562)">
          <h1> GYM TimeX </h1>
          <p>"Strength does not come from physical capacity. It comes from an indomitable will."</p>
          <!-- <button type="button" class="btn btn-light"> Get Started! </button> -->
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="../assets/carousel3.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block " style="background:rgba(0, 0, 0, 0.562)">
          <h1> GYM TimeX </h1>
          <p>"Strength does not come from physical capacity. It comes from an indomitable will."</p>
          <!-- <button type="button" class="btn btn-light"> Get Started! </button> -->
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

    <div id='#about_us'>
      <h1>The Workout Gym</h1>
      <h3>The best place to get buff in the UK</h3>
      <hr>
      <button class='btn btn-default btn-lg'>Get Pumped! <div id="barbell-icon"></div></button>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import { BIconHandThumbsDown } from "bootstrap-vue";
import EmployeeNavbar from "@/components/EmployeeNavbar.vue";
export default {
  components: { EmployeeNavbar },
  mounted() {
    this.startBackgroundAnimation();
  },
  methods: {
    startBackgroundAnimation() {
      const slideshow = document.querySelector(".slideshow");
      const slides = Array.from(slideshow.getElementsByTagName("li"));
      const animationDuration = getComputedStyle(document.documentElement).getPropertyValue("--animationDuration");
      slides.forEach((slide, index) => {
        slide.style.animationDelay = `calc((${animationDuration} / 3) * ${index})`;
      });
      slideshow.classList.add("cssanimations");
    }
  },

};
</script>

<style scoped>
.carousel-item {
  height: 100vh;
}
</style>

<!-- 


<style scoped>
/* GOOGLE FONTS */
/* medium - display 2  */
@media (min-width: 768px) {

.carousel-inner .carousel-item-right.active,
.carousel-inner .carousel-item-next {
    transform: translateX(50%);
}

.carousel-inner .carousel-item-left.active,
.carousel-inner .carousel-item-prev {
    transform: translateX(-50%);
}
}

/* large - display 3 */
@media (min-width: 992px) {

.carousel-inner .carousel-item-right.active,
.carousel-inner .carousel-item-next {
    transform: translateX(33%);
}

.carousel-inner .carousel-item-left.active,
.carousel-inner .carousel-item-prev {
    transform: translateX(-33%);
}
}

@media (max-width: 768px) {
.carousel-inner .carousel-item>div {
    display: none;
}

.carousel-inner .carousel-item>div:first-child {
    display: block;
}
}

.carousel-inner .carousel-item.active,
.carousel-inner .carousel-item-next,
.carousel-inner .carousel-item-prev {
display: flex;
}

.carousel-inner .carousel-item-right,
.carousel-inner .carousel-item-left {
transform: translateX(0);
}

</style> -->