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
              <Tabbar></Tabbar>
          </el-main>
          <!-- 底部 -->
          <el-footer></el-footer>
      </el-container>
  </div>
</template>

<script>
import Tabbar from './content/Home-Tabbar/tabbar'
import Top from './content/Home-Tabbar/top.vue'
import TabBar from './content/Home-Tabbar/tabbar.vue'

export default {
    name: 'Home',
    components: {
        Tabbar,
        Top,
        TabBar
    }
}
</script>
<style scoped>
.el-main,.el-header,.el-footer{
    padding: 0;
    margin: 0;
}
.el-header {
    background-color: #d3e5f1;
    box-shadow: 0 6px 4px 0 rgb(0 0 0 / 5%);
}
.el-main {
    width: 90vw;
    margin: 5vh auto 0 auto;
}

</style>
