<template>
  <div class="pop_layer" v-show="is_show">
    {{message}}
  </div>
</template>

<script>
export default {
  name:"Toast",
  props:{
    message:{
      type: String,
      default(){
        return ""
      }
    },
    is_show:{
      type: Boolean,
      default(){
        return true
      }
    }
  },
}
</script>

<style scoped>
  .pop_layer{
    position: fixed;
    padding: 10px 20px;
    height: 40px;
    background: #666;
    color: #fff;
    left: calc(50% - 70px);
    top: calc(50% - 60px);
  }
</style>