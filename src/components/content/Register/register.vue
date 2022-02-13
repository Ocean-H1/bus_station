<template>
  <div class="register">
    <div class="title">
      <span>注册新用户</span>
      <p class="tip">请输入手机号码完成注册</p>
    </div>
    <el-divider></el-divider>
    <el-form
      :model="ruleForm"
      status-icon :rules="rules"
      ref="ruleForm"
      label-width="100px"
      label-position="left">

      <el-form-item label="手机号码:" prop="phone_number">
        <el-input
          v-model.number="ruleForm.phone_number"></el-input>
      </el-form-item>

      <el-form-item label="短信验证码:" prop="phone_code">
        <div class="codeContainer">
          <div class="checkCode">
            <el-button type="primary" :disabled="isDisabled" @click="sendCode" width="100px">{{buttonText}}</el-button>
          </div>
          <el-input v-model="ruleForm.phone_code" @focus="sendCode"></el-input>
        </div>
      </el-form-item>

      <el-form-item label="登录密码:" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"></el-input>
      </el-form-item>

      <el-form-item label="确认密码:" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"></el-input>
      </el-form-item>

      <el-form-item>
        <div class="button2">
          <el-button type="primary" @click="submitForm" style="width:222px">立即注册</el-button>
        </div>

      </el-form-item>

      <input type="radio"> 我已阅读并同意
      <a href='#'>《注册须知服务条款》</a>

    </el-form>
  </div>
</template>

<script>
export default {
  name: "register",
  data(){
    //验证手机号码是否合法
    let checkTel = (rule,value,callback) => {
      if(!value){
        return callback(new Error('登录名不能为空'));
      }
      setTimeout(()=> {
        if (!Number.isInteger(value)) {
          callback(new Error('未知类型的登录名，请使用手机号作为登录名'));
        } else if (!this.checkMobile(value)) {
          callback(new Error('请输入正确的11位号码'));
        } else {
          callback();
        }
      },1000)
    };
    //   }else{
    //     if(value<11){
    //       callback(new Error('请输入正确的11位号码'));
    //     }else{
    //       callback()
    //     }
    //   }
    // },1000)

    //验证验证码是否为空
    let checkCode = (rule, value, callback) => {
      if (value === ''){
        callback(new Error('请输入短信验证码'));
      }else{
        callback();
      }
    };
    //验证密码
    let validatePass = (rule, value, callback) => {
      if(value === ''){
        callback(new Error('密码不能为空'));
      }else{
        if(this.ruleForm.checkPass !== ''){
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return{
      ruleForm: {
        phone_number:'',
        phone_code:'',
        password:'',
        checkPass:'',
        isChecked: false,
        changed: false,
      },
      rules: {
        phone_number: [
          {validator: checkTel, trigger:'blur'}
        ],
        phone_code: [
          {validator: checkCode, trigger:'blur'}
        ],
        password: [
          {validator: validatePass, trigger:"blur"},
          {min:6, max:16, message: '请输入6至16位密码，建议您使用字母、数字、符号的组合', trigger:'blur'}
        ],
        checkPass: [
          {validator: validatePass2, trigger: 'blur' },
          {min:6, max:16, message: '请输入6至16位密码，建议您使用字母、数字、符号的组合', trigger:'blur'}
        ]
      },
      buttonText: "免费获取短信验证码",
      isDisabled: false, //是否禁止点击发送验证码按钮
      flag: true
    };
  },
  methods: {
    //发送验证码
    sendCode() {
      this.$axios.post('/permissions/sendPhoneCode',{
        tel: this.ruleForm.phone_number
      }).then(resp => {
        if(this.checkMobile(tel)){
          let time = 60;
          this.buttonText = "已发送";
          this.isDisabled =true;
          if(this.flag){
            this.flag = false;
            let timer = setInterval(() => {
              time--;
              this.buttonText = time + "秒";
              this.message("发送成功，请注意查收")
              if(time === 0) {
                clearInterval(timer);
                this.buttonText = "重新获取";
                this.isDisabled = false;
                this.flag = true;
              }
            },1000);
          }
        }
      }).catch((failResponse) => {
        console.log('failResponse');
        return false
      })
    },
    //提交注册
    submitForm(formName) {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$axios({
            method: "POST",
            url: "/permissions/register",
            header: {

            },
            data: {
              tel: this.ruleForm.phone_number,
              code: this.ruleForm.phone_code,
              pass: this.ruleForm.password,
              check: this.ruleForm.checkPass
            },
          }).then((res) => {
            if(res.data.message === "success"){
              this.$router.push("/login");
              this.$notify({
                title: "提示",
                message: "注册成功",
                duration: 2000
              });
            }else{
              this.$notify({
                title: "提示",
                message: "注册失败",
                duration: 2000
              });
            }
          }).catch(() => {
            this.$notify({
              title: "提示",
              message: "用户访问错误",
              duration: 2000
            });
          });
        }else{
          console.log("error submit!");
          return false;
        }
      });
    },
    //进入登录页
    gotoLogin(){
      this.$router.push({
        path: '/login'
      });
    },
    //验证手机号
    checkMobile(str) {
      let re = /^1\d{10}$/;
      if(re.test(str)){
        return true;
      }else{
        return false;
      }
    }
  }
}
</script>

<style scoped>
.register {
  width: 50%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #E9E9E9;
}
.register .title {
  width: 100%;
  padding-left: 18px;
  height:10px;
  font-size: 1.125rem;
  letter-spacing: 1px;
  display: flex;
  flex-direction: row;
  color: #404040;
}
.register .title .tip {
  padding-left: 20px;
  margin-top: 5px;
  font-size: 0.75rem;
  color: #444444;
}
.el-form {
  /*display: flex;*/
  /*flex-direction: column;*/
  /*padding-top: 50px;*/
}
.codeContainer div {
  float: right;
  cursor: pointer;
}
.codeContainer {
  display: flex;
  flex-direction: row-reverse;
}
.codeContainer .checkCode {
  flex:2;
}
.codeContainer .el-button {
  background: #d3e5f1;
  border-color: #d3e5f1;
  color: #00618b;
  margin-left: 10px;
  font-size: 0.85em;
}
.button2 .el-button {
  font-size: 1.5em;
  text-align: center;
  margin: 0 auto;
  background: #ff9913;
  border-color: #ff9913;
}
.el-divider {
  margin: 0 auto;
}
</style>