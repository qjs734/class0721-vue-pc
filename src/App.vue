<template>
  <div>
    <Header></Header>
    <!-- 加载路由组件 -->
    <router-view></router-view>
    <!-- 当不是登录注册的时候才显示 -->
    <!-- <Footer
      v-if="$route.path !== '/login' && $route.path !== '/register'"
    ></Footer> -->
    <!-- <Footer v-if="isFooterShow"></Footer> -->
    <Footer v-if="!$route.meta.isFooterHide"></Footer>
  </div>
</template>

<script>
import Header from "@comps/Header";
import Footer from "@comps/Footer";
export default {
  name: "App",
  /* data() {
    return {
      isFooterShow: true,
    };
  }, */
  components: {
    Header,
    Footer,
  },
  /*  watch: {
    $route: {
      handler(newVal) {
        this.isFooterShow =
          newVal.path !== "/login" && newVal.path !== "/register";
      },
      immediate: true,
    },
  }, */
};
</script>

<style>
</style>
