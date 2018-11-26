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

      jsonObj: null,
      note: null,
      responseJson: null,
      paramsData: [],
      editData: {
        title: '接口编辑',
        items: {
          interface_name: '接口名称 输入框得地方啦',
          interface_use: "接口用途 输入框得地方啦",
          interface_url: "接口地址 输入框得地方啦",
          interface_params: [],
          interface_json: "{}",
          interface_note: "接口备注 输入框的地方啦",
        }
      }
    }
  },
  created () {
  },

}
</script>