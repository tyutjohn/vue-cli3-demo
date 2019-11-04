<!--
 * @Author: johnwang
 * @since: 2019-11-02 10:42:43
 * @lastTime: 2019-11-04 16:34:47
 * @LastAuthor: Do not edit
 * @Github: https://github.com/tyutjohn
 -->
<template>
  <div class="bg">
    <div class="container">
      <el-card class="box-card">
        <el-row>
          <el-col :span="12">
            <img :src="BoardSrc" width="100%" height="100%">
          </el-col>
          <el-col :span="12">
            <el-form :label-position="labelPosition" label-width="80px" :model="formlogin" style="width:100%">
              <p class="form-p">vue-cli3后台管理系统</p>
              <el-form-item label="用户名">
                <el-input v-model="formlogin.email" style="width:80%" @keyup.enter.native="nextFocus()"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="formlogin.password" style="width:80%" @keyup.enter.native="login()" id="password" show-password>
                </el-input>
              </el-form-item>
              <el-button type="primary" class="button"
                style="margin:0 auto;display:block;border-radius:20px;font-size:16px" @click="login()">登陆</el-button>
            </el-form>
            <p class="bottom">johnwang版权所有@ 2019-2029</p>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>
<style>
  .bg {
    background: url("../assets/images/login-bg.png") no-repeat center;
    background-size: 100% 100%;
    height: 100%;
    position: fixed;
    width: 100%;
  }

  .container {
    width: 60%;
    margin: 0 auto;
    margin-top: 130px;
  }

  .form-p {
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 4px;
    margin: 80px 0;
  }

  .button {
    width: 200px;
    letter-spacing: 4px;
  }

  .bottom {
    font-size: 6px;
    color: #747171b6;
    text-align: center;
    margin-bottom: 0;
    margin-top: 50px;
  }
</style>

<script>
  import {
    Loading
  } from 'element-ui';
  export default {
    data() {
      return {
        BoardSrc: require("../assets/images/login-borad.png"),
        BgSrc: require("../assets/images/login-bg.png"),
        labelPosition: 'right',
        formlogin: {
          email: '',
          password: ''
        },
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      //登陆账号
      login() {
        this.axios.post('/api/users/login', {
          email: this.formlogin.email,
          password: this.formlogin.password
        }).then(res => {
          if (res.status == 200) {
            Loading.service({
              fullscreen: true,
              text: '登陆成功，正在跳转'
            });
            setTimeout(() => {
              //将用户名和token放入sessionStorage
              sessionStorage.setItem("userName", this.formlogin.email);
              sessionStorage.setItem("userToken", res.data.token);
              //将信息存入vuex
              this.$store.dispatch("setUser", this.formlogin.email);
              this.$store.dispatch("setToken", res.data.token);
              this.$router.push({
                path: '/Home'
              })
              Loading.service().close();
            }, 1000);
          }
        }).catch(err => {
          if (err.response.status == 404) {
            this.$message.error(err.response.data.email)
          } else if (err.response.status == 400) {
            this.$message.error(err.response.data.password)
          } else {
            this.$message.error(err.message)
          }
        })
      },
      //回车焦点跳转
      nextFocus() {
        document.querySelector("#password").focus()
      }
    },

    watch: {}

  }
</script>