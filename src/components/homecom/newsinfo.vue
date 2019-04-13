<template>
  <div class="newsinfo-container">
    <h3 class="title">新闻标题</h3>
    <p class="subtitle">
      <span>发表时间: 2019-04-13</span>
      <span>点击次数：1次</span>
    </p>
    <hr>
    <div><h5>我是内容 --- {{ id }}</h5></div>

    <cmt-box></cmt-box>
  </div>
</template>

<script>
import conment from '../supcom/conment-box.vue'

export default {
  data() {
    return {
      id: this.$route.query.id,
    }
  },
  components:{
    "cmt-box": conment,
  }
}
</script>

<style lang="scss" scoped>
.newsinfo-container{
  padding: 0 4px;
  .title{
    color: red;
    text-align: center;
    margin-top: 10px;
  }
  .subtitle{
    display: flex;
    justify-content: space-between;
    color: #226aff;
  }
  hr{
    margin: 0;
  }
}
</style>

