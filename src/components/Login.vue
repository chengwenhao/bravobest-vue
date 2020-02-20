/* eslint-disable */
<template>
  <body id="poster">
  <el-form class="login-container" label-position="left"
           label-width="0px">
    <h3 class="login_title">系统登录</h3>
    <el-form-item>
      <el-input type="text" v-model="loginForm.loginName"
                auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="loginForm.password"
                auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login">登录</el-button>
    </el-form-item>
  </el-form>
  </body>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm:{
        loginName: 'admin',
        password: 'admin'
      }
    }
  },
  methods: {
    login() {
        var _this = this;
        this.$axios.post('/login',
          this.$qs.stringify(
            {
              loginName : this.loginForm.loginName,
              password : this.loginForm.password
            }
          )
        ).then(successResponse => {
          console.log(successResponse.data);
          if (successResponse.data.code === 0){
            _this.$store.commit('login', _this.loginForm);
            this.$router.replace({path: path === '/' || path === undefined ? '/index' : path});
            // var path = this.$route.query.redirect;
          } else {
            alert(successResponse.data.message);
          }
        }).catch(failResponse => {
        })
    }

  }
}
</script>

<style scoped>
  #poster {
    background:url("../assets/login_bg.jpg") no-repeat;
    background-position: left;
    height: 100%;
    width: 100%;
    background-size: cover;
    position : fixed;
  }
  body{
    margin: 0px;
  }
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>
