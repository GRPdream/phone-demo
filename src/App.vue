<template>
  <div class="app-container">
    <!-- head -->
    <mt-header fixed title="顶部组件"></mt-header>

    <!-- container -->
    <transition mode="out-in">
      <router-view></router-view>
    </transition>

    <!-- footer -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-lx" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-lx" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-lx" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-lx" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>

</script>


<style scoped>
.mui-tab-item-lx{
  text-decoration: none;
}
a.mui-tab-item-lx.router-link-exact-active.mui-active {
    color: #26a2ff;
  }
.app-container{
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%)
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%)
}
.v-enter-active, .v-leave-active{
  transition: all 0.4s ease;
}
.mui-bar-tab .mui-tab-item-lx {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-lx .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-lx .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
