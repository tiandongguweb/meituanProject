webpackJsonp([6],{"/dNf":function(t,e){},"6iSo":function(t,e){},"77Wz":function(t,e){},CuRo:function(t,e){},HSyX:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=a("VU/8")({name:"App",components:{}},r,!1,function(t){a("/dNf")},"data-v-48dab52c",null).exports,i=a("/ocq"),o=a("wkC+"),l={data:function(){return{isFocus:!1,searchWord:"",hotPlace:["京东第一温泉度假村","99旅馆连锁","尚客优快捷酒店"],searchList:[]}},computed:{isHotPlace:function(){return this.isFocus&&!this.searchWord},isSearchList:function(){return this.isFocus&&this.searchWord}},methods:{focus:function(){var t=this;this.isFocus=!0,o.a.searchHotWords().then(function(e){t.hotPlace=e.data.data}).catch(function(t){console.log(t)})},blur:function(){var t=this;setTimeout(function(){t.isFocus=!1},500)},input:function(){var t=this,e=this.searchWord;o.a.search(e).then(function(a){var n=a.data.data.list;n.filter(function(t){return-1!=t.indexOf(e)}),t.searchList=n}).catch(function(t){console.log(t)})}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-bar"},[a("el-row",{staticClass:"m-header-searchbar"},[a("el-col",{staticClass:"left",attrs:{span:3}},[a("img",{attrs:{src:"//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png",alt:"美团"}})]),t._v(" "),a("el-col",{staticClass:"center",attrs:{span:21}},[a("div",{staticClass:"wrapper"},[a("el-input",{attrs:{placeholder:"搜索商家或地点"},on:{focus:t.focus,blur:t.blur,input:t.input},model:{value:t.searchWord,callback:function(e){t.searchWord=e},expression:"searchWord"}}),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"}}),t._v(" "),t.isHotPlace?a("dl",{staticClass:"hotPlace"},[a("dt",[t._v("热门搜索")]),t._v(" "),t._l(t.hotPlace,function(e,n){return a("dd",{key:n},[a("router-link",{attrs:{to:{name:"hotPlace",params:{name:e}}}},[t._v(t._s(e))])],1)})],2):t._e(),t._v(" "),t.isSearchList?a("dl",{staticClass:"searchList"},t._l(t.searchList,function(e,n){return a("dd",{key:n},[a("router-link",{staticStyle:{width:"100%",display:"block"},attrs:{to:{name:"hotPlace",params:{name:e}}}},[t._v(t._s(e))])],1)}),0):t._e()],1),t._v(" "),a("p",{staticClass:"suggest"},[a("a",{attrs:{href:"#"}},[t._v("京东第一温泉度假村")]),t._v(" "),a("a",{attrs:{href:"#"}},[t._v("99旅馆连锁")]),t._v(" "),a("a",{attrs:{href:"#"}},[t._v("尚客优快捷酒店")]),t._v(" "),a("a",{attrs:{href:"#"}},[t._v("七天连锁酒店")])])])],1)],1)},staticRenderFns:[]};var d=a("VU/8")(l,c,!1,function(t){a("UzV0")},null,null).exports,u=a("Dd8w"),_=a.n(u),v=a("NYxO"),m={created:function(){this.$store.dispatch("setPosition"),console.log(this.position.nearCity)},computed:_()({},Object(v.b)(["position"]))},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-geo"},[a("div",{staticClass:"position"},[a("i",{staticClass:"el-icon-locationt"}),t._v("\n    "+t._s(t.position.name)+"\n    "),a("router-link",{staticClass:"changeCity",attrs:{to:{name:"changeCity"}}},[t._v("切换城市")]),t._v("[\n    "),t._l(t.position.nearCity,function(e,n){return a("a",{key:n,attrs:{href:"#"}},[t._v(t._s(e.name)+" ")])}),t._v("\n    ]\n  ")],2),t._v(" "),this.$store.state.userName?t._e():a("div",{staticClass:"m-user"},[a("router-link",{staticClass:"login",attrs:{to:{name:"login"}}},[t._v("立即登录")]),t._v(" "),a("router-link",{staticClass:"register",attrs:{to:{name:"registered"}}},[t._v("注册")])],1)])},staticRenderFns:[]};var f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-nav"},[a("ul",{staticClass:"nav"},[a("li",{staticClass:"list"},[a("router-link",{attrs:{to:{name:"my"}}},[t._v("我的美团")]),t._v(" "),a("dl",[a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("我的订单")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("我的收藏")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("抵用券")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("账户设置")])],1)])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"my"}}},[t._v("手机APP")])],1),t._v(" "),a("li",{staticClass:"list bd"},[a("router-link",{attrs:{to:{name:"my"}}},[t._v("商家中心")]),t._v(" "),a("dl",[a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("登录商家中心")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("美团智能收银")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("我想合作")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("手机免费开店")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("餐饮代理商招募")])],1)])],1),t._v(" "),a("li",{staticClass:"list site"},[a("router-link",{attrs:{to:{name:"my"}}},[t._v("网站导航")]),t._v(" "),a("div",{staticClass:"subContainer"},[a("dl",{staticClass:"hotel"},[a("dt",[t._v("酒店旅游")]),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("国际机票")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("火车票")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("民宿")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("经济型酒店")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("主题酒店")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("商务酒店")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("公寓")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("豪华酒店")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("客栈")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("青年旅社")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("度假酒店")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("别墅")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("农家院")])],1)]),t._v(" "),a("dl",{staticClass:"food"},[a("dt",[t._v("吃美食")]),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("烤鱼")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("特色小食")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("烧烤")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("自助餐")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("火锅")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("代金券")])],1)]),t._v(" "),a("dl",{staticClass:"movie"},[a("dt",[t._v("看电影")]),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("热映电影")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("热门电影")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("热映电影口碑榜")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("最受期待电影")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("国内票房榜")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("北美票房榜")])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("电影排行榜")])],1)]),t._v(" "),a("dl",{staticClass:"app"},[a("dt",[t._v("手机应用")]),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"appicon",attrs:{src:"//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png",title:"美团app",alt:"美团app"}})])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"appicon",attrs:{src:"//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png",title:"外卖app",alt:"外卖app"}})])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"appicon",attrs:{src:"https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png",title:"民宿app",alt:"民宿app"}})])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"appicon",attrs:{src:"//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png",title:"点评app",alt:"点评app"}})])],1),t._v(" "),a("dd",[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"appicon",attrs:{src:"//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png",title:"猫眼app",alt:"猫眼app"}})])],1)])])],1)])])},staticRenderFns:[]};var h={components:{mtGeo:a("VU/8")(m,p,!1,function(t){a("6iSo")},null,null).exports,mtNav:a("VU/8")({},f,!1,function(t){a("77Wz")},null,null).exports}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-row",{staticClass:"m-header-topbar m-header"},[e("el-col",{attrs:{span:10}},[e("mt-geo")],1),this._v(" "),e("el-col",{attrs:{span:14}},[e("mt-nav")],1)],1)},staticRenderFns:[]};var b={components:{searchBar:d,topBar:a("VU/8")(h,g,!1,function(t){a("QEi+")},null,null).exports}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-header"},[e("el-row",[e("top-bar")],1),this._v(" "),e("el-row",[e("search-bar")],1)],1)},staticRenderFns:[]};var w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"com-footer"},[a("div",{staticClass:"footer-content"},[a("div",{staticClass:"footer-link clearfix"},[a("div",{staticClass:"footer-column"},[a("dl",[a("dt",[t._v("用户帮助")]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"http://www.meituan.com/help/selfservice",target:"_blank"}},[t._v("申请退款")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"http://www.meituan.com/help/selfservice?tab=2",target:"_blank"}},[t._v("查看美团券密码")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"http://www.meituan.com/help/faq",target:"_blank"}},[t._v("常见问题")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://rules-center.meituan.com/rules-detail/4",target:"_blank"}},[t._v("用户协议")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://rules-center.meituan.com/rules-detail/2",target:"_blank"}},[t._v("隐私政策")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"http://www.meituan.com/about/anticheat",target:"_blank"}},[t._v("反诈骗公告")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://rules-center.meituan.com/customer-rights",target:"_blank"}},[t._v("消费者权益保障")])])]),t._v(" "),a("dl",[a("dt",[t._v("美团服务")]),t._v(" "),a("dd",[a("a",{attrs:{href:"http://waimai.meituan.com/",target:"_blank"}},[t._v("美团外卖")])]),t._v(" "),a("dd",[a("a",{attrs:{href:"http://hotel.meituan.com/",target:"_blank"}},[t._v("美团酒店")])]),t._v(" "),a("dd",[a("a",{attrs:{href:"http://maoyan.com/",target:"_blank"}},[t._v("猫眼电影")])]),t._v(" "),a("dd",[a("a",{attrs:{href:"https://peisong.meituan.com/",target:"_blank"}},[t._v("美团配送")])]),t._v(" "),a("dd",[a("a",{attrs:{href:"https://www.mtyun.com/",target:"_blank"}},[t._v("美团云")])]),t._v(" "),a("dd",[a("a",{attrs:{href:"http://www.dianping.com/",target:"_blank"}},[t._v("大众点评")])]),t._v(" "),a("dd",[a("a",{attrs:{href:"https://minsu.meituan.com/",target:"_blank"}},[t._v("美团民宿")])]),t._v(" "),a("dd",[a("a",{attrs:{href:"https://mad.meituan.com",target:"_blank"}},[t._v("无人配送")])])])]),t._v(" "),a("div",{staticClass:"footer-column"},[a("dl",[a("dt",[t._v("商家合作")]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"http://b.meituan.com/canyin/PC",target:"_blank"}},[t._v("美团餐饮商户中心")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://ecom.meituan.com/bizsettle/settle?utm_source=mt_C_my",target:"_blank"}},[t._v("美食商家入驻(非外卖)")])]),t._v(" "),a("dd",[a("a",{attrs:{href:"https://kd.meituan.com/",target:"_blank"}},[t._v("美团外卖开店申请")])]),t._v(" "),a("dd",[a("a",{attrs:{href:"http://shouyin.meituan.com?utm_source=inner&utm_medium=mtpc",target:"_blank"}},[t._v("美团收银官网")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"http://page.peisong.meituan.com/apply/join",target:"_blank"}},[t._v("外卖配送加盟申请")])]),t._v(" "),a("dd",[a("a",{attrs:{href:"https://xue.meituan.com/?from=mtpc",target:"_blank"}},[t._v("美团点评餐饮学院")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://ruzhu.meituan.com/settle/hotel/propaganda.html",target:"_blank"}},[t._v("酒店商家入驻")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://ruzhu.meituan.com/settle/trip/pc.html",target:"_blank"}},[t._v("境内度假商家入驻")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://e.dianping.com/claimcpc/page/index?source=mt",target:"_blank"}},[t._v("综合商家入驻")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://minsu.meituan.com/about/",target:"_blank"}},[t._v("美团民宿房东商家入驻")])]),t._v(" "),a("dd",[a("a",{attrs:{href:"http://pc.meituan.com/?activity_code=mtpcdb",target:"_blank"}},[t._v("商家开票申请")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://h5.youzan.com/v2/feature/nALm22bkFF?dc_ps=2039811416638097413.200001",target:"_blank"}},[t._v("美团点评智能收银机")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://developer.meituan.com/?from=mtpcsw",target:"_blank"}},[t._v("美团点评餐饮开放平台")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://recommend-zc.meituan.com/opportunity?channel=1",target:"_blank"}},[t._v("美团点评收单")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://paidui.meituan.com/?activity_code=167_00038050",target:"_blank"}},[t._v("免费使用美团排队")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://i.meituan.com/awp/hfe/block/6c4bec785dce/11188/index.html",target:"_blank"}},[t._v("快驴进货商家合作")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://shangou.meituan.com/joinin",target:"_blank"}},[t._v("美团闪购商家入驻")])])])]),t._v(" "),a("div",{staticClass:"footer-column"},[a("dl",[a("dt",[t._v("代理商加盟")]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://mfe.waimai.meituan.com/mfepro/client-h5/#/login",target:"_blank"}},[t._v("美团外卖代理商招募")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://daili.meituan.com/?comeFrom=mtwebBusinesscoopd",target:"_blank"}},[t._v("到店餐饮代理商招募")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"http://www.dianping.com/apollo/agent/index?source=mtpcd",target:"_blank"}},[t._v("非餐饮代理商招募")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"http://union.meituan.com/",target:"_blank"}},[t._v("美团联盟")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://store.meituan.com/distribution/broadcast",target:"_blank"}},[t._v("美团收银招募线上分销商")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://agent.meituan.com/zhaoshang?partnerSource=3",target:"_blank"}},[t._v("美团点评5S服务商招募")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://zf.meituan.com?partnerSource=3",target:"_blank"}},[t._v("美团收单渠道代理商招募")])])]),t._v(" "),a("dl",[a("dt",[t._v("美团规则")]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://rules-center.meituan.com/",target:"_blank"}},[t._v("规则中心")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://rules-center.meituan.com/rules",target:"_blank"}},[t._v("规则目录")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://rules-center.meituan.com/advices",target:"_blank"}},[t._v("规则评议院")])])])]),t._v(" "),a("div",{staticClass:"footer-column"},[a("dl",[a("dt",[t._v("关注美团")]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"http://weibo.com/meituan",target:"_blank"}},[t._v("美团新浪微博")])])]),t._v(" "),a("dl",[a("dt",[t._v("公司信息")]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://about.meituan.com/",target:"_blank"}},[t._v("关于我们")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://about.meituan.com/investor.html",target:"_blank"}},[t._v("投资者关系")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"http://zhaopin.meituan.com/",target:"_blank"}},[t._v("加入我们")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://dpapp-appeal.meituan.com/#/shopCreditRegulationPC",target:"_blank"}},[t._v("商户诚信公约及管理办法")])]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://i.meituan.com/awp/ffe/insurance-website/index.html#/",target:"_blank"}},[t._v("保险经纪资质")])])]),t._v(" "),a("dl",[a("dt",[t._v("廉正举报")]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"mailto:lianzheng@meituan.com",target:"_self"}},[t._v("廉政邮箱")])])]),t._v(" "),a("dl",[a("dt",[t._v("知识产权")]),t._v(" "),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://ipr.meituan.com",target:"_blank"}},[t._v("知识产权维权平台")])])])]),t._v(" "),a("div",{staticClass:"footer-column"},[a("dl",[a("dt",[t._v("消费者服务热线")]),t._v(" "),a("dd",[t._v("\n            外卖消费者：\n            "),a("a",{attrs:{rel:"nofollow",href:"tel:10109777",target:"_blank"}},[t._v("10109777")])]),t._v(" "),a("dd",[t._v("\n            猫眼消费者：\n            "),a("a",{attrs:{rel:"nofollow",href:"tel:10105335",target:"_blank"}},[t._v("10105335")])]),t._v(" "),a("dd",[t._v("\n            其他消费者：\n            "),a("a",{attrs:{rel:"nofollow",href:"tel:10107888",target:"_blank"}},[t._v("10107888")])])]),t._v(" "),a("dl",[a("dt",[t._v("商家服务热线")]),t._v(" "),a("dd",[t._v("\n            外卖&餐饮商家：\n            "),a("a",{attrs:{rel:"nofollow",href:"tel:10105557",target:"_blank"}},[t._v("10105557")])]),t._v(" "),a("dd",[t._v("\n            休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：\n            "),a("a",{attrs:{rel:"nofollow",href:"tel:10100107",target:"_blank"}},[t._v("10100107")])])]),t._v(" "),a("dl",[a("dt",[t._v("投诉举报热线")]),t._v(" "),a("dd",[t._v("\n            违法和不良信息举报电话：\n            "),a("a",{attrs:{rel:"nofollow",href:"tel:4006018900",target:"_blank"}},[t._v("4006018900")])]),t._v(" "),a("dd",[t._v("\n            举报邮箱：\n            "),a("a",{attrs:{rel:"nofollow",href:"mailto:tousujubao@meituan.com",target:"_self"}},[t._v("tousujubao@meituan.com")])])]),t._v(" "),a("dl",[a("dt",[a("a",{attrs:{rel:"nofollow",href:"https://ecom.meituan.com/bizsettle/settle/merchantsSettle",target:"_blank"}},[t._v("商家自助入驻美团入口")])])]),t._v(" "),a("dl",[a("dt",[a("a",{attrs:{rel:"nofollow",href:"https://isp.meituan.com/signup",target:"_blank"}},[t._v("供应商注册入口")])])])])]),t._v(" "),a("div")])])}]};var C={name:"App",components:{headerBar:a("VU/8")(b,k,!1,function(t){a("gXfH")},null,null).exports,mtFooter:a("VU/8")({},w,!1,function(t){a("klbw")},null,null).exports}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"layout-default"},[e("el-container",[e("el-header",{staticStyle:{height:"100%"}},[e("header-bar")],1),this._v(" "),e("el-main",[e("router-view")],1),this._v(" "),e("el-footer",{staticStyle:{height:"100%"}},[e("mt-footer")],1)],1)],1)},staticRenderFns:[]};var x=a("VU/8")(C,y,!1,function(t){a("W+vW")},null,null).exports,P={created:function(){var t=this;o.a.nav().then(function(e){t.menuList=e.data.data})},data:function(){return{detailList:null,menuList:[]}},methods:{ddmouseenter:function(t){this.detailList=t},ddmouseleave:function(){var t=this;this.timer=setTimeout(function(){t.detailList=null},200)},detailmouseenter:function(){clearTimeout(this.timer)},detailmouseleave:function(){this.detailList=null}}},L={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-menu"},[a("dl",{staticClass:"nav",on:{mouseleave:t.ddmouseleave}},[a("dt",[t._v("全部分类")]),t._v(" "),t._l(t.menuList,function(e,n){return a("dd",{key:n+"_"+e,on:{mouseenter:function(a){return t.ddmouseenter(e.items)}}},[a("i",{class:e.type}),t._v("\n      "+t._s(e.name)+"\n      "),a("span",{staticClass:"arrow"})])})],2),t._v(" "),t.detailList?a("div",{staticClass:"detail",on:{mouseenter:t.detailmouseenter,mouseleave:t.detailmouseleave}},[t._l(t.detailList,function(e,n){return a("dl",{key:n+e},[a("dt",[a("h4",[t._v(t._s(e.title))])]),t._v(" "),a("dd",t._l(e.items,function(e,n){return a("span",{key:n},[t._v(t._s(e))])}),0)])})],2):t._e()])},staticRenderFns:[]};var j=a("VU/8")(P,L,!1,function(t){a("Uuo5")},null,null).exports,S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block"},[e("el-carousel",{staticStyle:{height:"250px",overflow:"hidden"}},this._l(this.swiperList,function(t,a){return e("el-carousel-item",{key:a+t,staticClass:"slider-item"},[e("a",{staticClass:"link",attrs:{href:t.url,target:"_blank"}},[e("img",{staticClass:"slider-img-div",attrs:{src:t.pic,alt:""}})])])}),1)],1)},staticRenderFns:[]},E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-life-login"},[t._m(0),t._v(" "),a("p",{staticClass:"m-life-login-name"},[t._v("Hi！"+t._s(this.$store.state.userName?this.$store.state.userName:"你好"))]),t._v(" "),this.$store.state.userName?t._e():a("el-button",{staticClass:"hoveractive",attrs:{round:""}},[a("router-link",{staticStyle:{color:"#222",width:"100%"},attrs:{to:{name:"login"}}},[t._v("登录")])],1),t._v(" "),this.$store.state.userName?t._e():a("el-button",{staticClass:"hoveractive",attrs:{round:""}},[a("router-link",{staticStyle:{color:"#222",width:"100%"},attrs:{to:{name:"regsiter"}}},[t._v("立即注册")])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"head-img-row"},[e("img",{attrs:{src:"//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg",alt:""}})])}]};var F={components:{swiper:a("VU/8")({data:function(){return{swiperList:[{pic:"http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",url:"https://maoyan.com/"},{pic:"http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",url:"https://luquan.meituan.com/meishi/"},{pic:"http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",url:"http://waimai.meituan.com/"},{pic:"https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",url:"http://hotel.meituan.com/"},{pic:"http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",url:"http://hotel.meituan.com/"}]}}},S,!1,null,null,null).exports,login:a("VU/8")({},E,!1,function(t){a("PP7g")},"data-v-c6a5181c",null).exports}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-life"},[a("el-row",[a("ul",{staticClass:"nav"},[a("li",[a("a",{staticClass:"takeout",attrs:{href:"#",target:"_blank"}},[t._v("美团外卖")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#",target:"_blank"}},[t._v("猫眼电影")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#",target:"_blank"}},[t._v("美团酒店")])]),t._v(" "),a("li",[a("a",{staticClass:"apartment",attrs:{href:"#",target:"_blank"}},[t._v("民宿／公寓")])]),t._v(" "),a("li",[a("a",{staticClass:"apartment",attrs:{href:"#",target:"_blank"}},[t._v("商家入驻")])]),t._v(" "),a("li",[a("a",{staticClass:"business",attrs:{href:"#",target:"_blank"}},[t._v("美团公益")])])])]),t._v(" "),a("el-row",[a("el-col",{attrs:{span:14}},[a("swiper"),t._v(" "),a("a",{staticClass:"link",attrs:{href:"//hotel.meituan.com","data-bid":"b_a4enk0wd","data-lab":'{"custom":{"index":3}}',target:"_blank"}},[a("div",{staticClass:"item pic-2 shadow",staticStyle:{"background-image":"url(http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png"}})]),t._v(" "),a("a",{staticClass:"link",attrs:{href:"/jiaoyupeixun/?utm_source=MTPCmain-4","data-bid":"b_a4enk0wd","data-lab":'{"custom":{"index":4}}',target:"_blank"}},[a("div",{staticClass:"item pic-3 shadow",staticStyle:{"background-image":"url(http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg"}})])],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("a",{attrs:{href:"https://luquan.meituan.com/xiuxianyule"}},[a("div",{staticClass:"m-life-pic"}),t._v(" "),a("a",{staticClass:"link",attrs:{href:"http://emis.meishi.meituan.com/merchantsSettled","data-bid":"b_a4enk0wd","data-lab":'{"custom":{"index":5}}',target:"_blank"}},[a("div",{staticClass:"item pic-4 shadow",staticStyle:{"background-image":"url(http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg"}})])])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("login"),t._v(" "),a("div",{staticClass:"item download-app"},[a("div",{staticClass:"qrcode-box"},[a("img",{attrs:{src:"//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png",alt:"下载APP"}})]),t._v(" "),a("p",{staticClass:"app-name"},[t._v("美团APP手机版")]),t._v(" "),a("p",{staticClass:"sl"},[a("span",{staticClass:"red"},[t._v("1元起")]),t._v(" "),a("span",{staticClass:"gary"},[t._v("吃喝玩乐")])])])],1)],1)],1)},staticRenderFns:[]};var R={created:function(){var t=this;o.a.resultsByKeywords().then(function(e){t.data=e.data.data})},props:["nav"],data:function(){return{kind:"all",data:{}}},methods:{handlehover:function(t){var e=t.target;if("dd"!=e.tagName.toLowerCase())return!1;var a=e.getAttribute("data-type");this.kind=a}}},U={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-istyle"},[a("dl",{class:t.nav.class,on:{mouseover:t.handlehover}},[a("dt",[t._v(t._s(t.nav.title))]),t._v(" "),t._l(t.nav.list,function(e,n){return a("dd",{key:e.tab+n,class:{active:t.kind===e.tab},attrs:{"data-type":e.tab}},[t._v(t._s(e.text))])})],2),t._v(" "),a("ul",{staticClass:"ibody"},t._l(t.data[t.kind],function(e,n){return a("li",{key:n},[a("el-card",{attrs:{"body-style":{padding:"0px"},shadow:"never"}},[a("a",{staticClass:"link quality-card",attrs:{href:"//www.meituan.com/meishi/40756329/",target:"_blank"}},[a("div",{staticClass:"el-card"},[a("img",{staticClass:"image",attrs:{src:e.image}})]),t._v(" "),a("div",{staticClass:"cbody"},[a("div",{staticClass:"title",attrs:{title:e.address}},[t._v(t._s(e.address))]),t._v(" "),a("div",{staticClass:"sub-title",attrs:{title:e.subTitle}},[t._v(t._s(e.subTitle))]),t._v(" "),a("div",{staticClass:"price-info"},[a("span",{staticClass:"current-price"},[a("span",{staticClass:"price-symbol numfont"},[t._v("¥")]),t._v(" "),a("span",{staticClass:"current-price numfont"},[t._v(t._s(e.price))])])])])])])],1)}),0)])},staticRenderFns:[]};var W={components:{mtMenu:j,mtLifte:a("VU/8")(F,$,!1,function(t){a("mq/v")},null,null).exports,container:a("VU/8")(R,U,!1,function(t){a("HSyX")},null,null).exports},data:function(){return{iStyle:{class:"istyle",title:"有格调",list:[{text:"全部",tab:"all"},{text:"约会聚餐",tab:"food"},{text:"丽人SPA",tab:"spa"},{text:"电影演出",tab:"movie"},{text:"品质出游",tab:"travel"}]},recomment:{class:"youhui",title:"很优惠",list:[{text:"全部",tab:"all"},{text:"美食",tab:"food"},{text:"休闲",tab:"xiuxian"}]}}}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-index"},[e("el-row",[e("el-col",{attrs:{span:5}},[e("mt-menu")],1),this._v(" "),e("el-col",{attrs:{span:19}},[e("mt-lifte")],1)],1),this._v(" "),e("el-row",[e("el-col",{attrs:{span:24}},[e("container",{attrs:{nav:this.iStyle}})],1),this._v(" "),e("el-col",{attrs:{span:24}},[e("container",{attrs:{nav:this.recomment}})],1)],1)],1)},staticRenderFns:[]},V=a("VU/8")(W,N,!1,null,null,null).exports;n.default.use(i.a);var z=new i.a({mode:"history",base:Object({NODE_ENV:"production"}).BASE_URL,routes:[{path:"/",name:"default",component:x,redirect:"/index",children:[{path:"/index",name:"index",component:V},{path:"/hotPlace/:name",name:"hotPlace",component:function(){return a.e(1).then(a.bind(null,"vzJW"))}},{path:"/changeCity",name:"changeCity",component:function(){return a.e(0).then(a.bind(null,"aW7E"))}}]},{path:"/blank",name:"blank",component:function(){return a.e(4).then(a.bind(null,"WCo9"))},children:[{path:"/blank/login",name:"login",component:function(){return a.e(2).then(a.bind(null,"Qpy8"))}},{path:"/blank/register",name:"regsiter",component:function(){return a.e(3).then(a.bind(null,"LfbA"))}}]}]}),A=a("zL8q"),H=a.n(A);a("tvR6"),a("CuRo");n.default.use(v.a);var q={setPosition:function(t,e){var a=t.commit;o.a.getPosition().then(function(t){a("setPosition",t.data.data),console.log(t.data.data)}).catch(function(t){console.log(t)})}},B=new v.a.Store({state:{position:{},userName:""},mutations:{setUserName:function(t,e){t.userName=e},setPosition:function(t,e){t.position=e}},actions:q});n.default.config.productionTip=!1,n.default.use(H.a),n.default.directive("document-click",{bind:function(t,e,a){document.addEventListener("click",e.value,!1)}}),new n.default({el:"#app",store:B,router:z,components:{App:s},template:"<App/>"})},PP7g:function(t,e){},"QEi+":function(t,e){},Uuo5:function(t,e){},UzV0:function(t,e){},"W+vW":function(t,e){},gXfH:function(t,e){},klbw:function(t,e){},"mq/v":function(t,e){},tvR6:function(t,e){},"wkC+":function(t,e,a){"use strict";var n=a("Dd8w"),r=a.n(n),s="/api/meituan/login",i="/api/meituan/register",o="/api/meituan/header/search.json",l="/api/meituan/header/searchHotWords.json",c="/api/meituan/index/nav.json",d="/api/meituan/index/resultsByKeywords.json",u="/api/meituan/city/cityList.json",_="api/meituan/city/hot.json",v="/api/meituan/city/province.json",m="/api/meituan/city/recents.json",p="/api/meituan/list/goodsList.json",f="/api/meituan/list/recommend.json",h="/api/meituan/list/classify.json",g="/api/meituan/list/areaList.json",b="/api/meituan/city/getPosition.json",k="/api/meituan/product/detail.json",w=a("mtWM"),C=a.n(w).a.create({baseURL:"https://api.duyiedu.com",method:"get"}),y={appkey:"15613154804_1576050037416"};e.a={login:function(t){return C.get(s,{params:r()({},t,y)})},register:function(t){return C.get(i,{params:r()({},t,y)})},search:function(t){return C.get(o,{params:r()({},t,y)})},searchHotWords:function(t){return C.get(l,{params:r()({},t,y)})},nav:function(t){return C.get(c,{params:r()({},t,y)})},resultsByKeywords:function(t){return C.get(d,{params:r()({},t,y)})},cityList:function(t){return C.get(u,{params:r()({},t,y)})},hot:function(t){return C.get(_,{params:r()({},t,y)})},province:function(t){return C.get(v,{params:r()({},t,y)})},recents:function(t){return C.get(m,{params:r()({},t,y)})},goodsList:function(t){return C.get(p,{params:r()({},t,y)})},recommend:function(t){return C.get(f,{params:r()({},t,y)})},classify:function(t){return C.get(h,{params:r()({},t,y)})},areaList:function(t){return C.get(g,{params:r()({},t,y)})},getPosition:function(t){return C.get(b,{params:r()({},t,y)})},detail:function(t){return C.get(k,{params:r()({},t,y)})}}}},["NHnr"]);