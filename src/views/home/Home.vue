<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot='center'>购物街</div></nav-bar>
      <tab-control :titles="titles" 
                      @tabClick="tabClick"
                      class="tab-control-fixed"
                      v-show="isFixed"
                      :currentIndex="currentIndex"/>
      <scroll class="content" 
              ref="scroll" 
              :probeType="3" 
              @isShow="isShow"
              :pullUpLoad="true"
              @loadMore="loadMore">
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"/>
        <img src="~assets/img/home/recommend_bg.jpg" class="recommend_bg"/>
        <tab-control :titles="titles" 
                      @tabClick="tabClick"
                      class="tab-control"
                      ref="tabControl"
                      :currentIndex="currentIndex"/>
        <goods-list :goods="goods[currentType].list" />
      </scroll>
    <back-top @backClick="backClick" class="to_top_img" ref="topImg"/>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  
  import Scroll from 'components/common/scroll/Scroll'
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goodslist/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'

  import {getHomeMultiData, getProductData} from 'network/home'
  import {debounce} from 'common/utils'

  export default {
    name:'Home',
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titles: ['流行', '新款', '当季'],
        goods: {
          'pop': {'page':1, list:[]},
          'new': {'page':1, list:[]},
          'sell': {'page':1, list:[]},
        },
        typeList: ['pop', 'new', 'sell'],
        currentType: 'pop',
        tabOffsetTop: 0,
        isFixed: false,
        scrollY: 0,
        currentIndex: 0,
        homeItemListener: null
      }
    },
    created() {
      // 1、请求多个数据
      this.getHomeMultiData()

      // 2、请求商品数据
      this.getProductData('pop')
      this.getProductData('new')
      this.getProductData('sell')
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 500)
      const getTabControlTop = debounce(this.getTabControlTop, 500)
      this.homeItemListener = ()=>{
        refresh()
        getTabControlTop()
      }
      this.$bus.$on('itemImageLoad', this.homeItemListener)
    },
    methods: {
      getHomeMultiData(){
        getHomeMultiData().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getProductData(type){
        const page = this.goods[type]['page']
        getProductData(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.$bus.$on('itemImageLoad', ()=>{
            this.$refs.scroll.bscroll.refresh()
          })
        })
      },
      tabClick(index){
        this.currentType = this.typeList[index]
        this.currentIndex = index
      },
      getTabControlTop(){
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      },
      backClick(){
        this.$refs.scroll.scrollTo(0, 0)
      },
      isShow(position) {
        // document.querySelector('.to_top_img').style.display = position.y > -1000 ? "none" : "block"
        this.$refs.topImg.$el.style.display = position.y > -1000 ? "none" : "block"
        this.isFixed = -position.y < this.tabOffsetTop ? false : true
        // this.scrollY = position.y
      },
      loadMore(){
        this.goods[this.currentType].page+=1
        this.getProductData(this.currentType)
        this.$refs.scroll.bscroll.finishPullUp()
      },
    },
    activated(){
      console.log(this.scrollY)
      this.$refs.scroll.scrollTo(0, this.scrollY)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.scrollY = this.$refs.scroll.scrollY
      console.log(this.$refs.scroll.scrollY)
      console.log(this.scrollY)
      this.$bus.$off('itemImgLoad', this.homeItemListener)
    },
  }
</script>

<style scoped>
  #home{
    /* padding-top: 44px;*/
    height: 100vh;
    position: relative; 
  }
  .home-nav {
    background: var(--color-tint);
    color: #fff;
/* 
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }

  .tab-control{
    position: relative;
    z-index: 99;
  }
  .tab-control-fixed{
    position:fixed;
    left: 0;
    right:0;
    top: 44px;
  }
  .recommend_bg {
    width: 100%;
  }
  
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .to_top_img{
    display: none
  }
</style>