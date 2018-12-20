# vshop

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# 目录结构
    .mock  这个文件是放数据的
    .src   
        .api    这个是放所有请求的
        .components 这个放页面级组件
        .base   这个放公用组件
        .router 路由
        .assets 静态文件
        .vuex/store 放vuex（用的时候创建）
    组件引入步骤
        1、引入
        2、注册
        3、用标签式使用
    使用less
        npm install less less-loader --save
    使用sass
        npm install node-sass --save-dev
        npm install --save-dev sass-loader
    路由激活样式
        router-link-active
        router-link-exact-active
    通过slot插槽来解决头部显示问题
    通过props传值控制返回箭头是否显示
    v-show  有没有都会渲染，display：none
    v-if  
    ajax请求使用axios
    npm install axios -s
    axios是基于promise封装的

    export 会把当前模块的所有变量放在一个对象里导出
    * as T 把变量都放在一个对象里面 as后面是对象名字  *表示所有的

    路由需要传参的，要有name
    redirect  重定向

    分页列表页面
    一页显示 六条
    localhost:3000/list?page=1    0-6
    localhost:3000/list?page=2    7-11
    axios.get(`list?page=${page}`)
    hasemore  是否还有下一页
    
    ref  获取原生dom/获取子组件的实例
    js节流和防抖  _.debounce __.throttle 
    keep-alive 缓存
    
    #缓存的放在这里
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/> 
    </keep-alive>
    #不缓存的放在这里
    <router-view v-if="!$route.meta.keepAlive"/> 
    ```
    路由传参  
    1 params 
    http://localhost:8080/#/detail/4

    2 query 
    http://localhost:8080/#/detail?id=4
    vuex    
    vue 组件 通过dispatch 提交到 actions  actions 通过 commit 触发 
    mutations  mutatiosn 负责修改state
    所有的组件就可以拿到state 进行渲染了 
    actions 是异步的  store.dispatch 
    mutations 是同步的  
    如果是同步的话可以直接用store.commit
    提交到 mutations   
    只有mutations 能够修改state的状态
    getters 是vuex的计算属性 计算state相关的值  相当于组件的computed 

    ####dispatch 和 commit的传参问题 ：
    `
    一个参数的时候可以直接传递，多个参数需要用对象传递  
    ` 
    方案一、
    this.$store.commit('addcount',{a:10,b:20})
    方案二、
    this.$store.commit({type:'addcount'a:10,
    b:20})
    type：为要提交的mutations函数 

    mapState,mapGetters,mapMutations，mapActions  
    辅助工具类
    actions 需要注意的点
    需要把commit通过解构赋值得到 通过commit
    提交到mutations的同名函数

    vuex书写了逻辑流程：
        1.先定义事件 (mutations-type.js)
        2.触发事件
        3.处理事件 处理state里面的数据 最后拿到

    vuex 表单
    如果是双向绑定的值使用vuex，一般通过设置值的 get 和 set 或者用监听事件的形式来实现值  参考链接：https://vuex.vuejs.org/zh/guide/forms.html

    localStorage   长期存在的
    sessionStorage 关闭回话就清除
    localStorage、sessionStorage的方法：
        setItem(key,value) 设置
        getItem(key)       获取
        removeItem(key)    清除单项
        clear(key,value)   清除所有

    组件的computed 和getters  每一个值必须加 return ，才能返回

    上线流程注意事项
        第一：同域名下不要default.baseURL，直接删除
        第二：路由改成history模式
            你要在服务器端增加一个覆盖所有情况的候选资源：如果URL匹配不到任何静态资源，则应该返回一个index.html页面，这个页面就是你app依赖的页面

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
