<template>
	<view class="addressView">
		<view v-for="item in adress" class="aAddressView">
			<image class="img" :src="item.img" @click="toTempleInfo(item.name)"></image>
			<view class="nameText">
				<text>{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				adress: [{
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺"
					}, {
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺"
					},
					{
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺"
					}, {
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺"
					},
					{
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺"
					}, {
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺"
					},
					{
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺"
					}, {
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺"
					},
					{
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺"
					}, {
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺"
					},
					{
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺"
					}, {
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺"
					},
					{
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺"
					}, {
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺"
					},
					{
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺"
					}, {
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺"
					},
				]
			}
		},
		methods: {
			toTempleInfo(tName) {
				uni.navigateTo({
					url: "../temple/temple?tName=" + tName
				})
			}
		}

	}
</script>

<style lang="scss" scoped>
	page {
		background: #f6f6f6;
	}
	.addressView{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		.aAddressView {
			margin-top: 20upx;
			margin-left: 26upx;
			width: 215upx;
			height: 270upx;
			.img {
				width: 215upx;
				height: 235upx;
				border-radius: 10upx;
			}
			.nameText{
				width: 215upx;
				height: 30upx;
				font-size: 15px;
				font-weight: 530;
				text-align: center;
			}
		}
	}
	
</style>
