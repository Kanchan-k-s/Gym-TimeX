<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3">
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
                    <a class="nav-item nav-link active" href="/" aria-current="page">Home</a>
                    <a class="nav-item nav-link active" href="/employee/booking">Booking</a>
                    <a class="nav-item nav-link active" href="/" aria-current="page">Setting</a>
                </div>
                <!-- Action -->
                <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
                    <!-- <a href="/sign/in" class="btn btn-sm btn-light w-full w-lg-auto">
                        SIGN IN
                    </a>
                    <a href="/sign/up" class="btn btn-sm btn-light w-full w-lg-auto" style="margin-left:15px">
                        SIGN UP
                    </a> -->
                    <a v-on:click="logout" class="btn btn-sm btn-light w-full w-lg-auto" style="margin-left:15px">
                        Logout
                    </a>
                </div>
            </div>
        </div>
    </nav>
    </div>
</template>
<script>
import mixin from "../mixins/authmixin";
export default {
    mixins: [mixin],
    
}
</script>
<style scoped>
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