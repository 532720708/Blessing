<template>
	<view class="viewPointView">
		<view class="titleView">
			<image class="headPhoto" :src="content.headPhoto"></image>
			<view class="createdImf">
				<text class="authorText">{{content.author}}</text>
				<text class="dataText">{{content.data}}</text>
			</view>
		</view>
		<view class="contentView">
				<text class="titleText">{{content.title}}</text>
				<text class="descriptionText">{{content.description}}</text>
		</view>
		<view class="userAction">
			<image class="icon" src="../../static/viewpoint/comment.png"></image>
			<view class="numberText">
				<text >{{content.comment}}</text>
			</view>
			<image class="icon" src="../../static/viewpoint/likeIcon.png"></image>
			<view class="numberText">
				<text >{{content.like}}</text>
			</view>
		</view>
	</view>
</template>
  
<script>
	export default {
		props:["content"],
		data() {
			return {
			
			}
		},
		methods: {
			
		}
		
	}
</script>

<style lang="scss" scoped>
	.viewPointView{
		margin-left: 30upx;
		margin-top: 20upx;
		background: #ffffff;
		height: 350upx;
		width:690upx;
		border-radius: 15upx;
		display: flex;
		flex-direction: column;
		.titleView{
			display: flex;
			flex-direction: row;
			width: 100%;
			height: 60upx;
			padding-left: 30upx;
			padding-top: 25upx;
			.createdImf{
				display: flex;
				flex-direction: column;
				.authorText{
					padding-left: 15upx;
					font-weight: 550;
					font-size: 13px;
					color: #e2a163;
				}
				.dataText{
					padding-top: 5upx;
					padding-left: 15upx;
					font-weight: 400;
					font-size: 13px;
					color: #888888;
				}
			}
			.headPhoto{
				width: 60upx;
				height: 60upx;
			}
		}
		.contentView{
			margin-left: 90upx;
			margin-top: 20upx;
			width: 565upx;
			height: 200upx;
			.titleText{
				font-weight: 500;
				font-size: 13px;
				color: #323643;
			}
			.descriptionText{
				margin-top: 5upx;
				font-weight: 500;
				font-size: 13px;
				color: #969696;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3;
				overflow: hidden;
			}
		}
		.userAction{
			display: flex;
			flex-direction: row;
			margin-left: 300upx;
			width: 100%;
			height: 50upx;
			.icon{
				width: 40upx;
				height: 40upx;
				padding-right: 10upx;
			}
			.numberText{
				width: 100upx;
				padding-right: 15upx;
				font-weight: 500;
				font-size: 13px;
			}
		}
	}
</style>
