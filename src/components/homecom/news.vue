<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
        <router-link :to="'/home/newsinfo?id='+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img">
          <div class="mui-media-body">
            <h4>{{ item.title }}</h4>
            <p class='mui-ellipsis'>
              <span>{{ item.time | dataFormat }}</span>
              <span>点击次数：{{ item.click }} 次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    }
  },
  created() {
    this.getNews()
  },
  methods: {
    getNews() {
      this.$http.jsonp('http://127.0.0.1:3006/getNews',{
          jsonp:"callback",
          jsonpCallback:"show",
          }).then(response => {
          this.list = response.body
          console.log("请求成功");
        },response => {
          console.log("请求失败"+response.status);
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.mui-ellipsis{
  color: #226aff;
  font: 11px;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
}
</style>
