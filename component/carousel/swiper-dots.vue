<template>
	<view class="dot-main">
		<view class="dot-item" :class="current==i ? 'active':''" v-for="(item,i) in dots" :key="i"></view>
	</view>
</template>

<script>
	export default {
		props: [ 'dots','current'],
		data() {
			return {	
			}
		},
		onLoad() {
			console.log(this.dots)
		}
		
	}
</script>

<style>
	.dot-main {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
	}
	.dot-item {
		width: 35upx;
		height: 6upx;
		margin-right: -2upx;
		margin-top: -20upx;
		border-radius: 15upx;
		background-color: rgb(226,216,211) ;
		box-sizing: border-box;
	}
	.active {
		background-color: rgb(241,173,31);
		border-width: 5upx;
	}

</style>
