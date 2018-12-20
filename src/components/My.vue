<template>
  <div>
   <Header :showArrow="true">我的</Header>
    <input type="text" v-model="txt" >
    <input type="button" @click="add()" value="点击">
    <ul>
      <li><p>正在进行<span>{{datas.length-num}}</span></p></li>
      <li v-for="(item,index) in datas" :key="index" v-if="!item.zt">
        <input type="checkbox" v-model="item.zt" @change="newdata()">{{item.textVal}}
        <button @click="del(index)">删除</button>
      </li>
      <li><p>已经完成 {{num}}<span></span></p></li>
      <li v-for="(item,index) in datas" :key="index" v-if="item.zt">
        <input type="checkbox" v-model="item.zt" @change="newdata()">{{item.textVal}}
        <button @click="del(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "../../base/Header";
export default {
  data() {
    return {
      datas: [],
      txt: "",
      num: 0
    };
  },
  components: {
    Header
  },
  methods: {
    add() {
      if (this.txt === "") {
        alert("输入框不能为空");
      } else {
        this.datas.push({
          textVal: this.txt,
          zt: false
        });
      }
    },
    del(index) {
      this.datas.splice(index, 1);
      this.newdata();
    },
    newdata() {
      this.num = this.datas.reduce((prev, next) => {
        if (next.zt) {
          prev++;
        }
        return prev;
      }, 0);
    }
  }
};
</script>

<style scoped>
</style>
