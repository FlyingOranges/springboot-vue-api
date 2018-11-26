<style scoped>
.head-div {
  height: 56px;
}
.login-navbar {
  position: fixed;
  z-index: 999;
  top: 0;
}
.navbar {
  border-bottom: 1px solid #05aa88;
  background-color: #fff;
  right: 0;
  left: 0;
  display: flex;
  margin-bottom: 0;
  position: fixed;
  top: 0;
}
.container {
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 10px;
  margin-right: auto;
  margin-left: 15%;
  float: left;
}
.container > .navbar-header {
  margin-right: 0;
  margin-left: 0;
}
.navbar-collapse {
  float: left;
  flex-grow: 1;
  margin-right: 10%;
}
.navbar-collapse .navbar-nav {
  float: left;
}
.navbar-collapse .ng-scope {
  float: left;
}
.navbar-collapse ul li {
  list-style-type: none;
}
.navbar-collapse .navbar-nav {
  float: left;
}
.navbar-collapse .nav-main li {
  float: left;
  margin-left: 25px;
}
.navbar-collapse .nav-main li a {
  text-decoration: none;
  color: #8c8c8c;
}
.navbar-collapse .navbar-right {
  float: right;
}
.navbar-collapse .navbar-right li a {
  text-decoration: none;
  color: #8c8c8c;
}
</style>
<template>
  <div class="head-div">
    <div class="navbar login-navbar" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand"><img src="../../assets/logo.png" width="120"></a>
        </div>
      </div>
      <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav nav-main">
          <li class=""><a href="/">首页</a></li>
          <li class=""><a href="">帮助</a></li>
          <li class=""><a href="">社区</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right navbar-login ng-scope">

          <li v-if="!status">
            <router-link to="/login">登录</router-link>
          </li>
          <li v-else>{{ nickname }}</li>
        </ul>
      </div>
    </div>
    <div>Api管理系统</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      nickname: '',
      status: false
    }
  },
  created () {
    let userJson = localStorage.getItem('UserInfo');

    if (userJson != null) {
      var user = JSON.parse(userJson);
      if (user) {
        this.status = true;
      }
      this.nickname = user.nickname;
    }

  }
}
</script>


