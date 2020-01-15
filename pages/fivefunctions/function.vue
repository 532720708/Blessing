<template>
	<view>
		<view class="templeView" v-for="item in temple">
			<view @click="toTempleInfo(item.name)">
				<image class="templeImg" :src="item.img"></image>
			</view>
			<view class="templeImfView">
				<view class="nameLine">
					<text class="nameText">{{item.name}}</text>
					<view class="addressView" @click="openMap">
						<view>
							<image class="locationIcon" src="../../static/fivefunctions/locationIcon.png"></image>
						</view>
						<view class="addressText">
							<text>{{item.adress}}</text>
						</view>
					</view>
				</view>
				<view class="descriptionText">
					<text>{{item.description}}</text>
				</view>
				<view class="distanceText">
					<text>{{item.distance}}km</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 0,
				latitude: 0,
				temple: [{
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺",
						adress: "鼓楼区",
						description: "鸡鸣寺为于南京市玄武区鸡笼山，又称古鸡鸣寺",
						distance: 6.9
					},
					{
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺",
						adress: "鼓楼区",
						description: "鸡鸣寺为于南京市玄武区鸡笼山，又称古鸡鸣寺",
						distance: 6.9
					},
					{
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺",
						adress: "鼓楼区",
						description: "鸡鸣寺为于南京市玄武区鸡笼山，又称古鸡鸣寺",
						distance: 6.9
					},
					{
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺",
						adress: "鼓楼区",
						description: "鸡鸣寺为于南京市玄武区鸡笼山，又称古鸡鸣寺",
						distance: 6.9
					},
					{
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺",
						adress: "鼓楼区",
						description: "鸡鸣寺为于南京市玄武区鸡笼山，又称古鸡鸣寺",
						distance: 6.9
					},
					{
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺",
						adress: "鼓楼区",
						description: "鸡鸣寺为于南京市玄武区鸡笼山，又称古鸡鸣寺",
						distance: 6.9
					},
					{
						img: '../../static/my/adress/jimingshiImg.png',
						name: "鸡鸣寺",
						adress: "鼓楼区",
						description: "鸡鸣寺为于南京市玄武区鸡笼山，又称古鸡鸣寺",
						distance: 6.9
					}
				]
			}
		},
		methods: {
			toTempleInfo(tName) {
				uni.navigateTo({
					url: "../temple/temple?tName=" + tName
				})
			},
			//点击地图
			openMap() { 
				uni.openLocation({
					latitude: 32.060490,
					longitude: 118.795260,
					name: "南京鸡鸣寺",
					address: "江苏省南京市玄武区鸡鸣寺路1号"
				})
			},
		},
		onLoad(data) {
			let _this = this
			let functionName = '求平安'
			if (data.functionName) {
				functionName = data.functionName
			}
			uni.setNavigationBarTitle({
				title: functionName
			});

			/* uni.getLocation({
				type: 'wgs84',
				success: function(res) {
					console.log('当前位置的经度：' + res.longitude);
					_this.longitude = res.longitude;
					console.log('当前位置的纬度：' + res.latitude);
					_this.latitude = res.latitude
				},
				fail: function() {
					_this.a = 404
				}
			});
 */
		}

	}
</script>

<style lang="scss" scoped>
	page {
		background: #f6f6f6;
	}

	button::after {
		border: none;
	}

	.templeView {
		margin-top: 20upx;
		margin-left: 30upx;
		width: 690upx;
		height: 200upx;
		display: flex;
		flex-direction: row;
		background: #ffffff;

		.templeImg {
			height: 170upx;
			width: 140upx;
			margin-top: 10upx;
			margin-left: 10upx;
			border-radius: 15upx;
		}

		.templeImfView {
			display: flex;
			flex-direction: column;
			width: 500upx;
			height: 200upx;
			margin-left: 40upx;
			margin-top: 20upx;

			.nameLine {
				display: flex;
				flex-direction: row;
				width: 500upx;
				height: 50upx;

				.nameText {
					font-size: 17px;
					font-weight: 550;
					color: #000000;
				}

				.addressView {
					position: relative;
					margin-left: 40upx;
					display: flex;
					flex-direction: row;
					background: #a40000;
					width: 150upx;
					height: 40upx;
					border-radius: 30upx;

					.locationIcon {
						position: absolute;
						left: 10upx;
						top: 8upx;
						height: 25upx;
						width: 20upx;
					}
				}

				.addressText {
					padding-left: 50upx;
					font-size: 15px;
					font-weight: 500;
					color: #ffffff;
				}
			}

			.descriptionText {
				/* margin-top: 20upx;
				margin-left: 20upx; */
				width: 480upx;
				height: 70upx;
				font-size: 13px;
				font-weight: 500;
				color: #808288;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;

			}

			.distanceText {
				text-align: right;
				margin-left: 260upx;
				height: 30upx;
				width: 200upx;
				font-size: 15px;
				font-weight: 550;
				color: #000000;
			}
		}
	}
</style>
