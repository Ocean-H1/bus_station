<template>
  <div class="hotlineTable">
    <el-table
      :data="lineList"
      style="width: 50%"
      size="medium"
      stripe
      :show-header="false"
    >
      <el-table-column>
        <template slot-scope="scope">
          <span class="line"
            >{{ scope.row.start_region }}→{{ scope.row.final_region }}</span
          >
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="">
          <span class="yupiao">[查询余票]</span>
        </template>
      </el-table-column>
    </el-table>
    <el-table
      :data="lineList"
      style="width: 50%"
      size="medium"
      stripe
      :show-header="false"
    >
      <el-table-column>
        <template slot-scope="scope">
          <span class="line"
            >{{ scope.row.start_region }}→{{ scope.row.final_region }}</span
          >
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="">
          <span class="yupiao">[查询余票]</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'hotlineTable',
  data() {
    return {
      lineList: [
        {
          start_region_id: 1, //始发地id
          final_region_id: 11, //目的地id
          start_region: '西安市',
          final_region: '兴平市',
        },
        {
          start_region_id: 1,
          final_region_id: 8,
          start_region: '西安市',
          final_region: '渭南市',
        },
        {
          start_region_id: 1,
          final_region_id: 12,
          start_region: '西安市',
          final_region: '咸阳市',
        },
        {
          start_region_id: 1,
          final_region_id: 6,
          start_region: '西安市',
          final_region: '周至区',
        },
        {
          start_region_id: 1, //始发地id
          final_region_id: 11, //目的地id
          start_region: '西安市',
          final_region: '兴平市',
        },
        {
          start_region_id: 1,
          final_region_id: 8,
          start_region: '西安市',
          final_region: '渭南市',
        },
        {
          start_region_id: 1,
          final_region_id: 12,
          start_region: '西安市',
          final_region: '咸阳市',
        },
        {
          start_region_id: 1,
          final_region_id: 6,
          start_region: '西安市',
          final_region: '周至区',
        },
        {
          start_region_id: 1, //始发地id
          final_region_id: 11, //目的地id
          start_region: '西安市',
          final_region: '兴平市',
        },
      ],
    }
  },
}
</script>

<style scoped>
.el-table {
  float: right !important;
}
/* 余票查询的样式修改 */
.yupiao {
  color: #1b6690;
  cursor: pointer;
  letter-spacing: 0.1rem;
}
.yupiao:hover {
  text-decoration: underline;
  font-weight: 600;
}
.line:hover{
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
}
</style>
