<template>
	<view style="position: relative;">
		<view class="titleView">
			<view class="titleText">
				<text >我的</text>
			</view>
			<view class="IconView">
				<image class="Icon" src="../../static/my/history/lianhua.png"></image>
			</view>
			<view class="IconText">
				<text >上善如水</text>
			</view>
		</view>
		<view class="realizeBlessingView">
			<view class="recordTitleView">
				<text class="titleText1">许愿记录</text>
				<view class="very-bottom-txt">
					————————————————————————
				</view>
			</view>
			<view class="recordsView">
				<checkbox-group>
					<label v-for="item in blessContent">
						<view class="aRecordView">
							<view class="aColumn">
								<view>
									<image class="dot" src="../../static/temple/dot.png"></image>
									<text class="textTitle">许愿日期</text>
								</view>	
								<text class="textContent">{{item.blessingData}}</text>
								<view>
									<image class="dot" src="../../static/temple/dot.png"></image>
									<text class="textTitle">还愿日期</text>
								</view>
								<text v-if="!item.realizeData == ''" class="textContent">{{item.realizeData}}</text>
								<text v-else class="textContent specialText">尚未还愿</text>
							</view>
							<view>
								<image class="line" src="../../static/temple/line.png"></image>
							</view>
							<view class="aColumn secondColumn">
								<view>
									<image class="dot" src="../../static/temple/dot.png"></image>
									<text class="textTitle">许愿内容</text>
								</view>	
								<text class="textContent overflow-manage-3">{{item.content}}</text>
							</view>				
						</view>
					</label>
				</checkbox-group>
			</view>
			<view class="very-bottom-txt bottomline">
				————————————————————————
			</view>
			<view class="adressView" @click="toAddress()">
				<text class="adressText">我的足迹</text>
				<image class="arrowIcon" src="../../static/index/arrow-right.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				blessContent:[{blessingData:"2019-12-22 5:50",realizeData:"2019-12-22 5:50",content:"幸福美满",isSelcted:false},
				{blessingData:"2019-12-22 13:50",realizeData:"2019-12-22 5:50",content:"早生贵子",isSelcted:false},
				{blessingData:"2019-12-22 15:50",realizeData:"",
				content:"幸福美满早生贵子早生贵子早生贵子早早生贵子早生贵子早生贵子早生贵子",isSelcted:false}]
			}
		},
		methods:{
			toAddress(){
				console.log("111111")
				uni.navigateTo({
					url: './address'
				})
			}
		}
	
	}
</script>

<style lang="scss" scoped>
	page{
		background: #f6f6f6;
	}
	.titleView{
		width: 750upx;
		height: 490upx;
		background: url(../../static/my/history/back.png);
		background-size: 100%;
		.titleText{
			padding-top: 60upx;
			text-align: center;
			font-size: 17px;
			font-weight: 550;
			color: #000000;
		}
		.IconView{
			padding-top: 20upx;
			text-align: center;
			.Icon{
				width: 145upx;
				height: 145upx;
			}
		}
		.IconText{
			padding-top: 20upx;
			text-align: center;
			font-size: 17px;
			font-weight: 550;
			color: #f6f6f6;
		}
	}
	.realizeBlessingView{
		background:#ffffff;
		width: 690upx;
		height: 1130upx;
		position: absolute;
		top: 400upx;
		right: 20upx;
		border-radius: 10upx;
		.recordTitleView{
			width: 650upx;
			height: 100upx;
			margin-top: 20upx;
			margin-left: 20upx;
			margin-right: 30upx;
			.titleText1{
				padding-left: 10upx;
				color: #8b4600;
				font-size: 17px;
				font-weight: 500;
			}
			
		}
		.recordsView{
			overflow: auto;
			margin-left: 25upx;
			width: 650upx;
			height: 600upx;
			background: #ffffff;
			.aRecordView{
				
				height: 200upx;
				width: 650upx;
				background: #ffe8a9;
				margin-top: 10upx;
				border-radius: 10upx;
				display: flex;
				flex-direction: row;
				.aColumn{
					display: flex;
					flex-direction: column;
					width: 200upx;
					height: 160upx;
					padding-left: 15upx;
					padding-top: 10upx;
					.dot{
						width: 15upx;
						height: 15upx;
						
					}
					.textTitle{
					     margin-left: 10upx;
						font-weight: 500;
						font-size: 17px;
						color: #97612a;
					}
					.textContent{
						margin-top: 5upx;
						font-weight: 500;
						font-size: 10px;
						color: black;
					}
					.specialText{
						margin-left: 30upx;
					}
				}
				.line{
					padding-top: 20upx;
					width: 5upx;
					height: 160upx;
				}
				.secondColumn{
					width: 380upx;
				}
				
			}
		}
	}
	.bottomline{
		margin-top: 70upx;
		height: 10upx;
	}
	.adressView{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 650upx;
		height: 50upx;
		margin-top: 30upx;
		margin-left: 30upx;
		.adressText{
			font-size: 17px;
			font-weight: 500;
			color: #8b4600;
		}
		.arrowIcon{
			width: 28upx;
			height: 36upx;
		}
	}
	.very-bottom-txt {
		height: 10upx;
		line-height: 40upx;
		text-align: center;
		color: #b1b2b5;
		font-size: 28upx;
	}
	.overflow-manage-3 {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
</style>
