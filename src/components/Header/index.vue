<template>
  <div>
    <!-- 头部 -->
    <header class="header">
      <!-- 头部的第一行 -->
      <div class="top">
        <div class="container">
          <div class="loginList">
            <p>尚品汇欢迎您！</p>
            <p>
              <span>请</span>
              <router-link to="/login">登录</router-link>
              <router-link to="/register" class="register"
                >免费注册</router-link
              >
            </p>
          </div>
          <div class="typeList">
            <a href="###">我的订单</a>
            <a href="###">我的购物车</a>
            <a href="###">我的尚品汇</a>
            <a href="###">尚品汇会员</a>
            <a href="###">企业采购</a>
            <a href="###">关注尚品汇</a>
            <a href="###">合作招商</a>
            <a href="###">商家后台</a>
          </div>
        </div>
      </div>
      <!--头部第二行 搜索区域-->
      <div class="bottom">
        <h1 class="logoArea">
          <router-link class="logo" title="尚品汇" to="/">
            <img src="./images/logo.png" alt="" />
          </router-link>
        </h1>
        <div class="searchArea">
          <form @submit.prevent="search" class="searchForm">
            <input
              v-model="searchText"
              type="text"
              id="autocomplete"
              class="input-error input-xxlarge"
            />
            <!-- button不指定type那么在表单中就是submit -->
            <button class="sui-btn btn-xlarge btn-danger">搜索</button>
          </form>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    //     search(){
    //  //获取搜索数据
    //       const { searchText } = this;
    //       //是否要添加params参数
    //       /* const params = searchText ? `/${searchText}` : "";
    //       //生成要跳转的路径
    //       const location = "/search" + params; */
    //       //编程式导航将来做搜索功能
    //       // this.$router.push(location);
    //     }
    search() {
      // path: "/search",
      /*         name: "search", //这个写法命名路由才可以使用  因为命名路由搜索为空时不显示
        params: {
          searchText,
        },
        query: {
          name: "jack",  这个写法搜索空params时不显示search路由路径
        },
      } */
      const { searchText } = this;
      const location = { name: "search" };
      if (searchText) {
        location.params = {
          searchText,
        };
      }
      //为了避免编程式导航连续跳转单一网页,设置push后面的参数
      //为了一次就退回主页,更换replace，但是要根据path来判断
      // this.$router.push(location);

      // if(this.$route.path.indexOf('/search')>-1){
      // if(this.$route.path.includes('/search')){
      // if(this.$route.path.startsWith('/search')){
      // if(/^\search/.test(this.$route.path)){

      if (this.$route.name === "search") {
        this.$router.replace(location);
      } else this.$router.push(location);
      // .then((res) => {
      //   console.log("成功" + res);
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
    },
  },
  mounted() {
    this.$bus.$on("clearKeyword", () => {
      //清空searchText
      this.searchText = "";
    });
  },
};
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
