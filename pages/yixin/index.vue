<template>
	<view>
		<navCustom class="nav-custom" :showTempleIcon="true" :showSearch="true" :navTitle="navTitle" :backStyle="navBackStyle" :isTab="true"></navCustom>
		<h2>这里是乙信</h2>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				navTitle: "乙信",
				navBackStyle: "whiteback"
			}
		}
	}
</script>

<style>
	page {
		background: #FFFFFF;
	}
</style>
