<template>
  <div class="backTop">
    <img src="~assets/img/common/top.png" alt="" @click="backClick">
  </div>
</template>

<script>
  
  export default {
    name:"BackTop",
    methods: {
      backClick() {
        this.$emit('backClick')
      }
    }
  }
</script>

<style scoped>
  .backTop{
    height: 45px;
    width: 45px;
    position: fixed;
    z-index: 9;
    right: 5px;
    bottom: 50px;
  }

  .backTop img{
    width: 100%;
  }
</style>