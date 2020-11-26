<template>
  <div id="info_first">
    <info class="info_first_item">
        <img src="~assets/img/profile/message.svg" slot="left" >
        <span slot="right">{{info_first[0]}}</span>
    </info>
    <info class="info_first_item">
        <img src="~assets/img/profile/pointer.svg" slot="left" >
        <span slot="right">{{info_first[1]}}</span>
    </info>
    <info class="info_first_item">
        <img src="~assets/img/profile/vip.svg" slot="left" >
        <span slot="right">{{info_first[2]}}</span>
    </info>
  </div>
</template>

<script>
import Info from './Info'
export default {
  name:"InfoFirst",
  components: {
    Info
  },
  data(){
    return {
      info_first:["我的消息", "积分商城", "会员卡"],
    }
  }
}
</script>

<style scoped>
  .info_first_item{
    padding: 10px;
    border-bottom: 1px solid rgba(0,0,0,.05);
  }

  .info_first_item img{
    width: 25px;
    height: 25px;
  }
</style>

