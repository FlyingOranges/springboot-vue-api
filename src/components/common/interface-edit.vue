<style scoped>
.main-content {
  height: 100%;
  margin-left: 200px;
  position: relative;
}
.main-content-div {
  padding: 20px;
  height: 100%;
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
.interface-group:last-child {
  margin-bottom: 20px;
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
.params-table th {
  border: 1px solid #ddd;
  width: 100px;
  height: 30px;
}
.params-table th:nth-last-child(2) {
  width: auto;
}
.params-table th:last-child {
  width: 30px;
  height: 30px;
}
.params-intpu-width-all {
  width: 100%;
}
.reponse-data {
  width: 80%;
  background-color: #fff;
  float: left;
}
.reponse-data pre {
  padding-left: 5px;
}
.api-input {
  width: 300px;
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
.api-select {
  width: 150px;
  padding: 2px 5px;
  height: 20px;
  outline: none;
}
.api-select:focus {
  border: 1px solid #05aa88;
}
.interface-add-button {
  border-top: 0;
  font-size: 16px;
  padding: 10px;
  padding-left: 100px;
}
.interface-add-button button {
  height: 30px;
  width: 30px;
  outline: none;
  background-color: #05aa88;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}
.params-text {
  padding-top: 0;
}
.params-table input {
  outline: none;
  border: 0;
  padding: 3px 3px;
}
.params-table button {
  width: 100%;
  height: 100%;
  padding: 0;
  height: 30px;
  outline: none;
  color: #fff;
  background-color: #da4453;
}
.params-table select {
  outline: none;
  border: 0;
  padding: 3px 3px;
  width: 100%;
  background-color: #fff;
}
.reponse-data-half {
  width: 80%;
  background-color: #fff;
  padding: 5px;
}
.reponse-data-half pre {
  overflow: auto;
}
.reponse-data-half textarea {
  width: 98%;
  outline: none;
  border: 0;
  padding: 5px;
  resize: none;
}
.reponse-data-half:last-child {
  border-top: 1px solid #ddd;
}
.interface-submit-button {
  width: 50px;
  height: 40px;
  background-color: #05aa88;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  outline: none;
}
.interface-submit-button:focus {
  background-color: 1px solid #ddd;
}
.reponse-note {
  width: 80%;
  height: 100px;
  outline: none;
  resize: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
}
.reponse-note:focus {
  border: 1px solid #05aa88;
}
</style>

<template>
  <div>
    <div class="main-content">
      <div class="main-content-div">
        <div class="content-title">
          <h4>{{ editData.title }}</h4>
        </div>
        <div class="content-project">

          <div class="content-api-list">
            <div class="interface-group interface-name-group">
              <div class="interface-name">接口名称:</div>
              <div class="interface-text">
                <input class="api-input" placeholder="必填(非中文),示例 getOrderList" v-model="edit.items.interface_name">
              </div>
            </div>

            <div class="interface-group interface-name-group">
              <div class="interface-name">接口用途:</div>
              <div class="interface-text">
                <input class="api-input" placeholder="必填,示例 获取订单列表数据" v-model="edit.items.interface_use">
              </div>
            </div>

            <div class="interface-group interface-name-group">
              <div class="interface-name">请求方式:</div>
              <div class="interface-text">
                <select class="api-select" v-model="edit.items.interface_type">
                  <option selected value="">请选择请求方式</option>
                  <option value="1">GET</option>
                  <option value="2">POST</option>
                  <option value="3">PUT</option>
                  <option value="4">DELETE</option>
                  <option value="5">PATCH</option>
                  <option value="6">HEAD</option>
                  <option value="7">OPTIONS</option>
                </select>
              </div>
            </div>

            <div class="interface-group interface-name-group">
              <div class="interface-name">接口地址:</div>
              <div class="interface-text">
                <input class="api-input" placeholder="必填,示例 /order/list" v-model="edit.items.interface_url">
              </div>
            </div>

            <div class="interface-group interface-name-group">
              <div class="interface-name">输入参数:</div>
              <div class="interface-add-button">
                <button class="add-button" v-on:click="addParams">+</button>
              </div>
              <div class="interface-text params-text">
                <table class="params-table">
                  <tr v-for="(item, key) in edit.items.interface_params">
                    <th>
                      <input type="text" placeholder="参数名(key)" v-model="item.params_name">
                    </th>
                    <th>
                      <select v-model="item.params_type">
                        <option value="">参数类型</option>
                        <option value="1">int</option>
                        <option value="2">long</option>
                        <option value="3">float</option>
                        <option value="4">string</option>
                        <option value="5">boolen</option>
                        <option value="6">file</option>
                        <option value="7">array</option>
                        <option value="8">json</option>
                        <option value="9">xml</option>
                      </select>
                    </th>
                    <th>
                      <select v-model="item.params_necessary">
                        <option value="1">必须传入</option>
                        <option value="0">可选传入</option>
                      </select>
                    </th>
                    <th>
                      <input class="params-intpu-width-all" type="text" placeholder="参数解释" v-model="item.params_explain">
                    </th>
                    <th>
                      <button type="button" v-on:click="delParams(key)">X</button>
                    </th>
                  </tr>

                </table>
              </div>
            </div>

            <div class="interface-group interface-name-group">
              <div class="interface-name">返回数据:</div>
              <div class="interface-text">
                <div class="reponse-data-half">
                  <textarea v-model="edit.items.interface_json" v-on:input="textChange" placeholder="请输入返回的json字符串"></textarea>
                </div>
                <div class="reponse-data-half">
                  <pre v-html="jsonObj"></pre>
                </div>
              </div>
            </div>

            <div class="interface-group interface-name-group">
              <div class="interface-name">接口备注:</div>
              <div class="interface-text">
                <textarea class="reponse-note" v-model="edit.items.interface_note" placeholder="请输入接口备注"></textarea>
              </div>
            </div>

            <div class="interface-group interface-name-group">
              <div class="interface-name"></div>
              <div class="interface-text">
                <button class="interface-submit-button" v-on:click="submitClick">确定</button>
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
import { requestCreateInterface } from '../../utils/http.js';

export default {
  props: [
    'editData'
  ],
  data () {
    return {
      jsonObj: '',
      edit: this.editData
    }
  },
  mounted () {
    //页面完成渲染之后,执行json字符串转成格式化json,并打印在页面上
    this.textChange();
  },
  methods: {
    submitClick () {

      var params = this.fromRequest();
      if (!params) {
        return false;
      }

      requestCreateInterface(params).then(res => {
        console.log('success');
      }).catch(error => {
        console.log(error);
      });
    },
    fromRequest () {
      var self = this;
      var requestData = {};

      if (!this.editData.items.interface_name.length) { this.msgAlert('请输入接口名称'); return false; }
      requestData['interface_name'] = this.editData.items.interface_name;

      if (!this.editData.items.interface_use.length) { this.msgAlert('请输入接口用途'); return false; }
      requestData['interface_use'] = this.editData.items.interface_use;

      if (!this.editData.items.interface_type.length) { this.msgAlert('请选择请求方式'); return false; }
      requestData['interface_type'] = this.editData.items.interface_type;

      if (!this.editData.items.interface_url.length) { this.msgAlert('请输入接口地址'); return false; }
      requestData['interface_url'] = this.editData.items.interface_url;

      if (!this.editData.items.interface_json.length) { this.msgAlert('请输入返回数据'); return false; }
      requestData['interface_json'] = this.editData.items.interface_json;

      requestData['interface_project_id'] = this.editData.items.interface_project_id;
      requestData['interface_note'] = this.editData.items.interface_note;

      var paramStatus = true;
      var paramsItem = this.editData.items.interface_params;
      Object.keys(paramsItem).map(function (key) {
        if (!paramsItem[key].params_name) {
          paramStatus = false;
          self.msgAlert('请输入参数名(key)');
          return;
        }
        if (!paramsItem[key].params_type.length) {
          paramStatus = false;
          self.msgAlert('请选择参数类型');
          return;
        }
        if (!paramsItem[key].params_explain) {
          paramStatus = false;
          self.msgAlert('请输入参数解释');
          return;
        }
      });

      if (paramStatus) {

        console.log(paramsItem);
        // requestData.push('interface_params',JSON.stringify(paramsItem));
        requestData['interface_params'] = JSON.stringify(paramsItem);

        // requestData['interface_params'] = paramsItem;
      }

      console.log(requestData);
      return requestData;
    },
    JsonToString: (json) => {
      var jObj = JSON.parse(json);
      var xxx = JSON.stringify(jObj, null, 4);

      return xxx;
    },
    addParams () {
      this.editData.items.interface_params.push({ params_type: "", params_necessary: 1 });
    },
    delParams (key) {
      this.editData.items.interface_params.splice(key, 1);
    },
    textChange () {
      if (!this.isJSON(this.editData.items.interface_json)) {
        return false;
      }
      this.jsonObj = this.JsonToString(this.editData.items.interface_json);
    },
    //判断是否为json字符串
    isJSON (str) {
      if (str.length < 1) {
        return false;
      }
      if (typeof str == 'string') {
        try {
          var obj = JSON.parse(str);
          if (typeof obj == 'object' && obj) {
            return true;
          } else {
            return false;
          }
        } catch (e) {
          // console.log('error：' + str + '!!!' + e);
          return false;
        }
      }
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


