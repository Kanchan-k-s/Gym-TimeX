<template>
    <div>
        <main>
            <section class="section-login">
                <div class="section-main">
                    <div class="section-login-1">
                        <div class="section-login-1-main">
                            <h1 class="section-login-1-title">Gym TimeX</h1>
                            <div class="section-login-1-img">
                                <img src="https://img.freepik.com/premium-vector/run-running-people-human-man-sport-logo-vector-icon-illustration_7688-4400.jpg"
                                    width="700" height="500" alt="">
                            </div>

                        </div>

                    </div>
                    <div class="section-login-2">
                        <div class="section-login-2-main" v-if="register">

                            <h1 class="section-login-2-title">Register</h1>
                            <form @submit.prevent class="section-login-2-form">
                                <div class="login-form-1">
                                    <label for="input-email">Email</label>
                                    <input v-model="new_user.email" type="text" id="input-email" placeholder="john@example.com" required>
                                </div>
                                <div class="login-form-2">
                                    <label for="input-name">Full Name</label>
                                    <input v-model="new_user.name" type="text" id="input-name" placeholder="John Doe" required>
                                </div>
                                <div class="login-form-3">
                                    <label for="input-password">Password</label>
                                    <input v-model="new_user.password" type="password" id="input-password" placeholder="At least 8 characters" required>
                                </div>
                                <div class="login-form-submit-btn">
                                    <button v-on:click="reg_user()">Create an Account</button>
                                </div>
                                <div class="login-form-5" v-on:click="register=false">
                                    <p>Already have an account? <a >Sign In</a></p>
                                </div>
                            </form>

                        </div>
                        <div class="section-login-2-main" v-if="!register">

                            <h1 class="section-login-2-title">Login</h1>
                            <form @submit.prevent class="section-login-2-form">
                                <div class="login-form-1">
                                    <label for="input-email">Email</label>
                                    <input v-model="user.email" type="text" id="input-email" placeholder="Email" required>
                                </div>
                                <div class="login-form-3">
                                    <label for="input-password">Password</label>
                                    <input v-model="user.password" type="password" id="input-password" placeholder="Password" required>
                                </div>
                                <div class="login-form-submit-btn">
                                    <button v-on:click="login()">Login</button>
                                </div>
                                <div class="login-form-5" v-on:click="register=true">
                                    <p>Want to create an account? <a >Sign Up</a></p>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
<script>
import User from "../services/user.js"

export default {
    data() {
        return {
            register: true,
            new_user:{
                email:'',
                name:'',
                password:'',
            },
            user:{
                email:'',
                password:'',
            },
        }
    },
    components: {
    
    },
    methods:{
        reg_user: function(){
            console.log(this.new_user)
            User.register(this.new_user).then((res)=>{
                this.$router.push('/admin/panel')
            })
            
        },
        login:function(){
            console.log(this.user)
            User.login(this.user).then((res)=>{
                this.$router.push('/admin/panel')
            })
        }  
    },
    beforeCreate() {

    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lugrasimo&display=swap');

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    /* font-family: 'Lugrasimo', cursive; */
}

body {
    width: 100%;
    height: auto;
}

main section.section-login {
    width: 100%;
    height: 100vh;
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(112, 216, 244, 1) 52%, rgba(255, 255, 255, 1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
}

main section.section-login .section-main {
    width: 60%;
    height: auto;
    display: flex;
}

main section.section-login .section-main .section-login-1,
main section.section-login .section-login-2 {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
}

main section.section-login .section-main .section-login-1 .section-login-1-main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-top: 50px;
}

.section-login-1-title {
    font-family: 'Lugrasimo', cursive;
    color: black;
    text-decoration: underline;
    font-size: 50px;
}

main section.section-login .section-main .section-login-1 .section-login-1-main {
    font-size: 32px;
    color: #fff;
}

main section.section-login .section-main .section-login-1 .section-login-1-main .section-login-1-text {

    color: #ffffff94;

    font-size: 18px;
}

main section.section-login .section-main .section-login-1 .section-login-1-main .section-login-1-img {

    width: 100%;
}

main section.section-login .section-main .section-login-1 .section-login-1-main .section-login-1-img img {

    width: 100%;

    display: block;
}


main section.section-login .section-main .section-login-2 .section-login-2-main {
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;

}

main section.section-login .section-main .section-login-2 .section-login-2-main .section-login-2-title {
    font-size: 32px;

}

main section.section-login .section-main .section-login-2 .section-login-2-main .section-login-2-form {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}

main section.section-login .section-main .section-login-2 .section-login-2-main .section-login-2-form .login-form-1,
main section.section-login .section-main .section-login-2 .section-login-2-main .section-login-2-form .login-form-2,
main section.section-login .section-main .section-login-2 .section-login-2-main .section-login-2-form .login-form-3 {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
}

main section.section-login .section-main .section-login-2 .section-login-2-main .section-login-2-form .login-form-1 label,
main section.section-login .section-main .section-login-2 .section-login-2-main .section-login-2-form .login-form-2 label,
main section.section-login .section-main .section-login-2 .section-login-2-main .section-login-2-form .login-form-3 label {
    font-weight: 500;
    font-size: 15px;
}

main section.section-login .section-main .section-login-2 .section-login-2-main .section-login-2-form .login-form-1 input,
main section.section-login .section-main .section-login-2 .section-login-2-main .section-login-2-form .login-form-2 input,
main section.section-login .section-main .section-login-2 .section-login-2-main .section-login-2-form .login-form-3 input {
    padding: 12px 15px;
    border: 1px solid #e9e6e6;
    border-radius: 4px;
    outline: none;
    font-size: 16px;
    width: 100%;
}

main section.section-login .section-main .section-login-2 .section-login-2-main .section-login-2-form .login-form-4 {
    display: flex;
    column-gap: 7px;
    align-items: center;
}

main section.section-login .section-main .section-login-2 .section-login-2-main .section-login-2-form .login-form-4 p,
main section.section-login .section-main .section-login-2 .section-login-2-main .section-login-2-form .login-form-5 p {
    font-size: 14px;
}

main section.section-login .section-main .section-login-2 .section-login-2-main .section-login-2-form .login-form-4 p a,
main section.section-login .section-main .section-login-2 .section-login-2-main .section-login-2-form .login-form-5 p a {
    font-weight: bold;
    color: #407a9a;
}

main section.section-login .section-main .section-login-2 .section-login-2-main .section-login-2-form .login-form-submit-btn button {
    background: #407a9a;
    padding: 14px;
    width: 100%;
    color: #fff;
    outline: none;
    border: 0px;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
}

main section.section-login .section-main .section-login-2 .section-login-2-main .section-login-2-form .login-form-5 p {
    text-align: center;
}





@media only screen and (max-width: 1200px) {

    /* login page */
    main section.section-login .section-login-1 .section-login-1-main,
    main section.section-login .section-login-2 .section-login-2-main {
        width: 85%;
    }

    main section.section-login .section-login-1 .section-login-1-main .section-login-1-title,
    main section.section-login .section-login-1 .section-login-1-main .section-login-1-form {
        margin-top: 35px;
    }

    main section.section-login .section-main {
        width: 75%
    }

}

@media only screen and (max-width: 900px) {

    /* login page */
    main section.section-login .section-main {
        padding: 35px 0px;
    }

    main section.section-login .section-login-1 .section-login-1-main,
    main section.section-login .section-login-2 .section-login-2-main {
        width: 90%;
    }

    main section.section-login .section-login-1 .section-login-1-main {
        height: 90%;
    }

    main section.section-login .section-login-1 .section-login-1-main .section-login-1-title,
    main section.section-login .section-login-1 .section-login-1-main .section-login-1-form {
        margin-top: 25px;
    }

    main section.section-login .section-main {
        flex-direction: column;
        width: 75%;
        padding: 50px 0px;
    }

    main section.section-login .section-main .section-login-1,
    main section.section-login .section-login-2 {
        width: 100%;
    }

    main section.section-login {
        height: unset;
    }
}

/* 
#email:focus~label[for="Email"] {
    margin: -76px 70px;
}

#Full_Name:focus~label[for="Full Name"] {
    margin: -76px 70px;
}

#Password:focus~label[for="Password"] {
    margin: -76px 70px;
} */

@media only screen and (max-width: 600px) {
    main section.section-login .section-main {
        width: 100%;
        padding: 0px;
    }

    main section.section-login .section-main .section-login-2 .section-login-2-main {
        padding: 35px 25px;
    }
}
</style>