import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入其他组件
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Search from '../views/Search'

//安装应用插件
Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/search',
        component: Search
    }, {
        path: '/register',
        component: Register
    }]
})