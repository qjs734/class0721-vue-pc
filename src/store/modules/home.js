//home的vuex状态
import { reqGetBaseCategoryList } from "@api/home";

export default {
    state: {
        categoryList: []

    },
    getters: {},
    actions: {
        //获取首页分类列表数据
        async getCategoryList({ commit }) {
            const categoryList = await reqGetBaseCategoryList() //因为传回来的是promise对象 所以用await接收
            commit('GET_CATEGORY_LIST', categoryList)
        }
    },
    mutations: {
        GET_CATEGORY_LIST(state, categoryList) {
            state.categoryList = categoryList
        }
    },
}