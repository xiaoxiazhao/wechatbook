<template>
  <div>
    <div class="book">
      <div class="revert-tit">
        <h1 class="tit">恢复内容</h1>
      </div>
      <div class="revert-date flexbox-h">
        <div class="date">2012年7月</div>
        <a href="javascript:void(0);" class="revert-btn">恢复整月</a>
      </div>
      <ul class="book-list">
        <li class="book-item flexbox-h">
          <div class="item-day">10</div>
          <div class="item-content">
            <div class="item-text active">终于接回来了~我家的小可爱！！</div>
            <div class="item-images flexbox-h">
              <div class="item-image active"><img src=""></div>
              <div class="item-image"><img src=""></div>
              <div class="item-image"><img src=""></div>
              <div class="item-image active"><img src=""></div>
              <div class="item-image"><img src=""></div>
              <div class="item-image"><img src=""></div>
            </div>
            <div class="item-control">
              <a href="javascript:void(0);" class="btn">恢复</a>
            </div>
          </div>
        </li>
      </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Revert',
  components:{
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~vue/../../src/assets/scss/common.scss";
.book{
  width:px2rem(728px);
  display: block;
  margin:px2rem(10px) auto;
  background-color: #FFFFFF;
  border:1px solid #c9c9c9;
}
.revert-tit{
  height: px2rem(95px);
  line-height: px2rem(95px);
  padding:0 px2rem(30px);
  border-bottom:px2rem(1px) solid #d3d3d3;
  .tit{
    line-height: px2rem(95px);
    color:#353535;
  }
}
.revert-date{
  height: px2rem(95px);
  line-height: px2rem(95px);
  padding:0 px2rem(30px);
  border-bottom:px2rem(1px) solid #d3d3d3;
  .date{
    line-height: px2rem(95px);
    color:#353535;
    font-size: px2rem(28px);

  }
  .revert-btn{
    width: px2rem(148px);
    height:px2rem(49px);
    line-height:px2rem(49px);
    text-align: center;
    border:px2rem(2px) solid #f37868;
    color:#f37868;
    border-radius: px2rem(3px);
  }
}
.book-list{
  .book-item{
    padding: px2rem(40px) px2rem(30px);
    border-bottom:px2rem(1px) solid #d3d3d3;

    .item-day{
      font-size:px2rem(48px);
      color:#353535;
      margin-right:px2rem(20px);
      font-size:px2rem(48px);
      align-self:flex-start;
    }
    .item-text{
      width:px2rem(591px);
      height:px2rem(121px);
      line-height:px2rem(40px);
      background-color:#ebebeb;
      color:000000;
      font-size:px2rem(24px);
      position:relative;
      padding:px2rem(20px) px2rem(20px) 0;
    }
    .item-text.active:after{
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left: 0;
        background-color:rgba(0,0,0,0.6);
        display:block;
        content: "已删除";
        line-height:px2rem(121px);
        text-align:center;
        color: #fff;
        font-size:px2rem(24px);
      }
    .item-images{
      flex-wrap:wrap;
      .item-image{
        width:px2rem(179px);
        height:px2rem(179px);
        background-color:#eaeaea;
        position: relative;
        margin-right: px2rem(26px);
        margin-top: px2rem(20px);
      }
      .item-image:nth-child(3n+3){
        margin-right: 0;
      }
      .item-image.active:after{
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left: 0;
        background-color:rgba(0,0,0,0.6);
        display:block;
        content: "已删除";
        line-height:px2rem(179px);
        text-align:center;
        color: #fff;
        font-size:px2rem(24px);
      }
    }
    .item-control{
      text-align:right;
      margin-top:px2rem(30px);
      .btn{
        color:#3a9bff;
        font-size: px2rem(24px);
      }
    }

  }
}

</style>
