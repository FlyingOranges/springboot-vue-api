<style scoped>
.left-navbar {
  position: fixed;
  left: 0;
  height: 100%;
  background: #333;
  width: 5%;
}
.mt20 {
  margin-top: 50%;
}
.mt10 ul li {
  list-style-type: none;
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  cursor: pointer;
}
.active {
  box-shadow: none !important;
  background-color: rgba(255, 255, 255, 0.2);
}
.menu-list {
  padding-left: 0;
  margin-top: 10px;
  text-align: center;
}
.menu-title {
  color: #fff;
  text-align: center;
}
.left-title-img {
  width: 40px;
  text-align: center;
}
</style>
<template>
  <div class="navbar-left-div">
    <div class="left-navbar">
      <div class="tc mt20"></div>
      <div id="first-menu-list" class="mt10">
        <ul class="first-level-nav menu-list">
          <li class="active" v-on:click="peojectCheck">
            <div>
              <img src="../../assets/project.png" class="left-title-img">
            </div>
            <span class="menu-title">项目</span>
          </li>
          <li>
            <div>
              <img src="../../assets/message.png" class="left-title-img">
            </div>
            <span class="menu-title">消息</span>
          </li>
          <li>
            <div>
              <img src="../../assets/user.png" class="left-title-img">
            </div>
            <span class="menu-title">账户</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    peojectCheck () {
      this.$router.push({ name: 'Index' });
    }
  }
}
</script>


