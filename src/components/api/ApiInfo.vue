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
                <div class="interface-text">{{ data.interfaceName }}</div>
              </div>

              <div class="interface-group interface-name-group">
                <div class="interface-name">接口用途:</div>
                <div class="interface-text">{{ data.interfaceUse }}</div>
              </div>

              <div class="interface-group interface-name-group">
                <div class="interface-name">请求方式:</div>
                <div
                  class="interface-text"
                  v-if="data.interfaceType == 1"
                >GET</div>
                <div
                  class="interface-text"
                  v-else-if="data.interfaceType == 2"
                >POST</div>
                <div
                  class="interface-text"
                  v-else-if="data.interfaceType == 3"
                >PUT</div>
                <div
                  class="interface-text"
                  v-else-if="data.interfaceType == 4"
                >DELETE</div>
                <div
                  class="interface-text"
                  v-else-if="data.interfaceType == 5"
                >PATCH</div>
                <div
                  class="interface-text"
                  v-else-if="data.interfaceType == 6"
                >HEAD</div>
                <div
                  class="interface-text"
                  v-else-if="data.interfaceType == 7"
                >OPTIONS</div>
              </div>

              <div class="interface-group interface-name-group">
                <div class="interface-name">接口地址:</div>
                <div class="interface-text">{{ data.interfaceUrl }}</div>
              </div>

              <div class="interface-group interface-name-group" v-if="data.interfaceParams != '[]'">
                <div class="interface-name">输入参数:</div>
                <div class="interface-text">
                  <table class="params-table">
                    <tr>
                      <th width="100">Key</th>
                      <th width="100">参数类型</th>
                      <th width="100">是否必须</th>
                      <th>参数解释</th>
                    </tr>

                    <tr v-for="(item,index) in data.interfaceParams">
                      <td>{{item.params_name}}</td>
                      <td v-if="item.params_type == 1">int</td>
                      <td v-else-if="item.params_type == 2">long</td>
                      <td v-else-if="item.params_type == 3">float</td>
                      <td v-else-if="item.params_type == 4">string</td>
                      <td v-else-if="item.params_type == 5">boolen</td>
                      <td v-else-if="item.params_type == 6">file</td>
                      <td v-else-if="item.params_type == 7">array</td>
                      <td v-else-if="item.params_type == 8">json</td>
                      <td v-else-if="item.params_type == 9">xml</td>
                      <td v-if="item.params_necessary == 1">必传</td>
                      <td v-else>选传</td>
                      <td>{{item.params_explain}}</td>
                    </tr>

                  </table>
                </div>
              </div>
            </div>

            <div class="interface-group interface-name-group">
              <div class="interface-name">返回数据:</div>
              <div class="interface-text">
                <div class="reponse-data">
                  <pre v-html="data.interfaceJson"></pre>
                </div>
              </div>
            </div>

            <div class="interface-group interface-name-group">
              <div class="interface-name">接口备注:</div>
              <div class="interface-text">
                <div class="reponse-data">
                  <pre v-html="data.interfaceNote"></pre>
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
import { requestInterfaceInfo } from '../../utils/http.js';

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
      data: [],
    }
  },
  created () {
    this.id = this.$route.params.id;
    this.getInterfaceInfo(this.id);
  },
  methods: {
    getInterfaceInfo (id) {
      var self = this;
      var params = { id: id };
      requestInterfaceInfo(params).then(res => {
        console.log(res);
        //转换返回数据
        res.data.interfaceJson = self.JsonToString(res.data.interfaceJson);

        if (res.data.interfaceParams != '[]') {
          res.data.interfaceParams = JSON.parse(res.data.interfaceParams);
        }
        self.data = res.data;
      }).catch(error => {
        console.log(error);
      });
    },
    JsonToString: (json) => {
      var jObj = JSON.parse(json);
      var xxx = JSON.stringify(jObj, null, 4);

      return xxx;
    },
    ParamsToList (jsonStr) {
      return jsonStr.parseJSON();
    }
  }
}
</script>


