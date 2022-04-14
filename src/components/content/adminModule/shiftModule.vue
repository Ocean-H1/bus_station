<template>
  <div class="shiftMoudle">
    <!-- 卡片视图区 -->
    <el-card>
      <!-- 查询与添加区 -->
      <el-form
        :model="QueryForm"
        :rules="QueryRules"
        ref="QueryFormRef"
        label-width="80px"
        label-position="left"
        class="queryForm"
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
        <el-form-item>
          <el-button type="primary" size="middle" style="height: 40px"
            >查询</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            size="middle"
            style="height: 40px"
            @click="addDialogVisible = true"
            >新建班次</el-button
          >
        </el-form-item>
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
        <el-table-column label="状态" prop="status">
          <template slot-scope="scope">
            <el-tooltip :content="scope.row.status" placement="top">
              <el-switch
                v-model="scope.row.status"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-value="使用中"
                inactive-value="禁用中"
              >
              </el-switch>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="350px">
          <template slot-scope="scope">
            <!-- 编辑 -->
            <el-button type="primary" icon="el-icon-edit" size="mini"
              >编辑</el-button
            >
            <!-- 删除 -->
            <el-button type="danger" icon="el-icon-delete" size="mini"
              >删除</el-button
            >
            <!-- 详情 -->
            <el-button type="warning" size="mini"
              ><i class="el-icon-tickets"></i> 详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区 -->
      <el-pagination
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        background
      >
      </el-pagination>
      <!-- 新建班次的对话框 -->
      <el-dialog
        title="新建班次"
        :visible.sync="addDialogVisible"
        width="70%"
      >
        <!-- 内容主体区 -->
        <el-form
          :model="addForm"
          :rules="addFormRules"
          ref="addFormRef"
          label-width="110px"
          class="addForm"
        >
          <el-form-item label="始发地" prop="start_region">
            <el-input placeholder="西安" v-model="addForm.start_region"></el-input>
          </el-form-item>
          <el-form-item label="终点站" prop="final_region">
            <el-input placeholder="乾县" v-model="addForm.final_region"></el-input>
          </el-form-item>
          <el-form-item>
            <div style="width:190px;"></div>
          </el-form-item>
          <el-form-item label="日期" prop="shuttle_shift_date">
            <el-date-picker
              v-model="addForm.shuttle_shift_date"
              align="left"
              type="date"
              placeholder="请选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
              style="width:190px;"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="时间" prop="shuttle_shift_time">
            <el-input v-model="addForm.shuttle_shift_time"></el-input>
          </el-form-item>
          <el-form-item label="总票数" prop="ticket_quantity">
            <el-input v-model="addForm.ticket_quantity"></el-input>
          </el-form-item>
          <el-form-item label="始发客运站" prop="start_station">
            <el-input v-model="addForm.start_station"></el-input>
          </el-form-item>
          <el-form-item label="终点客运站" prop="final_station">
            <el-input v-model="addForm.final_station"></el-input>
          </el-form-item>
          <el-form-item label="余票数" prop="unuse_ticket_quantity">
            <el-input v-model="addForm.unuse_ticket_quantity"></el-input>
          </el-form-item>
          <el-form-item label="票价" prop="ticket_price">
            <el-input v-model="addForm.ticket_price"></el-input>
          </el-form-item>
          <el-form-item label="保险费" prop="insurance_price">
            <el-input v-model="addForm.insurance_price"></el-input>
          </el-form-item>
          <el-form-item label="儿童总票" prop="child_ticket_quantity">
            <el-input v-model="addForm.child_ticket_quantity"></el-input>
          </el-form-item>
          <el-form-item label="退票手续费" prop="refund_fee">
            <el-input v-model="addForm.refund_fee"></el-input>
          </el-form-item>
          <el-form-item label="服务费" prop="station_fee">
            <el-input v-model="addForm.station_fee"></el-input>
          </el-form-item>
          <el-form-item label="儿童余票" prop="unuse_child_ticket_quantity">
            <el-input v-model="addForm.unuse_child_ticket_quantity"></el-input>
          </el-form-item>
          <el-form-item label="班次类型" prop="shuttle_shift_type">
            <el-input v-model="addForm.shuttle_shift_type"></el-input>
          </el-form-item>
          <el-form-item label="线路类型" prop="line_type">
            <el-input v-model="addForm.line_type"></el-input>
          </el-form-item>
          <el-form-item label="总用时" prop="duration">
            <el-input v-model="addForm.duration"></el-input>
          </el-form-item>
          <el-form-item label="状态" prop="status">
            <el-input v-model="addForm.status"></el-input>
          </el-form-item>
          <el-form-item label="始发客运站代码" prop="station_number">
            <el-input v-model="addForm.station_number"></el-input>
          </el-form-item>
          <el-form-item label="总里程" prop="full_lenght">
            <el-input v-model="addForm.full_lenght"></el-input>
          </el-form-item>
        </el-form>
        <!-- 底部按钮区 -->
        <span slot="footer" class="dialog-footer">
          <el-button @click="addDialogVisible = false"> 取 消 </el-button>
          <el-button type="primary" @click="addUser">确 定</el-button>
        </span>
      </el-dialog>
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
      shuttleList: [
        {
          shift_id: 43, //班次ID
          shuttle_shift_date: '2022-01-05', //班次发车日期
          shuttle_shift_time: '08:00', //班次发车具体时间
          start_region: '西安市', //始发地
          final_region: '杨凌市', //目的地
          start_station: '城西客运站', //始发地客运站
          final_station: '杨凌客运站', //目的地客运站
          ticket_quantity: 26, //总票数
          child_ticket_quantity: 2, //儿童总票数
          unuse_ticket_quantity: 26, //剩余票数
          unuse_child_ticket_quantity: 2, //剩余儿童票数
          ticket_price: 28.0, //票价
          refund_fee: 28.0, //退款手续费
          station_fee: 28.0, //服务费
          insurance_price: 28.0, //保险费
          shuttle_shift_type: '固定班', //班次类型，流水班，固定班
          line_type: '高速', //线路类型，高速，低速
          duration: '1小时20分钟', //总用时
          full_lenght: '80公里', //总里程
          status: '使用中', //状态，禁用中，使用中
          station_number: '610100CXO', //始发客运站代码
        },
        {
          shift_id: 43,
          shuttle_shift_date: '2022-01-05',
          shuttle_shift_time: '08:00',
          start_region: '西安市',
          final_region: '杨凌市',
          start_station: '城西客运站',
          final_station: '杨凌客运站',
          ticket_quantity: 26,
          child_ticket_quantity: 2,
          unuse_ticket_quantity: 26,
          unuse_child_ticket_quantity: 2,
          ticket_price: 28.0,
          refund_fee: 28.0,
          station_fee: 28.0,
          insurance_price: 28.0,
          shuttle_shift_type: '固定班',
          line_type: '高速',
          duration: '1小时20分钟',
          full_lenght: '80公里',
          status: '使用中',
          station_number: '610100CXO',
        },
      ],
      // 控制新建班次对话框的 显示/隐藏
      addDialogVisible: false,
      // 添加班次的表单
      addForm: {
        shift_id: null,
        shuttle_shift_date: '',
        shuttle_shift_time: '',
        start_region: '',
        final_region: '',
        start_station: '',
        final_station: '',
        ticket_quantity: null,
        child_ticket_quantity: null,
        unuse_ticket_quantity: null,
        unuse_child_ticket_quantity: null,
        ticket_price: null,
        refund_fee: null,
        station_fee: null,
        insurance_price: null,
        shuttle_shift_type: '',
        line_type: '',
        duration: '',
        full_lenght: '',
        status: '',
        station_number: '',
      },
      // 添加班次的表单验证
      addFormRules: {},
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
.queryForm {
  display: flex;
  justify-content: space-around;
}
.el-pagination {
  text-align: center;
  margin: 5vh 0;
}
.addForm {
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
/* 解决flex布局下最后一行元素不够的情况 3栏布局 */
/* .addForm::after {
  content: '';
  width: 30%;
} */
.dialog-footer {
  display: flex;
  justify-content: space-evenly;
}
</style>
