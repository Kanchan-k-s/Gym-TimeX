// import Register from './views/Register'
import AdminDashboard from './views/AdminDashboard'
// import AdminSettings from './views/AdminSettings'
// import AboutUs from './views/AboutUs'
import Home from './views/employeeHome'
import Login from './views/LoginPage.vue'
import RegisterPage from './views/RegisterPage.vue'
// import Booking from './views/employeeBooking.vue'
// import Equipments from './views/Equipments'

export default [
    {
        path: "/",
        component: Home,
        name: "Employee Home",
    },
    {
        path: '/login',
        component: Login,
        name: "Login Page"
    },
    {
        path: "/sign/in",
        component: RegisterPage,
        name: "Register Page",
    },
    {
        path: "/admin/panel",
        component: AdminDashboard,
        name: "AdminDashboard",
    },
    // {
    //     path: "/settings",
    //     component: AdminSettings,
    //     name: "AdminSettings",
    // },

    // {
    //     path: "/about",
    //     component: AboutUs,
    //     name: "AboutUs",
    // },
    // {
    //     path:"/employee/booking",
    //     component:Booking,
    //     name:'Booking'
    // },
    // {
    //     path: "/employee/equipments",
    //     component: Equipments,
    //     name: "equipments",
    // },
]