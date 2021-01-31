
import { createWebHistory, createRouter } from 'vue-router'

// componets 
import Home from "./components/Home"
import Shop from "./components/Shop"
import Login from "./components/Login"
import Register from "./components/Register"
import Forgot from "./components/Forgot"
import Reset from "./components/Reset"
import Notfound from "./components/Notfound"
import Demo from "./components/Demo"
import Profile from "./components/Profile"

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', name:"Home", component: Home },
        { path: '/shop', name:"Shop", component: Shop },
        { path: '/login',name:"Login", component: Login },
        { path: '/register',name:"Register", component: Register },
        { path: '/forgot', name:"Forgot", component: Forgot },
        { path: '/reset/:token', name:"Reset", component: Reset },
        { path: '/profile',name:"Profile", component: Profile },
        { path: '/demo',name:"Demo", component: Demo },
        { path: '/:pathMatch(.*)*', component: Notfound },
    ],
});

// checking auth gaurds
const accessableRoutes=['Home','Login','Register','Forgot','Shop'];

router.beforeEach((to, from, next)=>{

    if(accessableRoutes.includes(to.name)){
        next();
    }else if(localStorage.getItem('access_token')){
        next();
    }else{
        next('/login');
    }
});

// router.safeNavigate = function(route, dest) {
//     console.log(route,dest)
// }


export default router;