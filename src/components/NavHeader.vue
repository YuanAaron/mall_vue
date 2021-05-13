<template>
	<div class="header">
		<!--头部组件顶部条-->
		<div class="nav-topbar">
			<div class="container">
				<div class="topbar-menu">
					<a href="javascipt:;">小米商城</a>
					<a href="javascipt:;">MIUI</a>
					<a href="javascipt:;">云服务</a>
					<a href="javascipt:;">协议规则</a>
				</div>
				<div class="topbar-user">
					<a href="javascipt:;">登录</a>
					<a href="javascipt:;">注册</a>
					<a href="javascipt:;" class="my-cart">
						<span class="icon-cart"></span>购物车
					</a>
				</div>
			</div>
		</div>
		
		<!--头部组件导航条-->
		<div class="nav-header"></div>
	</div>
</template>

<script>
	export default {
		name:'nav-header'
	}
</script>

<style lang="scss">
	.header{
		.nav-topbar{
			height: 39px;
			line-height: 39px;
			background-color: #333333;
			color: #B0b0B0;
			.container{
				width:1226px;
				margin-left: auto;
				margin-right: auto;
				display: flex;
				justify-content: space-between;
				align-items: center;
				a{
					display: inline-block;
					color: #B0b0B0; //a标签样式优先级高于class，因此上面的color不起作用
					margin-right: 17px;
				}
				.my-cart{
					width: 110px;
					background-color: #FF6600;
					text-align: center;
					color: #ffffff;
					.icon-cart{
						display: inline-block;
						width: 16px;
						height: 12px;
						background: url('/imgs/icon-cart-checked.png') no-repeat center;
						background-size: contain;
						margin-right: 4px;
					}
				}
			}
		}
	}
</style>