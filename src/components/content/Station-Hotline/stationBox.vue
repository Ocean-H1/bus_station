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
        style="width: 50%"
        size="medium"
        stripe
        :show-header="false"
      >
        <el-table-column prop="station" label="车站" >
          <template slot-scope="scope">
            <span class="staInfo">{{scope.row.station}}</span>
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
        <el-table-column prop="station" label="车站">
          <template slot-scope="scope">
            <span class="staInfo">{{scope.row.station}}</span>
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
      // 车站列表
      stationList: [
        {
          station: '车站一',
        },
        {
          station: '车站二',
        },
        {
          station: '车站三',
        },
        {
          station: '车站四',
        },
        {
          station: '车站五',
        },
        {
          station: '车站六',
        },
        {
          station: '车站七',
        },
        {
          station: '车站八',
        },
        {
          station: '车站九',
        },
        {
          station: '车站十',
        },
        
      ],
    }
  },
  methods: {
    handle() {
      console.log('nice')
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
.el-table {
  float: right !important;
}
.staInfo:hover{
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
}
</style>
