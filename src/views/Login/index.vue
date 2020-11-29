<template>
  <div>
    login....
    <el-button @click="login" type="primary">登录</el-button>
  </div>
</template>

<script>
import { reqLogin } from "@api/user";
export default {
  name: "Login",
  methods: {
    login() {
      reqLogin("13700000000", "11111111")
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
