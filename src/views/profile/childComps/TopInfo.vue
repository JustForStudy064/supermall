<template>
  <div id="top_info">
    <div class="left">
      <img src="~assets/img/profile/avatar.svg" alt="">
    </div>
    <div class="center">
      <div class="login">登录/注册</div>
      <div class="phone">
        <img src="~assets/img/profile/phone.svg" alt="">
        <span class="phone_text">暂无绑定手机号</span>
      </div>
    </div>  
    <div class="right">
      <img src="~assets/img/common/arrow-left.svg" alt="">
    </div>
  </div>
</template>


<script>


export default {
  name: "TopInfo",

}
</script>

<style scoped>
  #top_info{
    background:#ff8198;
    height: 85px;
    padding: 6px 15px;
    width: 100%;
    display: flex;
    color: #fff;
  }

  .left{
    width: 20%;
  }

  .left img{
    width: 70px;
    height: 70px;
  }

  .login{
    padding: 16px 0px 0px 16px;
    font-size: 16px;
  }

  .phone{
    position: relative;
    font-size: 14px;
    padding-left: 10px;
  }

  .phone img{
    width: 20px;
    height: 30px;
  }

  .phone_text{
    position: absolute;
    top: 8px;
    left: 30px;
    font-size: 13px;
  }

  .center{
    width: 70%;
    display: flex;
    flex-direction: column;
  }

  .right{
    width: 10%;
    padding: 28px 6px 24px 14px;
  }

  .right img{
    width: 20px;
    height: 20px;
  }

</style>


