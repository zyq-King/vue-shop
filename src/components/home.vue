<template>
  <div>
    <el-button @click="loginout" type="info">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    loginout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
</style>>
