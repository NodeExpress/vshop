<template>
<div class='header'>
    <i v-if="showArrow" class="iconfont icon-fanhui" @click="goBack"></i>
   <slot></slot>
</div>
</template>
<script>
export default {
  props: {
      showArrow:{
          type:Boolean,
          default:true
      }
  },
  data() {
    return {};
  },
  methods:{
      goBack(){
          this.$router.go(-1);
          console.log(this.$router)
      }
  }
};
</script>
<style scoped lang='scss'>
.header {
  width: 100%;
  line-height: 50px;
  text-align: center;
  background-color: cyan;
  i {
    position: absolute;
    left: 30px;
  }
}
</style>