import VueRouter from 'vue-router'
import home from "./components/subcom/home.vue"
import member from "./components/subcom/member.vue"
import shopcar from "./components/subcom/shopcar.vue"
import search from "./components/subcom/search.vue"
import news from "./components/homecom/newscom/news.vue"
import newsinfo from "./components/homecom/newscom/newsinfo.vue"
import photo from "./components/homecom/photocom/photo.vue"
import photoinfo from "./components/homecom/photocom/photoinfo.vue"
import goodslist from "./components/homecom/goodslist/goodslist.vue"
import goodsinfo from "./components/homecom/goodslist/goodsinfo.vue"


var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/member', component: member },
    { path: '/shopcar', component: shopcar },
    { path: '/search', component: search },
    { path: '/home/news', component: news},
    { path: '/home/newsinfo', component: newsinfo},
    { path: '/home/photo', component: photo},
    { path: '/home/photoinfo', component: photoinfo},
    { path: '/home/goodslist', component: goodslist},
    { path: '/home/goodsinfo', component: goodsinfo, name: "goodsinfo"}
  ],
  linkActiveClass: 'mui-active'
})

export default router