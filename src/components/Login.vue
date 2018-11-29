<style scoped>
.login-form {
  border: 1px solid #e6e9ed;
  width: 300px;
  margin: 0 auto;
  margin-top: 5%;
  border-radius: 15px;
  border-color: #e6e9ed;
  padding-bottom: 10px;
}
.login-form-header {
  background-color: #e6e9ed;
  border-color: #e6e9ed;
  color: #434a54;
  border-radius: 15px 15px 0 0;
}
.login-form-header span {
  font-size: 30px;
}
.header-title {
  border-color: #e6e9ed;
}
.form-input input {
  margin-top: 25px;
}
.form-control {
  width: 91%;
  display: block;
  font-size: 14px;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  right: 0;
  margin: 6px;
  padding: 6px;
  outline: none;
}
.form-submit {
  margin-top: 25px;
}
.form-submit button {
  width: 95%;
  height: 50px;
  background-color: #8cc152;
  border-color: #8cc152;
  border-radius: 4px;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
}
.form-control:focus {
  border: 1px solid #05aa88;
}
</style>

<template>
  <div class="login-vue">
    <!-- S header -->
    <v-header></v-header>
    <!-- E header -->

    <div class="login-form">
      <div class="login-form-header">
        <div class="header-title">
          <div>
            <img src="../assets/logo_a.png" width="120">
          </div>
          <span>{{ title }}</span>
        </div>
      </div>
      <div class="form-input">
        <input type="email" class="form-control" placeholder="请输入Email" v-model="username">
        <input type="password" class="form-control" placeholder="请输入密码" v-model="password">
      </div>

      <div class="form-submit">
        <button type="button" v-on:click="clickSubmit">登录</button>
      </div>
    </div>

    <!-- S footer -->
    <v-footer></v-footer>
    <!-- E footer -->

    <v-dialog />
  </div>
</template>

<script>
import vHeader from './common/head';
import vFooter from './common/footer';
import { requestLogin } from '../utils/http.js';
import { error } from 'util';

export default {
  name: 'Login',
  components: {
    'v-header': vHeader,
    'v-footer': vFooter
  },
  data () {
    return {
      title: 'API管理系统',
      username: '',
      password: '',
    }
  },
  methods: {
    clickSubmit: function () {
      if (this.username.length < 1) {
        this.msgAlert("请输入您的邮箱信息");
        return false;
      }
      if (this.password.length < 1) {
        this.msgAlert("请输入您的密码信息");
        return false;
      }

      let self = this;
      var params = { username: this.username, password: this.password };
      requestLogin(params).then(res => {
        if (res.code != 0) {
          self.msgAlert(res.message);
          return false;
        }
        var userInfo = JSON.stringify(res.data);
        localStorage.setItem("UserInfo", userInfo);

        this.$router.push({ path: '/' });
      }).catch(error => {
        console.log(error);
      });
    },
    msgAlert (msg) {
      this.$modal.show('dialog', {
        title: '警告!',
        text: msg,
        buttons: [
          {
            title: '',       // Button title
            default: true,    // Will be triggered by default if 'Enter' pressed.
            handler: () => { } // Button click handler
          },
          {
            title: '关闭'
          }
        ]
      })
    }
  }
}
</script>