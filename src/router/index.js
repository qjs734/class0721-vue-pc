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
        //在路由匹配时后有params参数用：连接，假如空设置个?即可
        path: '/search/:searchText?',
        component: Search
    }, {
        path: '/register',
        component: Register
    }]
})