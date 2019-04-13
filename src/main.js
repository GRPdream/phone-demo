import Vue from "vue"
import App from "./App.vue"
import { Header, Swipe, SwipeItem, Button } from "mint-ui"
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import router from "./router.js"
import VueResource from 'vue-resource'
Vue.use(VueResource)
import moment from 'moment' //导入时间处理模块

import "../node_modules/mint-ui/lib/header/style.css"
import "../node_modules/mint-ui/lib/swipe/style.css"
import "../node_modules/mint-ui/lib/button/style.css"
import "../node_modules/mint-ui/lib/Toast/style.css"
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

//定义一个全局的时间过滤器
Vue.filter('dataFormat', function(dataStr, pattern="YYYY-MM-DD HH:mm:ss") {  // pattern 是设置默认值
  return moment(dataStr).format(pattern)
})

var vm = new Vue({
  el: '#app',
  render: h => h(App),
  router
})