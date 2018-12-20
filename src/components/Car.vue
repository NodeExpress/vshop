<template>
  <div>
   <Header :showArrow="true">购物车</Header>
   <tr>
     <td><input type="checkbox" v-model="checkallA"/>&nbsp;全选</td>
     <td>名称</td>
     <td>单价</td>
     <td>数量</td>
     <td>操作</td>
   </tr>
    <ul>
      <li v-for="(item,index) in goodList" :key="index">
        <tr>
           <td><input type="checkbox" @change="changeone(item)" v-model="item.sele"/>&nbsp;<img :src="item.img" /></td>
           <td>{{item.name}}</td>
           <td>{{item.price}}</td>
           <td><button @click="delCount(item)">-</button>{{item.count}}<button @click="addCount(item)">+</button></td>
           <td><input type="button" value="删除" @click="delCar(item)"></td>
        </tr>
      </li>
    </ul>
    <div class="carBottom">
      <span>总数量：<em>{{allCount}}</em></span>
      <span>总价格：<em>{{allPrice}}</em></span>
      
    </div>
  </div>
</template>

<script>
import Header from "../../base/Header";
import { mapState, mapGetters } from "vuex";
import * as Types from "../store/mutations-types";
export default {
  data() {
    return {};
  },
  components: {
    Header
  },
  computed: {
    checkallA: {
      get() {
        return this.$store.getters.checkall;
      },
      set(val) {
        this.$store.commit("checkall", val);
      }
    },
    ...mapState(["goodList"]),
    ...mapGetters(["allCount", "allPrice"])
  },
  methods: {
    // 选中事件
    changeone(item) {
      this.$store.commit("change", item);
    },
    // 删除购物车商品事件
    delCar(item) {
      this.$store.commit({ type: Types.DEL_CAR, item });
    },
    // 增加商品数量
    addCount(item) {
      this.$store.commit("addCount", item);
    },
    // 减少商品数量
    delCount(item) {
      this.$store.commit("delCount", item);
    }
  }
};
</script>

<style scoped lang="scss">
tr {
  display: flex;
  justify-content: space-around;
  td {
    width: 20%;
    text-align: center;
    input:checked::before {
      content: "";
      display: inline-block;
      border: 2px solid green;
      border-top-width: 0;
      border-right-width: 0;
      width: 6px;
      height: 2px;
      transform: rotate(-50deg);
      position: relative;
      left: 2px;
      bottom: 5px;
    }
    img {
      width: 30px;
      vertical-align: middle;
    }
  }
}
.carBottom{
  position: absolute;
  bottom: 60px;
}
</style>
