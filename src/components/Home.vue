<template>
  <div class="Home">
    <!-- 这里放的是主页布局 -->
    <el-container>
      <!-- 头部 -->
      <el-header>
        <Top></Top>
      </el-header>
      <!-- 内容区 -->
      <el-main>
        <TabBar></TabBar>
      </el-main>
      <!-- 底部 -->
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Footer from './content/Home-Footer/home-footer'
import Top from './content/Home-Tabbar/top.vue'
import TabBar from './content/Home-Tabbar/tabbar.vue'

export default {
  name: 'Home',
  components: {
    Footer,
    Top,
    TabBar,
  },
}
</script>
<style scoped>
.el-main,
.el-header,
.el-footer {
  padding: 0;
  margin: 0;
}
.el-header {
  background-color: #068abb;
  box-shadow: 0 6px 4px 0 rgb(0 0 0 / 5%);
  color: #fff;
}
.el-main {
  width: 90vw;
  margin: 5vh auto 0 auto;
}
.el-footer{
    width: 90vw;
    margin: 5vh auto;
}
</style>
