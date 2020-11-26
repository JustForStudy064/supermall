<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>


<script>
import BScroll from 'better-scroll'


export default {
  name: "Scroll",
  components: {
    BScroll
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bscroll: null,
      scrollY: 0
    }
  },
  mounted() {
    // 1、创建BScroll对象
    this.bscroll = new BScroll(document.querySelector(".wrapper"), {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad,
    })

    // 2、确定上拉加载更多
    if(this.pullUpLoad == true){
      this.bscroll.on('pullingUp', ()=>{
        // console.log("上拉加载更多");
        this.$emit('loadMore')
      })
    }
    

    // 3、监听滚动的位置
    if(this.probeType == 3){
      this.bscroll.on('scroll', (position)=>{
        this.$emit("isShow", position)
        this.scrollY = position.y
      })
    }
   
  },
  methods:{
    scrollTo(x, y, time=300){
      this.bscroll.scrollTo(x, y, time)
    },
    refresh(){
      this.bscroll.refresh()
    }
  }
}
</script>

<style scoped>
  .wrapper{
    overflow: hidden;
  }
</style>

