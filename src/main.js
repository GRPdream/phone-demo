import Vue from "vue"
import App from "./App.vue"
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import router from "./router.js"
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.emulateJSON = true  //设置 post 时的表格组织形式
import moment from 'moment' //导入时间处理模块

import MintUI from 'mint-ui'
Vue.use(MintUI)
import "mint-ui/lib/style.css"

//定义一个全局的时间过滤器
Vue.filter('dataFormat', function(dataStr, pattern="YYYY-MM-DD HH:mm:ss") {  // pattern 是设置默认值
  return moment(dataStr).format(pattern)
})

var vm = new Vue({
  el: '#app',
  render: h => h(App),
  router
})