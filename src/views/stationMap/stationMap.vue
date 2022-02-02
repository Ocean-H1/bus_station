<template>
  <div class="stationMap">
    <!-- 侧边车站列表 -->
    <div class="tabbar"></div>
    <!-- 地图容器 -->
    <div class="MapContainer">
      <!-- 切换按钮 -->
      <el-switch
        v-model="choice"
        active-text="车站地图"
        inactive-text="车站时刻表"
        @change="handleChange"
      >
      </el-switch>
      <!-- 地图 -->
      <Map v-show="choice"></Map>
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
      choice: true,
    }
  },
  methods: {
    // switch组件的改变事件
    handleChange() {
      console.log(this.choice)
    },
  },
}
</script>

<style scoped>
.stationMap {
  display: flex;
  flex-direction: row;
}
.MapContainer {
  width: 60vw;
  height: 90vh;
  border: 2px dotted;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
