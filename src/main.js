import Vue from 'vue'
import App from './App.vue'

import router from './router/index' //引入router
import store from './store'

// 引入mockserver 为了加载里面的代码
//里面的代码一旦加载 就去启动mock服务器 从而拦截相应的请求
import './mock/mockServer'

import './styles/reset.css' //引入公共资源
import './styles/iconfont.css' //引入公共资源
import './plugins/element.js' //使用element的button

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    beforeCreate() {
        // 初始化全局事件总线
        Vue.prototype.$bus = this
    },
    render: h => h(App),
    router, //应用router
    store
}).$mount('#app')