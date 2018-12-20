<template>
  <div class="bigBox">
   <Header :showArrow="true">列表</Header>
   <router-link to="/addGood">商品添加</router-link>
   <ul class="lists" ref="scroll" @scroll="sload">
      <router-link v-for="(list,index) in AllLists" :key="index" tag="li" :to="{name:'detail',params:{id:list.id}}">
        <img v-lazy="list.img" alt="" >
        <div class="context">
          <p><span>名称：</span>{{list.name}}</p>
          <p>价格：{{list.price}}</p>
        </div>
        <div class="btnclick">
          <button @click.stop="deleGood(list.id)">删除该商品</button>
          <button @click.stop="addCar(list)">加入购物车</button>
        </div>
      </router-link>
      <p class="btnmore" @click="loadMore()">{{hasmoretext}}</p>
    </ul>
  </div>
</template>

<script>
import Header from "../../base/Header";
import { getPage, deleteGood } from "../api";
import * as Types from "../store/mutations-types";
export default {
  data() {
    return {
      page: 1,
      AllLists: [],
      hasmore: true,
      hasmoretext: "加载更多"
    };
  },
  components: {
    Header
  },
  created() {
    this.getAllList();
  },
  methods: {
    // 添加商品到购物车
    addCar(data) {
      data.sele = true;
      this.$store.commit({
        type: Types.ADD_CAR,
        data
      });
    },

    // 商品删除
    async deleGood(deleId) {
      // this.AllLists.splice(index,1);
      // console.log('1111');
      await deleteGood(deleId);
      // this.deleGood
      this.AllLists = this.AllLists.filter(item => item.id !== deleId);
    },

    //滚动加载事件
    sload() {
      setTimeout(() => {
        let { scrollTop, clientHeight, scrollHeight } = this.$refs.scroll;
        if (scrollTop + clientHeight >= scrollHeight) {
          this.loadMore();
        }
      }, 1000);
    },

    async getAllList() {
      let { data: AllLists, hasmore } = await getPage(this.page);
      this.AllLists = [...this.AllLists, ...AllLists];
      this.hasmore = hasmore;
      if (!hasmore) {
        //如果this.hasmore 为false,表示没有下一页了
        this.hasmoretext = "没有更多了";
      }
    },

    // 加载更多按钮
    loadMore() {
      if (this.hasmore) {
        this.page += 1;
        this.getAllList();
      }
    }
  }
};
</script>

<style scoped lang="scss">
.lists {
  width: 95%;
  height: 500px;
  margin: 0 auto;
  background-color: floralwhite;
  overflow: auto;
  li {
    margin: 1% 0;
    border: 1px solid gainsboro;
    text-align: center;
    padding: 12px 0;
    display: flex;
    justify-content: space-around;
    img {
      width: 30%;
      height: 30%;
    }
    .context {
      width: 55%;
      margin: 0 auto;
    }
    .btnclick {
      button {
        margin: 8px 0;
      }
    }
  }
}
.btnmore {
  width: 100%;
  text-align: center;
  font-size: 18px;
  border: none;
  outline: none;
}
</style>
