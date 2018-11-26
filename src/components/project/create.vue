<style scoped>
.main {
  margin-left: 5%;
  bottom: 0;
  top: 56px;
  position: absolute;
  width: 95%;
  overflow-x: hidden;
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
}
.project-text {
  margin: 5px;
  float: left;
  border: 1px solid #ddd;
  background-color: #fff;
  padding: 5px;
  width: 200px;
  cursor: pointer;
}
.project-text h4 {
  color: #05aa88;
}
.project-text a {
  text-decoration: none;
}
.interface-group {
  width: 100%;
  float: left;
}
.interface-group:last-child {
  margin-bottom: 20px;
}
.interface-name {
  border-top: 0;
  font-size: 16px;
  font-weight: 700;
  padding: 10px;
  padding-left: 80px;
  float: left;
}
.interface-text {
  border-top: 0;
  font-size: 16px;
  padding: 10px;
  padding-left: 200px;
}
.api-input {
  width: 400px;
  padding: 2px 5px;
  color: #434a54;
  border-color: #aab2bd;
  display: block;
  height: 20px;
  font-size: 14px;
  line-height: 1.42857143;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}
.api-input:focus {
  border: 1px solid #05aa88;
}
.project-into {
  width: 400px;
  height: 300px;
  font-size: 14px;
  color: #434a54;
  border-color: #aab2bd;
  border-radius: 4px;
  padding: 2px 5px;
  display: block;
  outline: none;
  border: 1px solid #ccc;
  background-color: #fff;
  background-image: none;
  resize: none;
}
.project-into:focus {
  border: 1px solid #05aa88;
}
.project-sbumit {
  display: block;
  width: 50px;
  height: 40px;
  background-color: #05aa88;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  outline: none;
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
        <v-menu-left v-on:checkProject="projectList"></v-menu-left>
      </div>
      <div class="main-content">
        <div class="main-content-div">
          <div class="content-title">
            <h4>{{ title }}</h4>
          </div>
          <div class="content-project">

            <div class="interface-group interface-name-group">
              <div class="interface-name">项目名称:</div>
              <div class="interface-text">
                <input class="api-input" placeholder="必填,示例 阿里巴巴的淘宝" v-model="name">
              </div>
            </div>

            <div class="interface-group interface-name-group">
              <div class="interface-name">项目简介:</div>
              <div class="interface-text">
                <textarea class="project-into" v-model="info" placeholder="必填,示例 阿里旗下最牛逼的电商网站"></textarea>
              </div>
            </div>

            <div class="interface-group interface-name-group">
              <div class="interface-name"></div>
              <div class="interface-text">
                <button class="project-sbumit" v-on:click="projectSubmit">提交</button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>

    <v-dialog />
  </div>
</template>

<script>
import vHeader from './../common/head';
import vFooter from './../common/footer';
import vLeftNavbar from './../common/navbar_left';
import vMenuLeft from './../common/menu_left';
import { requestCreateProject } from './../../utils/http.js';

export default {
  name: 'ProjectCreate',
  components: {
    'v-header': vHeader,
    'v-left-navbar': vLeftNavbar,
    'v-menu-left': vMenuLeft
  },
  data () {
    return {
      title: '创建项目',
      name: '',
      info: ''
    }
  },
  created () {
  },
  methods: {
    projectSubmit () {
      if (this.name.length < 1) {
        this.msgAlert('请输入项目名称');
        return false;
      }
      if (this.info.length < 1) {
        this.msgAlert('请输入项目简介');
        return false;
      }

      var self = this;
      var params = { name: this.name, info: this.info };
      requestCreateProject(params).then(res => {
        if (res.code != 0) {
          self.msgAlert(res.message, '警告');
          return false;
        }

        self.msgAlert(res.message, '提示');
      }).catch(error => {
        console.log(error);
      });

    },
    msgAlert (msg, title) {
      this.$modal.show('dialog', {
        title: title,
        text: msg,
        buttons: [
          {
            title: '',          // Button title
            default: true,      // Will be triggered by default if 'Enter' pressed.
            handler: () => { }  // Button click handler
          },
          {
            title: '关闭'
          }
        ]
      })
    },
    projectList () {
      //方法函数占位(没有任何卵用)
    }
  }
}
</script>