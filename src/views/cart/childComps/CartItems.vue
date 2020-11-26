<template>
  <div id="cart-items">
    <div v-for="item in infoList" :key="item.id">
      <cart-item :itemInfo="item" :isActive="item.isActive" @checkAll="checkAll"/>
    </div>
  </div>
</template>

<script>
import CartItem from './CartItem'

export default {
  name:"CartItems",
  props: {
    infoList:{
      type: Array,
      default(){
        return []
      }
    }
  },
  components:{
    CartItem
  },
  methods:{
    checkAll(){
      let flag = 1
      let cartList = this.$store.state.cartList
      console.log(cartList)
      for(let i = 0; i < cartList.length; i++){
        if(cartList[i].is_checked == false){
          flag = 0
          break
        }
      }
      if(flag == 1){
        this.$emit("allChecked")
      }else{
        this.$emit("notAllChecked")
      }
    }
  }
}
</script>

<style scoped>
  
</style>