<template>
  <div class="HomeInquire">
    <el-tabs type="border-card">
      <el-tab-pane label="查询车票">
        <!-- 查询车票的表单 -->
        <el-form
          :model="InquireForm"
          :rules="rules"
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
          <el-button type="primary" @click="QueryTickets">查询</el-button>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="取票验证码">
        <!-- 取票验证码的表单 -->
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
      rules: {
        start: [{ required: true, message: '请输入出发地', trigger: 'blur' }],
        final: [{ required: true, message: '请输入目的地', trigger: 'blur' }],
        startDate: [
          { required: true, message: '请选择乘车日期', trigger: 'blur' },
        ],
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
  },
}
</script>

<style scoped>
.el-form {
  display: flex;
  flex-direction: column;
}
.el-button {
  letter-spacing: 1em;
  font-size: 1.1em;
  text-align: center;
}
.el-tabs {
  height: 100%;
}
</style>
