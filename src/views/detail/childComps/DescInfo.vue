<template>
  <div id="desc_info">
    <div class="desc_info">
      {{descInfo}}
    </div>
    <div class="info_list">
      <span class="info_text">穿着效果</span>
      <div v-for="item in detailImg" :key="item.id" class="container">
        <img :src="item" alt="" @load="imgLoad"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DescInfo",
  props: {
    descInfo:{
      type: String,
      default() {
        return ''
      }
    },
    detailImg:{
      type: Array,
      default(){
        return []
      }
    },
  },
  methods:{
    imgLoad(){
      this.$bus.$emit('descImgLoad')
    }
  }
}
</script>

<style scoped>
  .desc_info{
    width: 90%;
    margin: auto;
    border-top: 3px solid;
    border-bottom: 3px solid;
    line-height: 18px;
    font-size: 14px;
    padding:10px 0;
  }

  .info_list{
    padding-top: 15px;
  }

  .info_text{
    margin: 0 20px;
    padding-top: 20px;
    line-height: 20px;
    font-size: 14px;
  }

  .container{
    display: flex;
  }

  .container img{
    width: 100%;
    flex: 1;
  }
</style>

