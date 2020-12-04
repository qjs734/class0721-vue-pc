<template>
  <div class="pagination">
    <button
      :disabled="myCurrentPage <= 1"
      @click="setCurrentPage(myCurrentPage - 1)"
    >
      上一页
    </button>
    <button :class="{ active: myCurrentPage === 1 }" @click="setCurrentPage(1)">
      1
    </button>
    <button v-show="startEnd.start > 2">...</button>

    <button
      v-for="item in mapBtnsCount"
      :key="item"
      @click="setCurrentPage(startEnd.start + item - 1)"
      :class="{ active: myCurrentPage === startEnd.start + item - 1 }"
    >
      {{ startEnd.start + item - 1 }}
    </button>

    <button v-show="startEnd.end < totalPage - 1">...</button>
    <button
      v-show="totalPage > 1"
      :class="{ active: myCurrentPage === totalPage }"
      @click="setCurrentPage(totalPage)"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="myCurrentPage >= totalPage"
      @click="setCurrentPage(myCurrentPage + 1)"
    >
      下一页
    </button>
    <button>总数：{{ total }}</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      //为了方便读取当前页码，所以定义data数据   因为props数据只读不能修改
      myCurrentPage: this.currentPage,
    };
  },
  props: {
    //  当前页码
    currentPage: {
      type: Number,
      default: 1,
    },
    // 按钮数量
    pagerCount: {
      type: Number,
      validator(val) {
        //验证通过才会有用  返回true验证成功
        return val >= 5 && val <= 21 && val % 2 === 1;
      },
      default: 7,
    },
    // 一页显示几条(每页条数)
    pageSize: {
      type: Number,
      default: 5,
    },
    // 总数
    total: {
      type: Number,
      default: 0,
      // require: true,
    },
  },
  computed: {
    //总页数
    totalPage() {
      //向上取整
      return Math.ceil(this.total / this.pageSize);
    },
    startEnd() {
      //计算中间按钮的开始与结束的页码
      //收集所有参数，计算，返回结果
      const { myCurrentPage, pagerCount, totalPage } = this;

      //这是start-end的按钮数量
      const count = pagerCount - 2;
      //得到中间按钮数量的一半
      const halfCount = Math.floor(count / 2);
      let start, end;
      /* 情况分析
        start= myCurrentPage-halfCount  1 ... 3 4 5 6 7 ... 10
        1 2 3 4 5 6 ... 10   2  - 2 = 0 
        end = start +count -1  
        */

      //计算start 因为要显示5个，所以会有个临界值  假如到了临界值就让start定死 否则就等于当前页码-2
      if (myCurrentPage >= totalPage - halfCount) {
        start = totalPage - count;
      } else {
        start = myCurrentPage - halfCount;
      }
      //当start算出来小于0的时候就从2开始
      if (start <= 1) {
        start = 2;
      }
      //end等于start+4 就是（5-1）
      end = start + count - 1;
      // 当end大于10了，比如start是6  那么end就要是9打住、
      if (end >= totalPage) {
        end = totalPage - 1;
      }
      return {
        start,
        end,
      };
    },
    //需要遍历的按钮数量
    mapBtnsCount() {
      const { start, end } = this.startEnd;
      const count = end - start + 1;
      return count >= 1 ? count : 0;
    },
  },
  methods: {
    setCurrentPage(currentPage) {
      this.myCurrentPage = currentPage;
    },
  },
  watch: {
    //页码发生变化加载新数据
    myCurrentPage(currentPage) {
      // this.$listeners.currentChange(currentPage);
      this.$emit("current-change", currentPage);
    },
    //外面页码发生变化内部也发生变化
    currentPage(currentPage) {
      this.myCurrentPage = currentPage;
    },
  },
};
</script>


<style lang='less' scoped>
.pagination {
  display: flex;
  white-space: nowrap;
  font-weight: 700;
  button {
    margin: 0 5px;
    padding: 0 4px;
    font-size: 13px;
    min-width: 30px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: none;
    outline: none;
    display: block;
    background-color: #f4f4f5;
    color: #606266;
    border-radius: 2px;
  }
}

button.active {
  background-color: #409eff;
  color: #fff;
}
</style>
