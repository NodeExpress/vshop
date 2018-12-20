import * as Types from './mutations-types'
const mutations = {
    [Types.ADD_CAR](state, param) {
        // console.log(param)//{type:'ADD_CAR',data:{}}s
        let good = param.data;
        let production = state.goodList.find(item => item.id === good.id)
        // console.log(production);
        // 如果商品存在 数量加1
        if (production) {
            production.count += 1
            // state 里面的值必须手动更新   
            state.goodList = [...state.goodList]
        } else {//如果不存在，数量等于1
            good.count = 1;
            state.goodList = [...state.goodList, good]
            localStorage["list"] = JSON.stringify(state.goodList);
        }
    },
    // 单选事件
    change(state, good) {
        // 找到点击的项
        let prod = state.goodList.find(item => item.id === good.id);
        // 改变点击这一项的值
        prod.sele = good.sele;
        // 手动修改state
        state.goodList = [...state.goodList]
    },
    checkall(state, val) {
        state.goodList.forEach(item => item.sele = val);
        state.goodList = [...state.goodList];
    },
    [Types.DEL_CAR](state, param) {
        state.goodList.splice(param, 1);
        localStorage["list"] = JSON.stringify(state.goodList);
    },
    addCount(state, item) {
        item.count++;
    },
    delCount(state, item) {
        item.count--;
    }
}
export default mutations
