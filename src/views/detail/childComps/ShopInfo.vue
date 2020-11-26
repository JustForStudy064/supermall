<template>
  <div id="shop_info">
    <div class="shop_top">
        <img :src="shopLogo" alt="">
        <span class="shop_name">{{shopName}}</span>
    </div>
    <div class="shop_middle">
      <div class="shop_middle_left">
        <div class="shop_middle_sell">
          <span class="sell_item m_text">{{showSell}}</span>
          <span class="sell_item s_text">总销量</span>
        </div>
        <div class="shop_middle_goods">
          <span class="goods_item m_text">{{cGoods}}</span>
          <span class="goods_item s_text">全部宝贝</span>
        </div>
      </div>
      <div class="shop_middle_right">
        <tr v-for="item in score" :key="item.id">
          <td class="name_item">{{item.name}}</td>
          <td class="score_item low_text">{{item.score}}</td>
          <td class="assert_item" v-if="item.score<4.7">
            <span class="low_text_bg">低</span>
          </td>
          <td class="assert_item" v-else>
            <span class="high_text_bg">高</span>
          </td>
        </tr>
      </div>
    </div>
    <div class="shop_bottom">
      <div class="enter_shop">
        进店逛逛
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ShopInfo',
  props:{
    shopLogo:{
      type: String,
      default() {
        return ''
      }
    },
    shopName: {
      type: String,
      default() {
        return ''
      }
    },
    cSells: {
      type: Number,
      default() {
        return ''
      }
    },
    cGoods: {
      type: Number,
      default() {
        return ''
      }
    },
    score: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    showSell: function(){
      return (this.cSells/10000).toFixed(1) + '万'
    },
  }
}
</script>

<style scoped>
  #shop_info{
    padding:25px 8px 0;
  }

  .shop_top{
    height: 45px;
    display: flex;
    margin-bottom: 10px;
  }

  .shop_top img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  .shop_name{
    margin: 14px 0 0 14px;
    height: 45px;
  }

  .shop_middle{
    width: 100%;
    height: 70px;
    display: flex;
  }

  .shop_middle_left{
    width: 50%;
    display: flex;
    padding-top: 15px;
  }

  .shop_middle_sell{
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .shop_middle_goods{
    width: 50%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #eee;
    text-align: center;
  }

  .sell_item{
    width: 100%;
    flex: 1;
  }

  .goods_item{
    width:100%;
    flex: 1
  }

  .shop_middle_right{
    border: 1px;
    width: 50%;
    text-align: center;
    margin: auto;
    padding-left: 30px;
    font-size: 12px;
  }

  .name_item{
    width: 40%;
    line-height: 24px;
  }

  .score_item{
    width: 40%;
  }

  .assert_item{
    width: 10%;
    line-height: 12px;
  }

  .m_text{
    font-size: 20px;
  }

  .s_text{
    font-size: 6px;
  }

  .low_text{
    color: #5ea732;
  }

  .high_text{
    color: #Fe3e3a;
  }

  .low_text_bg{
    color: white;
    background: #5ea732;
  }

  .high_text_bg{
    color: white;
    background: red;
  }

  .enter_shop{
    background: #F2F5F8;
    color: #666;
    text-align: center;
    line-height: 30px;
    font-size: 15px;
    margin: 20px auto 10px;
    height: 30px;
    width: 150px;
    border-radius: 15%;
  }

  .shop_bottom{
    height: 30px;
    padding-bottom: 20px;
    margin: 20px 0;
    height: 60px;
    border-bottom:5px solid #eee;
  }
</style>
