<template>
  <div class="HomeNotice">
    <el-tabs>
      <el-tab-pane label="最新公告">
        <el-table
          :data="tableList1"
          style="width: 100%;"
          size="small"
          stripe
          :show-header="false"
          
          
        >
          <el-table-column prop="name" label="姓名"  width="180">
          </el-table-column>
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="交通新闻">
        <el-table
          :data="tableList2"
          style="width: 100%"
          :default-sort="{ prop: 'date', order: 'descending' }"
          size="small"
          stripe
          :show-header="false"
          height="250"
        >
          
          <el-table-column prop="name" label="姓名"  width="180">
          </el-table-column>
          <el-table-column prop="date" label="日期"  width="180">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'HomeNotice',
  data() {
    return {
      // 最新公告列表数据
      tableList1: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      // 交通新闻列表数据
      tableList2: [
        {
          date: '2016-05-02',
          name: '张三',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '张三',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '张三',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '张三',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2016-05-02',
          name: '张三',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '张三',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '张三',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '张三',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style scoped>


</style>
