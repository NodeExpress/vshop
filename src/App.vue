<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
    <Tab/>
  </div>
</template>

<script>
import Tab from "../base/Tab";
export default {
  name: "App",
  components: {
    Tab
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  a {
    text-decoration: none;
  }
  .bigBox{
    margin-bottom: 50px;
  }
}
html,body{
  width: 100%;
  height: 100%;
}
</style>
