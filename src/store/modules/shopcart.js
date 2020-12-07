import {
    reqGetCartList,
    reqUpdateCartCheck,
    reqUpdateCartCount,
    reqDelCart,
} from "@api/shopcart";

export default {
    state: {
        cartList: [], // 所有购物车数据
        currentCart: {}
    },
    getters: {},
    actions: {
        async getCartList({ commit }) {
            const cartList = await reqGetCartList();
            commit("GET_CART_LIST", cartList);
        },
        async updateCartCount({ commit }, { skuId, skuNum }) {
            await reqUpdateCartCount(skuId, skuNum);
            // 1. 手动更新vuex的数据 --> 页面就会重新渲染
            // 2. 重新请求所有购物车数据
            // console.log(commit);
            commit("UPDATE_CART_COUNT", { skuId, skuNum });
        },

        // actions函数只能接受外面的一个参数
        // this.updateCartCheck(a, b) 第二个参数b actions函数是接受不到的
        async updateCartCheck({ commit }, { skuId, isChecked }) {
            // 发送请求 --> 更新服务器数据
            await reqUpdateCartCheck(skuId, isChecked);
            // 1. 手动更新vuex的数据 --> 页面就会重新渲染
            // 2. 重新请求所有购物车数据
            console.log(commit);
        },
        //根据skuId删除购物车中的某个商品数据
        async deleteCartItem1({ commit }, skuId) {
            //调用api接口函数
            await reqDelCart(skuId)
            console.log(commit);
            // return result.code === 200 ? '' : result.message || '删除失败'
        },
        //添加到购物车成功
        /*  async addToCart1({ commit }, { skuId, skuNum, callback }) {
             const result = await reqUpdateCartCount(skuId, skuNum)
                 // return result.code === 200 ? '' : result.message || '删除失败'
             if (result.code === 200) {
                 callback(' ')
                 console.log(commit);
             } else {
                 callback(result.message || '添加失败')

             }
         } */
        //通过this.$store.dispatch('action')会有返回值，就是当前这个action的返回值
        /* async addToCart2({ state, commit }, { skuId, skuNum }) {
            await reqUpdateCartCount(skuId, skuNum)
            console.log(commit);
            // return result.code === 200 ? '' : result.message || '添加失败'
            const currentCart = state.cartList.find(cart => cart.id === skuId)
            commit('ADD_TO_CART', currentCart)
        } */
    },
    mutations: {
        GET_CART_LIST(state, cartList) {
            state.cartList = cartList;
        },
        UPDATE_CART_COUNT(state, { skuId, skuNum }) {
            state.cartList = state.cartList.map((cart) => {
                if (cart.skuId === skuId) {
                    cart.skuNum += skuNum;
                }
                return cart;
            });
        },
        ADD_TO_CART(state, currentCart) {
            state.currentCart = currentCart
        }
    },
};