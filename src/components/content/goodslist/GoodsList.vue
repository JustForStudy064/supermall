<template>
  <div class="goods-list">
    <goods-list-item
            v-for="item in goods" :key="item.id"
            :goods-item="item" class="item">
    </goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem,
    },
    props:{
      goods:Array,
      Default() {
        return []
      }
    }
  }
</script>


<style scoped>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-around;
  }
  
  .goods-list .item {
    width: 48%;
  }
</style>