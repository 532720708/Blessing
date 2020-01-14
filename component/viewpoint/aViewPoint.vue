<template>
	<view>
		<view class="viewPointView">
			<!-- 标题（用户信息） -->
			<view class="titleView">
				<image class="headPhoto" :src="content.headPhoto"></image>
				<view class="createdImf">
					<text class="authorText">{{content.author}}</text>
					<text class="dataText">{{content.data}}</text>
				</view>
			</view>
			<!-- 内容 -->
			<view class="contentView" >
				<view titleText>
					<text class="titleText">{{content.title}}</text>
				</view>	
				<view :class="showAllConten ? 'allDescriptionText' : 'descriptionText'">
					<text>{{content.description}}</text>
				</view>
			</view>
			<!-- 用户动作 -->
			<view class="userAction">
				<view class="showAllText">
					<text v-if="showAllIcon" @click="showAll">全文</text>
					<text v-if="!showAllIcon && content.description.length > 63" @click="hideContent">收起</text>
				</view>
				<view class="likeOrCommend">
					<image class="icon" src="../../static/viewpoint/comment.png" @click="showCommend"></image>
					<view class="numberText">
						<text>{{content.comment}}</text>
					</view>
					<image v-if="likeIcon" class="icon" src="../../static/viewpoint/likeIcon.png" @click="likeAction"></image>
					<image v-else class="icon" src="../../static/viewpoint/likedIcon.png" @click="cancelLike"></image>
					<view class="numberText">
						<text>{{content.like}}</text>
					</view>
				</view>
				
			</view>
		</view>
		<!-- 用户评论 -->
		<view v-if="showPoints" class="commend">
			<!-- 标题（用户信息） -->
			<view class="title">
				<text class="commmedText">评论</text>
				<image class="arrowIcon" src="../../static/viewpoint/arrow.png" @click="hideCommend"></image>
			</view>
			<!-- 多条评论 -->
			<scroll-view class="commendScrollView" scroll-y="true" show-scrollbar="true">
				<view class="aCommendView" v-for="item in commends">
					<view>
						<view class="titleView">
							<image class="headPhoto" :src="item.headPhoto"></image>
							<view class="createdImf">
								<text class="authorText">{{item.author}}</text>
								<text class="dataText">{{item.data}}</text>
							</view>
						</view>
						<view class="aCommend">
							<text class="descriptionText oneLine">{{item.description}}</text>
						</view>
					</view>

				</view>
			</scroll-view>
			<view>
				<textarea class="textArea" placeholder="回复一下" v-model="commend"></textarea>
			</view>
			<view>
				<button class="publishButton" @click="publish()">发表</button>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		props: ["content"],
		data() {
			return {
				/* 显示查看全文按钮 */
				showAllIcon:false,
				/* 展示全文 */
				showAllConten:false,
				/* like图标 */
				likeIcon: true,
				/* 评论列表 */
				showPoints: false,
				commend: "",
				commends: [{

						headPhoto: "../../static/viewpoint/headPhoto.png",
						author: "星云大师",
						data: "01-05 21:14",
						title: "四句佛经",
						description: "第一句是不忘初心，第二句是不清之友，第三句是不念旧恶，第四局是不变随缘，之后第一句是不忘初心，第二句是不清之友，第三句是不念旧恶，第四局是不变随缘",
					},
					{

						headPhoto: "../../static/viewpoint/headPhoto.png",
						author: "净土法门",
						data: "01-05 21:14",
						title: "四句佛经",
						description: "第一句是不忘初心，第二句是不清之友，第三句是不念旧恶，第四局是不变随缘，之后第一句是不忘初心，第二句是不清之友，第三句是不念旧恶，第四局是不变随缘",
					},
					{

						headPhoto: "../../static/viewpoint/headPhoto.png",
						author: "宏远大师",
						data: "01-05 21:14",
						title: "四句佛经",
						description: "第一句是不忘初心，第二句是不清之友，第三句是不念旧恶，第四局是不变随缘，之后第一句是不忘初心，第二句是不清之友，第三句是不念旧恶，第四局是不变随缘",
					},
					{

						headPhoto: "../../static/viewpoint/headPhoto.png",
						author: "星云大师",
						data: "01-05 21:14",
						title: "四句佛经",
						description: "第一句是不忘初心，第二句是不清之友，第三句是不念旧恶，第四局是不变随缘，之后第一句是不忘初心，第二句是不清之友，第三句是不念旧恶，第四局是不变随缘",
					}
				],
			}
		},
		mounted() {
			/* 判断内容是否超限，然后设置是否展示全文按钮 */
			let length = this.content.description.length ;
			if(length > 63){
				this.showAllIcon = true;
			}
		},
		methods: {
			/* 显示全文 */
			showAll(){
				this.showAllConten = true;
				this.showAllIcon = false;
			},
			/* 收起全文 */
			hideContent(){
				this.showAllConten = false;
				this.showAllIcon = true;
			},
			/* 展示评论 */
			showCommend() {
				this.showPoints = true;
			},
			/* 收起评论 */
			hideCommend() {
				this.showPoints = false;
			},
			publish() {
				let newCommend = {
					id: "T",
					headPhoto: "../../static/viewpoint/headPhoto.png",
					author: "新发表",
					data: "",
					description: "",
				};
				let myDate = new Date();
				let month = myDate.getMonth() + 1;
				let data = myDate.getDate();
				let hour = myDate.getHours();
				let minute = myDate.getMinutes();
				newCommend.data = month + "-" + data + " " + hour + ":" + minute;
				newCommend.description = this.commend;
				this.commends.unshift(newCommend);
				this.commend = "";
				this.content.comment += 1;
			},
			likeAction() {
				this.likeIcon = false;
				this.content.like += 1;
			},
			cancelLike() {
				this.likeIcon = true;
				this.content.like -= 1;
			}

		}

	}
</script>

<style lang="scss" scoped>
	button::after {
		border: none;
	}

	.titleView {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 60upx;
		padding-left: 30upx;
		padding-top: 25upx;

		.createdImf {
			display: flex;
			flex-direction: column;

			.authorText {
				padding-left: 15upx;
				font-weight: 550;
				font-size: 13px;
				color: #e2a163;
			}

			.dataText {
				padding-top: 5upx;
				padding-left: 15upx;
				font-weight: 400;
				font-size: 13px;
				color: #888888;
			}
		}

		.headPhoto {
			width: 60upx;
			height: 60upx;
		}
	}

	.descriptionText {
		margin-top: 5upx;
		font-weight: 500;
		font-size: 13px;
		color: #969696;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
	.allDescriptionText{
		
		font-weight: 500;
		font-size: 13px;
		color: #969696;
		padding-top: 10upx;
	}

	.viewPointView {
		margin-left: 30upx;
		margin-top: 20upx;
		background: #ffffff;
		/* height: 350upx; */
		height: auto;
		width: 690upx;
		border-radius: 15upx;
		display: flex;
		flex-direction: column;

		.contentView {
			margin-left: 105upx;
			margin-top: 20upx;
			width: 565upx;
			/* height: 200upx; */
			height: auto;

			.titleText {
				font-weight: 500;
				font-size: 13px;
				color: #323643;
			}

		}

		.userAction {
			display: flex;
			flex-direction: row;
			margin-top: 10upx;
			margin-left: 100upx;
			width: 100%;
			height: 50upx;
			.showAllText{
				font-size: 12px;
				font-weight: 500;
				color: #007AFF;
			}
			.likeOrCommend{
				position: absolute;
				left: 400upx;
				display: flex;
				flex-direction: row;
			
				.icon {
					width: 40upx;
					height: 40upx;
					padding-right: 10upx;
				}
				
				.numberText {
					width: 100upx;
					padding-right: 15upx;
					font-weight: 500;
					font-size: 13px;
				}
			}
			
		}
	}

	.commend {
		margin-left: 30upx;
		margin-top: 20upx;
		height: 650upx;
		width: 690upx;
		background: #ffffff;

		.title {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			height: 70upx;
			width: 610upx;
			padding-top: 20upx;
			padding-left: 40upx;
			padding-right: 40upx;

			.commmedText {
				font-size: 16px;
				font-weight: 550;
			}

			.arrowIcon {
				height: 30upx;
				width: 40upx;
			}
		}

		.commendScrollView {
			height: 310upx;
			width: 690upx;

			.aCommendView {
				width: 690upx;
				height: 150upx;
				border-top: 10upx solid #black;
				border-bottom: 2upx solid #efefef;
			}

			.aCommend {
				height: 85upx;
				width: 565upx;

				.oneLine {
					padding-top: 10upx;
					padding-left: 103upx;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
				}
			}
		}

		.textArea {
			margin-top: 20upx;
			margin-left: 30upx;
			width: 630upx;
			height: 120upx;
			background: #f2f2f2;
			padding-left: 20upx;
			padding-top: 10upx;
		}

		.publishButton {

			margin-top: 20upx;
			margin-left: 530upx;
			width: 140upx;
			height: 55upx;
			vertical-align: middle;
			line-height: 55upx;
			border-radius: 30upx;
			background: url(../../static/viewpoint/buttonBack.png);
			background-size: 100%;
			font-size: 15px;
			font-weight: 550;
			color: #ffffff;
		}
	}
</style>
