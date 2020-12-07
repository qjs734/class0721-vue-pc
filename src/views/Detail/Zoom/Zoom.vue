<template>
  <div class="spec-preview">
    <img :src="imgUrl" />
    <div class="event" ref="event" @mousemove="handleMove"></div>
    <div class="big">
      <img :src="bigImgUrl" ref="bigImg" />
    </div>
    <!-- 遮挡层 -->
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  data() {
    return {
      maskWidth: 0,
    };
  },
  props: {
    imgUrl: String,
    bigImgUrl: String,
  },
  mounted() {
    //获取当前遮挡层的宽度--数据获取一次即可--绿色的那一层200
    this.maskWidth = this.$refs.event.clientWidth / 2;
    // console.log(this.maskWidth);
  },
  methods: {
    //鼠标移动事件
    handleMove(e) {
      //获取鼠标移动的横纵坐标 用event事件对象来获取
      //获取遮挡层的宽度 计算鼠标的位置  200
      const maskWidth = this.maskWidth;
      const { offsetX, offsetY } = e;
      //获取遮挡层对象
      const maskDiv = this.$refs.mask;
      //获取大图对象
      const bigImg = this.$refs.bigImg;
      let left = 0; //横坐标
      let top = 0; //纵坐标
      //计算鼠标在遮挡层的中间位置 计算对一次就是对的 是不是  那可以以左上角的点0.0代入 这时候定位应该是-100 -100所以就是减法
      left = offsetX - maskWidth / 2;
      top = offsetY - maskWidth / 2;
      // console.log(offsetX, offsetY);
      //限定上下左右可移动距离
      left = left < 0 ? 0 : left > maskWidth ? maskWidth : left;
      top = top < 0 ? 0 : top > maskWidth ? maskWidth : top;
      //遮挡层位置移动
      maskDiv.style.left = left + "px";
      maskDiv.style.top = top + "px";
      //大图移动 因为是向左边移动所以是负号
      bigImg.style.left = -left * 2 + "px";
      bigImg.style.top = -top * 2 + "px";
    },
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>