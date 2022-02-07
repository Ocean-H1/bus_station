<template>
  <div class="stationMap">
    <!-- 侧边车站列表 -->
    <div class="list">
      <div class="title">车站列表</div>
      <el-table
        :data="stationList"
        size="large"
        stripe
        :show-header="false"
        height="80vh"
      >
        <el-table-column align="center">
          <template slot-scope="scope">
            <span class="staInfo" @click="switchStation(scope.row)">{{
              scope.row.station_name
            }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 地图容器 -->
    <div class="MapContainer">
      <!-- 切换按钮 -->
      <el-switch
        v-model="renderComponent"
        active-text="车站地图"
        inactive-text="车站时刻表"
      >
      </el-switch>
      <!-- 地图 -->
      <Map v-if="renderComponent"></Map>
      <!-- 车站时刻表 -->
      <div v-else>车站时刻表</div>
    </div>
  </div>
</template>

<script>
import Map from '../../components/content/Map/map'

export default {
  components: { Map },
  name: 'stationMap',
  data() {
    return {
      stationList: this.$store.state.stationList,
      renderComponent: true,
    }
  },
  created() {
    // 如果用户没有点击而是刷新，则判断 activeStation是否为空对象
    // 如果是 就重新初始化为车站列表的第一个
    if (Object.keys(this.$store.state.activeStation).length === 0) {
      this.$store.commit('setPosition', this.stationList[0])
    }
  },
  methods: {
    // 用户点击车站列表，改变地图中心
    switchStation(activeStation) {
      if (activeStation === this.$store.state.activeStation) return
      this.$store.commit('setPosition', activeStation)
      // 在用户点击后实现强制刷新(利用了v-if，缺点就是相对于v-show来说性能不好)
      this.renderComponent = false
      this.$nextTick().then(() => {
        this.renderComponent = true
      })
    },
  },
}
</script>

<style scoped>
.stationMap {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 90vh;
}
.list {
  height: 100%;
  width: 20vw;
}
.list .title {
  height: 40px;
  background-color: #00618b;
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
  line-height: 40px;
  letter-spacing: 0.5rem;
}

.MapContainer {
  width: 55vw;
  height: 100%;
  border: 1px dotted;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.staInfo:hover {
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
}
</style>
