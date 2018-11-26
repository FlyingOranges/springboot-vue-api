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
  width: 200px;
  position: fixed;
  top: 56px;
  bottom: 0;
}
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

  <div class="content">
    <!-- S header -->
    <v-header></v-header>
    <!-- E header -->

    <div class="left-navbar">
      <!-- S left navbar -->
      <v-left-navbar></v-left-navbar>
      <!-- E left navbar -->
    </div>

    <div class="main">
      <div class="main-left">
        <v-api-list-left></v-api-list-left>
      </div>
      <v-interface-edit v-bind:editData="editData"></v-interface-edit>
    </div>

  </div>
</template>

<script>
import vHeader from './../common/head';
import vFooter from './../common/footer';
import vLeftNavbar from './../common/navbar_left';
import vApiLIstLeft from './../common/api-list-left';
import vInterfaceEdit from './../common/interface-edit';

export default {
  name: 'ApiInfo',
  components: {
    'v-header': vHeader,
    'v-footer': vFooter,
    'v-left-navbar': vLeftNavbar,
    'v-api-list-left': vApiLIstLeft,
    'v-interface-edit': vInterfaceEdit,
  },
  data () {
    return {
      editData: {
        title: '添加接口',
        items: {
          interface_name: '',
          interface_use: "",
          interface_url: "",
          interface_params: [],
          interface_json: "",
          interface_note: "",
        }
      },
    }
  },
  created () {
    // this.textChange();
  },
  methods: {
  }
}
</script>