<template>
  <div class="goodsinfo-container">
    <!-- 商品图片轮播 -->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
    >
      <div class="ball" v-show="ballFlag"></div>
    </transition>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-swipe :auto="4000">
            <mt-swipe-item><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2472404684,1582559791&fm=26&gp=0.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2345855554,3934499460&fm=26&gp=0.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3375458478,3179667669&fm=26&gp=0.jpg"></mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>
    <!-- 商品购买卡片 -->
    <div class="mui-card">
      <div class="mui-card-header">AK-47 火神 崭新出厂</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div>
            <p class="price">
              市场价：<del>￥999</del>&nbsp;&nbsp;&nbsp;销售价： <span class="old">￥899</span>
            </p>
            <p>购买数量：<numbox></numbox></p>
            <div class="num"></div>
            <div class="buy">
              <mt-button type="primary" size="middle">立刻购买</mt-button>
              <mt-button type="danger" size="middle" @click="toShopCar">加入购物车</mt-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品参数 -->
    <div class="mui-card">
      <!-- header -->
      <div class="mui-card-header">商品参数</div>
      <!-- body -->
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <span>商品货号：56489646415</span>
          <span>库存情况：4件</span>
          <span>上架时间：2019-04-18</span>
        </div>
      </div>
      <!-- footer -->
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain>图文介绍</mt-button>
        <mt-button type="danger" size="large" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from "../../supcom/num-box.vue"

export default {
  data() {
    return {
      ballFlag: false,
    }
  },
  methods: {
    toShopCar(){
      this.ballFlag = !this.ballFlag
    },
    beforeEnter(el) {
      el.style.transform="translate(0, 0)"
    },
    enter(el,done) {
      el.offsetWidth;
      el.style.transform="translate(93px, 230px)"
      el.style.transition="all 1s cubic-bezier(.25,-0.84,.83,.67)"
      done()
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag
    },
  },
  components: {
    numbox
  }
}
</script>

<style lang="scss" scoped>
.goodsinfo-container{
  background-color: #ccc;
  overflow: hidden;
  .ball{
    height: 15px;
    width: 15px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    z-index: 99;
    top: 392px;
    left: 148px;
  }
  .mui-card{
    .mint-swipe {
      height: 200px;
      text-align: center;
      img{
        width: 100%;
        height: 100%;
      }
    } 
  }
  .mui-card{
    .price{
      .old{
        color: red;
        font-size: 18px;
      }
    }
    .buy{
      display: flex;
      .mint-button{
        margin-left: 10px;
      }
    }
  }
  .mui-card{
    .mui-card-content-inner{
      display: flex;
      flex-direction: column;
      span{
        font-size: 14px;
        color: #aaa;
        margin-bottom: 5px;
      }
    }
    .mui-card-footer{
      display: block;
      .mint-button{
        margin: 15px 0;
      }
    }
  }
}
</style>
