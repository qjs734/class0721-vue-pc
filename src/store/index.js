import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
// import { reqGetBaseCategoryList } from "@api/home";

Vue.use(Vuex)

// 储存状态数据容器
const state = {
    // categoryList: []
    testCount: 0
}

//储存只读计算
const getters = {}

//间接修改state的函数对象
const actions = {
    /*  //获取首页分类列表数据
     async getCategoryList({ commit }) {
         const categoryList = await reqGetBaseCategoryList() //因为传回来的是promise对象 所以用await接收
         commit('GET_CATEGORY_LIST', categoryList)
     } */
}

//直接修改state的函数对象
const mutations = {
    /* GET_CATEGORY_LIST(state, categoryList) {
        state.categoryList = categoryList.slice(0, 16)
    } */
}

export default new Vuex.Store({
    state, //总state
    getters, //总getters
    actions, //总actions
    mutations, //总mutations
    modules //其他vuex模块的数据 home  login啥的
    //模块化的组件 当然也不能写在这，还是要写在不同的文件里
    // modules: {
    //     home: {
    //         state, //home的vuex数据
    //         getters, //home的getters
    //         actions, //home的actions
    //         mutations, //home的mutations
    //     }
    // }
})