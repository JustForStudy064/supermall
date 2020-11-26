<template>
  <div id="cart_item">
    <div class="left_item" @click="itemClick">
        <div class="left_radius" :class="{'active': itemInfo.is_checked}"></div>
    </div>
    <div class="center_img"><img :src="itemInfo.img" alt=""></div>
    <div class="right_item">
      <div class="top_text">{{itemInfo.title}}</div>
      <div class="center_text">{{itemInfo.desc}}</div>
      <div class="bottom_text">
        <span class="price_text">￥{{itemInfo.price}}</span>
        <span class="count_text">
          <div class="increment" @click="increment">+</div>
          {{itemInfo.count}}
          <div class="decrement" @click="decrement">-</div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItme",
  props:{
    itemInfo:{
      type: Object,
      default(){
        return {}
      }
    },
    
  },
  methods:{
    itemClick(){
      this.$store.commit("checkReverse", this.itemInfo.title)
      this.$store.commit("calculate")
      this.$emit("checkAll")
    },
    increment(){
      this.$store.commit("increment", this.itemInfo.title)
      this.$store.commit("calculate")
    },
    decrement(){
      this.$store.commit("decrement", this.itemInfo.title)
      this.$store.commit("calculate")
    }
  }
}
</script>

<style scoped>
  #cart_item{
    height: 120px;
    background:#fff;
    display: flex;
    width: 100%;
    border-bottom: 1px solid #eee;
  }

  .left_item{
    padding: 52px 5px;
  }

  .left_radius{
    width: 20px;
    height: 14px;
    background: #fff;
    border-radius:50%;
    border: 1px solid #666;
    padding: 10px 0;
  }

  .center_img{
    width: 25%;
    padding: 10px 0px;
  }

  .center_img img{
    height:100px;
    width:80px;
    border-radius: 10%;
  }

  .right_item{
    width: 70%;
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
  }

  .top_text{
   overflow: hidden;
   padding: 5px 0px;
   /* 溢出的文字用...表示 */
   text-overflow: ellipsis;
   /* 规定段落中的文字不能换行 */
   white-space: nowrap;
   height: 30%;
   color:#333;
   font-weight: 600;
  }

  .bottom_text{
    position: relative;
  }

  .center_text{
   overflow: hidden;
   padding: 10px 0px;
   /* 溢出的文字用...表示 */
   text-overflow: ellipsis;
   /* 规定段落中的文字不能换行 */
   white-space: nowrap;
   height: 40%;
   color: #666;
   font-size: 12px;
  }

  .price_text{
    color: orangered;
    font-size: 16px;
    height: 30%;
  }

  .count_text{
    position: absolute;
    right:10px;
  }

  .active{
    background: var(--color-tint);
  }

  .increment{
    display: inline;
    background: #fff;
    border: 1px solid #666;
    border-radius: 50%;
    padding: 0px 5px;
  }

  .decrement{
    display: inline;
    background: #fff;
    border: 1px solid #666;
    border-radius: 50%;
    padding: 0px 5px;

  }
</style>


