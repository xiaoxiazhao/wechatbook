<template>
	<div class="date-menu">
		<div class="date-menu-tit">
			<h2 class="tit">目录</h2>
			<a href="javascript:void(0)" class="btn-close"></a>
		</div>
		<a href="javascript:void(0)" class="index-btn">封面</a>
		<ul class="date-list">

			<li class="date-item">
				<div class="year">2017</div>
				<ol class="month-list flexbox-h">
					<li class="item">1月</li>
					<li class="item">2月</li>
					<li class="item">3月</li>
					<li class="item">4月</li>
					<li class="item">5月</li>
					<li class="item">6月</li>
					<li class="item">7月</li>
					<li class="item">8月</li>
					<li class="item">9月</li>
					<li class="item">10月</li>
					<li class="item">9月</li>
					<li class="item">10月</li>
				</ol>
			</li>
			<li class="date-item">
				<div class="year">2016</div>
				<ol class="month-list flexbox-h">
					<li class="item">1月</li>
					<li class="item">2月</li>
					<li class="item">3月</li>
					<li class="item">4月</li>
					<li class="item">5月</li>
					<li class="item">6月</li>
					<li class="item">7月</li>
					<li class="item">8月</li>
					<li class="item">9月</li>
					<li class="item">10月</li>
					<li class="item">9月</li>
					<li class="item">10月</li>
				</ol>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
export default{
	name:'DateMenu',
	data(){
		return {

		}
	}
}
	
</script>

<style  lang="scss" scoped>
@import "~vue/../../src/assets/scss/common.scss";	
.date-mune{
	width:100%;
	position:fixed;
	left: 0;
	bottom:0; 
	background-color: #f5f5f5;
}
.date-menu-tit{
	height: px2rem(95px);
	line-height: px2rem(95px);
	padding:0 px2rem(30px);
	border-bottom:px2rem(1px) solid #d3d3d3;
	.tit{
	    line-height: px2rem(95px);
	    color:#353535;
	}
}
.index-btn{
	width: px2rem(122px);
	height:px2rem(60px);
	line-height:px2rem(60px);
	text-align: center;
	background-color:#47c8e4;
	color:#fff;
	font-size: px2rem(30px);
	margin-top:px2rem(40px);
	margin-left:px2rem(42px);
	display: inline-block;
}
.date-list{
	.date-item{
		.year{
			margin-top:px2rem(44px);
			line-height:px2rem(54px);
			color:#353535;
			font-size:px2rem(44px);
			margin-left:px2rem(42px); 
		}
		.month-list{
			flex-wrap:wrap;
			.item{
				color:#353535;
				font-size:px2rem(30px);
				width: px2rem(120px);
				height:px2rem(85px);
				line-height:px2rem(85px);
				text-align:center;
			}
		}
	}

}
</style>