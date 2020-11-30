//home的vuex状态
import { reqGetBaseCategoryList, reqGetBanners, reqGetFloors } from "@api/home";

export default {
    state: {
        categoryList: [],
        banners: [], //首页轮播图数据
        floors: []

    },
    getters: {},
    actions: {
        //获取首页分类列表数据
        async getCategoryList({ commit }) {
            const categoryList = await reqGetBaseCategoryList() //因为传回来的是promise对象 所以用await接收
            commit('GET_CATEGORY_LIST', categoryList)
        },

        async getBanners({ commit }) {
            const banners = await reqGetBanners()
            commit('GET_BANNERS', banners)

        },

        async getFloors({ commit }) {
            const floors = await reqGetFloors()
            commit('GET_FLOORS', floors)

        }
    },
    mutations: {
        GET_CATEGORY_LIST(state, categoryList) {
            state.categoryList = categoryList
        },
        GET_BANNERS(state, banners) {
            state.banners = banners
        },
        GET_FLOORS(state, floors) {
            state.floors = floors
        }
    },
}