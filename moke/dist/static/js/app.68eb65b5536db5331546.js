webpackJsonp([2],{"3+Ni":function(t,e){},BRqy:function(t,e){},DAJp:function(t,e,n){"use strict";var i={props:{showArrow:{type:Boolean,default:!0}},data:function(){return{}},methods:{goBack:function(){this.$router.go(-1),console.log(this.$router)}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this.showArrow?e("i",{staticClass:"iconfont icon-fanhui",on:{click:this.goBack}}):this._e(),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var s=n("VU/8")(i,a,!1,function(t){n("FPKJ")},"data-v-42124e6e",null);e.a=s.exports},DbDb:function(t,e){},FPKJ:function(t,e){},HWQ6:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.showA,expression:"showA"}],staticClass:"footer"},[n("router-link",{staticClass:"iconfont icon-shouye",attrs:{to:"/home"}},[t._v("首页")]),t._v(" "),n("router-link",{staticClass:"iconfont icon-liebiao",attrs:{to:"/list"}},[t._v("列表页")]),t._v(" "),n("router-link",{staticClass:"iconfont  icon-03",attrs:{to:"/car"}},[t._v("购物车")]),t._v(" "),n("router-link",{staticClass:"iconfont icon-wode1",attrs:{to:"/my"}},[t._v("我的")])],1)},staticRenderFns:[]};var s={name:"App",components:{Tab:n("VU/8")({data:function(){return{showA:!0}},watch:{$route:function(t,e){"detail"==t.name?this.showA=!1:this.showA=!0}},created:function(){"detail"==this.$route.name&&(this.showA=!1)}},a,!1,function(t){n("PCaF")},"data-v-66eaf79a",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[this.$route.meta.keepAlive?e("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():e("router-view"),this._v(" "),e("Tab")],1)},staticRenderFns:[]};var o=n("VU/8")(s,r,!1,function(t){n("rVgo")},null,null).exports,c=n("/ocq"),l=n("Xxa5"),u=n.n(l),d=n("d7EF"),v=n.n(d),p=n("exGp"),f=n.n(p),m=n("DAJp"),_=n("DNVT"),h={data:function(){return{arrs:[1,2,3,4]}},mounted:function(){new _.a(".swiper-container",{direction:"horizontal",loop:!0,autoplay:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},t._l(t.arrs,function(e,i){return n("div",{key:i,staticClass:"swiper-slide"},[t._v(t._s(e))])})),t._v(" "),n("div",{staticClass:"swiper-pagination"}),t._v(" "),n("div",{staticClass:"swiper-button-prev"}),t._v(" "),n("div",{staticClass:"swiper-button-next"})])},staticRenderFns:[]};var w=n("VU/8")(h,g,!1,function(t){n("sOAK")},"data-v-52e54296",null).exports,k=(n("v2ns"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.swiperSlides,function(t,n){return e("swiper-slide",{key:n},[e("img",{attrs:{src:t,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},staticRenderFns:[]});var x=n("VU/8")({props:["swiperSlides"],data:function(){return{swiperOption:{autoplay:!0,loop:!0,pagination:{el:".swiper-pagination"}}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}}},k,!1,function(t){n("HWQ6")},"data-v-585c76ab",null).exports,A={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner"},[n("div",{staticClass:"spinner-container container1"},[n("div",{staticClass:"circle1"}),t._v(" "),n("div",{staticClass:"circle2"}),t._v(" "),n("div",{staticClass:"circle3"}),t._v(" "),n("div",{staticClass:"circle4"})]),t._v(" "),n("div",{staticClass:"spinner-container container2"},[n("div",{staticClass:"circle1"}),t._v(" "),n("div",{staticClass:"circle2"}),t._v(" "),n("div",{staticClass:"circle3"}),t._v(" "),n("div",{staticClass:"circle4"})]),t._v(" "),n("div",{staticClass:"spinner-container container3"},[n("div",{staticClass:"circle1"}),t._v(" "),n("div",{staticClass:"circle2"}),t._v(" "),n("div",{staticClass:"circle3"}),t._v(" "),n("div",{staticClass:"circle4"})])])}]};var C=n("VU/8")({data:function(){return{}}},A,!1,function(t){n("ihco")},"data-v-6b1daa39",null).exports,b=n("gyMJ"),L={data:function(){return{slider:[],lists:[],loading:!0}},created:function(){this.getHomeList()},components:{Header:m.a,Lunbo:w,Swipers:x,Loading:C},methods:{getHomeList:function(){var t=this;return f()(u.a.mark(function e(){var n,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)();case 2:n=e.sent,i=v()(n,2),t.slider=i[0],t.lists=i[1],t.loading=!1;case 7:case"end":return e.stop()}},e,t)}))()}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bigBox"},[n("Header",{attrs:{showArrow:!1}},[t._v("首页")]),t._v(" "),t.loading?n("Loading"):t._e(),t._v(" "),n("Swipers",{attrs:{swiperSlides:t.slider}}),t._v(" "),n("ul",{staticClass:"lists"},t._l(t.lists,function(e,i){return n("li",{key:i},[n("img",{attrs:{src:e.img,alt:""}}),t._v(" "),n("p",[n("span",[t._v("名称："+t._s(e.name))]),t._v(" "),n("span",[t._v("价格："+t._s(e.price))])])])}))],1)},staticRenderFns:[]};var $=n("VU/8")(L,y,!1,function(t){n("bIty")},"data-v-0fcaa451",null).exports,z=n("Gu7T"),F=n.n(z),E={data:function(){return{page:1,AllLists:[],hasmore:!0,hasmoretext:"加载更多"}},components:{Header:m.a},created:function(){this.getAllList()},methods:{addCar:function(t){t.sele=!0,this.$store.commit({type:"ADD_CAR",data:t})},deleGood:function(t){var e=this;return f()(u.a.mark(function n(){return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(b.b)(t);case 2:e.AllLists=e.AllLists.filter(function(e){return e.id!==t});case 3:case"end":return n.stop()}},n,e)}))()},sload:function(){var t=this;setTimeout(function(){var e=t.$refs.scroll;e.scrollTop+e.clientHeight>=e.scrollHeight&&t.loadMore()},1e3)},getAllList:function(){var t=this;return f()(u.a.mark(function e(){var n,i,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.e)(t.page);case 2:n=e.sent,i=n.data,a=n.hasmore,t.AllLists=[].concat(F()(t.AllLists),F()(i)),t.hasmore=a,a||(t.hasmoretext="没有更多了");case 8:case"end":return e.stop()}},e,t)}))()},loadMore:function(){this.hasmore&&(this.page+=1,this.getAllList())}}},H={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bigBox"},[n("Header",{attrs:{showArrow:!0}},[t._v("列表")]),t._v(" "),n("router-link",{attrs:{to:"/addGood"}},[t._v("商品添加")]),t._v(" "),n("ul",{ref:"scroll",staticClass:"lists",on:{scroll:t.sload}},[t._l(t.AllLists,function(e,i){return n("router-link",{key:i,attrs:{tag:"li",to:{name:"detail",params:{id:e.id}}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img,expression:"list.img"}],attrs:{alt:""}}),t._v(" "),n("div",{staticClass:"context"},[n("p",[n("span",[t._v("名称：")]),t._v(t._s(e.name))]),t._v(" "),n("p",[t._v("价格："+t._s(e.price))])]),t._v(" "),n("div",{staticClass:"btnclick"},[n("button",{on:{click:function(n){n.stopPropagation(),t.deleGood(e.id)}}},[t._v("删除该商品")]),t._v(" "),n("button",{on:{click:function(n){n.stopPropagation(),t.addCar(e)}}},[t._v("加入购物车")])])])}),t._v(" "),n("p",{staticClass:"btnmore",on:{click:function(e){t.loadMore()}}},[t._v(t._s(t.hasmoretext))])],2)],1)},staticRenderFns:[]};var P=n("VU/8")(E,H,!1,function(t){n("DbDb")},"data-v-1b7ee89b",null).exports,V=n("Dd8w"),N=n.n(V),R=n("NYxO"),S={data:function(){return{}},components:{Header:m.a},computed:N()({checkallA:{get:function(){return this.$store.getters.checkall},set:function(t){this.$store.commit("checkall",t)}}},Object(R.c)(["goodList"]),Object(R.b)(["allCount","allPrice"])),methods:{changeone:function(t){this.$store.commit("change",t)},delCar:function(t){this.$store.commit({type:"DEL_CAR",item:t})},addCount:function(t){this.$store.commit("addCount",t)},delCount:function(t){this.$store.commit("delCount",t)}}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{showArrow:!0}},[t._v("购物车")]),t._v(" "),n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.checkallA,expression:"checkallA"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checkallA)?t._i(t.checkallA,null)>-1:t.checkallA},on:{change:function(e){var n=t.checkallA,i=e.target,a=!!i.checked;if(Array.isArray(n)){var s=t._i(n,null);i.checked?s<0&&(t.checkallA=n.concat([null])):s>-1&&(t.checkallA=n.slice(0,s).concat(n.slice(s+1)))}else t.checkallA=a}}}),t._v(" 全选")]),t._v(" "),n("td",[t._v("名称")]),t._v(" "),n("td",[t._v("单价")]),t._v(" "),n("td",[t._v("数量")]),t._v(" "),n("td",[t._v("操作")])]),t._v(" "),n("ul",t._l(t.goodList,function(e,i){return n("li",{key:i},[n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.sele,expression:"item.sele"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.sele)?t._i(e.sele,null)>-1:e.sele},on:{change:[function(n){var i=e.sele,a=n.target,s=!!a.checked;if(Array.isArray(i)){var r=t._i(i,null);a.checked?r<0&&t.$set(e,"sele",i.concat([null])):r>-1&&t.$set(e,"sele",i.slice(0,r).concat(i.slice(r+1)))}else t.$set(e,"sele",s)},function(n){t.changeone(e)}]}}),t._v(" "),n("img",{attrs:{src:e.img}})]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.price))]),t._v(" "),n("td",[n("button",{on:{click:function(n){t.delCount(e)}}},[t._v("-")]),t._v(t._s(e.count)),n("button",{on:{click:function(n){t.addCount(e)}}},[t._v("+")])]),t._v(" "),n("td",[n("input",{attrs:{type:"button",value:"删除"},on:{click:function(n){t.delCar(e)}}})])])])})),t._v(" "),n("div",{staticClass:"carBottom"},[n("span",[t._v("总数量："),n("em",[t._v(t._s(t.allCount))])]),t._v(" "),n("span",[t._v("总价格："),n("em",[t._v(t._s(t.allPrice))])])])],1)},staticRenderFns:[]};var O=n("VU/8")(S,D,!1,function(t){n("3+Ni")},"data-v-5ea01968",null).exports,j={data:function(){return{datas:[],txt:"",num:0}},components:{Header:m.a},methods:{add:function(){""===this.txt?alert("输入框不能为空"):this.datas.push({textVal:this.txt,zt:!1})},del:function(t){this.datas.splice(t,1),this.newdata()},newdata:function(){this.num=this.datas.reduce(function(t,e){return e.zt&&t++,t},0)}}},B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{showArrow:!0}},[t._v("我的")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.txt,expression:"txt"}],attrs:{type:"text"},domProps:{value:t.txt},on:{input:function(e){e.target.composing||(t.txt=e.target.value)}}}),t._v(" "),n("input",{attrs:{type:"button",value:"点击"},on:{click:function(e){t.add()}}}),t._v(" "),n("ul",[n("li",[n("p",[t._v("正在进行"),n("span",[t._v(t._s(t.datas.length-t.num))])])]),t._v(" "),t._l(t.datas,function(e,i){return e.zt?t._e():n("li",{key:i},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.zt,expression:"item.zt"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.zt)?t._i(e.zt,null)>-1:e.zt},on:{change:[function(n){var i=e.zt,a=n.target,s=!!a.checked;if(Array.isArray(i)){var r=t._i(i,null);a.checked?r<0&&t.$set(e,"zt",i.concat([null])):r>-1&&t.$set(e,"zt",i.slice(0,r).concat(i.slice(r+1)))}else t.$set(e,"zt",s)},function(e){t.newdata()}]}}),t._v(t._s(e.textVal)+"\n      "),n("button",{on:{click:function(e){t.del(i)}}},[t._v("删除")])])}),t._v(" "),n("li",[n("p",[t._v("已经完成 "+t._s(t.num)),n("span")])]),t._v(" "),t._l(t.datas,function(e,i){return e.zt?n("li",{key:i},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.zt,expression:"item.zt"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.zt)?t._i(e.zt,null)>-1:e.zt},on:{change:[function(n){var i=e.zt,a=n.target,s=!!a.checked;if(Array.isArray(i)){var r=t._i(i,null);a.checked?r<0&&t.$set(e,"zt",i.concat([null])):r>-1&&t.$set(e,"zt",i.slice(0,r).concat(i.slice(r+1)))}else t.$set(e,"zt",s)},function(e){t.newdata()}]}}),t._v(t._s(e.textVal)+"\n      "),n("button",{on:{click:function(e){t.del(i)}}},[t._v("删除")])]):t._e()})],2)],1)},staticRenderFns:[]};var T=n("VU/8")(j,B,!1,function(t){n("BRqy")},"data-v-4937fb4b",null).exports,U={name:"detail",components:{Header:m.a},data:function(){return{oneList:{}}},computed:{gid:function(){return this.$route.params.id}},created:function(){this.getDetail()},methods:{getDetail:function(){var t=this;return f()(u.a.mark(function e(){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)(t.gid);case 2:n=e.sent,t.oneList=n;case 4:case"end":return e.stop()}},e,t)}))()},update:function(){var t=this;return f()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.f)(t.gid,t.oneList);case 2:case"end":return e.stop()}},e,t)}))()}}},J={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bigBox"},[n("Header",{attrs:{showArrow:!0}},[t._v("商品详情")]),t._v(" "),n("div",{staticClass:"listBox"},[n("div",{staticClass:"listTop"},[n("img",{attrs:{src:t.oneList.img,alt:""}}),t._v(" "),n("div",[n("p",[n("label",{attrs:{for:"name"}},[t._v("名称：")]),t._v(t._s(t.oneList.name))]),t._v(" "),n("p",[n("label",{attrs:{for:"price"}},[t._v("价格：")]),t._v(t._s(t.oneList.price))])])]),t._v(" "),n("div",{staticClass:"listBottom"},[t._m(0),t._v(" "),n("p",[t._v(t._s(t.oneList.introduce))])])]),t._v(" "),n("div",{staticClass:"modify"},[n("h4",[t._v("修改商品信息")]),t._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.oneList.name,expression:"oneList.name"}],attrs:{type:"text",name:"",id:"name",placeholder:"名称"},domProps:{value:t.oneList.name},on:{input:function(e){e.target.composing||t.$set(t.oneList,"name",e.target.value)}}})]),t._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.oneList.price,expression:"oneList.price"}],attrs:{type:"text",name:"",id:"price"},domProps:{value:t.oneList.price},on:{input:function(e){e.target.composing||t.$set(t.oneList,"price",e.target.value)}}})]),t._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.oneList.img,expression:"oneList.img"}],attrs:{type:"text",name:"",placeholder:"图片地址"},domProps:{value:t.oneList.img},on:{input:function(e){e.target.composing||t.$set(t.oneList,"img",e.target.value)}}})]),t._v(" "),n("p",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.oneList.introduce,expression:"oneList.introduce"}],attrs:{row:"10",cols:"5",type:"text",name:"",id:"introduce"},domProps:{value:t.oneList.introduce},on:{input:function(e){e.target.composing||t.$set(t.oneList,"introduce",e.target.value)}}})]),t._v(" "),n("button",{on:{click:t.update}},[t._v("确认修改")])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("label",{attrs:{for:"introduce"}},[this._v("简介：")])])}]};var M=n("VU/8")(U,J,!1,function(t){n("dzSV")},"data-v-ba27df1c",null).exports;i.a.use(c.a);var G,q=new c.a({mode:history,routes:[{path:"/",redirect:"/home"},{path:"/home",component:$,meta:{keepAlive:!0}},{path:"/list",component:P},{path:"/car",component:O},{path:"/my",component:T},{path:"/detail/:id",component:M,name:"detail"},{path:"/addGood",component:function(){return n.e(0).then(n.bind(null,"Taru"))}}]}),K=(n("mgS3"),n("7QTg")),Q=n.n(K),W=n("cTzj"),I=n.n(W),X=(n("sax8"),n("bOdI")),Y=n.n(X),Z=n("mvHQ"),tt=n.n(Z),et=(G={},Y()(G,"ADD_CAR",function(t,e){var n=e.data,i=t.goodList.find(function(t){return t.id===n.id});i?(i.count+=1,t.goodList=[].concat(F()(t.goodList))):(n.count=1,t.goodList=[].concat(F()(t.goodList),[n]),localStorage.list=tt()(t.goodList))}),Y()(G,"change",function(t,e){t.goodList.find(function(t){return t.id===e.id}).sele=e.sele,t.goodList=[].concat(F()(t.goodList))}),Y()(G,"checkall",function(t,e){t.goodList.forEach(function(t){return t.sele=e}),t.goodList=[].concat(F()(t.goodList))}),Y()(G,"DEL_CAR",function(t,e){t.goodList.splice(e,1),localStorage.list=tt()(t.goodList)}),Y()(G,"addCount",function(t,e){e.count++}),Y()(G,"delCount",function(t,e){e.count--}),G),nt={checkall:function(t){return t.goodList.every(function(t){return!0===t.sele})},allCount:function(t){return t.goodList.filter(function(t){return!0===t.sele}).reduce(function(t,e){return t+e.count},0)},allPrice:function(t){return t.goodList.filter(function(t){return!0===t.sele}).reduce(function(t,e){return t+e.price*e.count},0)}};i.a.use(R.a);var it={goodList:[],checkAll:!0};localStorage&&localStorage.list&&(it.goodList=JSON.parse(localStorage.list));var at=new R.a.Store({state:it,mutations:et,getters:nt});i.a.use(Q.a),i.a.use(I.a,{preLoad:1.3,error:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543981314396&di=d18f996ad92502f4608492264679a355&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F29%2F90%2F03573af86229ae7.jpg",loading:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543981375699&di=a87b2d1c6e94cbdc564fc4617a3a872f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0168905ad83519a801213867ae45cf.gif",attempt:1}),i.a.config.productionTip=!1,new i.a({el:"#app",router:q,store:at,components:{App:o},template:"<App/>"})},PCaF:function(t,e){},bIty:function(t,e){},dzSV:function(t,e){},gyMJ:function(t,e,n){"use strict";n.d(e,"d",function(){return o}),n.d(e,"c",function(){return c}),n.d(e,"e",function(){return l}),n.d(e,"b",function(){return u}),n.d(e,"f",function(){return d}),n.d(e,"a",function(){return v});var i=n("//Fk"),a=n.n(i),s=n("mtWM"),r=n.n(s);r.a.interceptors.response.use(function(t){return t.data},function(t){return a.a.reject(t)});var o=function(){return r.a.all([r.a.get("/slider"),r.a.get("/new")])},c=function(t){return r.a.get("/list?id="+t)},l=function(t){return r.a.get("/page?page="+t)},u=function(t){return r.a.delete("/list?id="+t)},d=function(t,e){return r.a.put("/list?id="+t,e)},v=function(t){return r.a.post("/list",t)}},ihco:function(t,e){},mgS3:function(t,e){},rVgo:function(t,e){},sOAK:function(t,e){},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.68eb65b5536db5331546.js.map