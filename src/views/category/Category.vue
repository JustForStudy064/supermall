<template>
  <div id="app">
    <nav-bar class="my_bg">
      <div slot="center">分类</div>
    </nav-bar>
    <div>
      本练手项目只做了购物车，首页，详情页和用户页面
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'Category',
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .content{
    height: 100px;
  }

  .my_bg{
    background: #ff5777;
    color: white;
    font-size: 16px;
    font-weight: 700;
  }
</style>