<style scoped>
.main {
  margin-left: 5%;
  bottom: 0;
  top: 56px;
  position: fixed;
  width: 100%;
}
.main-left {
  float: left;
  border-right: solid 1px #ddd;
  border-bottom: solid 1px #ddd;
  height: 100%;
  width: 200px;
}
.main-content {
  height: 100%;
  margin-left: 200px;
  position: relative;
}
.main-content-div {
  padding: 20px;
}
.content-title {
  text-align: left;
}
.content-title h4 {
  margin-left: 2em;
  font-size: 18px;
  font-weight: 400;
}
.content-project {
  margin-left: 2em;
  width: 100%;
  position: absolute;
  border-top: 1px solid #ddd;
  text-align: left;
}
.content-retrieve {
  margin-top: 5px;
  width: 100%;
}
.content-retrieve input {
  height: 30px;
  line-height: 30px;
  border: 0px;
  outline: none;
  border-radius: 50px;
  padding-left: 10px;
  width: 200px;
}
.content-retrieve button {
  height: 30px;
  width: 50px;
  background-color: #05aa88;
  border-radius: 50px;
  outline: none;
  color: #666;
}
.content-api-list {
  margin-top: 20px;
  padding: 10px;
}
.api-group-list {
  margin-top: 15px;
  text-align: center;
  float: left;
  font-size: 14px;
  width: 100%;
}
.api-title {
  float: left;
  width: 10%;
}
.api-group {
  float: left;
  width: 20%;
}
.api-group a {
  color: #3bafda;
  text-decoration: none;
}
.api-info {
  float: left;
  width: 20%;
}
.api-action {
  float: left;
}
.api-action a {
  text-decoration: none;
  color: #434a54;
}
.span-method {
  display: inline;
  padding: 0.2em 0.6em 0.3em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25em;
}
.span-get {
  background-color: #8cc152;
  border-color: #8cc152;
}
.span-post {
  background-color: #37bc9b;
  border-color: #37bc9b;
}
.span-put {
  background-color: #f6bb42;
  border-color: #f6bb42;
}
.span-delete {
  background-color: #da4453;
  border-color: #da4453;
}
.span-patch {
  background-color: #3bafda;
  border-color: #3bafda;
}
.span-head {
  background-color: #8cc152;
  border-color: #8cc152;
}
.span-options {
  color: #434a54;
  background-color: #fff;
  border: 1px solid #aab2bd;
}
.api-button {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
  outline: none;
}
.api-info-button {
  background-color: #fff;
  color: #434a54;
  border-color: #aab2bd !important;
}
.api-edit-button {
  background-color: #37bc9b;
  border-color: #37bc9b;
  color: #fff;
}
.api-delete-button {
  background-color: #da4453;
  border-color: #da4453;
  color: #fff;
}
</style>

<template>

  <div class="content">
    <!-- S header -->
    <v-header></v-header>
    <!-- E header -->

    <!-- S left navbar -->
    <v-left-navbar></v-left-navbar>
    <!-- E left navbar -->

    <div class="main">
      <div class="main-left">
        <v-api-list-left></v-api-list-left>
      </div>
      <div class="main-content">
        <div class="main-content-div">
          <div class="content-title">
            <h4>{{ title }}</h4>
          </div>
          <div class="content-project">

            <div class="content-retrieve">
              <input type="text" placeholder="搜索接口">
              <button type="button">检索</button>
            </div>

            <div class="content-api-list">

              <div class="api-group-list">
                <div class="api-title">
                  <span class="span-method span-get">
                    GET
                  </span>
                </div>
                <div class="api-group">
                  <router-link to="">用户模块 - api_xxx</router-link>
                </div>
                <div class="api-info">获取订单列表数据</div>
                <div class="api-action">
                  <button class="api-button api-info-button">
                    <router-link to="/api/info">
                      详情
                    </router-link>
                  </button>
                  <button class="api-button api-edit-button">
                    <router-link to="/api/edit">
                      编辑
                    </router-link>
                  </button>
                  <button class="api-button api-delete-button">删除</button>
                </div>
              </div>

              <div class="api-group-list">
                <div class="api-title">
                  <span class="span-method span-post">
                    POST
                  </span>
                </div>
                <div class="api-group">
                  <router-link to="">接口名称</router-link>
                </div>
                <div class="api-info">接口用途</div>
                <div class="api-action">
                  <button class="api-button api-info-button">
                    <router-link to="/api/info">
                      详情
                    </router-link>
                  </button>
                  <button class="api-button api-edit-button">编辑</button>
                  <button class="api-button api-delete-button">删除</button>
                </div>
              </div>

              <div class="api-group-list">
                <div class="api-title">
                  <span class="span-method span-put">
                    PUT
                  </span>
                </div>
                <div class="api-group">
                  <router-link to="">接口名称</router-link>
                </div>
                <div class="api-info">接口用途</div>
                <div class="api-action">
                  <button class="api-button api-info-button">
                    <router-link to="/api/info">
                      详情
                    </router-link>
                  </button>
                  <button class="api-button api-edit-button">编辑</button>
                  <button class="api-button api-delete-button">删除</button>
                </div>
              </div>

              <div class="api-group-list">
                <div class="api-title">
                  <span class="span-method span-delete">
                    DELETE
                  </span>
                </div>
                <div class="api-group">
                  <router-link to="">接口名称</router-link>
                </div>
                <div class="api-info">接口用途</div>
                <div class="api-action">
                  <button class="api-button api-info-button">
                    <router-link to="/api/info">
                      详情
                    </router-link>
                  </button>
                  <button class="api-button api-edit-button">编辑</button>
                  <button class="api-button api-delete-button">删除</button>
                </div>
              </div>

              <div class="api-group-list">
                <div class="api-title">
                  <span class="span-method span-patch">
                    PATCH
                  </span>
                </div>
                <div class="api-group">
                  <router-link to="">接口名称</router-link>
                </div>
                <div class="api-info">接口用途</div>
                <div class="api-action">
                  <button class="api-button api-info-button">
                    <router-link to="/api/info">
                      详情
                    </router-link>
                  </button>
                  <button class="api-button api-edit-button">编辑</button>
                  <button class="api-button api-delete-button">删除</button>
                </div>
              </div>

              <div class="api-group-list">
                <div class="api-title">
                  <span class="span-method span-head">
                    HEAD
                  </span>
                </div>
                <div class="api-group">
                  <router-link to="">接口名称</router-link>
                </div>
                <div class="api-info">接口用途</div>
                <div class="api-action">
                  <button class="api-button api-info-button">
                    <router-link to="/api/info">
                      详情
                    </router-link>
                  </button>
                  <button class="api-button api-edit-button">编辑</button>
                  <button class="api-button api-delete-button">删除</button>
                </div>
              </div>

              <div class="api-group-list">
                <div class="api-title">
                  <span class="span-method span-options">
                    OPTIONS
                  </span>
                </div>
                <div class="api-group">
                  <router-link to="">接口名称</router-link>
                </div>
                <div class="api-info">接口用途</div>
                <div class="api-action">
                  <button class="api-button api-info-button">
                    <router-link to="/api/info">
                      详情
                    </router-link>
                  </button>
                  <button class="api-button api-edit-button">编辑</button>
                  <button class="api-button api-delete-button">删除</button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import vHeader from './../common/head';
import vFooter from './../common/footer';
import vLeftNavbar from './../common/navbar_left';
import vApiLIstLeft from './../common/api-list-left';

export default {
  name: 'ApiList',
  components: {
    'v-header': vHeader,
    'v-footer': vFooter,
    'v-left-navbar': vLeftNavbar,
    'v-api-list-left': vApiLIstLeft
  },
  data () {
    return {
      title: '接口列表',
      msg: '欢迎使用vue.js'
    }
  },
}
</script>


