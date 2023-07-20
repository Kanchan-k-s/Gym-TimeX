import Register from './views/Register'
import AdminDashboard from './views/AdminDashboard'
import AdminSettings from './views/AdminSettings'
import AboutUs from './views/AboutUs'
import Home from './views/employeebooking'
import EHome from './views/EHome.vue'
import ContactUs from './views/ContactUs'
import Equipments from './views/Equipments'

export default [
    {
        path: "/",
        component: Home,
        name: "employeebooking",
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
        path:"/employee/home",
        component:EHome,
        name:'Employeen Home',
    },
    {
        path: "/employee/ContactUs",
        component: ContactUs,
        name: "ContactUs",
    },
    {
        path: "/equipments",
        component: Equipments,
        name: "equipments",
    }
]