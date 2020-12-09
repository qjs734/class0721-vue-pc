<template>
  <div class="swiper-container" id="mySwiper" ref="swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="carousel in carouselList"
        :key="carousel.id"
      >
        <img v-lazy="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination, Autoplay } from "swiper"; //引入轮播图及插件
Swiper.use([Navigation, Pagination, Autoplay]); //swiper使用插件
// import "swiper/swiper-bundle.min.css";

export default {
  name: "Carousel",
  props: {
    carouselList: {
      type: Array,
      required: true,
    },
  },
  watch: {
    carouselList() {
      //轮播图DOM元素要渲染完成并且需要轮播图数据
      //为了避免判断多次  确保swiper不会new多次
      if (this.swiper) return;
      //一开始是[],后面变成了请求的值
      //  this.$nextTick代表DOM元素已经渲染完毕，然后执行后面的回调函数
      this.swiper = this.$nextTick(() => {
        this.initSwiper();
      });
    },
  },
  mounted() {
    if (!this.carouselList.length) return;
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      //使用 this.$refs.swiper才能保证轮播图组件使用自己的swiper
      new Swiper(this.$refs.swiper, {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 2000, //循环时间
          disableOnInteraction: false, //自动播放
        },
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //点击原点
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
