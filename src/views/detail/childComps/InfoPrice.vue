<template>
  <div id="info_price">
      <div class="info_price">
      <span class="price_left">{{price}}</span>
      <span class="o_price">{{oldPrice}}</span>
      <span class="discount">{{discount}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoPrice",
  props:{
    price: {
      type: String,
      default() {
        return ''
      }
    },
    oldPrice: {
      type: String,
      default() {
        return ''
      }
    },
    discount: {
      type: String,
      default() {
        return ''
      }
    },
  }
}
</script>

<style scoped>
  .info_price{
    margin: 11px 5px 0px 10px;
  }

  .price_left {
    color: var(--color-high-text);
    font-size: 24px;
  }

  .o_price{
    margin-left: 8px;
    text-decoration: line-through;
    font-size: 12px;
  }

  .discount{
    position: absolute;
    background-color: #FF5777;
    padding: 2px 5px;
    border-radius: 35%;
    color: #FFF;
    font-size: 10px;
    margin-left: 3px;
  }
</style>