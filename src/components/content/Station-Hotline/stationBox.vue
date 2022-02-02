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
        <el-table-column prop="station" label="车站">
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
        <el-table-column prop="station" label="车站">
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
      // 车站列表
      stationList: [
        {
          station_id: 1,
          station_name: '城西客运站',
          station_english_name: 'chengxikeyunzhan', //客运站名称拼音，供前端做根据首字母排序展示
          longitude: 108.874252, //经度坐标
          latitude: 34.273998, //纬度坐标
          station_address:
            '陕西省西安市莲湖区枣园东路92号（地铁：1号线汉城路地铁站 | 公交：212路、23路、50路、103路）', //车站详细地址
        },
        {
          station_id: 6,
          station_name: '三府湾客运站',
          station_english_name: 'sanfuwankeyunzhan',
          longitude: 108.976118,
          latitude: 34.27803,
          station_address:
            '陕西省西安市新城区长缨西路353号（地铁：4号线火车站地铁站、1号线朝阳门地铁站 | 公交：28路、49路、159路、176路）',
        },
        {
          station_id: 15,
          station_name: '纺织城客运站',
          station_english_name: 'fangzhichengkeyunzhan',
          longitude: 109.069852,
          latitude: 34.280149,
          station_address:
            '陕西省西安市新雁塔区朱雀大街南段与南三环交汇处西南角（地铁：2号线三爻地铁站 | 公交：928路、203路、278路、920路）',
        },
        {
          station_id: 1,
          station_name: '城西客运站',
          station_english_name: 'chengxikeyunzhan', //客运站名称拼音，供前端做根据首字母排序展示
          longitude: 108.874252, //经度坐标
          latitude: 34.273998, //纬度坐标
          station_address:
            '陕西省西安市莲湖区枣园东路92号（地铁：1号线汉城路地铁站 | 公交：212路、23路、50路、103路）', //车站详细地址
        },
        {
          station_id: 6,
          station_name: '三府湾客运站',
          station_english_name: 'sanfuwankeyunzhan',
          longitude: 108.976118,
          latitude: 34.27803,
          station_address:
            '陕西省西安市新城区长缨西路353号（地铁：4号线火车站地铁站、1号线朝阳门地铁站 | 公交：28路、49路、159路、176路）',
        },
        {
          station_id: 15,
          station_name: '纺织城客运站',
          station_english_name: 'fangzhichengkeyunzhan',
          longitude: 109.069852,
          latitude: 34.280149,
          station_address:
            '陕西省西安市新雁塔区朱雀大街南段与南三环交汇处西南角（地铁：2号线三爻地铁站 | 公交：928路、203路、278路、920路）',
        },
        {
          station_id: 1,
          station_name: '城西客运站',
          station_english_name: 'chengxikeyunzhan', //客运站名称拼音，供前端做根据首字母排序展示
          longitude: 108.874252, //经度坐标
          latitude: 34.273998, //纬度坐标
          station_address:
            '陕西省西安市莲湖区枣园东路92号（地铁：1号线汉城路地铁站 | 公交：212路、23路、50路、103路）', //车站详细地址
        },
        {
          station_id: 6,
          station_name: '三府湾客运站',
          station_english_name: 'sanfuwankeyunzhan',
          longitude: 108.976118,
          latitude: 34.27803,
          station_address:
            '陕西省西安市新城区长缨西路353号（地铁：4号线火车站地铁站、1号线朝阳门地铁站 | 公交：28路、49路、159路、176路）',
        },
        {
          station_id: 15,
          station_name: '纺织城客运站',
          station_english_name: 'fangzhichengkeyunzhan',
          longitude: 109.069852,
          latitude: 34.280149,
          station_address:
            '陕西省西安市新雁塔区朱雀大街南段与南三环交汇处西南角（地铁：2号线三爻地铁站 | 公交：928路、203路、278路、920路）',
        },
        {
          station_id: 6,
          station_name: '三府湾客运站',
          station_english_name: 'sanfuwankeyunzhan',
          longitude: 108.976118,
          latitude: 34.27803,
          station_address:
            '陕西省西安市新城区长缨西路353号（地铁：4号线火车站地铁站、1号线朝阳门地铁站 | 公交：28路、49路、159路、176路）',
        },
      ],
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
.staInfo:hover {
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
}
</style>
