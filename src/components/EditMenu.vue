<template>
	<div class="edit-modal">
		<div class="edit-menu">	
			<div class="edit-menu-tit">
				<h2>编辑菜单</h2>
				<a href="javascript:void(0);" class="btn-close"></a>	
			</div>
			<div class="menu-list flexbox-h">
				<a href="javascript:void(0)" class="menu-item"><i class="icon">设计封面</i></a>	
				<a href="javascript:void(0)"><i class="menu-item">补写内容</i></a>	
				<a href="javascript:void(0)"><i class="menu-item">删改内容</i></a>	
				<a href="javascript:void(0)"><i class="menu-item">回复内容</i></a>	
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'EditMenu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style  lang="scss" scoped>
@import "~vue/../../src/assets/scss/common.scss";	
.edit-modal{
	width:100%;
	height:100%;
	position:fixed;
	left: 0;
	bottom:0; 
	background-color:rgba(0,0,0,0.6); 
}
.edit-menu{
	width:100%;
	position:fixed;
	left: 0;
	bottom:0; 
	background-color: #fff;
	padding:0 px2rem(28px);
	.edit-menu-tit{
		width:100%;
		height: px2rem(65px);
		border-bottom: px2rem(1px) solid #d3d3d3;
		.tit{
			text-align: left;
			color:#353535;
			font-size: px2rem(28px);
		}
		.btn-close{
			width:px2rem(46px);
			height:px2rem(46px);
			display: block;
		}
	}
}
.menu-list{
	width: 100%;
	padding: px2rem(37px) 0 px2rem(44px);
	.menu-item{
		width:50%;
		height:px2rem(97px);
		color: #353535;
		font-size:px2rem(28px)
		.icon{
			margin-left: px2rem(48px);
		}
	}
}
</style>