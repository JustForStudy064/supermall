<template>
  <div id="detail">
    <detail-bar @changePosition="changePosition" :currentIndex="currentIndex"/>
    <scroll class="content" ref="scroll" :probeType="3" @isShow="isShow">
      <swiper>
        <swiper-item v-for="item in swiperImg" :key="item.id" class="swiper_img">
          <img :src="item">
        </swiper-item>
      </swiper>
      <div class="title">{{title}}</div>
      <info-price :price="price"
                  :oldPrice="oldPrice"
                  :discount="discount"/>
      <info-bar :columns="columns"/>
      <detail-service :services="services"/>
      <shop-info :shopLogo="shopLogo"
                :shopName="shopName"
                :cSells="cSells"
                :cGoods="cGoods"
                :score="score"/>
      <desc-info :descInfo="descInfo"
                :detailImg="detailImg"/>
      <params-info :paramInfo="paramInfo"
                  ref="paramsInfo"/>
      <comment-info :commentInfo="commentInfo"
                  ref="commentInfo"/>
      <goods-list :goods="goodsList"
                  ref="recommendInfo"/>
    </scroll>
    <back-top @backClick="backClick" class="to_top_img" ref="topImg"/>
    <bottom-bar @add_cart="add_cart"/>
    <toast :message="message" 
           :is_show="is_show"/>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import NavBar from "components/common/navbar/NavBar"
import {Swiper, SwiperItem} from 'components/common/swiper'

import DetailBar from './childComps/DetailBar'
import InfoBar from './childComps/InfoBar'
import InfoPrice from './childComps/InfoPrice'
import DetailService from './childComps/DetailService'
import ShopInfo from './childComps/ShopInfo'
import DescInfo from './childComps/DescInfo'
import ParamsInfo from './childComps/ParamsInfo'
import CommentInfo from './childComps/CommentInfo'
import BottomBar from './childComps/BottomBar'

import GoodsList from 'components/content/goodslist/GoodsList'
import BackTop from 'components/content/backTop/BackTop'
import Toast from 'components/common/toast/Toast'

import {getDetail, getRecommend, GoodsParam} from 'network/detail'

import {debounce} from 'common/utils'

export default {
  name:"Detail",
  components: {
    DetailBar,
    Swiper,
    SwiperItem,
    NavBar,
    InfoBar,
    InfoPrice,
    DetailService,
    ShopInfo,
    DescInfo,
    ParamsInfo,
    BackTop,
    CommentInfo,
    Scroll,
    GoodsList,
    BottomBar,
    Toast
  },
  data() {
    return {
      iid: null,
      swiperImg: [],
      title: null,
      price: null,
      oldPrice: null,
      discount: null,
      columns: [],
      services: [],
      shopLogo: '',
      shopName: null,
      cSells: null,
      cGoods: null,
      descInfo: null,
      score: [],
      detailImg: [],
      paramInfo: {},
      commentInfo: {},
      goodsList: [],
      scrollY: [],
      currentIndex: 0,
      highNowPrice: 0,
      detailImglistener: null,
      message: "加入购物车成功",
      is_show: false
    }
  },
  created() {
    this.iid = this.$route.query.iid
    getDetail(this.iid).then(res=>{
        const data = res.result
        this.swiperImg = data.itemInfo.topImages
        this.title = data.itemInfo.title
        this.price = data.itemInfo.price
        this.oldPrice = data.itemInfo.oldPrice
        this.discount = data.itemInfo.discountDesc
        this.columns = data.columns
        this.services = data.shopInfo.services
        this.shopLogo = data.shopInfo.shopLogo
        this.shopName = data.shopInfo.name
        this.cSells = data.shopInfo.cSells
        this.cGoods = data.shopInfo.cGoods
        this.score = data.shopInfo.score
        this.descInfo = data.itemInfo.desc
        this.detailImg = data.detailInfo.detailImage[0].list
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        this.highNowPrice = data.itemInfo.highNowPrice
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0]
        }
        console.log(data)
    }),
    getRecommend(this.iid).then(res => {
      this.goodsList = res.data.list
    }) 
  },
  methods: {
    backClick(){
      this.$refs.scroll.scrollTo(0, 0)
    },
    changePosition(index){
      this.$refs.scroll.scrollTo(0, -this.scrollY[index] + 44)
    },
    getPos(){
      let scrollY = [0, ]
      scrollY.push(this.$refs.paramsInfo.$el.offsetTop)
      scrollY.push(this.$refs.commentInfo.$el.offsetTop)
      scrollY.push(this.$refs.recommendInfo.$el.offsetTop)
      scrollY.push(this.$refs.recommendInfo.$el.offsetTop + this.$refs.recommendInfo.$el.offsetWidth)
      this.scrollY = scrollY
    },
    isShow(position){
      for(let i = 0; i < this.scrollY.length; i++){
        if(-position.y + 44 < this.scrollY[i]){
          this.currentIndex = i - 1;
          break;
        }
      }
    },
    add_cart(){
      let obj = {}
      obj['title'] = this.title
      obj['img'] = this.swiperImg[0]
      obj['desc'] = this.descInfo
      obj['price'] = this.highNowPrice
      obj['count'] = 1
      obj['is_checked'] = false
      this.$store.commit("updataList", obj)
      this.is_show = true
      setTimeout(()=>{
        this.is_show = false
      }, 2000)
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    const getPos = debounce(this.getPos, 500)
    this.detailImglistener = ()=>{
      refresh()
      getPos()
    }
    this.$bus.$on('itemImageLoad', this.detailImglistener)
    this.$bus.$on('descImgLoad', this.detailImglistener)
  },
  destroyed(){
    this.$bus.$off('itemImageLoad', this.detailImglistener)
    this.$bus.$off('descImgLoad', this.detailImglistener)
  },
  watch: {
    '$route'(to, from){
      if(to.query.iid != from.query.iid){
        this.iid = to.query.iid;
        this.init();
      }
    }
  }
}
</script>

<style scoped>
  #detail{
    position:relative;
    z-index: 9;
    background: #fff;
  }

  .swiper_img{
    height: 300px;
  }

  .swiper_img img{
    width: 100%
  }

  .title{
    font-size: 16px;
    color: #222;
    font-family: 'Microsoft yahei';
    margin: 14px 10px 0px;
  }

  .content{
    height: 100vh;
    color: #999;
  }

  .info_order{
    display: flex;
  }
</style>