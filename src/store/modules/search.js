//search的vuex状态

import { reqGetProductList } from '@api/search'
export default {
    state: {
        productList: {
            trademarkList: [], // 品牌数据
            attrsList: [], // 品牌属性数据
            goodsList: [], // 商品数据
        },
    },
    getters: {
        //方便使用这个数据
        trademarkList(state) {
            return state.productList.trademarkList
        },
        attrsList(state) {
            return state.productList.attrsList
        },
        goodsList(state) {
            return state.productList.goodsList
        }
    },
    actions: {
        async getProductList({ commit }, data = {}) {
            const productList = await reqGetProductList(data)
            commit('    ', productList)
        }
    },
    mutations: {
        GET_PRODUCT_LIST(state, productList) {
            state.productList = productList
        }
    },
}