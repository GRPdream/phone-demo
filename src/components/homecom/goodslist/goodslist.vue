<template>
  <div class="goodslist">
    <div class="goodsitem" @click="goto()">
      <img src="http://img3.imgtn.bdimg.com/it/u=2472404684,1582559791&fm=26&gp=0.jpg">
      <h1>AK-47 火神 崭新出厂</h1>
      <div class="info">
        <p class="price">
          <span class="new">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>存货: 5</span>
        </p>
      </div>
    </div>
     <div class="goodsitem" @click="goto()">
      <img src="http://img3.imgtn.bdimg.com/it/u=2472404684,1582559791&fm=26&gp=0.jpg">
      <h1>AK-47 火神 崭新出厂</h1>
      <div class="info">
        <p class="price">
          <span class="new">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>存货: 5</span>
        </p>
      </div>
    </div>
     <div class="goodsitem" @click="goto()">
      <img src="http://img3.imgtn.bdimg.com/it/u=2472404684,1582559791&fm=26&gp=0.jpg">
      <h1>AK-47 火神 崭新出厂</h1>
      <div class="info">
        <p class="price">
          <span class="new">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>存货: 5</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 1,
    }
  },
  methods: {
    goto(){
      // route一般用于参数，而 router 一般用于页面跳转之类的编程式导航
      this.$router.push({ name: 'goodsinfo', params:{ id: this.id }})
    },
  },
}
</script>

<style lang="scss" scoped>
.goodslist{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px;
  .goodsitem{
    width: 49%;
    border: 1px solid;
    margin: 4px 0;
    box-shadow: 0 0 8px #ccc;
    img{
      width: 100%;
    }
    h1{
      font-size: 18px;
      margin: 4px 0;
      margin-left: 4px;
    }
    .info{
      background-color: #eee;
      margin: 4px;
      p{
        margin: 0;
      }
      .price{
        .new{
          color: red;
          font-size: 18px;
        }
        .old{
          font-size: 14px;
          text-decoration: line-through;
          margin-left: 8px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
        padding: 0 2px;
      }
    }
  }
}
</style>