<template>
  <div id="info_second">
    <info class="info_second_item">
        <img src="~assets/img/profile/cart.svg" slot="left">
        <span slot="right">{{info_second[0]}}</span>
    </info>
    <info class="info_second_item">
        <img src="~assets/img/profile/shopping.svg" slot="left">
        <span slot="right">{{info_second[1]}}</span>
    </info>
  </div>
</template>

<script>
import Info from './Info'

export default {
  name:"InfoSecond",
  components: {
    Info
  },
  data(){
    return {
      info_second:["我的购物车", "下载购物APP"],
    }
  }
}
</script>

<style scoped>
  .info_second_item{
    padding: 10px;
    border-bottom: 1px solid rgba(0,0,0,.05);
  }

  .info_second_item img{
    width: 25px;
    height: 25px;
  }
</style>

