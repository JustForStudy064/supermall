<template>
  <div id="app">
    <nav-bar class="nav_bg">
      <div slot="center">购物车({{goodsCount}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
    <cart-items :infoList="cartList" 
                @allChecked="allChecked" 
                @notAllChecked="notAllChecked"/>
    </scroll>
    <cart-bottom class="cart_bottom" 
                :isAllChecked="isAllChecked" 
                @bottomSelected="bottomSelected"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartBottom from './childComps/CartBottom'
import CartItems from './childComps/CartItems'
import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartBottom,
    CartItems,
    Scroll
  },
  data() {
    return {
      goodsCount: 0,
      isAllChecked: false,
      cartList: this.$store.state.cartList
    }
  },
  activated(){
    console.log("激活购物车")
    this.$store.commit("isAllCheckedInit")
    this.isAllChecked = this.$store.state.isAllChecked
    this.$refs.scroll.refresh()
  },
  methods:{
    allChecked(){
      this.isAllChecked = true
    },
    notAllChecked(){
      this.isAllChecked = false
    },
    bottomSelected(flag){
      this.isAllChecked = flag
      this.cartList = this.$store.state.cartList
      console.log(this.cartList)
    }
  }
}
</script>

<style scoped>
  .nav_bg{
    background:#ff5777;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
  }

  .cart_bottom{
    position: fixed;
    bottom: 49px;
    left: 0;
  }

  .content{
    position: absolute;
    top: 44px;
    bottom: 88px;
    left: 0;
    right: 0;
  }
</style>