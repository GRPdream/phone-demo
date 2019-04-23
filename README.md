```js
import {vm} from "../../main.js"

window.onload = function() {
  document.getElementById("mySwitch").addEventListener("toggle",function(event){
  if(event.detail.isActive){
    vm.$store.commit('changeSelected') //打开开关
  }else{
    vm.$store.commit('changeSelected') //关闭开关
  }
})
}
```
最后是用这个方法解决的按钮问题，但是不符合 Vue 设计思想
（Ps: 中间有些页面是单独写的一个后台假数据，非常简单，这里就不放上来了）