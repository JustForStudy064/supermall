<template>
  <div id="cart_bottom">
    <div class="left_select" @click="activeClick">
      <div class="left_radius" :class="{'active':isAllChecked}"></div>
    </div>
    <div class="center_text">
      <span class="center_left_text">全选</span>
      <span class="price_text">合计:￥{{this.$store.state.totalPrice}}</span>
    </div>
    <div class="right_text">
      <span class="total_text">去计算({{this.$store.state.totalCount}})</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartBottom",
  props:{
    isAllChecked:{
      type: Boolean,
      default(){
        return false
      }
    }
  },
  methods:{
    activeClick(){
      this.$store.commit("allSelected", !this.isAllChecked)
      this.$store.commit("calculate")
      this.$emit("bottomSelected", !this.isAllChecked)
    }
  }
}
</script>

<style scoped>
  .left_radius{
    width: 18px;
    height: 18px;
    background: #fff;
    border: 1px solid #666;
    border-radius: 50%;
  }

  .active{
    background: var(--color-tint);
  }

  #cart_bottom{
    display: flex;
    width: 100%;
    height: 44px;
    background: #eee;
  }

  .left_select{
    width: 10%;
    margin-top: 12px;
    padding-left: 10px;
  }

  .center_left_text{
    color: #888;
    font-size: 14px;
  }

  .center_text{
    margin-top: 12px;
    width: 60%;
  }

  .price_text{
    padding-left: 15px;
    color: orangered;
  }

  .right_text{
    width: 30%;
    background: orangered;
    text-align: center;
    padding-top: 12px;
    color: #fff;
  }

</style>