<template>
  <div id="info_bar">
    <div class="info_order">
      <!-- <span class="order_left">{{columns[0]}}</span>
      <span class="order_center">{{columns[1]}}</span>
      <span class="order_right">{{columns[2]}}</span> -->
      <span v-for="item in columns" :key="item.id">
        <span class="order_item">{{item}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoBar",
  data(){
    return {
    }
  },
  props:{
    columns: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created(){

  },
}
</script>

<style scoped>
  .info_order{
    line-height: 16px;
    font-size: 12px;
    margin: 14px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    color: #999;
    border-bottom: 2px solid #eee;
  }

  .order_item{
    flex-wrap: nowrap;
    flex:1;
  }
</style>
