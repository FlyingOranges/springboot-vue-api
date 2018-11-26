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
  height: 95%;
  width: 200px;
  position: fixed;
  top: 56px;
  bottom: 0;
}
.main-content {
  height: 100%;
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
.interface-group {
  width: 100%;
  float: left;
}
.interface-name {
  border-top: 0;
  font-size: 16px;
  font-weight: 700;
  padding: 10px;
  float: left;
}
.interface-text {
  border-top: 0;
  font-size: 16px;
  padding: 10px;
  padding-left: 100px;
}
.params-table {
  background-color: #fff;
  width: 80%;
  max-width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  font-size: 14px;
  padding: 10px;
}
.params-table tr {
  border-top: 1px solid #ddd;
}
.params-table tr th td {
  padding: 10px;
}
.reponse-data {
  width: 80%;
  background-color: #fff;
  float: left;
}
.reponse-data pre {
  padding-left: 5px;
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

            <div class="content-api-list">
              <div class="interface-group interface-name-group">
                <div class="interface-name">接口名称:</div>
                <div class="interface-text">api_xxx</div>
              </div>

              <div class="interface-group interface-name-group">
                <div class="interface-name">接口用途:</div>
                <div class="interface-text">获取订单用户信息</div>
              </div>

              <div class="interface-group interface-name-group">
                <div class="interface-name">请求方式:</div>
                <div class="interface-text">GET</div>
              </div>

              <div class="interface-group interface-name-group">
                <div class="interface-name">接口地址:</div>
                <div class="interface-text">/get/order/user</div>
              </div>

              <div class="interface-group interface-name-group">
                <div class="interface-name">输入参数:</div>
                <div class="interface-text">
                  <table class="params-table">
                    <tr>
                      <th width="100">Key</th>
                      <th width="100">参数类型</th>
                      <th width="100">是否必须</th>
                      <th>参数解释</th>
                    </tr>

                    <tr>
                      <td>name</td>
                      <td>string</td>
                      <td>yes</td>
                      <td>用户姓名</td>
                    </tr>

                    <tr>
                      <td>sex</td>
                      <td>int</td>
                      <td>no</td>
                      <td>用户性别(1男 2女 0未知)</td>
                    </tr>

                  </table>
                </div>
              </div>
            </div>

            <div class="interface-group interface-name-group">
              <div class="interface-name">返回数据:</div>
              <div class="interface-text">
                <div class="reponse-data">
                  <pre v-html="jsonObj"></pre>
                </div>
              </div>
            </div>

            <div class="interface-group interface-name-group">
              <div class="interface-name">接口备注:</div>
              <div class="interface-text">
                <div class="reponse-data">
                  <pre v-html="note"></pre>
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
  name: 'ApiInfo',
  components: {
    'v-header': vHeader,
    'v-footer': vFooter,
    'v-left-navbar': vLeftNavbar,
    'v-api-list-left': vApiLIstLeft
  },
  data () {
    return {
      title: '接口详情',
      msg: '欢迎使用vue.js',
      jsonObj: null,
      note: null,
    }
  },
  created () {
    var json = "{\"username\":\"111111\",\"sex\":2}";

    this.jsonObj = this.JsonToString(json);
    this.note = "username --> 用户姓名 sex --> 用户性别";
  },
  methods: {
    JsonToString: (json) => {
      var jObj = JSON.parse(json);
      var xxx = JSON.stringify(jObj, null, 4);

      return xxx;
    }
  }
}
</script>


