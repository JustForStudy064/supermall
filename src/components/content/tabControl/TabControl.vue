<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="item.id" 
        class="tab-control-item" :class="{active: index === currentIndex}">
      <span @click="itemClick(index)">{{item}}</span>
    </div>
  </div>    
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles:{
        types: Array,
        default() {
          return []
        }
      },
      currentIndex:{
        type: Number,
        default(){
          return 0
        }
      }
    },
    data() {
      return {
        
      }
    },
    methods: {
      itemClick(index){
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display:flex;
    text-align: center;
    background:white;
    height: 40px;
    line-height:40px;
  }

  .tab-control-item{
    flex:1;
  }

  .tab-control-item span{
    padding: 5px;
  }

  .active{
    color: var(--color-high-text);
  }

  .active span{
    border-bottom: 3px solid var(--color-tint);

  }
</style>


