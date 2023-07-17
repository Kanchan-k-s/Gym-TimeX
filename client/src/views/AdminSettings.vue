<template>
    <div>

        <AdminNavbar></AdminNavbar>
        <div  style="padding-top:8%">
           
                    <div style="overflow: hidden">
                        <div id="profile" class="row">
                            <div class="col-12 title d-flex align-items-center ps-3 pt-3 pb-3">
                                <router-link class="btn btn-warning fw-bold text-center" v-if="admin_type !== 'Super Admin'"
                                    to="/dashboard">
                                    <i class="ri-arrow-left-line"></i>
                                </router-link>
                                <router-link class="btn btn-warning fw-bold text-center" v-if="admin_type === 'Super Admin'"
                                    to="/superadmin">
                                    <i class="ri-arrow-left-line"></i>
                                </router-link>
                                <div class="d-flex ms-4">
                                    <h2>My Profile</h2>
                                </div>
                            </div>
                            <div class="col-4 text-muted navigation-links">
                                <div class="icon-wrapper" :class="{ active: form_index === 0 }" @click="form_index = 0">
                                    <i class="ri-pencil-fill"></i> <span> Edit Profile </span>
                                </div>
                                <div class="icon-wrapper" :class="{ active: form_index === 1 }" @click="form_index = 1">
                                    <i class="ri-shield-keyhole-fill"></i> <span> Change Password</span>
                                </div>
                                <!-- <div
          class="icon-wrapper"
          :class="{ active: form_index === 2 }"
          @click="form_index = 2"
        >
          <i class="ri-notification-4-fill"></i> <span>Notifications</span>
        </div> -->
                            </div>
                            <div class="form-view p-3 col-8">
                                <div v-if="isLoading" class="text-center m-2">
                                    <b-spinner variant="danger"></b-spinner>
                                </div>
                                <form class="form" @submit.prevent="handleSubmitProfile" v-else-if="form_index === 0">
                                    <fieldset class="h3 mb-4">Edit Profile</fieldset>
                                    <div class="mb-3 w-50">
                                        <label class="mb-2">First Name</label>
                                        <input type="text" v-model="user.first_name" placeholder="Enter First Name"
                                            class="form-control" v-bind:class="{ 'is-invalid': fnameError }" />
                                        <div class="invalid-feedback" id="feedback-1" v-if="errors[0]">
                                            {{ errors[0].message }}
                                        </div>
                                    </div>
                                    <div class="mb-3 w-50">
                                        <label class="mb-2">Last Name</label>
                                        <input type="text" v-model="user.last_name" placeholder="Enter Last Name"
                                            class="form-control" v-bind:class="{ 'is-invalid': lnameError }" />
                                        <div class="invalid-feedback" id="feedback-2" v-if="errors[1]">
                                            {{ errors[1].message }}
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <input type="submit" value="Update" class="btn btn-primary" />
                                    </div>
                                </form>
                                <form class="form" @submit.prevent="handleSubmitPassword" v-else-if="form_index === 1">
                                    <fieldset class="h3 mb-4">Change Password</fieldset>
                                    <div class="mb-3 w-50" :class="{ 'form-group--error': $v.password.oldpassword.$error }">
                                        <label for="" class="mb-2">Old Password</label>
                                        <div class="d-flex align-items-center">
                                            <input v-model="password.oldpassword"
                                                v-model.trim="$v.password.oldpassword.$model"
                                                :class="{ 'is-invalid': $v.password.oldpassword.$error }"
                                                placeholder="Enter Old Password" class="form-control" :type="show[0]" />
                                            <b-icon style="margin-left: -25px; cursor: pointer"
                                                :class="{ 'ml-50': $v.password.oldpassword.$error }" :icon="eyeType[0]"
                                                @click="toggleShow(0)"></b-icon>
                                        </div>
                                        <div class="error text-danger" v-if="$v.password.oldpassword.$dirty &&
                                            !$v.password.oldpassword.required
                                            ">
                                            * Required.
                                        </div>
                                    </div>

                                    <div class="mb-3" :class="{ 'form-group--error': $v.password.password.$error }">
                                        <label class="form__label">New Password</label>
                                        <div class="d-flex align-items-center w-50">
                                            <input class="form-control" v-model="password.password"
                                                v-model.trim="$v.password.password.$model"
                                                :class="{ 'is-invalid': $v.password.password.$error }"
                                                v-bind:min="password.password" placeholder="New Password"
                                                :type="show[1]" /><b-icon style="margin-left: -25px; cursor: pointer"
                                                :icon="eyeType[1]" :class="{ 'ml-50': $v.password.password.$error }"
                                                @click="toggleShow(1)"></b-icon>
                                        </div>
                                        <div class="error text-danger" v-if="$v.password.password.$dirty && !$v.password.password.required
                                            ">
                                            * Password is required.
                                        </div>
                                        <div class="error text-danger" v-if="!$v.password.password.minLength">
                                            * Password must have at least
                                            {{ $v.password.password.$params.minLength.min }} letters.
                                        </div>
                                        <div class="error text-danger" v-if="$v.password.password.$dirty && !$v.password.password.valid
                                            ">
                                            * The password requires an uppercase, lowercase, number and
                                            special character
                                        </div>
                                    </div>
                                    <div class="mb-3" :class="{
                                        'form-group--error': $v.password.confirmPassword.$error,
                                    }">
                                        <label for="" class="mb-2">Confirm Password</label>
                                        <div class="d-flex align-items-center w-50">
                                            <input v-model="password.confirmpassword"
                                                v-model.trim="$v.password.confirmPassword.$model"
                                                :class="{ 'is-invalid': $v.password.confirmPassword.$error }"
                                                placeholder="Re-enter New Password" class="form-control" :type="show[2]" />
                                            <b-icon style="margin-left: -25px; cursor: pointer" :icon="eyeType[2]"
                                                :class="{ 'ml-50': $v.password.confirmPassword.$error }"
                                                @click="toggleShow(2)"></b-icon>
                                        </div>
                                        <div class="error text-danger" v-if="$v.password.confirmPassword.$dirty &&
                                            !$v.password.confirmPassword.required
                                            ">
                                            * required.
                                        </div>
                                        <div class="error text-danger" v-if="$v.password.confirmPassword.$dirty &&
                                            !$v.password.confirmPassword.sameAsPassword
                                            ">
                                            Password must match
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <input type="submit" value="Update" class="btn btn-primary" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        
</template>

<script>

import AdminNavbar from "../components/AdminNavbar.vue"
import userApi from "../services/user";
import errorToast from "@/mixins/errorToast";
import { required, sameAs, minLength } from "vuelidate/lib/validators";
export default {
    components: {
        AdminNavbar
    },
    mixins: [errorToast],

    data() {
        return {
            isLoading: false,
            user: {},
            password: { oldpassword: "", password: "", confirmPassword: "" },
            show: { 0: "password", 1: "password", 2: "password" },
            eyeType: {
                0: "eye-slash-fill",
                1: "eye-slash-fill",
                2: "eye-slash-fill",
            },
            admin_type: "",
            form_index: 0,
            errors: [],
            fnameError: false,
            lnameError: false,
        };
    },
    validations: {
        password: {
            oldpassword: {
                required,
            },
            password: {
                required,
                minLength: minLength(8),
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
                // confirmPassword: { required, sameAsPassword: sameAs(this.password) },
            },

            confirmPassword: {
                required,
                sameAsPassword: sameAs("password"),
            },
        },
    },
    methods: {

        validate_profile() {
            this.errors = [];
            console.log(this.user);
            var len = this.user.first_name.length;
            if (len < 1) {
                this.fnameError = true;
                this.errors.push({
                    message: "First Name must be required.",
                });
            } else {
                this.fnameError = false;
                this.errors.push({
                    message: "",
                });
            }
            if (this.user.last_name.length < 1) {
                this.lnameError = true;
                this.errors.push({
                    message: "Last Name must be required.",
                });
            } else {
                this.lnameError = false;
                this.errors.push({
                    message: "",
                });
            }
            if (this.lnameError || this.fnameError) {
                return true;
            } else {
                return false;
            }
        },
        toggleShow(ind) {
            this.show[ind] = this.show[ind] === "text" ? "password" : "text";
            this.eyeType[ind] =
                this.eyeType[ind] === "eye-fill" ? "eye-slash-fill" : "eye-fill";
        },
        handleSubmitProfile: async function () {
            try {
                const error = await this.validate_profile();
                if (!error) {
                    const response = await userApi.updateUser(this.user);

                    if (response.data.success === true) {
                        this.$toast.success("Profile updated");
                        localStorage.setItem(
                            "name1",
                            this.user.first_name + " " + this.user.last_name
                        );
                    } else {
                        this.$toast.error("Try again!");
                    }
                }
            } catch (error) {
                const errors = !error.response
                    ? [{ msg: error.message }]
                    : error.response.data.errors;
                this.toast(errors);
            }
        },
        handleSubmitPassword: async function () {
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            // console.log(this.password);
            try {
                const response = await userApi.changePassword(this.password);
                if (response.data.success === true) {
                    this.$toast.success("Password updated");
                } else {
                    this.$toast.error(response.data.message);
                }
            } catch (error) {
                const errors = !error.response
                    ? [{ msg: error.message }]
                    : error.response.data.errors;
                this.toast(errors);
            }
        },
    },

};
</script>

<style scoped>
/* password validator */
.container {
  width: 400px;
  margin: auto;
  background: white;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif, sans-serif;
  border-radius: 3px;
}

h1 {
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
}

.frmField {
  background-color: white;
  color: #495057;
  line-height: 1.25;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  border: 0;
  padding: 10px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  width: 90%;
}

.frmLabel {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

.frmValidation {
  font-size: 13px;
}

.frmValidation--passed {
  color: #717b85;
}

.frmIcon {
  color: #eb0029;
}

.frmValidation--passed .frmIcon {
  color: #0fa140;
}

#profile {
  display: flex;
  /* align-items: center; */
  margin-left: 250px;
  width: calc(100vw - 250px);
  height: 100%;
  height: calc(100vh - 56px);
}

.title {
  height: 75px;
}

.navigation-links {
  height: calc(100% - 75px);
}

@media (max-width: 1199.98px) {
  #profile {
    margin-left: 170px;
    width: calc(100vw - 170px);
  }
}

@media (max-width: 850px) {
  #profile {
    margin-left: 65px;
    width: calc(100vw - 65px);
  }
}

.icon-wrapper {
  padding: 20px 25px;
  display: flex;
  border: 0.1px solid rgb(128, 128, 128, 0.1);
  cursor: pointer;
}

.icon-wrapper:hover {
  color: black;
}

.icon-wrapper span {
  margin-left: 10px;
}

.navigation-links {
  border-right: 1px solid rgb(128, 128, 128, 0.3);
  padding: 0;
  margin: 0;
}

.title {
  -webkit-box-shadow: 0px 4px 0px -1px rgba(0, 204, 255, 1);
  -moz-box-shadow: 0px 4px 0px -1px rgba(0, 204, 255, 1);
  box-shadow: 0px 4px 0px -1px rgba(0, 204, 255, 1);
}

label {
  color: rgb(121, 123, 125);
}

.icon-wrapper {
  cursor: pointer;
  position: relative;
  transition: 0.5s;
}

.icon-wrapper:after {
  content: "»";
  position: absolute;
  opacity: 0;
  top: 16px;
  font-size: 1.3em;
  right: -20px;
  transition: 0.5s;
}

.icon-wrapper:hover {
  padding-right: 20px;
  padding-left: 20px;
}

.active {
  padding-right: 20px;
  padding-left: 20px;
  color: black;
}

.active:after {
  opacity: 1;
  right: 20px;
}

.icon-wrapper:hover:after {
  opacity: 1;
  right: 20px;
}

.ml-50 {
  margin-left: -50px !important;
}

</style>