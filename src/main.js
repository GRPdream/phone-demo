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
import vuex from 'vuex'
Vue.use(vuex)

import MintUI from 'mint-ui'
Vue.use(MintUI)
import "mint-ui/lib/style.css"

//定义一个全局的时间过滤器
Vue.filter('dataFormat', function(dataStr, pattern="YYYY-MM-DD HH:mm:ss") {  // pattern 是设置默认值
  return moment(dataStr).format(pattern)
})

var cart = JSON.parse(localStorage.getItem('car') || '[]')
//定义 vuex 的实例
const store = new vuex.Store({
  state: {  // 通过 this.$store.state.*** 调用
    car: cart,
  },
  mutations: {  // 通过 this.$store.commit('***') 调用
    addCar(state, goodsinfo) {
      //let flag = false
      let flag = state.car.some( item => {
      if(item.id == goodsinfo.id) {
        item.count += parseInt(goodsinfo.count)
        return true
       }
      })
      if(!flag) {
        state.car.push(goodsinfo)
      }
      this.commit('dataToLocal', state.car)
    },
    dataToLocal(state, data) {
      localStorage.setItem('car', JSON.stringify(data))
    },
  },
  getters: {  // 通过 this.$store.getters.*** 调用
    getAllCount(state) {
      var allCount = 0
      state.car.forEach( item => {
        allCount += item.count
      })
      return allCount
    },
    getPrice(state, getters) {
      var price = getters.getAllCount*599
      return price
    }
  },
})

var vm = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
})