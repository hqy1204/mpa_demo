import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/index.less'
import '@/styles/cover.less'


Vue.use(ElementUI);

import 'lesso-common/styles/global.less';
import 'lesso-common/styles/cover.less';
import commonInit from 'lesso-common';
Vue.use(commonInit);

import router from './router';

import api from './api'

Vue.prototype.$http = api;

import constant from './public/constant'
Vue.prototype.$constant = constant
    // 实例化
new Vue({
    components: {
        App
    },
    template: '<App/>',
    router
}).$mount('#app')