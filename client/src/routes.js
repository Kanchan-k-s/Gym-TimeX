import Register from './views/Register'
import AdminDashboard from './views/AdminDashboard'
import AdminSettings from './views/AdminSettings'
import AboutUs from './views/AboutUs'
import Home from './views/employeeHome'
import Booking from './views/employeeBooking.vue'

export default [
    {
        path: "/",
        component: Home,
        name: "Employee Home",
    },
    {
        path: "/sign/:id",
        component: Register,
        name: "Register",
    },
    {
        path: "/admin/panel",
        component: AdminDashboard,
        name: "AdminDashboard",
    },
    {
        path: "/admin/settings",
        component: AdminSettings,
        name: "AdminSettings",
    },

    {
        path: "/about",
        component: AboutUs,
        name: "AboutUs",
    },
    {
        path:"/employee/booking",
        component:Booking,
        name:'Booking'
    }

]