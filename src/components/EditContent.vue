<template>
	<div class="edit-content-modal">
		<div class="edit-content-dialog">
			<div class="edit-content-tit">
				<h2 class="tit">编辑文字</h2>
				<a href="javascript:void(0);" class="btn-close"></a>
			</div>
			<div class="edit-content-wraper">
				<div class="edit-content">
				<textarea>跟默默绞尽脑汁想了一宿，终于决定起名叫呆宝！呆宝酱请多
关照哦~</textarea>
					
				</div>
				<div class="edit-content-btn">
					<a href="javascript:void(0);" class="btn btn-delete"save>删除文字</a>
					<a href="javascript:void(0);" class="btn btn-save">保存</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'EditContent',
		data(){
			return {
				msg:'aaa',
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "~vue/../../src/assets/scss/common.scss";	
.edit-content-modal{
	width:100%;
	height:100%;
	position:fixed;
	left: 0;
	bottom:0; 
	background-color:rgba(0,0,0,0.6); 
}
.edit-content-dialog{
	width:100%;
	position:fixed;
	left: 0;
	bottom:0; 
	background-color: #f4f4f4;
	padding:0 px2rem(28px);
	.edit-content-tit{
		width:100%;
		height: px2rem(65px);
		border-bottom: px2rem(1px) solid #d3d3d3;
		.tit{
			text-align: left;
			color:#353535;
			font-size: px2rem(28px);
			line-height:px2rem(65px);
		}
		.btn-close{
			width:px2rem(46px);
			height:px2rem(46px);
			display: block;
		}
	}
	.edit-content-wraper{
		padding: px2rem(42px) 0 px2rem(32px);
		border-bottom:px2rem(1px) solid #d3d3d3;
		textarea{
			width: 100%;
			resize:none;
			font-size:px2rem(24px);
			line-height: px2rem(40px);
			color:#000;
			border:0 none;
			background-color:#f4f4f4;
			overflow: hidden;
		}
	}
	.edit-content-btn{
		padding:px2rem(27px) 0 px2rem(20px);
		text-align:right;
		.btn{
			width: px2rem(156px);
			height:px2rem(66px);
			line-height:px2rem(66px);
			font-size:px2rem(30px);
			text-align:center;
			display:inline-block;
			margin-left: px2rem(18px);
		}
		.btn-delete{
			border:px2rem(1px) solid #979797;
			background-color:#fff;
			color:#4c4c4c;
		}
		.btn-save{
			border:px2rem(1px) solid #f37868;
			background-color:#f37868;
			color:#fff;
		}
	}
}
</style>