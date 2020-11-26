<template>
  <div id="item-info">
    <div class="item top"><slot name="top"></slot></div>
    <div class="item bottom"><slot name="bottom"></slot></div>
  </div>
</template>

<script>
export default {
  name: "ItemInfo",
  components:{
    
  }
}
</script>

<style scoped>
  #item-info{
    height: 88px;
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
  }
  .item{
    color: #666;
    font-size: 14px;
    flex: 1;
  }

  .top{
    height: 50%;
    margin: 20px 0 0 0;
  }

  .bottom{
    height: 50%;
  }
</style>
