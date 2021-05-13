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
		<div class="nav-header">
			<div class="container">
				<div class="header-logo">
					<a href="/#/index"></a>
				</div>
				<div class="header-menu">
					<div class="item-menu">
						<span>小米手机</span>
						<div class="children"></div>
					</div>
					<div class="item-menu">
						<span>RedMi手机</span>
						<div class="children"></div>
					</div>
					<div class="item-menu">
						<span>电视</span>
						<div class="children"></div>
					</div>
				</div>
				<div class="header-search">
					<div class="wrapper">
						<input type="text" name="keyword">
						<a href="javascipt:;"></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'nav-header'
	}
</script>

<style lang="scss">
	@import '../assets/scss/base';
	.header{
		.nav-topbar{
			height: 39px;
			line-height: 39px;
			background-color: #333333;
			color: #B0b0B0;
			.container{
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
		.nav-header{
			.container{
				height: 112px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.header-logo{
					display: inline-block;
					width: 55px;
					height: 55px;
					background-color: #FF6600;
					a{
						display: inline-block;
						width: 110px;
						height: 55px;
						&:before{
							content: '';
							display: inline-block;
							width: 55px;
							height: 55px;
							background: url('/imgs/mi-logo.png') no-repeat center;
							background-size: contain;
							transition: margin .2s;
						}
						&:after{
							content: '';
							display: inline-block;
							width: 55px;
							height: 55px;
							background: url('/imgs/mi-home.png') no-repeat center;
							background-size: contain;
						}
						&:hover::before{
							margin-left: -55px;
							transition: margin .2s;
						}
					}
				}
				.header-menu{
					display: inline-block;
					width: 643px;
					padding-left: 209px;
					.item-menu{
						display: inline-block;
						color: #333333;
						font-weight: bold;
						font-size: 16px;
						line-height: 112px;
						margin-right: 20px;
						span{
							cursor:pointer;
						}
						&:hover{

						}
					}
				}
				.header-search{
					width: 319px;
					.wrapper{
						height: 50px;
						border: 1px solid #E0E0E0;
						display: flex;
						align-items: center;
						input {
							border: none;
							box-sizing: border-box;
							border-right: 1px solid #E0E0E0;
							width: 264px;
							height: 50px;
							padding-left: 14px;
						}
						a{
							display: inline-block;
							width: 18px;
							height: 18px;
							background: url('/imgs/icon-search.png') no-repeat center;
							background-size: contain;
							margin-left: 17px;
						}
					}
				}
			}
		}
	}
</style>