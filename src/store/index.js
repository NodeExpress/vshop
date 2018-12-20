import Vue from 'vue'
import vuex from 'vuex'
import logger from 'vuex/dist/logger'
Vue.use(vuex);
import mutations from './mutations'
import getters from './getters'
const state = {
    goodList:[],//购物车列表数组
    checkAll:true
}
if(localStorage&&localStorage['list']){
    state.goodList = JSON.parse(localStorage['list'])
}
export default new vuex.Store({
    state,
    mutations,
    getters
    // plugins:[logger()]
})