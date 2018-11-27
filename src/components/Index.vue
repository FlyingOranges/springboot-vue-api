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
            <h4>所有项目</h4>
          </div>
          <div class="content-project">

            <div class="l project-text" v-for="item in project_list">
              <router-link :to="{path:'/api/list/'+item.id}" class="text-main tc ng-scope">
                <h4 class="project-name ng-binding">{{item.name}}</h4>
              </router-link>
              <p class="project_intro text-opacity text-black p10 ng-binding">{{item.info}}</p>
            </div>

          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import vHeader from './common/head';
import vFooter from './common/footer';
import vLeftNavbar from './common/navbar_left';
import vMenuLeft from './common/menu_left';
import { requestListProject } from '../utils/http.js';

export default {
  name: 'Index',
  components: {
    'v-header': vHeader,
    'v-footer': vFooter,
    'v-left-navbar': vLeftNavbar,
    'v-menu-left': vMenuLeft
  },
  data () {
    return {
      msg: '欢迎使用vue.js',
      status: null,
      project_list: null
    }
  },
  created () {

  },
  methods: {
    getAllList () {

      var params = {};
      requestListProject(params).then(res => {
        this.project_list = res.data
      }).catch(error => {
        console.log(error);
      });
    },
    getMyList () {
      var params = { flag: 'yes' };
      requestListProject(params).then(res => {
        this.project_list = res.data
      }).catch(error => {
        console.log(error);
      });
    },
    projectList (status) {
      switch (status) {
        case 'all':
          //所有项目
          this.getAllList();
          break;
        case 'my':
          //我创建项目
          this.getMyList();
          break;
        default:
          //默认为所有项目
          this.getAllList();
          break;
      }
    },
  }
}
</script>