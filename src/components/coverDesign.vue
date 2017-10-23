<template>
	<div>
		<div class="design-tit">
        	<h1 class="tit">设计封面</h1>
      	</div>
		<ul class="cover-msg-list">
			<li class="item">
				<div class="book-mane"><i class="icon"></i>书名（限10字）</div>
				<div class="item-input">
					<input type="" name="" value="荧月的微信书">
				</div>
			</li>
			<li class="item">
				<div class="author"><i class="icon"></i>作者（限8字）</div>
				<div class="item-input">
					<input type="" name="" value="荧月">
				</div>
			</li>
		</ul>
		<ul class="cover-list flexbox-h">
			<li class="cover-item">
				<div class="upload-components">
					<div class="icon-camera"></div>
					<div class="upload-text">上传图片</div>	
				</div>
			</li> 
			<li class="cover-item active">
				<img src="../../static/imgs/cover_01.jpg" width="100%" height="100%">
			</li>
			<li class="cover-item">
				<img src="../../static/imgs/cover_02.jpg" width="100%" height="100%">
			</li>
			<li class="cover-item">
				<img src="../../static/imgs/cover_03.jpg" width="100%" height="100%">
			</li>
			<li class="cover-item">
				<img src="../../static/imgs/cover_04.jpg" width="100%" height="100%">
			</li>
			<li class="cover-item">
				<img src="../../static/imgs/cover_05.jpg" width="100%" height="100%">
			</li>
		</ul>
	</div>		
</template>

<script type="text/javascript">
	export default{
		name:'CoverDesign'
	}
</script>

<style lang="scss" scoped>
.cover-list{
	.cover-item{
		width: px2rem(288px);
		height: px2rem(210px);
		border:px2rem(1px) solid #bdbdbd;
		position:relative;
		.upload-components{
			width: 100%;
			height:100%;
			background-color:#ededed;
			.icon-camera{
				width: px2rem(83px);
				height;px2rem(73px);
				display:block;
				background: url("../../static/imgs/")

			}
			.upload-text{
				color: #949494;
				font-size: px2rem(36px);
			}
		}
	}
	.cover-item.active:after{
		width: 100%;
		height:100%;
		background-color: rgba(0,0,0,0.5);
		background-image: url("../../static/imgs/cover_checked.png");
		background-position: center center;
		background-size: px2rem(68px) px2rem(68px);
		background-repeat: no-repeat;
		display: block;
		content: "";
		position: absolute;
		top:0;
		left: 0;
	}

}
</style>
