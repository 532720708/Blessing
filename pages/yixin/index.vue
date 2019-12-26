<template>
	<!-- <view class="my">
		<view class="lazhu">
			<view class="huomiao" style="background-size: 100% 100%;"></view>
			<image class="lazhu" src="../../static/temple/candle1.png"></image>
		</view>
	</view> -->
	<view>
		<navCustom class="nav-custom" :showTempleIcon="false" :showSearch="true" :navTitle="navTitle" :backStyle="navBackStyle" :isTab="true"></navCustom>
		<h2>乙信</h2>
		
		<!-- <image style="width: 300upx;height: 300upx;" mode="aspectFit" src="../../static/canvas/aixin/aixin.gif"></image> -->
		<!-- <aniTest></aniTest> -->
		<!-- <image style="width: 200upx; height: 200upx;" mode="aspectFit" src="../../static/canvas/bagua/bagua.gif"></image -->
		<!-- <bagua></bagua> -->

		<guangxiao></guangxiao>
		<candle></candle>
		<smog></smog>
		<qifu></qifu>
	</view>
	
	
</template>

<script>	
	import animations from 'create-keyframe-animation';
	export default {
		data () {
			return {
				navTitle: "乙信",
				navBackStyle: "whiteback"
				
			}
		},
		mounted() {
		
			
		},
		watch: {
			
		},
		onLoad() {
			
		},
		methods:{
			
			
		},
		onLoad() {
			
		}
	}
</script>

<style lang="scss">
	page {
		background: #333333;
	}
	
	h2 {
		color: #4CD964;
	}
	
</style>