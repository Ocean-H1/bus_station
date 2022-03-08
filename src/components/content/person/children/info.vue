<template>
  <div class="info">
    <div class="cards">
      <div class="cards-header">基本资料</div>
      <div class="cards-body">
        <div>
          <small>您好！ 欢迎您登录个人中心！</small>
        </div>
        <div class="box user-info">
          <div class="title">
            <h3>基本信息</h3>
            <a @click="isShow = !isShow" href="#">修改</a>
          </div>
          <el-divider></el-divider>
          <div v-show="!isShow" class="inputs">
            <section>
              <div class="left">
                <span class="name">用户名:</span>
                <span class="result">17629100892</span>
              </div>
              <div class="right">
                <span class="name">真实姓名:</span>
                <span class="result">未添加</span>
              </div>
            </section>
            <section>
              <div class="left">
                <span class="name">性&nbsp;&nbsp;&nbsp;&nbsp;别:</span>
                <span class="result">男</span>
              </div>
              <div class="right">
                <span class="name">证件类型:</span>
                <span class="result">未添加</span>
              </div>
            </section>
            <section>
              <div class="left">
                <span class="name">证件号:</span>
                <span class="result">17629100892</span>
              </div>
            </section>
          </div>
          <div v-show="isShow" class="change inputs">
            <section>
              <div class="left">
                <span class="name">用户名:</span>
                <span class="result">17629100892</span>
              </div>
              <div class="right">
                <span class="name">真实姓名:</span>
                <div class="result">
                  <el-input v-model="name" placeholder=""></el-input>
                </div>
              </div>
            </section>
            <section>
              <div class="left">
                <span class="name">性&nbsp;&nbsp;&nbsp;&nbsp;别:</span>
                <span class="result">
                  <el-radio v-model="sex" label="1">男</el-radio>
                  <el-radio v-model="sex" label="2">女</el-radio>
                  <el-radio v-model="sex" label="3">保密</el-radio>
                </span>
              </div>
              <div class="right">
                <span class="name">证件类型:</span>
                <span class="result">
                  <el-select v-model="power" placeholder="请选择">
                    <el-option value="身份证">身份证</el-option>
                    <el-option value="军人证">军人证</el-option>
                    <el-option value="护照">护照</el-option>
                  </el-select>
                </span>
              </div>
            </section>
            <section>
              <div class="right">
                <span class="name">证件号:</span>
                <span class="result">
                  <el-input v-model="idNumber" placeholder=""></el-input>
                </span>
              </div>
            </section>
            <section>
              <div class="right">
                <el-button type="danger">确定</el-button>
                <el-button type="info">取消</el-button>
              </div>
            </section>
          </div>
        </div>
        <div class="box user-info">
          <div class="title">
            <h3>手机绑定</h3>
            <span>绑定后可用于登录和找回密码</span>
          </div>
          <el-divider></el-divider>

          <div class="inputs">
            <section>
              <div class="left">
                <span class="name">手机:</span>
                <span class="result">17629100892</span>
              </div>
              <div class="right">
                <span class="name">已绑定:</span>
                <div class="result">
                  <el-button type="danger" size="small">解绑</el-button>
                </div>
              </div>
            </section>
          </div>
        </div>
          <div class="box user-info">
          <div class="title">
            <h3>邮箱绑定</h3>
            <span>绑定后可用于登录和找回密码</span>
          </div>
          <el-divider></el-divider>

          <div class="inputs">
            <section>
              <div class="left">
                <span class="name">邮箱:</span>
                <span class="result">空</span>
              </div>
              <div class="right">
                <span class="name">已绑定:</span>
                <div class="result">
                  <el-button type="danger" size="small">解绑</el-button>
                </div>
              </div>
            </section>
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
      isShow: false,
      sex: 1,
      name: '',
      power: '',
      idNumber: '',
    }
  }
}
</script>

<style scoped>
.cards-body {
  padding: 20px;
}
.box .title {
  display: flex;
  align-items: flex-end;
}
.box .title span {
  font-size: 12px;
}
.title h3 {
  color: #555;
}
.box .title a,
.box .title span {
  font-size: 12px;
  margin-left: 20px;
  text-decoration: none;
}
.inputs section {
  display: flex;
  justify-content: space-between;
}
.inputs section > div {
  flex: 0 0 45%;
  border-bottom: 1px solid #eee;
  padding: 20px 0 20px 40px;
  font-size: 12px;
}
.inputs section > div .name {
  font-weight: bold;
}
.inputs section > div .result {
  color: #000;
  margin-left: 20px;
}
.inputs .right {
  display: flex;
  align-items: center;
}
</style>