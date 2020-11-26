<template>
  <div id="bottom-bar">
    <div class="bottom_item">
      <div class="item_left">
        <div class="icon left_icon"></div>
        <span>客服</span>
      </div>
      <div class="item_left">
        <div class="icon center_icon"></div>
        <span>店铺</span>
      </div>
      <div class="item_left">
        <div class="icon right_icon"></div>
        <span>收藏</span>
      </div>
      <div class="add_cart" @click="add_cart">
        <div>加入购物车</div>
      </div>
      <div class="buy">
        <div>购买</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "BottomBar",
  data(){
    return {

    }
  },
  methods: {
    add_cart(){
      this.$emit("add_cart")
    }
  }
}
</script>

<style scoped>
  #bottom-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 49px;
    width: 100%;
    background: #fff;
    z-index: 99;
  }

  .bottom_item{
    display:flex;
    height: 44px;
    width: 100%;
  }

  .item_left{
    width: 15%;
    text-align: center;
    color: #666;
    font-size: 10px;
    margin-top: 6px;
  }

  .add_cart{
    width: 30%;
    color: #333;
    background: #ffe817;
    text-align: center;
    font-size: 14px;
    padding: 16px;
  }

  .buy{
    width: 25%;
    color: #fff;
    background: #f69;
    text-align: center;
    padding: 16px;
    font-size: 14px;
  }

  .icon{
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
    margin: auto;
    flex: 1;
    height: 26px;
    width: 26px;
  }

  .left_icon{
    background-position: 0 -63px;
  }

  .center_icon{
    background-position: 0 -117px;
  }

  .right_icon{
    background-position: 0 -177px;
  }

</style>

