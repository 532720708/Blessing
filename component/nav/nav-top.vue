<template>	
	<view class="list-nav flex-row-nowrap" :class="backStyle">
		<view class="nav-internal flex-row-nowrap">
			<image src="../../static/list/arrow-left-2.png" mode="aspectFit" class="arrow-left" @tap="back()"></image>
			<view class="nav-title flex-row-wrap flex-center">
				<image v-if="showTempleIcon" src="../../static/list/remensimiao_icon2.png" class="nav-title-icon"></image>
				<view class="nav-title-font">{{navTitle}}</view>
				<image v-if="showTempleIcon" src="../../static/list/remensimiao_icon2.png" class="nav-title-icon"></image>
			</view>
			<image v-if="showSearch" src="../../static/list/remensousuo_icon.png" mode="aspectFit" class="search-icon" @tap="toSearch()"></image>
		</view>
	</view>	
</template>

<script>
	export default {
		props:['showTempleIcon', 'showSearch', 'navTitle', 'backStyle', 'isTab'],
		data() {
			return {
				
			}
		},
		methods: {
			back() {
				if (this.isTab) {
					uni.switchTab({
						url: "../../pages/index/index"
					})
					return
				}
				uni.navigateBack({
					delta: 1
				});					
			},
			toSearch() {
				uni.navigateTo({
					url: "../../pages/index/search"
				})
			}
			
		}
		
	}
	
</script>

<style lang="scss" scoped>
	// 标题
	.list-nav {
		background-size: 100% 100%;
		width: 100%;
		justify-content: center;
		align-items: center;
		.nav-internal {			
			width: 710upx;
			//justify-content: space-between;
			align-items: center;
			height: 90upx;
			.arrow-left {
				width: 40upx;
				height: 100%;
			}
			
			.search-icon{
				width: 40upx;
				height: 100%;
			}
				
			.nav-title {
				text-align: center;
				height: 100%;
				width: 630upx;			
				.nav-title-icon {
					margin-top: -5upx;
					width: 27upx;
					height: 40upx;
				}
				.nav-title-font {
					height: 100%;
					line-height: 90upx;
					margin: auto 8upx;
					font-size: 38upx;
					font-weight: 600;
				}
			}
		}	
	}
	
	.redback {
		background: url(../../static/list/top_back.png) no-repeat;
		background-size: 100% 100%;
		height: 150upx;
	}
	
	.whiteback {
		background: #FFFFFF;
		color: #e2a163;
		height: 110upx;
	}
	
	
	
</style>
