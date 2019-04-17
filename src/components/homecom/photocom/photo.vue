<template>
  <div>
    <!-- 头部滑动区域 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a class="mui-control-item mui-active">
            推荐
          </a>
          <a class="mui-control-item">
            热点
          </a>
          <a class="mui-control-item">
            成都
          </a>
          <a class="mui-control-item">
            社会
          </a>
          <a class="mui-control-item">
            娱乐
          </a>
          <a class="mui-control-item">
            游戏
          </a>
        </div>
      </div>
    </div>
    <!-- 图片区域 -->
    <ul class="myUl">
      <router-link v-for="(item, index) in imgList" :key="index" to="/home/photoinfo" tag="li">
        <img v-lazy= "item.url">
        <div class="info">
          <h1 class="info-title">{{item.name}}</h1>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from "../../../lib/mui/js/mui.min.js"

export default {
  data() {
    return {
      imgList: [
        { name: 'AWP', url: "http://img2.imgtn.bdimg.com/it/u=4242882043,1816911659&fm=26&gp=0.jpg"},
        { name: 'AK-47', url: "http://img3.imgtn.bdimg.com/it/u=1287056845,810945008&fm=26&gp=0.jpg"},
        { name: 'M4A1', url: "http://img0.imgtn.bdimg.com/it/u=391984077,2544849909&fm=26&gp=0.jpg"},
        { name: 'P250', url: "http://img1.imgtn.bdimg.com/it/u=1538026522,3368635315&fm=26&gp=0.jpg"},
        { name: 'P90', url: "http://img4.imgtn.bdimg.com/it/u=2603233949,4091977065&fm=26&gp=0.jpg"},
      ]
    }
  },
  mounted() {   //如果要操作具体的 DOM 元素最好在 mounted 中操作
    mui('.mui-scroll-wrapper').scroll({
    scrollX: true,
    scrollY: false,
    startX: 0,
    indicators: true,
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });
  },
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
  a{
    text-decoration: none;
  }
  .myUl{
    padding: 0 10px;
    li{
    position: relative;
    list-style-type: none;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    text-align: center;
    background-color: #ccc;
    }
    img{
      width: 100%;
      vertical-align: middle;
    }
    img[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto
    }
    .info{
      position: absolute;
      bottom: 0;
      left: 6px;
      color: tomato;
      text-align: left;
      .info-title{
        font-size: 16px;
      }
    }
  }
  
  
}
</style>
