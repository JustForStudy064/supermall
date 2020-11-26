<template>
  <div class="goods-item" @click="itemClick">
    <!-- <img @load="imgLoad" v-lazy="showImage" alt=""> -->
    <img :src="showImage" alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showImage() {
        return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods: {
      imgLoad() {
        // if(this.$route.path.indexOf('/home')){
        //   this.$bus.$emit('itemImageLoad')
        // } else if(this.$route.path.indexOf('/detail')){
        //   this.$bus.$emit('DetailImageLoad')
        // }
        this.$bus.$emit('itemImageLoad')
      },
      refresh() {
        this.bscroll && this.bscroll.refresh()
      },
      itemClick() {
        const iid = this.goodsItem.iid || this.goodsItem.item_id
        this.$router.push({path: '/detail', 
          query: {iid}
        })
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 44px;
    position: relative;
  }

 .goods-item img{
   width: 100%;
   border-radius: 5px;
 }

 .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
 }

 .goods-info p{
   overflow: hidden;
   /* 溢出的文字用...表示 */
   text-overflow: ellipsis;
   /* 规定段落中的文字不能换行 */
   white-space: nowrap;
   margin-bottom: 3px;
 }

 .goods-info .price {
   color: var(--color-high-text);
   margin-right: 20px;
 }

 .goods-info .collect {
   position: relative;
 }

 .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>

