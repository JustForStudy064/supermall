<template>
  <div id="info">
    <span class="left"><slot name="left"></slot></span>
    <span class="right"><slot name="right"></slot></span>
  </div>
</template>

<script>
export default {
  name: "Info", 
}
</script>

<style scoped>
  #info{
    display: flex;
    height: 45px;
    width: 100%;
  }

  .left{
    width: 10%;
  }

  .right{
    width: 90%;
    padding-top: 4px;
    font-size: 16px;
  }
</style>
