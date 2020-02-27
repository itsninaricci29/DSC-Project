import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/search",
        name: "search",
        component: () =>
            import(/* webpackChunkName: "log-in" */ "../views/Search.vue")
    },
    {
        path: "/signIn",
        name: "signIn",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "log-in" */ "../components/SignIn.vue")
    },
    {
        path: "/info",
        name: "info",
        component: () =>
            import(/* webpackChunkName: "register"*/ "../components/NewUserForm.vue")
    },
    {
        path: "/profile/:id",
        name: "profile",
        component: () =>
            import(/* webpackChunkName: "profile"*/ "../views/Profile.vue")
    },
    {
        path: "/log-in",
        name: "Log In",
        component: () =>
            import(/* webpackChunkName: "search"*/ "../components/SignIn.vue")
    },
    {
        path: "/updateprofile",
        name: "UpdateProfile",
        component: () =>
            import(/* webpackChunkName: "updateprofile"*/ "../components/UpdateProfile.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: "/connect",
    routes
});

export default router;