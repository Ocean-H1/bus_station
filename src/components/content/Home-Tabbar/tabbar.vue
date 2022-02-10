<template>
  <div class="HomeTabbar">
    <el-menu
      :default-active="$route.path"
      mode="horizontal"
      router
      background-color="#d3e5f1"
    >
      <el-menu-item index="/first">首页</el-menu-item>
      <el-menu-item index="/refund">退票</el-menu-item>
      <el-menu-item index="/help">帮助中心</el-menu-item>
      <el-menu-item index="/advise">投诉建议</el-menu-item>
      <el-menu-item index="/about">关于我们</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import First from '@/views/first/first.vue'
import refund from '@/views/refund/refund.vue'
import help from '../../../views/help/help.vue'
import advise from '../../../views/advise/advise.vue'
import about from '../../../views/about/about.vue'

export default {
  name: 'Home-Tabbar',
  data() {
    return {}
  },
  methods: {},
  components: {
    First,
    refund,
    help,
    advise,
    about,
  },
}
</script>

<style scoped>
/* 子节点选中样式 */
.HomeTabbar > .el-menu > .el-menu-item.is-active {
  background-color: #068abb !important;
  border-bottom: 3px solid #f6cc58;
  color: #fff;
}
/* 子节点移入样式 */
.HomeTabbar > .el-menu > .el-menu-item:hover {
  background-color: #068abb !important;
  color: #fff;
}
.HomeTabbar > .el-menu {
  display: flex;
  justify-content: center;
}
.HomeTabbar > .el-menu > .el-menu-item {
  flex: 1;
  font-size: 1.2rem;
  color: #000;
  text-align: center;
  letter-spacing: 3px;
}
</style>
