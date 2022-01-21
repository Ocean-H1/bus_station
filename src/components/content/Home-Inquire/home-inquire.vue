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
          <el-form-item label="起始地" prop="start">
            <el-input v-model="InquireForm.start"></el-input>
          </el-form-item>
          <el-form-item label="目的地" prop="final">
            <el-input v-model="InquireForm.final"></el-input>
          </el-form-item>
          <el-form-item label="乘车日期" prop="startDate">
            <el-date-picker
              v-model="InquireForm.startDate"
              align="left"
              type="date"
              placeholder="请选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </el-form-item>
          <el-button type="primary" @click="QueryTickets"> <i class="el-icon-search"></i> 查询</el-button>
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
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="GetTicketForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="rcode">
            <div class="RcodeContainer">
              <div style="width:50%;">
                <img src="https://www.scqckypw.com/rCode.jpg" alt=""  width="100%"/>
              </div>
              <el-input v-model="GetTicketForm.rcode" style="width:50%"></el-input>
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
      // 查询车票的表单对象
      InquireForm: {
        start: '',
        final: '',
        startDate: '',
      },
      // 查询车票的表单验证规则
      InquireRules: {
        // 出发地
        start: [{ required: true, message: '请输入出发地', trigger: 'blur' }],
        // 目的地
        final: [{ required: true, message: '请输入目的地', trigger: 'blur' }],
        // 乘车时间
        startDate: [
          { required: true, message: '请选择乘车日期', trigger: 'blur' },
        ],
      },
      // 取票验证码的表单对象
      GetTicketForm: {
        phone: '',
        rcode: '',
      },
      // 取票验证码的表单验证
      GetTicketRules: {
        // 手机号
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {
            type: 'string',
            pattern: /^(13\d|14[5|7]|15\d|166|17[3|6|7]|18\d)\d{8}$/,
            message: '请输入有效的手机号码',
            trigger: 'blur',
          },
        ],
        // 验证码
        rcode: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
      },
    }
  },
  methods: {
    // 查询车票
    QueryTickets() {
      // 表单验证
      this.$refs.InquireFormRef.validate((valid) => {
        if (!valid) return

        // 发送请求

        // 请求成功之后的操作
      })
    },
    // 取票验证码
    submit() {},
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
.RcodeContainer div{
  float: right;
}
</style>
