<template>
	<view>
		<view class="titleView">
			<image src="../../static/list/arrow-left-2.png" class="arrow-left" @click="back"></image>
			<text :class="title == '众生说'? 'selectedTitle': 'title'" @click="selcted('众生说')">众生说</text>
			<text :class="title == '法师说'? 'selectedTitle': 'title'" @click="selcted('法师说')">法师说</text>
		</view>
		<view v-for="item in viewpoints" @change="onChange">
			<aViewPoint :content="item"></aViewPoint>
		</view>
		<!-- 上拉加载动画 -->
		<view class="Test">
			<uni-load-more :status="status" :content-text="contentText" ></uni-load-more>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "众生说",
				viewpoints: [{
						id:0,
						headPhoto: "../../static/viewpoint/headPhoto.png",
						author: "星云大师",
						data: "01-05 21:14",
						title: "四句佛经",
						description: "第一句是不忘初心，第二句是不清之友，第三句是不念旧恶，第四局是不变随缘，之后第一句是不忘初心，第二句是不清之友，第三句是不念旧恶，第四局是不变随缘，第一句是不忘初心，第二句是不清之友，第三句是不念旧恶，第四局是不变随缘，之后第一句是不忘初心，第二句是不清之友，第三句是不念旧恶，第四局是不变随缘",
						comment: 10,
						like: 23
					},
					{
						id:1,
						headPhoto: "../../static/viewpoint/headPhoto.png",
						author: "净土法门",
						data: "01-05 21:14",
						title: "四句佛经",
						description: "第一句是不忘初心，第二句是不清之友，第三句是不念旧恶，第四局是不变随缘",
						comment: 10,
						like: 23
					},
					{
						id:2,
						headPhoto: "../../static/viewpoint/headPhoto.png",
						author: "宏远大师",
						data: "01-05 21:14",
						title: "四句佛经",
						description: "第一句是不忘初心，第二句是不清之友，第三句是不念旧恶，第四局是不变随缘，之后第一句是不忘初心，第二句是不清之友，第三句是不念旧恶，第四局是不变随缘",
						comment: 10,
						like: 23
					},
					{
						id:3,
						headPhoto: "../../static/viewpoint/headPhoto.png",
						author: "星云大师",
						data: "01-05 21:14",
						title: "四句佛经",
						description: "第一句是不忘初心，第二句是不清之友，第三句是不念旧恶，第四局是不变随缘，之后第一句是不忘初心，第二句是不清之友，第三句是不念旧恶，第四局是不变随缘",
						comment: 10,
						like: 23
					}
				],
				status: 'noMore',
				statusTypes: [{
					value: 'more',
					text: '加载前',
					checked: true
				}, {
					value: 'loading',
					text: '加载中',
					checked: false
				}, {
					value: 'noMore',
					text: '没有更多',
					checked: false
				}],
				contentText: {
					contentdown: '查看更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多数据了'
				}
			}
		},
		methods: {
			/* 选择众生说或是法师说，从而加载不同的内容 */
			selcted(title){
				this.title = title;
			},
			back() {
				if (this.isTab) {
					uni.switchTab({
						url: "../../pages/index/index"
					})
					return
				}
				uni.navigateBack({
					delta: 1
				});
			}
		},
		onLoad(option){
			this.title = option.selected
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: #f5f5f5;
	}
    .Test{
		flex-direction: row;
				flex-wrap: wrap;
				justify-content: center;
				padding: 0;
				font-size: 14px;
				background-color: #ffffff;
	}
	.titleView {
		margin-left: 10upx;
		margin-top: 20upx;
		display: flex;
		flex-direction: row;
		height: 80upx;
		width: 100%;

		.arrow-left {
			margin-top: 10upx;
			width: 30upx;
			height: 30upx;
		}

		.selectedTitle {
			text-align: center;
			height: 40upx;
			width: 180upx;
			font-size: 19px;
			font-weight: 550;
			background-image: url(../../static/viewpoint/selectedBack.png);
			background-size: 50%;
			background-repeat: no-repeat;
			background-position: center bottom;
		}

		.title {
			padding-top: 10upx;
			text-align: center;
			height: 40upx;
			width: 120upx;
			font-size: 14px;
			font-weight: 550;
		}
	}
</style>
