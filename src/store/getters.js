const getters = {
  checkall(state) {
    return state.goodList.every(item => item.sele === true);
    //  return !(state.goodlist.some(item=>item.sele==false));
  },
  allCount(state) {
    // 所有选中的放一个数组里 buyArray
    let buyArray =
      state.goodList.filter(item => item.sele === true)
    // 选中的进行求和
    return buyArray.reduce((prev, next) => prev + next.count, 0)
  },
  allPrice(state) {
    // 选中的进行求和
    return state.goodList.filter(item => item.sele === true).reduce((prev, next) => prev + next.price * next.count, 0)
  }
}
export default getters