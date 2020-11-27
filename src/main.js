import Vue from 'vue'
import App from './App.vue'

import router from './router/index' //引入router

import './styles/reset.css' //引入公共资源

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    render: h => h(App),
    router //应用router
}).$mount('#app')