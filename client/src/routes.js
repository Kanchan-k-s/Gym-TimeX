import landingPage from './views/LandingPage'
import AdminDashboard from './views/AdminDashboard'
// import Adminpanel from './views/Adminpanel'
import AdminSettings from './views/AdminSettings'

export default[{
    path: "/",
    component: landingPage,
    name: "LandingPage",
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
}

]