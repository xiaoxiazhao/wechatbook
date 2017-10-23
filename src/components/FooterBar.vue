<template>
  <div class="footer-menu flexbox-h">
      <div class="btn-edit">编辑</div>
      <div class="menu">目录</div>
      <div class="btn-buy">购买</div>
  </div> 
</template>

<script>
export default {
  name: 'FooterBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~vue/../../src/assets/scss/common.scss";
.footer-menu{
  width: 100%;
  height:px2rem(89px);
  border:px2rem(1px) solid #c6c6c6;
  position:fixed;
  bottom:0;
  left: 0;
  background-color:#fff;  
  padding: 0 px2rem(20px);
  text-align:center;
  .btn-edit,.btn-buy{
    width: px2rem(158px);
    height: px2rem(70px);
    line-height: px2rem(70px);
    color:#fff; 
    text-align:center;
    font-size:px2rem(30px);
  }
  .btn-edit{
    background-color:#47c8e4;
  }
  .btn-buy{
    background-color:#f37868;
  }
  .menu{
    color:#444444;
    font-size:px2rem(36px);
  }
}

</style>
