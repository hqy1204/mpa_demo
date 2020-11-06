import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import mainPage from '../pages/mainPage'
import page1 from '../pages/page1'
import page2 from '../pages/page2'
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
        {
            path: "/page1",
            name: "page1",
            component: page1
        },
        {
            path: "/page2",
            name: "page2",
            component: page2
        },
    ]
});

export default router;