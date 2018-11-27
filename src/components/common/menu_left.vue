<style scoped>
.main-left {
  float: left;
  height: 100%;
  margin: 0;
  width: 200px;
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
        <h3>项目</h3>
        <article>包括我创建与参与的项目</article>
      </div>

      <div class="border-bottom pb30 mb30 second-menu-list">
        <ul>
          <li v-bind:class="{ active : create_project }" v-on:click="createProject">创建新项目</li>
          <li v-bind:class="{ active : all_projetct }" v-on:click="allProject">所有项目</li>
          <li v-bind:class="{ active : my_create_project }" v-on:click="myCreateProject">我创建的</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      all_projetct: false,
      my_create_project: false,
      create_project: false,
    }
  },
  created () {
    if (this.$route.name == 'ProjectCreate') {
      this.create_project = true;
    } else {
      if(this.$route.query.flag == 2){
        this.my_create_project = true;
        this.$emit('checkProject', 'my');
      }else{
        this.all_projetct = true;
        this.$emit('checkProject', 'all');
      }
      
      
    }
  },
  methods: {
    createProject () {
      this.create_project = true;

      this.my_create_project = false;
      this.all_projetct = false;

      this.$router.push({ name: 'ProjectCreate' });
    },
    allProject () {
      if (this.$router.name != 'Index') {
        this.$router.push({ name: 'Index' });
      }

      this.all_projetct = true;

      this.my_create_project = false;
      this.create_project = false;

      this.$emit('checkProject', 'all');
    },
    myCreateProject () {
      if (this.$router.name != 'Index') {
        this.$router.push({ name: 'Index', query: { flag: 2 } });
      }

      this.my_create_project = true;

      this.all_projetct = false;
      this.create_project = false;

      this.$emit('checkProject', 'my');
    }
  }
}
</script>


