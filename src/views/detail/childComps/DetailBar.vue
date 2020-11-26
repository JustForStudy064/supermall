<template>
  <div id="detail_bar">
    <nav-bar>
      <div class="arrow_left" slot="left" @click="backClick">
          <img src="~assets/img/common/back.svg"/>
      </div>
      <div class="center_control" slot="center">
        <tab-control :titles="titles"
                    @tabClick="tabClick"
                    :currentIndex="currentIndex">
        </tab-control>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import TabControl from "components/content/tabControl/TabControl"

export default {
  name:"DetailBar",
  components:{
    NavBar,
    TabControl,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentType: '商品',
    }
  },
  props:{
    currentIndex: {
      type: Number,
      default(){
        return 0
      }
    }

  },
  methods: {
    tabClick(index){
      this.currentType = this.titles[index]
      this.$emit('changePosition', index)
    },
    backClick(){
      this.$router.push({path: '/home'})
    }
  },
  created() {
   
  }
}
</script>

<style scoped>
 
  .arrow_left{
    margin: 8px 14px 8px 14px;
    height: 20px;
    width: 20px;
  }

  .arrow_left img{
    width: 100%
  }

  .center_control{
    font-size: 14px;
  }
</style>