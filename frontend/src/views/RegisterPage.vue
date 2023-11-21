<template>
    <div>
        <main>
            <section class="section-login">
                <div class="section-main">
                    <div class="section-login-1">
                        <div class="section-login-1-main">
                            <h1 class="section-login-1-title">Gym TimeX</h1>
                            <div class="section-login-1-img">
                                <!-- <img src="https://img.freepik.com/premium-vector/run-running-people-human-man-sport-logo-vector-icon-illustration_7688-4400.jpg"
                                    width="700" height="500" alt=""> -->
                                <!-- <video loading="lazy" muted="muted" src="https://cdnl.iconscout.com/lottie/premium/thumb/woman-on-gym-training-plan-7258437-5907632.mp4"  type="video/mp4" autoplay="autoplay" loop="loop"></video> -->
                                <a href="/">
                                    <video loading="lazy" muted="muted"
                                        src="https://cdnl.iconscout.com/lottie/premium/thumb/exercise-in-metaverse-5690348-4739261.mp4"
                                        type="video/mp4" autoplay="autoplay" loop="loop"></video>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="section-login-2">
                        <div class="section-login-2-main" v-if="register">
                            <h1 class="section-login-2-title">Register</h1>
                            <form @submit.prevent class="section-login-2-form">
                                <div class="login-form-1">
                                    <label for="newUserEmail" class="form-label">Email<span>*</span></label>
                                    <input type="email" class="form-control" id="newUserEmail" placeholder="Email"
                                        v-model.trim="$v.Register.new_user_email.$model"
                                        :class="{ 'is-invalid': $v.Register.new_user_email.$error }" />
                                    <div class="error text-danger" v-if="$v.Register.new_user_email.$dirty &&
                                        !$v.Register.new_user_email.required
                                        ">
                                        Cannot be empty
                                    </div>
                                    <div class="error text-danger" v-if="$v.Register.new_user_email.$dirty && !$v.Register.new_user_email.email
                                        ">
                                        Invalid Email
                                    </div>
                                </div>
                                <div class="login-form-2"
                                    :class="{ 'form-group--error': $v.Register.new_user_name.$error }">
                                    <label class="form__label">Username<span>*</span></label>
                                    <div class="d-flex align-items-center">
                                        <input class="form-control " v-model="Register.new_user_name"
                                            v-model.trim="$v.Register.new_user_name.$model"
                                            :class="{ 'is-invalid': $v.Register.new_user_name.$error }"
                                            v-bind:min="Register.new_user_name" placeholder="Password" />
                                    </div>
                                    <div class="error text-danger" v-if="$v.Register.new_user_name.$dirty && !$v.Register.new_user_name.required
                                        ">
                                        * Username is required.
                                    </div>
                                    <div class="error text-danger" v-if="!$v.Register.new_user_name.minLength">
                                        * Username must have at least
                                        {{ $v.Register.new_user_name.$params.minLength.min }} letters.
                                    </div>

                                </div>
                                <div class="login-form-3"
                                    :class="{ 'form-group--error': $v.Register.new_user_password.$error }">
                                    <label class="form__label">Password<span>*</span></label>
                                    <div class="d-flex align-items-center">
                                        <input class="form-control " v-model="Register.new_user_password"
                                            v-model.trim="$v.Register.new_user_password.$model"
                                            :class="{ 'is-invalid': $v.Register.new_user_password.$error }"
                                            v-bind:min="Register.new_user_password" placeholder="Password"
                                            :type="show[1]" />
                                        <b-icon style="margin-left: -25px; cursor: pointer" :icon="eyeType[1]"
                                            :class="{ 'ml-50': $v.Register.new_user_password.$error }"
                                            @click="toggleShow(1)"></b-icon>
                                    </div>
                                    <div class="error text-danger" v-if="$v.Register.new_user_password.$dirty && !$v.Register.new_user_password.required
                                        ">
                                        * Password is required.
                                    </div>
                                    <div class="error text-danger" v-if="!$v.Register.new_user_password.minLength">
                                        * Password must have at least
                                        {{ $v.Register.new_user_password.$params.minLength.min }} letters.
                                    </div>
                                    <div class="error text-danger" v-if="$v.Register.new_user_password.$dirty && !$v.Register.new_user_password.valid
                                        ">
                                        * The password requires an uppercase, lowercase, number and
                                        special character
                                    </div>
                                </div>
                                <!-- <div class="login-form-1">
                                    <label for="input-email">Email</label>
                                    <input v-model="new_user.email" type="text" id="input-email"
                                        placeholder="john@example.com" required>
                                </div> -->
                                <!-- <div class="login-form-2">
                                    <label for="input-name">Full Name</label>
                                    <input v-model="new_user.name" type="text" id="input-name" placeholder="John Doe"
                                        required>
                                </div>
                                <div class="login-form-3">
                                    <label for="input-password">Password</label>
                                    <input v-model="new_user.password" type="password" id="input-password"
                                        placeholder="At least 8 characters" required>
                                </div> -->
                                <div class="login-form-submit-btn">
                                    <button v-on:click="reg_user()">Create an Account</button>
                                </div>
                                <div class="login-form-5" v-on:click="register = false; $v.Login.$reset()">
                                    <p>Already have an account? <a>Sign In</a></p>
                                </div>
                                <a href="/" class="text-center"
                                    style="padding: 0%; text-decoration: underline; color: rgba(0, 0, 0, 0.548); font-size: small;">
                                    <p>
                                        Back to home page</p>
                                </a>
                            </form>
                        </div>
                        <div class="section-login-2-main" v-if="!register">

                            <h1 class="section-login-2-title">Login</h1>
                            <form @submit.prevent class="section-login-2-form">
                                <div class="login-form-1">
                                    <label for="userEmail" class="form-label">Email<span>*</span></label>
                                    <input type="email" class="form-control" id="userEmail" placeholder="Email"
                                        v-model.trim="$v.Login.user_email.$model"
                                        :class="{ 'is-invalid': $v.Login.user_email.$error }" />
                                    <div class="error text-danger" v-if="$v.Login.user_email.$dirty &&
                                        !$v.Login.user_email.required
                                        ">
                                        Cannot be empty
                                    </div>
                                    <div class="error text-danger" v-if="$v.Login.user_email.$dirty && !$v.Login.user_email.email
                                        ">
                                        Invalid Email
                                    </div>
                                </div>

                                <div class="login-form-3" :class="{ 'form-group--error': $v.Login.user_password.$error }">
                                    <label class="form__label">Password</label>
                                    <div class="d-flex align-items-center">
                                        <input class="form-control " v-model="Login.user_password"
                                            v-model.trim="$v.Login.user_password.$model"
                                            :class="{ 'is-invalid': $v.Login.user_password.$error }"
                                            v-bind:min="Login.user_password" placeholder="Password" :type="show[1]" />
                                        <b-icon style="margin-left: -25px; cursor: pointer" :icon="eyeType[1]"
                                            :class="{ 'ml-50': $v.Login.user_password.$error }"
                                            @click="toggleShow(1)"></b-icon>
                                    </div>
                                    <div class="error text-danger" v-if="$v.Login.user_password.$dirty && !$v.Login.user_password.required
                                        ">
                                        * Password is required.
                                    </div>
                                    <div class="error text-danger" v-if="!$v.Login.user_password.minLength">
                                        * Password must have at least
                                        {{ $v.Login.user_password.$params.minLength.min }} letters.
                                    </div>
                                    <!-- <div class="error text-danger" v-if="$v.Login.user_password.$dirty && !$v.Login.user_password.valid
                                        ">
                                        * The password requires an uppercase, lowercase, number and
                                        special character
                                    </div> -->
                                </div>

                                <div class="login-form-submit-btn">
                                    <button v-on:click="login()">Login</button>
                                </div>
                                <div class="login-form-5" v-on:click="register = true; $v.Register.$reset()">
                                    <p>Want to create an account? <a>Sign Up</a></p>
                                </div>
                                <a href="/" class="text-center"
                                    style="padding: 0%; text-decoration: underline; color: rgba(0, 0, 0, 0.548); font-size: small;">
                                    <p>
                                        Back to home page
                                    </p>
                                </a>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
<script>
import User from "../services/user"
import Cookies from "js-cookie";
import errorToast from "@/mixins/errorToast";
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
// import { required, email, minLength } from "vuelidate/lib/validators";


export default {
    // name: "Register",
    setup() {
        return { v$: useVuelidate() }
    },
    mixins: [errorToast],
    data() {
        return {
            register: true,
            show: { 0: "password", 1: "password", 2: "password" },
            Register: {
                new_user_email: '',
                new_user_name: '',
                new_user_password: ''
            },
            Login: {
                user_email: '',
                user_password: '',

            },
            eyeType: {
                0: "eye-slash-fill",
                1: "eye-slash-fill",
                2: "eye-slash-fill",
            },

        }
    },
    // components: {

    // },
    methods: {
        toggleShow(ind) {
            this.show[ind] = this.show[ind] === "text" ? "password" : "text";
            this.eyeType[ind] =
                this.eyeType[ind] === "eye-fill" ? "eye-slash-fill" : "eye-fill";
        },
        reg_user: async function () {

            // console.log("hi")
            try {

                this.$v.$touch();
                // console.log(this.$v.Register)
                if (this.$v.Register.$invalid) {
                    return;
                }
                const new_user = {
                    email: this.Register.new_user_email,
                    name: this.Register.new_user_name,
                    password: this.Register.new_user_password
                }

                const res = await User.register(new_user)
                // console.log(res.data)
                if (res.data.success) {
                    this.$toast.success('Registered')
                    await Cookies.set("token", res.data.token);
                    localStorage.setItem("name1", res.data.user.name);
                    localStorage.setItem("user1", res.data.user.type);

                    if (Cookies.get("token")) {
                        if (res.data.user.type === "Admin") {
                            this.$router.push('/admin/panel');
                        } else {
                            this.$router.push("/");
                        }
                    }
                }
            }
            catch (error) {

                const errors = !error.response
                    ? [{ msg: error.message }]
                    : error.response.data.errors;
                this.toast(errors);
                this.errorMessage = errors[0].msg;
            }

        },
        login: async function () {
            try {
                this.$v.$touch();
                if (this.$v.Login.$invalid) {
                    return;
                }
                const user = {
                    email: this.Login.user_email,
                    password: this.Login.user_password
                }
                this.isLoading = true;
                const res = await User.login(user)
                if (res.data.success) {
                    this.$toast.success('Logged In ')
                    await Cookies.set("token", res.data.token);
                    localStorage.setItem("name1", res.data.user.name);
                    localStorage.setItem("user1", res.data.user.type);
                    if (Cookies.get("token")) {

                        if (res.data.user.type === "Admin") {
                            this.$router.push('/admin/panel');
                        } else {
                            this.$router.push("/");
                        }
                    }
                }
            }
            catch (error) {
                // this.isLoading = false;
                // this.error = true;
                const errors = !error.response
                    ? [{ msg: error.message }]
                    : error.response.data.errors;
                this.toast(errors);
                this.errorMessage = errors[0].msg;
            }


        }
    },
    validations: {
        Login: {
            user_email: {
                required,
                email
            },
            user_password: {
                required,
                minLength: minLength(4)
            },
        },
        Register: {

            new_user_email: {
                required,
                email
            },
            new_user_name: {
                required,
                minLength: minLength(4),
            },
            new_user_password: {
                required,
                minLength: minLength(4),
                valid: function (value) {
                    const containsUppercase = /[A-Z]/.test(value);
                    const containsLowercase = /[a-z]/.test(value);
                    const containsNumber = /[0-9]/.test(value);
                    const containsSpecial = /[#?!@$%^&*-]/.test(value);
                    return (
                        containsUppercase &&
                        containsLowercase &&
                        containsNumber &&
                        containsSpecial
                    );
                },
            }
        }
    },
    created() {
        if (this.$route.params.id === "in") {
            this.register = false
        }
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
    background: rgba(2, 0, 36, 1);
    /* background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(112, 216, 244, 1) 52%, rgba(255, 255, 255, 1) 100%); */
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
    color: rgb(2, 0, 36, 0.705);
}

main section.section-login .section-main .section-login-2 .section-login-2-main .section-login-2-form .login-form-submit-btn button {
    background: rgba(2, 0, 36, 0.705);
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