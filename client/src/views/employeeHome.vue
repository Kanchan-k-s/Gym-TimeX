<template>
  <div>
    <nav class="navbar scrolled-down navbar-expand-lg navbar-dark bg-dark px-0 py-3">
      <div class="container-xl">
        <!-- Logo -->
        <a class="navbar-brand" href="/">
          <video style="height:60px; width:60px;"
            src="https://cdnl.iconscout.com/lottie/premium/thumb/dumbbells-6911043-5673469.mp4" autoplay="autoplay"
            muted="muted" loop="loop" playsinline="" type="video/mp4"></video>
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
    <!-- <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://stock.intellemo.com/6296f59625cabfb4867333e5/6296f59825cabfb4867333e6-v265/protein_powder_l.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://coreldrawdesign.com/resources/previews/preview-trendy-sports-shoes-advertisement-promotional-banner-vector-1657725702.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://cdn3.vectorstock.com/i/1000x1000/09/37/green-tea-advertising-realistic-composition-vector-20600937.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="data:image/jpeg;base64,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" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div> -->
    <!-- <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" style="max-height: 220px;">
  <div class="carousel-inner" style="height: 40%; width 40%; margin-left:40%; ">
    <div class="carousel-item imgh active" data-bs-interval="2000">
      <img src="https://stock.intellemo.com/6296f59625cabfb4867333e5/6296f59825cabfb4867333e6-v265/protein_powder_l.jpg" class="d-block imgh w-40" alt="...">
    </div>
    <div class="carousel-item imgh" data-bs-interval="2000">
      <img src="https://coreldrawdesign.com/resources/previews/preview-trendy-sports-shoes-advertisement-promotional-banner-vector-1657725702.jpg" class="d-block imgh w-40" alt="...">
    </div>
    <div class="carousel-item imgh" data-bs-interval="2000">
      <img src="data:image/jpeg;base64,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" class="d-block imgh w-40" alt="...">
    </div>
    <div class="carousel-item imgh" data-bs-interval="2000">
      <img src="https://cdn3.vectorstock.com/i/1000x1000/09/37/green-tea-advertising-realistic-composition-vector-20600937.jpg" class="d-block imgh w-40" alt="...">
    </div>
    <div class="carousel-item imgh" data-bs-interval="2000">
      <img src="https://sp2cdn-idea-global.zingfront.com/sp_opera/1bd18840f6eae1ab044e795c1eedc612.jpg" class="d-block imgh w-40" alt="...">
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

</div> -->
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item carousel2 active" data-bs-interval="2000">
          <a href="/"><img
            src="../assets/TimeX.png"
            class="d-block w-25 mx-auto" alt=""></a>
        </div>
        <div class="carousel-item carousel2" v-for="sponser in sponsers" data-bs-interval="2000">
          <a :href=sponser.Product_link v-on:click="addRevenue(sponser.id)">
            <img :src=sponser.Image_link class="d-block w-25 mx-auto" alt="">
          </a>

        </div>
        <!-- <div class="carousel-item carousel2" data-bs-interval="2000">
          <img src="https://sp2cdn-idea-global.zingfront.com/sp_opera/1bd18840f6eae1ab044e795c1eedc612.jpg"
            class="d-block w-25 mx-auto" alt="">
        </div> -->
      </div>
      <button class="spo carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="spo carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
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
        <div style="color:white">
          @AKsoft
        </div>
        <div class="footer-links" style="margin-left: 80%;padding-bottom:0.5%">
          <a href="mailto:info@argusoft.com"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
              fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg></a>
          <a href="https://www.facebook.com/argusoft"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
              fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg></a>
          <a href="https://www.linkedin.com/company/argusoft"><svg xmlns="http://www.w3.org/2000/svg" width="20"
              height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg></a>

        </div>
      </footer>
    </section>
  </div>
</template>
<script>
import { BIconHandThumbsDown, BIconThreeDotsVertical } from "bootstrap-vue";
import employeeApi from "../services/employee"
import mixin from "../mixins/authmixin";
import errorToast from "../mixins/errorToast"
import Cookies from "js-cookie";
export default {
  mixins: [mixin, errorToast],
  data() {
    return {
      show: false,
      user: '',
      sponsers: [],
      errorMessage: ''
    }
  },


  methods: {
    showAdds: async function () {
      try {
        const res = await employeeApi.showAdds();
        // console.log(res.data)
        if (res.data.success) {
          this.sponsers = res.data.result
        }else{
          // this.$toast.warning("No Ads")
        }

      } catch (error) {
        const errors = !error.response
          ? [{ msg: error.message }]
          : error.response.data.errors;
        this.toast(errors);
        this.errorMessage = errors[0].msg;
      }

    },
    addRevenue: async function(id) {
      const res= await employeeApi.addRevenue(id)
    },
    start() {
      this.$router.push('/sign/up')
    },

  },
  created() {
    this.showAdds();
  },
  beforeMount() {
    const token = Cookies.get("token");
    this.user = localStorage.getItem("name1")
    // console.log(token === undefined)
    if (token !== undefined) {
      this.show = true;
    }
  }

};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lugrasimo&display=swap');
.spo > .carousel-control-prev-icon {
 background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
}

.spo >.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
}

.carousel2[data-v-2a51d747] {
  height: 50vh;
}


.imgh {
  height: 30%;
  width: 40vh;
}

.bg {
  background: url("https://t3.ftcdn.net/jpg/03/23/85/94/360_F_323859450_8uOTMisto96ip50G5kOVWuMgNJCNigDg.jpg") no-repeat center;
  background-size: cover;
}

.boxshad {
  box-shadow: 0 0 3px whitesmoke;
  margin-top: -10px;
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0000004d;
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
  color: #ffffff98;
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