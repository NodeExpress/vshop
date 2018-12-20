<template>
<div class="modify">
    <Header :showArrow="true">添加商品</Header>
    <p>
      <input type="text" name="" placeholder="名称" v-model="addList.name">
    </p>
    <p>
      <input type="text" name="" placeholder="价格" v-model="addList.price">
    </p>
    <p>
      <input type="text" name="" placeholder="图片地址" v-model="addList.img">
    </p>
    <p>
      <textarea row="10" cols="5" type="text" placeholder="简介" v-model="addList.introduce"></textarea>
    </p>
    <button @click="addGood">确认添加</button>
  </div>
</template>
<script>
import Header from "../../base/Header";
import { addNewGood } from "../api";
export default {
  data() {
    return {
      addList: {}
    };
  },
  components: {
    Header
  },
  methods: {
    // 商品添加
    async addGood() {
      await addNewGood(this.addList);
    }
  }
};
</script>
<style scoped lang='scss'>
</style>