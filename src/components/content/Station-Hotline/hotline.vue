<template>
  <div class="hotline">
    <!-- 标题 -->
    <div class="title">
      <div>热门线路</div>
    </div>
    <!-- tabs标签页 -->
    <el-tabs stretch>
      <el-tab-pane label="今日">
        <HotlineTable></HotlineTable>
      </el-tab-pane>
      <el-tab-pane label="明日">
        <HotlineTable></HotlineTable>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">{{ currentTime }}</span>
        <HotlineTable></HotlineTable>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import HotlineTable from './hotline-table'

export default {
  components: { HotlineTable },
  name: 'hotline',
  computed: {
    // 得到后天的日期
    currentTime: function () {
      let dateTime = new Date()
      //   年
      let year = dateTime.getFullYear() + ''
      //   月
      let month = dateTime.getMonth() + 1 + ''
      //   后天的日期
      let date = dateTime.getDate() + 2 + ''

      let currentTime = month + '月' + date + '日'

      return currentTime
    },
  },
}
</script>

<style scoped>
.hotline {
  display: flex;
  flex-direction: column;
}
.title {
  background-color: #00618b;
  width: 100%;
}
.title div {
  float: left;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.6rem;
  color: #fff;
}
</style>
