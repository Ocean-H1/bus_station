<template>
  <div class="shiftMoudle">
    <!-- 卡片视图区 -->
    <el-card>
      <!-- 查询与添加区 -->
      <el-form
        :model="QueryForm"
        :rules="QueryRules"
        ref="QueryFormRef"
        label-width="100px"
        label-position="left"
      >
        <el-form-item label="起始地" prop="start_name">
          <!-- 带有输入建议的input -->
          <el-autocomplete
            v-model="QueryForm.start_name"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect1"
            :debounce="0"
          >
            <i slot="append">区/县</i>
            <template slot-scope="{ item }">
              <div class="cityName">{{ item.city_name + '市：' }}</div>
              <div class="regionName">{{ item.region_name }}</div>
            </template>
          </el-autocomplete>
        </el-form-item>
        <el-form-item label="目的地" prop="final_name">
          <!-- 带有输入建议的input -->
          <el-autocomplete
            v-model="QueryForm.final_name"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect2"
            :debounce="0"
          >
            <i slot="append">区/县</i>
            <template slot-scope="{ item }">
              <div class="cityName">{{ item.city_name + '市：' }}</div>
              <div class="regionName">{{ item.region_name }}</div>
            </template>
          </el-autocomplete>
        </el-form-item>
        <el-form-item label="乘车日期" prop="shuttle_shift_date">
          <el-date-picker
            v-model="QueryForm.shuttle_shift_date"
            align="left"
            type="date"
            placeholder="请选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </el-form-item>
        <el-button type="primary" size="middle" style="height: 40px"
          >查询</el-button
        >
        <el-button type="primary" size="middle" style="height: 40px"
          >新建班次</el-button
        >
      </el-form>
      <!-- 班次列表区 -->
      <el-table
        :data="shuttleList"
        border
        stripe
        highlight-current-row
        :header-cell-style="{ textAlign: 'center' }"
        :cell-style="{ textAlign: 'center' }"
      >
        <el-table-column
          label="日期"
          prop="shuttle_shift_date"
        ></el-table-column>
        <el-table-column
          label="时间"
          prop="shuttle_shift_time"
        ></el-table-column>
        <el-table-column label="票价" prop="ticket_price"></el-table-column>
        <el-table-column
          label="班次类型"
          prop="shuttle_shift_type"
        ></el-table-column>
        <el-table-column label="线路类型" prop="line_type"></el-table-column>
        <el-table-column
          label="余票"
          prop="unuse_ticket_quantity"
        ></el-table-column>
        <el-table-column
          label="儿童余票"
          prop="unuse_child_ticket_quantity"
        ></el-table-column>
        <el-table-column label="状态" prop="status"></el-table-column>
        <el-table-column label="操作" width="350px"></el-table-column>
      </el-table>
      <!-- 分页区 -->
      <!-- 新建班次的对话框 -->
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'shiftMoudle',
  data() {
    function isInArray(arr, value) {
      // 判断是否在数组中有该选项的方法，也可以用es6的some方法
      for (let i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
          return true
        }
      }
      return false
    }
    const validatePass = (rule, value, callback) => {
      this.regionsList.forEach((item) => {
        // 造出一个只有城市名的数组regionsNameList
        this.regionsNameList.push(item.region_name)
      })

      if (isInArray(this.regionsNameList, value)) {
        callback()
      } else {
        callback(new Error('请选择列表中已有选项!'))
      }
    }
    return {
      // 查询班次的表单对象
      QueryForm: {
        start_name: '',
        final_name: '',
        start_region_id: 0,
        final_region_id: 0,
        shuttle_shift_date: '',
      },
      // 查询班次的表单验证规则
      QueryRules: {
        // 出发地
        start_name: [
          {
            message: '请选择有效的城市！',
            trigger: 'change',
            validator: validatePass,
          },
          { required: 'true', message: '请输入目的地', trigger: 'blur' },
        ],
        // 目的地
        final_name: [
          {
            message: '请选择有效的城市！',
            trigger: 'change',
            validator: validatePass,
          },
          {
            message: '请选择有效的城市！',
            trigger: 'blur',
            validator: validatePass,
          },
          { required: 'true', message: '请输入目的地', trigger: 'blur' },
        ],

        // 乘车时间
        shuttle_shift_date: [
          { required: true, message: '请选择乘车日期', trigger: 'blur' },
        ],
      },
      // 所有地区列表
      regionsList: [],
      regionsNameList: [],
      // 符合条件的班次列表
      shuttleList: [],
    }
  },
  methods: {
    // 查找输入建议
    querySearch(queryString, cb) {
      let regionsList = this.regionsList
      let res = queryString
        ? regionsList.filter(this.createFilter(queryString))
        : regionsList

      cb(res)
    },
    // 输入建议的过滤器
    createFilter(queryString) {
      return (regionsList) => {
        return (
          regionsList.region_name
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) >= 0 ||
          regionsList.region_english_name
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) >= 0
        )
      }
    },
    // 输入建议被选中时触发的事件
    handleSelect1(item) {
      this.QueryForm.start_name = item.region_name
      this.QueryForm.start_region_id = item.region_id
    },
    handleSelect2(item) {
      this.QueryForm.final_name = item.region_name
      this.QueryForm.final_region_id = item.region_id
    },
    // 获取地区列表(用于输入建议)
    async getAllRegions() {
      // 发送请求
      const { data: res } = await this.$http.get(`/query/region/getAllRegions`)

      if (res.code !== 10000) {
        return this.$message.error('获取所有地区列表失败!')
      }

      // 保存数据
      this.regionsList = res.data.region_list
    },
  },
  created() {
    // // 获取地区列表(用于输入建议)
    this.getAllRegions()
  },
}
</script>

<style scoped>
.cityName {
  font-weight: 600;
  width: 50%;
  float: left;
  font-size: 16px !important;
}
.regionName {
  width: 50%;
  float: left;
  letter-spacing: 3px;
}
.regionName:hover {
  color: deepskyblue;
}
.el-form {
  display: flex;
  justify-content: space-around;
}
</style>
