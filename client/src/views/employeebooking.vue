<template>
  <div>

    <div>

      <EmployeeNavbar></EmployeeNavbar>
      <!-- <div class="container" style="padding-top:7%"> -->
        <ul class="slideshow">
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <nav class="navbar navbar-inverse">
          <div class="container">
            <!-- Navbar code -->
          </div>
        </nav>

        <div id="content">
          <h1>The Workout Gym</h1>
          <h3>The best place to get buff in the UK</h3>
          <hr>
          <button class="btn btn-default btn-lg">Get Pumped! <div id="barbell-icon"></div></button>
        </div>
      </div>
    </div>
  <!-- </div> -->
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
/* GOOGLE FONTS */
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Allerta+Stencil&display=swap');

/* VARIABLES */
:root {
  --animationDuration: 30s;
  --white: #F2F2F2;
  --bg1: url(https://images.askmen.com/1080x540/2016/08/26-095737-how_fitness_pros_stay_lean_all_year.jpg);
  --bg2: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/996046/barbell-1839086_960_720.jpg);
  --bg3: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/996046/man-461195_960_720.jpg);
}

/* STYLES */
html {
  min-height: 100%;
}

body {
  background: black;
  font-family: 'Special Elite', cursive;
  color: var(--white);
  height: 100%;
}

h1 {
  font-weight: 700;
  font-size: 4.5em;
  font-family: 'Allerta Stencil', sans-serif;
  text-transform: uppercase;
}

h3 {
  text-transform: capitalize;
}

hr {
  width: 400px;
  border-top: 1px solid #F8F8F8;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.btn-default {
  background-color: var(--white);

  &:hover {
    background-color: white;
  }
}

#barbell-icon {
  background: url(https://cdn2.iconfinder.com/data/icons/free-mobile-icon-kit/64/Barbell.png) 0px -10px;
  background-size: 40px;
  position: relative;
  top: 3px;
  height: 20px;
  width: 40px;
  outline: none;
  display: inline-block;
}

#content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-shadow: 0px 4px 3px rgba(50, 50, 50, 0.4), 0px 8px 13px rgba(50, 50, 50, 0.1), 0px 18px 23px rgba(50, 50, 50, 0.1);
}

.slideshow {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 0;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.slideshow li {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 0;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
}

.cssanimations .slideshow li {
  animation: backgroundFade var(--animationDuration) linear infinite;
}

.cssanimations .slideshow li:nth-child(1) {
  background-image: var(--bg1);
}

.cssanimations .slideshow li:nth-child(2) {
  background-image: var(--bg2);
  animation-delay: calc(var(--animationDuration) / 3);
}

.cssanimations .slideshow li:nth-child(3) {
  background-image: var(--bg3);
  animation-delay: calc((var(--animationDuration) / 3) * 2);
}

.no-cssanimations .slideshow li:nth-child(1) {
  background-image: var(--bg1);
  opacity: 1;
}

/* ANIMATIONS */
@keyframes backgroundFade {
  0% {
    opacity: 0;
    animation-timing-function: ease-in;
  }

  15% {
    opacity: 1;
    animation-timing-function: ease-out;
  }

  35% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}
</style>