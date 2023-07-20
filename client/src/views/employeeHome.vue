<template>
  <div>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <nav class="navbar scrolled-down navbar-expand-lg navbar-dark bg-dark px-0 py-3">
        <div class="container-xl">
          <!-- Logo -->
          <a class="navbar-brand" href="/admin/panel">
            <img src="../assets/picture2.svg" width="60" height="60" class="h-8" alt="...">
          </a>
          <h1 class="text-start" style="color:white"> GYM TimeX </h1>
          <!-- Navbar toggle -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- Collapse -->
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <!-- Nav -->
            <div class="navbar-nav mx-lg-auto">
              <a class="nav-item nav-link active" href="/#start" aria-current="page">Home</a>
              <a v-if="!show" class="nav-itSettingem nav-link active" href="/#about">About</a>
              <a v-if="!show" class="nav-item nav-link active" href="/" aria-current="page">Contact us</a>
              <a v-if="show" class="nav-item nav-link active" href="/employee/booking" aria-current="page">Booking</a>
              <a v-if="show" class="nav-item nav-link active" href="/" aria-current="page">Equipments</a>
              <a v-if="show" class="nav-item nav-link active" href="/" aria-current="page">Settings</a>
            </div>
            <!-- Action -->
            <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
              <a v-if="!show" href="/sign/in" class="btn btn-sm btn-light w-full w-lg-auto">
                SIGN IN
              </a>
              <a v-if="!show" href="/sign/up" class="btn btn-sm btn-light w-full w-lg-auto" style="margin-left:15px">
                SIGN UP
              </a>
              <a v-if="show" v-on:click="logout()" class="btn btn-sm btn-light w-full w-lg-auto" style="margin-left:15px">
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div id="start" class="carousel-inner">
      <!-- <div class="container" style="padding-top:7%"> -->
      <div class="carousel-item active" data-bs-interval="2000">
        <img
          src="https://png.pngtree.com/thumb_back/fw800/background/20230609/pngtree-gym-treadmills-are-lined-in-an-empty-gym-image_2884906.png"
          class=" d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block " style="background:rgba(0, 0, 0, 0.562)">
          <h1> GYM TimeX </h1>
          <p>"Strength does not come from physical capacity. It comes from an indomitable will."</p>
          <button type="button" class="btn btn-light btn-lg" v-on:click="start()"> Get Started! </button>
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

    <section id="about" class="pt-5 pb-5">
      <div class="container" style="margin-top:4.5%">
        <div class="row">
          <div class="col-12 text-center"> <!-- Modified: Added "text-center" class -->
            <h1 class="mb-3">About Us</h1> <!-- Removed "center" class -->
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae enim sed metus vulputate
              fringilla. Fusce dapibus, lorem vitae porttitor tristique, leo risus euismod lectus, non lobortis
              justo nibh id massa.</p>
          </div>
          <div class="col-6 text-right">
            <a class="btn " href="#carouselExampleIndicators2" role="button" data-slide="prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                <path
                  d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
              </svg>
            </a>
            <a class="btn" href="#carouselExampleIndicators2" role="button" data-slide="next">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                <path
                  d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
            </a>
          </div>
          <div class="col-12">
            <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">

                    <div class="col-md-4 mb-3">
                      <div class="card">
                        <img class="img-fluid" alt="100%x280"
                          src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d">
                        <div class="card-body">
                          <h4 class="card-title">Special title treatment</h4>
                          <p class="card-text">With supporting text below as a natural lead-in to
                            additional content.</p>

                        </div>

                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <div class="card">
                        <img class="img-fluid" alt="100%x280"
                          src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698">
                        <div class="card-body">
                          <h4 class="card-title">Special title treatment</h4>
                          <p class="card-text">With supporting text below as a natural lead-in to
                            additional content.</p>

                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <div class="card">
                        <img class="img-fluid" alt="100%x280"
                          src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a">
                        <div class="card-body">
                          <h4 class="card-title">Special title treatment</h4>
                          <p class="card-text">With supporting text below as a natural lead-in to
                            additional content.</p>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">

                    <div class="col-md-4 mb-3">
                      <div class="card">
                        <img class="img-fluid" alt="100%x280"
                          src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4">
                        <div class="card-body">
                          <h4 class="card-title">Special title treatment</h4>
                          <p class="card-text">With supporting text below as a natural lead-in to
                            additional content.</p>

                        </div>

                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <div class="card">
                        <img class="img-fluid" alt="100%x280"
                          src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840">
                        <div class="card-body">
                          <h4 class="card-title">Special title treatment</h4>
                          <p class="card-text">With supporting text below as a natural lead-in to
                            additional content.</p>

                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <div class="card">
                        <img class="img-fluid" alt="100%x280"
                          src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e">
                        <div class="card-body">
                          <h4 class="card-title">Special title treatment</h4>
                          <p class="card-text">With supporting text below as a natural lead-in to
                            additional content.</p>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">

                    <div class="col-md-4 mb-3">
                      <div class="card">
                        <img class="img-fluid" alt="100%x280"
                          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23">
                        <div class="card-body">
                          <h4 class="card-title">Special title treatment</h4>
                          <p class="card-text">With supporting text below as a natural lead-in to
                            additional content.</p>

                        </div>

                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <div class="card">
                        <img class="img-fluid" alt="100%x280"
                          src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129">
                        <div class="card-body">
                          <h4 class="card-title">Special title treatment</h4>
                          <p class="card-text">With supporting text below as a natural lead-in to
                            additional content.</p>

                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <div class="card">
                        <img class="img-fluid" alt="100%x280"
                          src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6">
                        <div class="card-body">
                          <h4 class="card-title">Special title treatment</h4>
                          <p class="card-text">With supporting text below as a natural lead-in to
                            additional content.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { BIconHandThumbsDown } from "bootstrap-vue";

import mixin from "../mixins/authmixin";
import Cookies from "js-cookie";
export default {
  mixins: [mixin],
  data (){
    return{
      show:false
  }
},
  mounted() {
    this.startBackgroundAnimation();
  },
  methods: {
    startBackgroundAnimation() {
      // const slideshow = document.querySelector(".slideshow");
      // const slides = Array.from(slideshow.getElementsByTagName("li"));
      // const animationDuration = getComputedStyle(document.documentElement).getPropertyValue("--animationDuration");
      // slides.forEach((slide, index) => {
      //   slide.style.animationDelay = `calc((${animationDuration} / 3) * ${index})`;
      // });
      // slideshow.classList.add("cssanimations");
    },
    start() {
      this.$router.push('/sign/up')
    }
  },
  beforeMount(){
    const token = Cookies.get("token");
    console.log(token===undefined)
    if(token!==undefined){
      this.show=true;
    }
  }

};
</script>

<style scoped>
.carousel-item {
  height: 100vh;
}

.navbar input[type="checkbox"],
.navbar .hamburger-lines {
  display: none;
}

.container {
  max-width: 1200px;
  width: 90%;
  margin: auto;
}

.navbar {
  box-shadow: 0px 5px 10px 0px #aaa;
  position: fixed;
  width: 100%;
  background: #fff;
  color: #000;
  opacity: 0.85;
  z-index: 100;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  height: 64px;
  align-items: center;
}

.menu-items {
  order: 2;
  display: flex;
}

.logo {
  order: 1;
  font-size: 2.3rem;
  margin-left: 100px
}

.menu-items li {
  list-style: none;
  margin-left: 1.5rem;
  font-size: 1.3rem;
}

.navbar a {
  color: #444;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}

.navbar a:hover {
  color: #117964;
}

@media (max-width: 768px) {
  .navbar {
    opacity: 0.95;
  }

  .navbar-container input[type="checkbox"],
  .navbar-container .hamburger-lines {
    display: block;
  }

  .navbar-container {
    display: block;
    position: relative;
    height: 64px;
  }

  .navbar-container input[type="checkbox"] {
    position: absolute;
    display: block;
    height: 32px;
    width: 30px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  .navbar-container .hamburger-lines {
    display: block;
    height: 28px;
    width: 35px;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .navbar-container .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #333;
  }

  .navbar-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar-container .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .navbar-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar .menu-items {
    padding-top: 100px;
    background: #fff;
    height: 100vh;
    max-width: 300px;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    margin-left: -40px;
    padding-left: 40px;
    transition: transform 0.5s ease-in-out;
    box-shadow: 5px 0px 10px 0px #aaa;
    overflow: scroll;
  }

  .navbar .menu-items li {
    margin-bottom: 1.8rem;
    font-size: 1.1rem;
    font-weight: 500;
  }

  .logo {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 2.5rem;
  }

  .navbar-container input[type="checkbox"]:checked~.menu-items {
    transform: translateX(0);
  }

  .navbar-container input[type="checkbox"]:checked~.hamburger-lines .line1 {
    transform: rotate(45deg);
  }

  .navbar-container input[type="checkbox"]:checked~.hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .navbar-container input[type="checkbox"]:checked~.hamburger-lines .line3 {
    transform: rotate(-45deg);
  }
}

@media (max-width: 500px) {
  .navbar-container input[type="checkbox"]:checked~.logo {
    display: none;
  }
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