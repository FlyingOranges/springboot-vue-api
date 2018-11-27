<style scoped>
.main-left {
  float: left;
  height: 100%;
  margin: 0;
  width: 200px;
}
.menu-title {
  text-align: left;
  margin-left: 2em;
}
.menu-title h3 {
  font-size: 18px;
  font-weight: 700;
}
.menu-title article {
  margin: 5px 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #666;
  word-wrap: break-word;
  word-break: normal;
}
.pb30 {
  padding-bottom: 30px;
}
.second-menu-list ul {
  margin-top: 0;
  margin-bottom: 10px;
  text-align: center;
  padding-left: 0;
}
.second-menu-list ul li {
  list-style: none;
  display: block;
  padding: 10px 25px;
  text-decoration: none;
  color: #666;
  background-color: transparent;
  cursor: pointer;
}
.second-menu-list ul li.active {
  color: #05aa88;
  font-weight: 700;
  opacity: 1;
  background-color: #ccc;
}
</style>

<template>
  <div>
    <div class="main-left">
      <div class="menu-title">
        <h3>接口</h3>
        <article>接口相关</article>
      </div>

      <div class="border-bottom pb30 mb30 second-menu-list">
        <ul>
          <li v-on:click="jumpCreate" v-bind:class="{ active : jump_create }">添加接口</li>
          <li v-on:click="jumpList" v-bind:class="{ active : jump_list }">接口列表</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      jump_create: false,
      jump_list: false,
      project_id: null
    }
  },
  created () {
    let routerName = this.$route.name;
    switch (routerName) {
      case 'ApiCreate':
        this.jump_create = true;
        break;
      case 'ApiList':
        this.jump_list = true;
        break;
      default:
        this.jump_list = true;
    }

    this.project_id = localStorage.getItem("project_id").toString();

  },
  methods: {
    jumpCreate () {
      this.$router.push({ name: 'ApiCreate', query: { id: this.project_id } });
    },
    jumpList () {
      this.$router.push({ path: '/api/list/' + this.project_id });
    }
  }
}
</script>


