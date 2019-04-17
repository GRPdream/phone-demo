<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="../../images/1.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="../../images/2.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="../../images/3.jpg"></mt-swipe-item>
    </mt-swipe>
    
    <!-- 九宫图 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/news">
        <span class="mui-icon mui-icon-chatboxes"></span>
        <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photo">
        <span class="mui-icon mui-icon-email"></span>
        <div class="mui-media-body">图片分享</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
        <span class="mui-icon mui-icon-chatbubble"></span>
        <div class="mui-media-body">商品列表</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-location"></span>
        <div class="mui-media-body">location</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-search"></span>
        <div class="mui-media-body">Search</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-phone"></span>
        <div class="mui-media-body">Phone</div></a></li>
  </ul> 
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  .mui-table-view-cell{
    border: 0;
  }
}
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: cyan
    }
    &:nth-child(2) {
      background-color: lightgreen;
    }
    &:nth-child(3) {
      background-color: lightpink;
    }

    img{
      width: 100%;
      height: 100%;
    }
  } 
}
</style>

