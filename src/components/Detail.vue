<template>
<div class="bigBox">
  <!-- 头部 -->
  <Header :showArrow="true">商品详情</Header>
  <!-- 商品信息展示 -->
  <div class="listBox">
    <div class="listTop">
      <img :src="oneList.img" alt="">
      <div>
        <p><label for="name">名称：</label>{{oneList.name}}</p>
        <p><label for="price">价格：</label>{{oneList.price}}</p>
      </div>
    </div>
    <div class="listBottom">
      <p><label for="introduce">简介：</label></p>
      <p>{{oneList.introduce}}</p>
    </div>
  </div>
  <!-- 商品信息修改 -->
  <div class="modify">
    <h4>修改商品信息</h4>
    <p>
      <input type="text" name="" id="name" v-model="oneList.name" placeholder="名称">
    </p>
    <p>
      <input type="text" name="" id="price" v-model="oneList.price">
    </p>
    <p>
      <input type="text" name="" placeholder="图片地址" v-model="oneList.img">
    </p>
    <p>
      <textarea row="10" cols="5" type="text" name="" id="introduce" v-model="oneList.introduce"></textarea>
    </p>
    <button @click="update">确认修改</button>
  </div>
</div>
</template>
<script>
import Header from "../../base/Header";
import { getDetail, modifyGood } from "../api";
export default {
  name: "detail",
  components: {
    Header
  },
  data() {
    return {
      oneList: {}
    };
  },
  computed: {
    gid() {
      return this.$route.params.id;
    }
  },
  created() {
    this.getDetail();
  },
  methods: {
    // 商品详情
    async getDetail() {
      let oneList = await getDetail(this.gid);
      this.oneList = oneList;
    },
    // 商品修改
    async update() {
      // console.log("11");
      await modifyGood(this.gid, this.oneList);
    }
  }
};
</script>
<style scoped lang='scss'>
.listTop {
  display: flex;
  img {
    width: 50%;
    height: 20%;
  }
  div {
    flex: 1;
    padding-left: 10px;
  }
}
.listBottom {
  padding: 20px;
  font-size: 18px;
  color: darkgray;
  p {
    word-wrap: break-word;
  }
  p:last-child {
    text-indent: 40px;
  }
}
.modify {
  width: 80%;
  margin: 0 auto;
  h4 {
    text-align: center;
  }
  p {
    margin: 3% 0;
  }
  input {
    outline: none;
  }
  textarea {
    width: 100%;
    height: 80px;
    outline: none;
  }
}
</style>