<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.id">
      <a :href="item.link" class="item">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props:{
    recommends:{
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    padding: 8px 0px;
    border-bottom: 8px solid #eee;
  }

  .item{
    flex: 1;
    font-size: 16px;
  }
  
  .item img{
    width:90%;
  }

</style>

