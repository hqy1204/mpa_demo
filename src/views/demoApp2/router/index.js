import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import mainPage from '../pages/mainPage'
let router = new Router({
    routes: [
        // 默认路由指向登录
        {
            path: "*",
            redirect: "/mainPage"
        },
        {
            path: "/mainPage",
            name: "mainPage",
            component: mainPage
        },
    ]
});

export default router;