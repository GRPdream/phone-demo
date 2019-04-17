<template>
  <div class="container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请开始你的表演(吐槽不能超过120字)" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postContent">发表评论</mt-button>
    <div class="cmt-container">
      <div class="cmt-item" v-for="(item, index) in contentList" :key="index">
        <div class="title">
          第{{ index+1 }}楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;&nbsp;发表时间：{{ item.time }}
        </div>
        <div class="body">
          {{ item.content }}
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="loadmore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui' //这并不是一个全局的变量

export default {
  data() {
    return {
      msg: '',
      contentList: [],
    }
  },
  created() {
    this.getContent()
  },
  methods: {
    loadmore() {
      Toast("即便你点了，我也没有东西加载啊ORZ")
    },
    getContent() {
      this.$http.jsonp('http://127.0.0.1:3006/getContent',{
          jsonp:"callback",
          jsonpCallback:"getContent",
          })
          .then(response => {
          this.contentList = response.body
        },response => {
          console.log("请求失败"+response.status);
        })
    },
    postContent() {
      if(this.msg.trim().length === 0){
        return Toast("什么都么有你叫我怎么发啊(空格我看不到ORZ)")
      }
      
      var myDate = new Date()
      var rightTime = myDate.getFullYear() + '-0' + (myDate.getMonth()+1) + '-' + myDate.getDate()
      this.$http.jsonp('http://127.0.0.1:3006/postContent',{
        jsonp:"callback",
        jsonpCallback:"postContent",
        params: { time: rightTime, msg: this.msg.trim() }
      })
      .then( response => {
        var cmt = { time: rightTime, content: this.msg.trim() }
        this.contentList.unshift(cmt)
        this.msg = ""
      },response => {
          console.log("请求失败"+response.status);
        })
    }
  },
}
</script>

<style lang="scss" scoped>
.container{
  padding: 0 4px;
  h3{
    font-size: 18px;
  }
  hr{
    margin: 10px 0;
  }
  textarea{
    height: 85px;
    font-size: 12px;
    padding: 0;
  }
  .cmt-container{
    .cmt-item{
      .title{
        margin-top: 3px;
        background-color: #ccc;
        font-size: 13px;
        line-height: 30px;
      }
      .body{
        font-size: 15px;
        line-height: 40px;
        text-indent: 2em;
      }
    }
  }
}
</style>
