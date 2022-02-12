<template>
  <div class="stationBox">
    <!-- 标题 -->
    <div class="title">
      <div>车站介绍</div>
      <div @click="showMap(stationList[0])" class="moreStation">
        更多车站 <i class="el-icon-d-arrow-right"></i>
      </div>
    </div>
    <!-- 车站列表 -->
    <div class="stationList">
      <el-table
        :data="stationList"
        style="width: 50%"
        size="medium"
        stripe
        :show-header="false"
      >
        <el-table-column>
          <template slot-scope="scope">
            <span class="staInfo" @click="showMap(scope.row)">{{
              scope.row.station_name
            }}</span>
          </template>
        </el-table-column>
      </el-table>
      <el-table
        :data="stationList"
        style="width: 50%"
        size="medium"
        stripe
        :show-header="false"
      >
        <el-table-column>
          <template slot-scope="scope">
            <span class="staInfo" @click="showMap(scope.row)">{{
              scope.row.station_name
            }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stationBox',
  data() {
    return {
      stationList: this.$store.state.stationList,
    }
  },
  methods: {
    // 点击车站跳转到地图页面
    showMap(activeStation) {
      // 设置车站的经纬度
      this.$store.commit('setPosition', activeStation)
      // 跳转页面
      this.$router.push('stationMap')
    },
  },
}
</script>

<style scoped>
.stationBox {
  display: flex;
  flex-direction: column;
}
.title,
.stationList {
  width: 100%;
}
.title {
  background-color: #068abb;
}
.title div {
  width: 50%;
  float: left;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.6rem;
  color: #fff;
}
.moreStation:hover {
  text-decoration: underline;
}
.el-table {
  float: right !important;
}
.staInfo:hover {
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
}
</style>
