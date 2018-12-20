<template>
  <div class="footer" v-show='showA'>
    <router-link to="/home" class="iconfont icon-shouye">首页</router-link>
    <router-link to="/list" class="iconfont icon-liebiao">列表页</router-link>
    <router-link to="/car" class="iconfont  icon-03">购物车</router-link>
    <router-link to="/my" class="iconfont icon-wode1">我的</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showA:true
    };
  },
  watch:{
    $route(to,from){
      if(to.name=="detail"){
        this.showA = false;
      }else{
         this.showA = true;
      }
    }
  },
  created(){
    if(this.$route.name=="detail"){
        this.showA = false;
      }
  }
};
</script>

<style scoped lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid darkgray;
  background-color: aliceblue;
  a {
    flex: 1;
    text-align: center;
    border-right: 1px solid darkgray;
    color: black;
    &.router-link-active {
      color: cyan;
    }
  }
}
</style>
