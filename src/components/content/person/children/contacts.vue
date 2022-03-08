<template>
  <div class="info">
    <div class="cards">
      <div class="cards-header">常用联系人</div>
      <div class="cards-body">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="序号" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="证件类型">
          </el-table-column>
          <el-table-column prop="address" label="证件号码">
          </el-table-column>
          <el-table-column prop="address" label="操作">
          </el-table-column>
        </el-table>
        <div class="btns">
          <el-button>上一页</el-button>
          <el-button>下一页</el-button>
        </div>
        <div class="add">
          <a @click="isShow = !isShow" href="#">添加常用联系人</a>
        </div>
        <div v-show="isShow" class="form">
          <div class="inner">
            <el-form ref="form" :model="form" label-width="100px">
              <el-form-item label="姓 名">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="电 话">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
              <el-form-item label="Email">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button style="width: 100%;" type="danger">提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      isShow: false,
      form: {
        name: '',
        phone: '',
        email: '',
      },
    }
  }
}
</script>

<style scoped>
.form {
  width: 80%;
  padding: 50px 0;
  background: #f5f5f5;
  margin-top: 30px;
  margin-left: 50px;
}
.form .inner {
  width: 40%;
  margin: 0 auto;
}
.btns {
  margin-top: 20px;
  text-align: right;
}
.add a {
  font-weight: bold;
  margin-left: 50px;
  text-decoration: none;
  color: #1a66b3;
}
.el-select {
  width: 100%;
}
</style>