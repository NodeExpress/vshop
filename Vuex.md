##### vuex使用
    把vuex当作一个局部组件
    state   相当于组建的data 通过
    $store.state.value  (value:你要取的值)
    acitions、mutations 相当于组件的methods
    acitions    是异步的    通过$store.dispatch
    mutations   是同步的    通过$store.commit触发


    <!-- 同步的写法 -->
    组件commit--->mutations--->state操作

    组件触发commit（写法：this.$store.state.commit('事件名'，参数(可选项)）
    --->
    mutations写和commit事件名相同的函数，参数state（必须）和传的值（可选）
    --->
    mutations事件里面操作state


    <!-- 异步的流程 -->
    组件(或者去全局)触发dispatch（写法：this.$store.state.dispatch('事件名'，参数（可选项)）
    --->
    actions  写一个与dispatch事件名相同函数，参数是(commit)和传的值
    --->
    通过commit提交给mutations（写法：commit（’事件名一般回合actions的方法同名）
    --->
    mutations事件里面操作state

    辅助函数运用时的特点：
    值 (包括：mapState、mapGetters)  放在computed里面
    函数 (包括：mapActions、mapMutations)    放在methods里面

    module注意事项：
    有命名空间的mapState的时候，可以传递模块名
    没有命名空间的不能传递模块名

    