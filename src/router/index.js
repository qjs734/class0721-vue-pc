import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入其他组件
import Home from '@views/Home'
import Login from '@views/Login'
import Register from '@views/Register'
import Search from '@views/Search'
import Detail from '@views/Detail'


//写在这这样使用插件后，才能覆盖掉上面的原型上的方法
const push = VueRouter.prototype.push //必须把方法写在这，不然会连续的反复调用,造成死循环
const replace = VueRouter.prototype.replace


VueRouter.prototype.push = function(location, onComplete, onAbort) {
    console.log(location);
    //如果用户想处理失败就处理  
    if (onComplete && onAbort) {
        push.call(this, location, onComplete, onAbort)
    }
    // 如果没有就不处理，给默认值是个空函数
    return push.call(this, location, onComplete, () => {})
}

VueRouter.prototype.replace = function(location, onComplete, onAbort) {
    console.log(location);
    //如果用户想处理失败就处理  
    if (onComplete && onAbort) {
        replace.call(this, location, onComplete, onAbort)
    }
    // 如果没有就不处理，给默认值是个空函数
    return replace.call(this, location, onComplete, () => {})
}

//安装应用插件
Vue.use(VueRouter)


export default new VueRouter({
    routes: [{
            path: '/',
            component: Home
        }, {
            path: '/login',
            component: Login,
            //当组件被加载显示的时候 meta组件的参数会传入$route中
            //当组件不加载显示的时候 meta组件的参数不会传
            meta: {
                isFooterHide: true
            }
        }, {
            name: 'search',
            //在路由匹配时后有params参数用：连接，假如空设置个?代表可选
            path: '/search/:searchText?',
            component: Search
        }, {
            path: '/register',
            component: Register,
            meta: {
                isFooterHide: true
            }
        },
        {
            name: 'detail',
            path: '/detail/:id',
            component: Detail
        }
    ],
    // 每次切换路由页面滚动条位置
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
})