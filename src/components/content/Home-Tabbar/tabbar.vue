<template>
  <div class="HomeTabbar">
    <el-tabs v-model="activeName" @tab-click="switchPage" stretch>
      <el-tab-pane label="首页" name="first">
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane label="退票" name="refund">
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane label="帮助中心" name="help">
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane label="投诉建议" name="advise">
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane label="关于我们" name="about">
        <router-view></router-view>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import First from '@/views/first/first.vue'
import second from '@/views/second/second.vue'
import third from '../../../views/third/third.vue'
import fourth from '../../../views/fourth/fourth.vue'
import fifth from '../../../views/fifith/fifth.vue'

export default {
  name: 'Home-Tabbar',
  data() {
    return {
      activeName: 'first',
    }
  },
  methods: {
    // 点击导航栏切换页面
    switchPage(tab) {
      // 切换页面
      this.$router.push(tab.name)
    },
  },
  components: {
    First,
    second,
    third,
    fourth,
    fifth,
  },
}
</script>

<style>
/* 修改Home导航栏样式 */
.HomeTabbar > .el-tabs > .el-tabs__header {
  background-color: #d3e5f1;
  border-radius: 10px;
}
/* 修改Home导航栏字体 */
.HomeTabbar > .el-tabs > .el-tabs__header .el-tabs__item {
  font-size: 1.2em !important;
}
.hotline > .el-tabs > .el-tabs__header .el-tabs__item {
  font-size: 1.2em !important;
}
</style>
