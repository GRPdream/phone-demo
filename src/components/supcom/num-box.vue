<template>
  <div class="mui-numbox" data-numbox-min='1' style="height:25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="(initcount==undefined)?count:initcount" @change="getCount" ref="numbox"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js"
export default {
  data() {
    return {
      count: 1,
    }
  },
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    getCount(){
      if(typeof(this.initcount) == "undefined"){
        this.$emit('func', parseInt(this.$refs.numbox.value))
      }else {
        this.$store.state.car[0].count = parseInt(this.$refs.numbox.value)
        this.$store.commit('dataToLocal', this.$store.state.car)
      }
    }
  },
  props: ['initcount']
}
</script>

<style lang="scss" scoped>

</style>
