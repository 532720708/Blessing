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
		
		<!-- <aniTest></aniTest> -->
		
		<!-- <bagua></bagua> -->
		
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
		//background: #000000;
	}
	
	h2 {
		color: #4CD964;
	}
	

</style>
