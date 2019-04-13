<template>
  <div class="container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请开始你的表演(吐槽不能超过120字)" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-container">
      <div class="cmt-item">
        <div class="title">
          第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;&nbsp;发表时间：2019-04-13
        </div>
        <div class="body">
          好想打游戏 ORZ
        </div>
      </div>
    </div>
    <div class="cmt-container">
      <div class="cmt-item">
        <div class="title">
          第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;&nbsp;发表时间：2019-04-13
        </div>
        <div class="body">
          好想打游戏 ORZ
        </div>
      </div>
    </div>
    <div class="cmt-container">
      <div class="cmt-item">
        <div class="title">
          第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;&nbsp;发表时间：2019-04-13
        </div>
        <div class="body">
          好想打游戏 ORZ
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain>发表评论</mt-button>
  </div>
</template>

<script>
export default {

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
