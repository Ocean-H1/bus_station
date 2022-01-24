<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content logo">logo</div></el-col>
      <el-col :span="12"><div class="grid-content title">西安客运网络售票系统</div></el-col>
      <el-col :span="3"><div class="grid-content login">登录</div></el-col>
      <el-col :span="3"><div class="grid-content register">注册</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name: 'Home-top'
}
</script>

<style scoped>
.container,.el-row,.el-col{
  height: 100%;
}

.grid-content {
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 2em;
  letter-spacing: 0.5em;
  font-weight: 600;
}
.login,.register {
  cursor: pointer;
}
</style>
