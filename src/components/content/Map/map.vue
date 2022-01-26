<template>
  <div class="Map">
    <!-- 放置地图的容器 -->
    <div id="container"></div>
  </div>
</template>


<script>
export default {
  name: 'Map',
  mounted() {
    // 创建地图实例
    let map = new BMapGL.Map('container')
    // 创建点坐标
    let point = new BMapGL.Point(116.404, 39.915)
    // 初始化地图，设置中心点坐标和地图级别
    map.centerAndZoom(point, 11)
    //开启鼠标滚轮缩放
    map.enableScrollWheelZoom(true)
    // map.setHeading(64.5) //设置地图旋转角度
    // map.setTilt(73) //设置地图的倾斜角度
    // map.setMapType(BMAP_EARTH_MAP);      // 设置地图类型为地球模式
    let scaleCtrl = new BMapGL.ScaleControl() // 添加比例尺控件
    map.addControl(scaleCtrl)
    let zoomCtrl = new BMapGL.ZoomControl() // 添加缩放控件
    map.addControl(zoomCtrl)
    let cityCtrl = new BMapGL.CityListControl() // 添加城市列表控件
    map.addControl(cityCtrl)
  },
}
</script>

<style scoped>
#container {
  height: 80vh;
  width: 55vw;
}
</style>
