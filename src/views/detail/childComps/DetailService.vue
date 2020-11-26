<template>
  <div id="detail_service" class="detail_service">
    <span v-for="item in services" :key="item.id" class="container">
      <img :src="item.icon" class="item_img">
      <span>{{item.name}}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "DetailService",
  props: {
    services:{
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>

  .item_span{
    flex: 1;
  }

  .item_img{
    width: 12px;
    height: 12px;
  }

  .detail_service{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    font-size: 12px;
    padding: 5px 0px 15px 0px;
    border-bottom: 5px solid #eee;
  }
</style>



