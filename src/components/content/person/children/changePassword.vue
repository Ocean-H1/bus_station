<template>
  <div class="info">
    <div class="cards">
      <div class="cards-header">修改密码</div>
      <div class="cards-body">
        <div class="form">
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="原  密  码">
              <el-input v-model="form.oldPwd"></el-input>
            </el-form-item>
            <el-form-item label="新  密  码">
              <el-input v-model="form.pwd"></el-input>
            </el-form-item>
            <el-form-item label="新密码确认">
              <el-input v-model="form.check_pwd"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button style="width: 100%;" type="danger">提交</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form:{
        oldPwd:'',
        pwd:'',
        check_Pwd:'',
      },
    }
  }
}
</script>

<style scoped>
 .form{
   width: 40%;
   margin: 120px auto;
 }
</style>