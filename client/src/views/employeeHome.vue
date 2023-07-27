<template>
  <div>
    <nav class="navbar scrolled-down navbar-expand-lg navbar-dark bg-dark px-0 py-3">
      <div class="container-xl">
        <!-- Logo -->
        <a class="navbar-brand" href="/">
          <video style="height:60px; width:60px;"
         src="https://cdnl.iconscout.com/lottie/premium/thumb/dumbbells-6911043-5673469.mp4" autoplay="autoplay" muted="muted" loop="loop" playsinline="" type="video/mp4"></video>
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
            <a v-if="!show" class="nav-item nav-link active" href="/#contact" aria-current="page">Contact us</a>
            <a v-if="show" class="nav-item nav-link active" href="/employee/booking" aria-current="page">Booking</a>
            <a v-if="show" class="nav-item nav-link active" href="/employee/equipments" aria-current="page">Equipments</a>
            <a v-if="show" class="nav-item nav-link active" href="/settings" aria-current="page">Settings</a>
          </div>
          <!-- Action -->
          <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
            <a v-if="!show" href="/sign/in" class="btn btn-sm btn-light w-full w-lg-auto">
              SIGN IN
            </a>
            <a v-if="!show" href="/sign/up" class="btn btn-sm btn-light w-full w-lg-auto" style="margin-left:15px">
              SIGN UP
            </a>
            <span v-if="show" style="padding-right:20%; color:white">{{ this.user }}</span>
            <a v-if="show" v-on:click="logout()" class="btn btn-sm btn-light w-full w-lg-auto" style="margin-left:15px">
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div id="start" class="carousel-inner">
        <!-- <div class="container" style="padding-top:7%"> -->
        <div class="carousel-item active" data-bs-interval="2000">
          <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20230609/pngtree-gym-treadmills-are-lined-in-an-empty-gym-image_2884906.png"
            class=" d-block w-100" alt="...">


          <div class="carousel-caption d-none d-md-block " style="background:rgba(0, 0, 0, 0.562)">
            <h1> GYM TimeX </h1>
            <p>"Strength does not come from physical capacity. It comes from an indomitable will."</p>
            <button type="button" class="btn btn-light btn-lg" v-on:click="start()" v-if="!show"> Get Started! </button>
            <!-- <button type="button" class="btn btn-dark btn-lg"> Get Started! </button> -->

          </div>

        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="../assets/colousel1.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block " style="background:rgba(0, 0, 0, 0.562)">
            <h1> GYM TimeX </h1>
            <p class="quote">"Discipline is the bridge between goals and accomplishment."</p>
            <!-- <button type="button" class="btn btn-light"> Get Started! </button> -->
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="../assets/carousel3.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block " style="background:rgba(0, 0, 0, 0.562)">
            <h1> GYM TimeX </h1>
            <p class="quote">"Don't watch the clock; do what it does. Keep going."</p>
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
    </div>
    <section id="about" class="pt-5 ">
      <div class="container" style="margin-top:7%">
        <div class="row">
          <div class="col-12 text-center">
            <!-- Modified: Added "text-center" class -->
            <h1 class="mb-3">About Us</h1>
            <!-- Removed "center" class -->
            <p>Welcome to our empowering fitness community, where we believe that strength, dedication, and determination
              lead to transformative results. At our gym, we strive to create an environment where you can challenge
              yourself, exceed your limits, and unlock your full potential.</p>
          </div>
          <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="row">

                <div class="col-md-4 mb-3">
                  <div class="card" style="height: 380px;">
                    <img class="img-fluid img-size" alt="100%x280"
                      src="https://media.istockphoto.com/id/918931148/photo/fit-people-working-out-at-exercising-class-in-the-gym.jpg?s=612x612&w=0&k=20&c=-2fPHUiGAjZJXeSqZTw8ipfeUOkI_w8H0wEGcbD7oPc=">
                    <div class="card-body">
                      <h4 class="card-title">Indoor Cycling Studios</h4>
                      <p class="card-text">Specialized areas equipped with stationary bikes and immersive lighting and
                        sound systems for intense cycling workouts.</p>

                    </div>

                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="card" style="height: 380px;">
                    <img class="img-fluid img-size" alt="100%x280"
                      src="https://web-back.perfectgym.com/sites/default/files/styles/900x/public/Marketing-klubu-fitness-czyli-jak-wypromowac-Twoja-si%C5%82ownie.jpeg?itok=ULMaVKX3">
                    <div class="card-body">
                      <h4 class="card-title">Functional Training Zones</h4>
                      <p class="card-text">Dedicated spaces with equipment like battle ropes, kettlebells, medicine
                        balls, and suspension trainers for functional fitness training.</p>

                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="card" style="height: 380px;">
                    <img class="img-fluid img-size" alt="100%x280"
                      src="https://media.istockphoto.com/id/1089939832/photo/happy-athletic-people-jogging-on-treadmills-in-a-health-club.jpg?s=612x612&w=0&k=20&c=SXA16QEZhLIYcDR0gHkVTY0MNSBIROmU7sTi3Tp8Bz0=">
                    <div class="card-body">
                      <h4 class="card-title">Cardiovascular Equipment</h4>
                      <p class="card-text">Gyms typically provide a range of cardio machines, such as treadmills,
                        stationary bikes, elliptical trainers, and rowing machines, to help members improve
                        cardiovascular fitness.</p>

                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 mb-3">
                  <div class="card" style="height: 380px;">
                    <img class="img-fluid img-size" alt="100%x280"
                      src="https://cdn.shopify.com/s/files/1/0564/6411/3852/files/attractive-handsome-bearded-man-holding-kettlebell-doing-squats-fitness-group-with-two-girls-modern-gym_1024x1024.jpg?v=1658580656">
                    <div class="card-body">
                      <h4 class="card-title">Strength Training</h4>
                      <p class="card-text">Gyms offer a variety of strength training equipment, including free weights,
                        weight machines, and functional training equipment like resistance bands and TRX systems.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="card" style="height: 380px;">
                    <img class="img-fluid img-size" alt="100%x280"
                      src="https://blog.nasm.org/hubfs/personal-training-clients-1.jpg">
                    <div class="card-body">
                      <h4 class="card-title">Personal Training</h4>
                      <p class="card-text">Our offer personal training services, where certified trainers provide
                        one-on-one coaching, customized workout plans, and support to help individuals achieve their
                        fitness goals.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="card" style="height: 380px;">
                    <img class="img-fluid img-size" alt="100%x280"
                      src="https://uploads-ssl.webflow.com/63695e3c58fff2340c868780/637799ad964b87332a85fdb8_61307e05ebef60d83e23d828_1.jpeg">
                    <div class="card-body">
                      <h4 class="card-title">Fitness Assessments</h4>
                      <p class="card-text">Our gym conduct fitness assessments for members, which can include body
                        measurements, fitness tests, and goal-setting sessions to track progress.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="pt-5 bg">

      <!-- <div class="cont pt-5">
        <div class="image-wrapper">
          <img
            src="https://img.freepik.com/premium-photo/contemporary-spotless-fitness-gym-center-interiorgenerative-ai_391052-10889.jpg"
            alt="Image" class="image" />
        </div>
        <div class="text-wrapper text-center" style="padding-top: 6%; background-color:rgb(255, 255, 255) ">
          <div class="boxshad" style="background; width:35%;margin-left:33%;margin-bottom: 5%; ">
            <h1 style="color: rgba(0, 0, 0, 0.808);"> Contact Us</h1>
          </div>
          <div style="font-style: italic; color: rgba(0, 0, 0, 0.808);width:85%;margin-left:8%;margin-top: 6%;">
            "We are here for you!!"
          </div>
          <div class="container">
            <div class="contactInfo">
              <div class="box">
                <div class="icon">
                  <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>
                </div>
                <div class="text">
                  <h3>Address</h3>
                  <p>A 66, GIDC Sector - 25<br>Gandhinagar - 382016<br>Gujarat, India</p>
                </div>
              </div>
              <div class="box">
                <div class="icon"><i class="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div class="text">
                  <h3>Phone</h3>
                  <p>9328573110</p>
                </div>
              </div>
              <div class="box">
                <div class="icon"><i class="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div class="text">
                  <h3>Mail Us</h3>
                  <p>info@argusoft.com</p>
                </div>
              </div>
            </div>
          </div> -->
      <!-- <div class="boxshad"
            style="padding: 2%; color: rgba(252, 252, 252, 0.808); width:40%;margin-left:30%;margin-top: 8%;"> -->
      <!-- <h4 style="text-decoration: underline;"> Contact Details</h4> -->
      <!-- <h6> <br> GYM TimeX </h6>
            <p> A 66, GIDC Sector - 25<br>Gandhinagar - 382016<br>Gujarat, India</p>
          </div> -->
      <!-- </div>
      </div> -->
      <div>
        <div id="details" data-panel="business-details-panel" class="IJMoHc b0t70b" jslog="59796; track:impression">
          <!-- <hr class="WUdCTb"> -->
          <div class="text-center" style="color: rgb(255, 244, 244); margin-bottom: 2%; margin-top: 7% ">
            <h1 style="color: rgba(255, 255, 255, 0.808);">Contact Us</h1>
          </div>
          <div class="text-center" jslog="56034; track:impression,click">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14664.148804565486!2d72.6273969!3d23.2417333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2bf0022b4609%3A0x4ecd09a1a9d956eb!2sArgusoft!5e0!3m2!1sen!2sin!4v1690368229709!5m2!1sen!2sin"
              width="800" height="500" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="container  w-50" style="color:white; margin-top:3%">
            <div class="row">
              <!-- First Column for Contact Information -->
              <div class="col-sm-6">
                <h3 style="text-decoration:underline;">Contact</h3>
                <p> <br> Mail Us: info@argusoft.com</p>
                <p>Call Us: 9328573110</p>
              </div>
              <!-- Second Column for Address -->
              <div class="col-sm-6">
                <h3 style="text-decoration:underline;">Address</h3>
                <h6> <br> GYM TimeX </h6>
                <p> A 66, GIDC Sector - 25<br>Gandhinagar - 382016<br>Gujarat, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div class="text-center">
          AKsoft
        </div>
        <div class="footer-links" style="margin-left: 80%;">
          <a href="mailto:info@argusoft.com"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg></a>
          <a href="https://www.facebook.com/argusoft"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg></a>
          <a href="https://www.linkedin.com/company/argusoft"><svg xmlns="http://www.w3.org/2000/svg" width="16"
              height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg></a>

        </div>
      </footer>
    </section>
  </div>
</template>
<script>
import { BIconHandThumbsDown } from "bootstrap-vue";

import mixin from "../mixins/authmixin";
import Cookies from "js-cookie";
export default {
  mixins: [mixin],
  data() {
    return {
      show: false,
      user:'',
    }
  },

  methods: {

    start() {
      this.$router.push('/sign/up')
    }
  },
  beforeMount() {
    const token = Cookies.get("token");
    this.user=localStorage.getItem("name1")
    console.log(token === undefined)
    if (token !== undefined) {
      this.show = true;
    }
  }

};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lugrasimo&display=swap');

.bg{
background: url("https://t3.ftcdn.net/jpg/03/23/85/94/360_F_323859450_8uOTMisto96ip50G5kOVWuMgNJCNigDg.jpg") no-repeat center;
background-size: cover;
}
.WUdCTb {
  border: 1px solid black;
  margin: 0 auto 16px;
  width: 50px
}

.b0t70b {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  max-width: 1080px;
}

.Igsabe {
  font-size: 1em;
  margin: 0 0 48px;
  text-align: center;
  text-transform: uppercase
}

.IQ1KEb {
  margin-bottom: 48px
}

.QMbmRe {
  background-position: center center;
  background-repeat: no-repeat;
  padding-top: 56%;
}

.fGZQDc {
  display: -moz-box;
  display: flex;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  flex-direction: column
}

.kCmrbf {
  -moz-box-flex: 1;
  flex: 1;
  flex-basis: auto;
  margin: 0 18px 42px
}

.q8cvFf,
.Gou21b {
  margin: 0 0 16px
}

.PDvGL {
  cursor: pointer
}

.PDvGL:hover {
  text-decoration: none
}

.R7Di0e {
  list-style-type: none;
  margin: 0;
  padding: 0
}

.qhkvMe {
  font-style: normal
}

.boxshad {
  box-shadow: 0 0 3px whitesmoke;
  margin-top: -10px;
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffffcc;
  padding: 10px;
}

.img-size {
  height: 200px;
}

.footer-text {
  font-weight: bold;
}

.footer-links a {
  margin-right: 15px;
  text-decoration: none;
  color: #00000098;
}

.social-icons a {
  color: #000000;
  margin-left: 15px;
}

.social-icons a:hover {
  color: #3b5998;
  /* Facebook color */
}

.cont {
  display: flex;
  /* margin-top: 10%; */
}

.image-wrapper {
  flex: 1;
  max-width: 50%;
}

.text-wrapper {
  flex: 1;
  max-width: 50%;
}

.image {
  height: 70vh;
  width: 70vh;
  margin-left: 20%;
  margin-top: 10%;
  margin-bottom: 6%;
}

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