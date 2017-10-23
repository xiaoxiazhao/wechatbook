<template>
  <div>
    <div class="book">
          <div class="book-index" style="display:none;">
              <div class="book-image">
                <img src="">
              </div>
              <h1 class="book-name">荧月的微信书</h1>
              <h2 class="author">荧月 · 作品</h2>
              <div class="outer-date">
                <div class="inner-date">
                  <p class="date">2012·07 - 2013·09</p>
                  <p class="other">全网独家 | 友盟出品</p>
                </div>
              </div>
          </div>

          <div class="outer-page flexbox" style="display:none;">
              <div class="month-tit">2012 · July</div>
              <div class="month-image">
                <img src="../../static/imgs/month_01.png">
              </div>
          </div>

          <div class="inner-page">
            <ul class="inner-list">
              <li class="item">
                <div class="date flexbox-h">
                  <div class="day">1</div>
                  <div class="time flexbox-h"><span class="time-l">周六</span><span class="time-r">20:30</span></div>
                </div>
                <div class="text">2货老公买了差不多800多块的喵用品……儿
  子还没到家啥都买齐了，由此可见，这货肯
  定是个好爸爸，但……绝逼不是一个好老公！</div>
                <div class="inner-image active">
                  <img src="../../static/imgs/month_01.png" width="100%">
                </div>
              </li>

              <li class="item">
                <div class="date flexbox-h">
                  <div class="day">1</div>
                  <div class="time flexbox-h"><span class="time-l">周六</span><span class="time-r">20:30</span></div>
                </div>
                <div class="text">2货老公买了差不多800多块的喵用品……儿
  子还没到家啥都买齐了，由此可见，这货肯
  定是个好爸爸，但……绝逼不是一个好老公！</div>
                <div class="inner-image active">
                  <img src="../../static/imgs/month_01.png" width="100%">
                </div>
              </li>

              <li class="item">
                <div class="date flexbox-h">
                  <div class="day">1</div>
                  <div class="time flexbox-h"><span class="time-l">周六</span><span class="time-r">20:30</span></div>
                </div>
                <div class="text">2货老公买了差不多800多块的喵用品……儿
  子还没到家啥都买齐了，由此可见，这货肯
  定是个好爸爸，但……绝逼不是一个好老公！</div>
                <div class="inner-image active">
                  <img src="../../static/imgs/month_01.png" width="100%">
                </div>
              </li>


              <li class="item">
                <div class="date flexbox-h">
                  <div class="day">1</div>
                  <div class="time flexbox-h"><span class="time-l">周六</span><span class="time-r">20:30</span></div>
                </div>
                <div class="text">2货老公买了差不多800多块的喵用品……儿
  子还没到家啥都买齐了，由此可见，这货肯
  定是个好爸爸，但……绝逼不是一个好老公！</div>
                <div class="inner-image active">
                  <img src="../../static/imgs/month_01.png" width="100%">
                </div>
              </li>

              <li class="item">
                <div class="date flexbox-h">
                  <div class="day">1</div>
                  <div class="time flexbox-h"><span class="time-l">周六</span><span class="time-r">20:30</span></div>
                </div>
                <div class="text">2货老公买了差不多800多块的喵用品……儿
  子还没到家啥都买齐了，由此可见，这货肯
  定是个好爸爸，但……绝逼不是一个好老公！</div>
                <div class="inner-image active">
                  <img src="../../static/imgs/month_01.png" width="100%">
                </div>
              </li>

              <li class="item">
                <div class="date flexbox-h">
                  <div class="day">1</div>
                  <div class="time flexbox-h"><span class="time-l">周六</span><span class="time-r">20:30</span></div>
                </div>
                <div class="text">2货老公买了差不多800多块的喵用品……儿
  子还没到家啥都买齐了，由此可见，这货肯
  定是个好爸爸，但……绝逼不是一个好老公！</div>
               
              </li>
              <li class="item">
                <div class="date flexbox-h">
                  <div class="day">1</div>
                  <div class="time flexbox-h"><span class="time-l">周六</span><span class="time-r">20:30</span></div>
                </div>
                <div class="text">2货老公买了差不多800多块的喵用品……儿
  子还没到家啥都买齐了，由此可见，这货肯
  定是个好爸爸，但……绝逼不是一个好老公！</div>
               
              </li>
            </ul>
            <div class="page-footer flexbox-h">
              <div class="date">2012/07</div>
              <div class="page-num">1</div>
              <div class="b-name">荧月的微信书</div>
            </div>
          </div>
      </div>




      <!-- <edit-menu></edit-menu>  -->
      <!-- <edit-content></edit-content>   -->
      <footer-bar></footer-bar>
  </div>
</template>

<script>
import EditMenu from "./EditMenu";
import EditContent from "./EditContent";
import FooterBar from "./FooterBar";
export default {
  name: 'Home',
  components:{
    EditMenu,
    EditContent,
    FooterBar,
  },
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
.book{
  width:px2rem(728px);
  display: block;
  margin:px2rem(10px) auto;
  background-color: #FFFFFF;
  border:1px solid #c9c9c9;
  .book-image{
    width:px2rem(650px);
    height: px2rem(474px);
    display:block;
    margin:px2rem(40px) auto  0;
    img{
      width: 100%;
      height:100%;
    }
  }
  .book-name{
    font-size:px2rem(45px);
    color:#3E3A39;
    line-height: px2rem(45px);
    text-align: center;
    margin-top:px2rem(58px);
  }
  .author{
    font-size:px2rem(22px);
    color:#010101;
    line-height: px2rem(22px);
    text-align: center;
    margin-top:px2rem(29px);
  }
  .outer-date{
    width: px2rem(648px);
    height:px2rem(92px);
    background-color: #e6e6e6;
    display:block;
    margin:px2rem(206px) auto px2rem(20px);
    padding:px2rem(7px) 0;  
    .inner-date{
      width: px2rem(634px);
      height:px2rem(75px);
      background-color: #e6e6e6;
      display:block;
      margin:0 auto ;
      border:px2rem(2px) solid #fff;
      p{
        text-align:center;
      }
      .date{
        color:#000;
        font-size:px2rem(22px);
        padding-top:px2rem(18px);
      }
      .other{
        color:#8e8c8c;
        font-size: px2rem(12px);
      }
    }
  }
}
.outer-page{
  padding: px2rem(262px) 0 px2rem(534px);
  align-items:flex-end;
  .month-tit{
    width: px2rem(364px);
    color:#f55657;
    font-size:px2rem(24px);
    line-height:px2rem(26px);
    text-align:center;
  }
  .month-image{
    width: px2rem(364px);
    height: px2rem(233px);
    margin-top:20px;
  }

}
.inner-page{
  width: px2rem(615px);
  height:px2rem(1087px);
  margin:px2rem(12px) auto;
  .inner-list{
    width: px2rem(615px);
    height:px2rem(1050px);
    padding-top:px2rem(58px);
    column-width: px2rem(289px);
    column-count: 2;
    column-gap:px2rem(12px);
    overflow: hidden;
    .item{
      .date{
        justify-content: flex-start;
      }
      .day{
        width: px2rem(39px);
        height:px2rem(35px);
        position: relative;
        background:url("../../static/imgs/page_01.png") no-repeat;
        background-size: cover;
        text-align:center;
        line-height:px2rem(35px);
        color:#fff;
        font-size:px2rem(21px);
      }
      .time{
        width: px2rem(255px);
        height:px2rem(35px);
        line-height:px2rem(35px);
        color:#000;
        font-size:px2rem(16px);
        padding:0 px2rem(14px);
        background:url("../../static/imgs/label_00.png") no-repeat;
        background-size: cover;
      }
      .text{
        color: #000000;
        font-size:px2rem(15px);
        margin-top:px2rem(14px);
        line-height:px2rem(18px);
      }
      .inner-image{
        margin-top:px2rem(10px);
        width: 100%;
        position:relative;
        margin-bottom: px2rem(26px);
      }
      .inner-image.active:after{
        width: 100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        background-color:rgba(0,0,0,0.6);
        display:block;
        content: "";
      }
    }
  }
  .page-footer{
    width: 100%;
    height:px2rem(36px);
    border-top:px2rem(1px) solid #e0e0e0;
    .date,.b-name{
      line-height:px2rem(36px);
      font-size:px2rem(13px);
      color:#e0e0e0;

    }
    .page-num{
      width: px2rem(26px);
      height:px2rem(26px);
      line-height:px2rem(26px);
      text-align:center;
      color:#fff;
      background:url("../../static/imgs/page_07.png") no-repeat;
      background-size: cover;
      font-size:px2rem(16px);
    }
  }
}
</style>
