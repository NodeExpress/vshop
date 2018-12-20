<template>
  <div class="bigBox">
    <Header :showArrow="false">首页</Header>
    <Loading v-if="loading"></Loading>
    <!-- <Lunbo :swiperSlides='slider'></Lunbo> -->
    <Swipers :swiperSlides='slider'></Swipers>
    <ul class="lists">
      <li v-for="(list,index) in lists" :key="index">
        <img :src="list.img" alt="">
        <p>
          <span>名称：{{list.name}}</span>
          <span>价格：{{list.price}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "../../base/Header";
import Lunbo from "../../base/Lunbo";
import Swipers from "../../base/Swiper";
import Loading from "../../base/Loading"
import { getHome } from "../api";
export default {
  data() {
    return {
      slider: [],
      lists: [],
      loading:true
    };
  },
  created() {
    this.getHomeList();
  },
  components: {
    Header,
    Lunbo,
    Swipers,
    Loading
  },
  methods: {
    async getHomeList() {
      [this.slider, this.lists] = await getHome();
      this.loading = false;
    }
  }
};
</script>

<style scoped lang="scss">
.lists {
  width: 95%;
  height: 100%;
  margin: 0 auto;
  background-color: floralwhite;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  li {
    width: 47%;
    margin: 2% 0;
    border: 1px solid gainsboro;
    text-align: center;
    img {
      width: 80%;
    }
    p {
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
}
</style>
