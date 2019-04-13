import VueRouter from 'vue-router'
import home from "./components/subcom/home.vue"
import member from "./components/subcom/member.vue"
import shopcar from "./components/subcom/shopcar.vue"
import search from "./components/subcom/search.vue"
import news from "./components/homecom/news.vue"
import newsinfo from "./components/homecom/newsinfo.vue"

var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/member', component: member },
    { path: '/shopcar', component: shopcar },
    { path: '/search', component: search },
    { path: '/home/news', component: news},
    { path: '/home/newsinfo', component: newsinfo}
  ],
  linkActiveClass: 'mui-active'
})

export default router