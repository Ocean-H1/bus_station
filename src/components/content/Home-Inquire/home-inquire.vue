<template>
  <div class="HomeInquire">
    <el-tabs type="border-card">
      <el-tab-pane label="查询车票">
        <!-- 查询车票的表单 -->
        <el-form
          :model="InquireForm"
          :rules="InquireRules"
          ref="InquireFormRef"
          label-width="100px"
          label-position="left"
        >
          <el-form-item label="起始地" prop="start_region_id">
            <!-- 带有输入建议的input -->
            <el-autocomplete
              v-model="state1"
              placeholder="请输入内容"
              :fetch-suggestions="querySearch"
              :trigger-on-focus="true"
              @select="startSelect"
              value-key="region_name2"
              class="el-input"
              debounce="0"
            >
              <i slot="suffix">区/县</i>
            </el-autocomplete>
          </el-form-item>
          <el-form-item label="目的地" prop="final_region_id">
            <!-- 带有输入建议的input -->
            <el-autocomplete
              v-model="state2"
              placeholder="请输入内容"
              :fetch-suggestions="querySearch"
              :trigger-on-focus="true"
              @select="finalSelect"
              value-key="region_name2"
              class="el-input"
              debounce="0"
            >
              <i slot="suffix">区/县</i>
            </el-autocomplete>
          </el-form-item>
          <el-form-item label="乘车日期" prop="shuttle_shift_date">
            <el-date-picker
              v-model="InquireForm.shuttle_shift_date"
              align="left"
              type="date"
              placeholder="请选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </el-form-item>
          <el-button type="primary" @click="QueryTickets">
            <i class="el-icon-search"></i> 查询</el-button
          >
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="取票验证码">
        <!-- 取票验证码的表单 -->
        <el-form
          :model="GetTicketForm"
          :rules="GetTicketRules"
          ref="GetTicketFormRef"
          label-width="100px"
          label-position="left"
        >
          <el-form-item label="手机号" prop="phone_number">
            <el-input
              v-model="GetTicketForm.phone_number"
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="check_code">
            <div class="RcodeContainer">
              <div class="checkcode" @click="refreshImg">
                <img :src="codeImgUrl" alt="图片验证码" width="100px" />
              </div>
              <el-input
                v-model="GetTicketForm.check_code"
                placeholder="点击图片刷新"
                @focus="refreshImg"
              ></el-input>
            </div>
          </el-form-item>

          <el-button type="primary" @click="submit">提交</el-button>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'home-inquire',
  data() {
    return {
      state1: '',
      state2: '',
      // 查询车票的表单对象
      InquireForm: {
        start_region_id: 0,
        final_region_id: 0,
        shuttle_shift_date: '',
      },
      // 查询车票的表单验证规则
      InquireRules: {
        // 出发地
        start_region_id: [
          { required: true, message: '请输入出发地', trigger: 'blur' },
        ],
        // 目的地
        final_region_id: [
          { required: true, message: '请输入目的地', trigger: 'blur' },
        ],
        // 乘车时间
        shuttle_shift_date: [
          { required: true, message: '请选择乘车日期', trigger: 'blur' },
        ],
      },
      // 取票验证码的表单对象
      GetTicketForm: {
        phone_number: '',
        check_code: '',
      },
      // 取票验证码的表单验证
      GetTicketRules: {
        // 手机号
        phone_number: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {
            type: 'string',
            pattern: /^(13\d|14[5|7]|15\d|166|17[3|6|7]|18\d)\d{8}$/,
            message: '请输入有效的手机号码',
            trigger: 'blur',
          },
        ],
        // 验证码
        check_code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ],
      },
      // 验证码图片的地址
      codeImgUrl: 'https://image.scqckypw.com/static/new/images/refreshen.png',
      // 所有地区列表
      regionsList: [],
    }
  },
  methods: {
    // 查询车票
    QueryTickets() {
      // 表单验证
      this.$refs.InquireFormRef.validate((valid) => {
        if (!valid) return
        // 携带查询的参数跳转页面
        this.$router.push({
          path: '/ticketquery',
          query: this.InquireForm,
        })
      })
    },
    // 取票验证码
    async submit() {
      // 发送请求
      const { data: res } = await this.$http.get(
        `/query/rideCode/sendRideCode`,
        {
          params: this.GetTicketForm,
        }
      )
      // 重置表单
      this.$refs.GetTicketFormRef.resetFields()

      if (res.code !== 10000) {
        return this.$message({
          type: 'error',
          message: res.message,
          duration: 3000,
        })
      }

      this.$message.success('取票码发送成功！')
      // 重置表单
    },
    // 点击刷新验证码图片
    refreshImg() {
      this.$http
        .request({
          url: `/permissions/getCheckCodePicture`,
          responseType: 'blob',
          methods: 'get',
        })
        .then((res) => {
          // 将后台返回的二进制图片流转换
          const myBlob = new window.Blob([res.data], { type: 'image/png' })
          this.codeImgUrl = window.URL.createObjectURL(myBlob)

          // 保存sessionid
          window.sessionStorage.setItem('SessionId', res.headers['session-id'])
        })
        .catch((err) => {
          console.log(err)
        })
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
      this.regionsList.forEach((item) => {
        item.region_name2 = item.city_name + '市/' + item.region_name
      })
    },
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
            .indexOf(queryString.toLowerCase()) === 0 || regionsList.region_english_name.toLowerCase()
            .indexOf(queryString.toLowerCase()) === 0
        )
      }
    },
    // 输入建议被选中时触发的事件
    startSelect(item) {
      this.InquireForm.start_region_id = item.region_id
    },
    finalSelect(item) {
      this.InquireForm.final_region_id = item.region_id
    },
  },
  created() {
    // // 获取地区列表(用于输入建议)
    this.getAllRegions()
  },
}
</script>

<style scoped>
.el-form {
  display: flex;
  flex-direction: column;
}
.el-button {
  letter-spacing: 0.5em;
  font-size: 1.1em;
  text-align: center;
}
.el-tabs {
  height: 100%;
}
.RcodeContainer div {
  float: right;
  cursor: pointer;
}
.RcodeContainer {
  display: flex;
  flex-direction: row-reverse;
}
.RcodeContainer .checkcode {
  flex: 2;
}
.RcodeContainer .el-input {
  flex: 3;
}
</style>
