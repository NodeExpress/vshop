<template>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide, index) in arrs" :key="index">{{slide}}</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
          
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>
</template>
<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      arrs:[1,2,3,4],
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      direction: "horizontal", // 水平切换选项
      loop: true, // 循环模式选项
      autoplay: true, //自动切换
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>
<style scoped lang='scss'>
.swiper-container {
  width: 100%;
  height: 250px;
  .swiper-slide {
    text-align: center;
    background-color: orange;
  }
}
</style>