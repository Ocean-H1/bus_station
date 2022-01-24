<template>
  <div class="stationBox">
    <!-- 标题 -->
    <div class="title">
      <div>车站介绍</div>
      <div>更多车站 <i class="el-icon-d-arrow-right"></i></div>
    </div>
    <!-- 车站列表 -->
    <div class="stationList">
      <el-table
        :data="stationList"
        style="width: 100%"
        size="medium"
        stripe
        :show-header="false"
      >
        <el-table-column prop="station" label="车站"> </el-table-column>
        <el-table-column prop="station" label="车站"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stationBox',
  data() {
    return {
        // 车站列表
        stationList: [
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
            {
                station: '车站一'
            },
        ],
    }
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
  background-color: #00618b;
}
.title div {
  width: 50%;
  float: left;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.6rem;
  color: #fff;
}
</style>
