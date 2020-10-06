<template>
  <el-container class="home-cntainer">
    <!-- 头部区域 -->
    <el-header>
      <img src="../assets/heima.png" alt="" />
      <span>电商后台管理系统</span>
      <el-button @click="loginout" type="info">退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <!-- 侧边栏菜单区域 -->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
        <!-- 一级菜单 -->
          <el-submenu index="1">
            <!-- 一级菜单的模板区 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span>导航一</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="1-1">
              <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span>导航一</span>
            </template>
            </el-menu-item>
          </el-submenu>
         
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data(){
    return {
      menulist: []
    }
  },
  created(){
    this.getMenuList()
  },
  methods: {
    loginout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    // 获取所有的菜单
    async getMenuList(){
      const {data:res} = await this.$http.get('menus')
      if(res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
      console.log(res)
    }
  },
};
</script>

<style lang="less" scoped>
.home-cntainer {
  height: 100%;
}
.el-header {
  background-color: #373b41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  // padding-left: 0;
  > span {
    // padding-left: -500px;
    margin-left: -1400px;
    display: flex;
    position: relative;
  }
  >img{
    margin-left: 60px;
  }
}

.el-aside {
  background-color: #333744;
}

.el-main {
  background-color: #eaedf1;
}
</style>>
