import Vue from "vue"
import App from "./App.vue"
import { Header } from "mint-ui"
import "./lib/mui/css/mui.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import "../node_modules/mint-ui/lib/header/style.css"
Vue.component(Header.name, Header)

var vm = new Vue({
  el: '#app',
  render: h => h(App),
})