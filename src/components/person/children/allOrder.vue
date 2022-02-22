<template>
  <div class="allOrder cards">
    <div class="order">
      <div class="order-title">
        <span>> 我的订单</span>
      </div>
      <div class="order-body">
        <div class="search">
          <span class="text">购票时间:</span>
          <div class="start-time time">
            <span>从</span>
            <el-date-picker v-model="start_time" type="date" placeholder="选择日期">
            </el-date-picker>
          </div>
          <div class="start-time time">
            <span>到</span>
            <el-date-picker v-model="end_time" type="date" placeholder="选择日期">
            </el-date-picker>
          </div>
          <div class="btn">
            <el-button type="success">筛选</el-button>
          </div>
        </div>
        <div class="result">
          <el-table :data="[]" style="width: 100%">
          </el-table>
          <div class="toggle">
            <el-button>上一页</el-button>
            <span class="val">1</span>
            <el-button>下一页</el-button>
          </div>
        </div>
        <div class="history">
          您暂无 相关记录，如需购票请
          <router-link to="/">点击这里</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      start_time: '',
      end_time: '',
    }
  }
}
</script>

<style scoped>
.allOrder {
  padding: 10px 20px;
}
.order-title {
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #f0f0f0;
}
.order-title span {
  font-weight: bold;
  color: #7d7d7d;
  border-bottom: 2px solid #2577e3;
}
.search {
  margin: 50px 0 80px 0;
  display: flex;
  align-items: center;
  background: #dce9ef;
  padding: 10px 20px;
  font-size: 12px;
}
.search .text {
  margin: 0 20px;
  color: #000000;
  font-size: 12px;
  font-weight: 100;
}
.search .time {
  font-size: 14px;
}
.search .time span {
  margin: 0 20px;
}
.search .btn {
  margin-left: 20px;
}
.toggle {
  text-align: right;
  margin-top: 40px;
}
.toggle .val{
  margin: 0 10px;
}
.history{
  font-size: 12px;
}
.history a{
  color: red;
}
</style>