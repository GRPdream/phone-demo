<template>
  <div class="shopcar-container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="goodsdetail">
            <div class="mui-switch mui-switch-mini mui-active mui-switch-blue" @change="btnChanged" id="mySwitch" ref="mySwitchs">
              <div class="mui-switch-handle"></div>
            </div>
            <div class="pic"><img src="http://img1.imgtn.bdimg.com/it/u=2940812972,2144076561&fm=26&gp=0.jpg"></div>
            <div class="numAndPrice">
              <h4>二西莫夫，打到你哭</h4>
              <p>
                <span>￥599</span>
                <numbox :initcount="$store.state.car[0].count"></numbox>
                <a href="#" @click.prevent="remove">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div>
            <p>总计（不含运费）</p>
            <p>已勾选商品<span class="red">{{ this.$store.getters.getAllCount }}</span>件，总价：<span class="red">￥{{ this.$store.getters.getPrice }}</span></p>
          </div>
          <mt-button type="danger" size="normal" @click="myclick">去结算</mt-button>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from "../supcom/num-box.vue"
import mui from "../../lib/mui/js/mui.min.js"

export default {
  data() {
    return {
      isActive: {},
    }
  },
  mounted() {
    mui('.mui-switch')['switch']()
    this.isActive = this.$refs.mySwitchs.classList
    //console.log(this.isActive);
    //.classList.contains("mui-active")
  },
  watch: {
    // activeLength: {
    //   function (newVal, oldVal){
    //     console.log(newVal);
    //   }
    // }
  },
  computed:{
  },
  components: {
    numbox
  },
  methods: {
    remove() {
      console.log("就算你点了，我也删不掉它···");
    },
    myclick() {
      //var isActive = document.getElementById("mySwitch").classList.contains("mui-active");
      console.log(this.isActive.length);
      //console.log(typeof(this.isActive[3]));
      console.log(this.isActive);
      console.log(activeLength);
      //console.log(this.$refs.mySwitchs.classList.contains("mui-active"));
      //mui("#mySwitch").switch().toggle();
    },
    btnChanged() {
      console.log("okok");
    },
  },
}
</script>

<style lang="scss" scoped>
.shopcar-container{
  background-color: #eee;
  overflow: hidden;
  .goodsdetail{
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    span{
      color: red;
    }
    .numAndPrice{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-content: space-around;
    }
  }
  .mui-card-content-inner{
    display: flex;
    justify-content: space-around;
    align-items: center;
    .pic{
      height: 60px;
      width: 60px;
    }
    img{
      height: 100%;
      width: 100%;
    }
    .red{
      color: red;
      font-size: 16px;
    }
  }
}
</style>

