<template>
  <div id="app">
    <nav-bar class="my_bg">
      <div slot="center">我的档案</div>
    </nav-bar>
    <top-info/>
    <div class="items-info">
      <item-info v-for="(itemKey, itemValue, index) in userInfo" class="item-info" :key='itemKey.id'>
        <div slot="top"><span class="item_text">{{itemKey}}</span>{{infoUnit[index]}}</div>
        <div slot="bottom">{{itemValue}}</div>
      </item-info>
    </div>
    <info-first class="info_first_bottom"/>
    <info-second/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TopInfo from './childComps/TopInfo'
import ItemInfo from './childComps/ItemInfo'
import InfoFirst from './childComps/InfoFirst'
import InfoSecond from './childComps/InfoSecond'

export default {
  name: 'Profile',
  components: {
    NavBar,
    TopInfo,
    ItemInfo,
    InfoFirst,
    InfoSecond
  },
  data(){
    return {
      userInfo:{
        "我的余额": "0.00",
        "我的优惠": "0",
        "我的积分": "0",
      },
      infoUnit:['元', '个', '分'],
    }
  }
}
</script>

<style scoped>
  .my_bg{
    background: #ff5777;
    color: white;
    font-size: 16px;
    font-weight: 700;
  }

  .items-info{
    display: flex;
    flex-direction: row;
    width:100%;
    border-bottom: 16px solid rgba(0,0,0,.05)
  }

  .item-info{
    flex: 1;
  }

  .item_text{
    color: #ff5f3e;
    font-weight: 700;
    font-size: 26px;
  }
  
  .info_first_item{
    padding: 10px;
    border-bottom: 1px solid rgba(0,0,0,.05);
  }

  .info_first_item img{
    width: 25px;
    height: 25px;
  }

  .info_first_bottom{
    border-bottom: 16px solid rgba(0,0,0,.05);
  }
</style>