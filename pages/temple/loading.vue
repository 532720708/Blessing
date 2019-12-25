<template>
	<view>
		<preload @func="toBless(count)"></preload>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				transInfJson: ''
			}
		},
		onLoad(data) {
			this.transInfJson = data.transInfJson
		},
		methods: {
			toBless(count) {
				console.log(count)
				console.log(this.transInfJson)
				uni.navigateTo({
				    url: '../bless/bless?transInfJson=' + this.transInfJson
				});
			}
		}
	}
</script>

<style>
</style>
