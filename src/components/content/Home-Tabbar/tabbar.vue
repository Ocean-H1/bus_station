<template>
  <div class="HomeTabbar">
    <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
      <el-tab-pane label="首页" name="home" class="1111">
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane label="退票" name="refund">
        退票
      </el-tab-pane>
      <el-tab-pane label="帮助中心" name="help">帮助中心</el-tab-pane>
      <el-tab-pane label="投诉建议" name="advise">投诉建议</el-tab-pane>
      <el-tab-pane label="关于我们" name="about">关于我们</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import First from '@/views/first/first.vue'


export default {
    name: 'Home-Tabbar',
    data() {
      return {
        activeName: 'home'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
      First,
    }
}
</script>

<style>
/* 样式穿透 修改tabs默认样式 */
/* ::v-deep .el-tabs__nav-scroll{
  width: 50%!important;
  margin: 0 auto!important;
}
.el-tabs__item{
  font-size:20px !important;
  letter-spacing: 5px;
  background-color: #d3e5f1;
} */

/* 修改Home导航栏样式 */
.HomeTabbar > .el-tabs > .el-tabs__header {
  background-color: #d3e5f1;
  border-radius: 10px;
}
/* 修改Home导航栏字体 */
.HomeTabbar > .el-tabs > .el-tabs__header .el-tabs__item {
    font-size: 1.2em !important;
}

</style>
