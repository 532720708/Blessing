<template>
	<view>
		<aColumnMusic :title="title" :list="musicList"></aColumnMusic>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				title:["佛经佛咒","赞偈梵呗","静心禅韵"],
				musicList:[{name:"大悲咒",src:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3" ,hot:6666},
				{name:"南无消灾延寿",src:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3" ,hot:6665},
				{name:"大悲咒",src:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3" ,hot:6664},
				{name:"大悲咒",src:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3" ,hot:6663},
				{name:"大悲咒",src:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3" ,hot:6662},
				{name:"大悲咒",src:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3" ,hot:6661}],
			
			}
		},
		// 停止刷新动画
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 500);
		},
		methods: {
			
		}
	}
</script>

<style>
	page{
		background: #ffffff;
	}
</style>
