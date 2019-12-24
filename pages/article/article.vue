<template>
	<view>
		<navTop class="stickyTop" :showTempleIcon="false" :showSearch="false" :navTitle="navTitle" :backStyle="navBackStyle"></navTop>
		<view class="article-main">
			<view class="article-title">{{article.title}}</view>
			<view class="article-type">{{article.type}}</view>
			<view class="article-rich" style="text-indent: 60upx;line-height: 70upx;">
				<image src="../../static/article/wenzhang_1.png"></image>
				<rich-text class="article-content" :nodes="article.content"></rich-text>
			</view>
			
		</view>
		
		<view class="comment-zone">
			<view class="comment-zone-title">全部评论</view>
			<view class="commet-all flex-col-nowrap flex-center">
				<view v-for="(item, index) in comments" :key="index" class="comment-item flex-col-nowrap">
					<view class="user-info flex-row-nowrap">
						<image class="user-info-headImg" :src="item.userHeadImg"></image>
						<view class="user-info-right flex-col-nowrap">
							<view class="user-info-name">{{item.userName}}</view>
							<view class="comment-time">{{item.time}}</view>
						</view>
					</view>
					<view class="comment-content">{{item.content}}</view>
				</view>
			</view>
		</view>
		<view class="feedback flex-row-nowrap flex-center">
			<view class="feedback-internal  flex-row-nowrap">
				<input class="feedback-comment" placeholder="发表评论" placeholder-style="margin-left: 15upx;" focus="true"
					cursor="100"/>
				<image src="../../static/article/xihuan.png"></image>
				<image src="../../static/article/shoucang.png"></image>
				<image src="../../static/article/zhuanfa.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				navTitle: "文章详情",
				navBackStyle: "whiteback",
				article: {title: "宗性法师，如何处理与出家师父之间的关系", content: `<p>为什么要讲今天的僧俗关系呢？因为我觉得，今天的僧俗关系不太好处。,
					不要以为今天当和尚容易，挺难的！我读书的时候也跟你们一样，戴个眼镜。有一次上街买书，旁边人看着我，说：“哎呀，和尚还戴眼镜。”我就问他们：“哪条法律规定和尚不能戴眼镜？”你看，这和尚可不好当。</p>
					<p><br/><strong>僧俗关系的误区</strong></p><p>在今天这个时代，很多信众在对出家人的态度和关系上，不能很好地把握。我常跟师父们讲，一般的信众少接触。为什么？接触在一起，不说正事，老是拉家常。
					聊的全是今天大米又跌价了，明天油里又长蚂蚱了。</p><p>有的老太太，今天来了供养师父五块钱，明天来了供养师父十块钱，师父有事比较忙，没有见她，她就不高兴了：“这个家伙，我那天还给了他五块钱，
					他就不理我了。”这还麻烦了不是？我不是批评大家，是希望大家对这些问题能够正确认识。</p><p><br/><strong>僧俗关系要建立在道义上</strong></p><p>所以，僧俗关系需要有个定位。什么定位呢？出家的师父，
					是僧。就是表率、榜样。僧人，是人天师表。那么，僧人的作用，就是教化和接引信众。这个关系要怎么处呢？我倡导，一见面就谈佛法，谈修行，交流经验。</p>`,type: "学佛好文"},
				comments: [{id: 1, userHeadImg: '../../static/article/headImg.png', userName: '小明', content: '赞', time:'2019-12-12 13:38'},
					{id: 2, userHeadImg: '../../static/article/headImg.png', userName: '小李', content: '不错', time:'2019-12-12 13:38'},
					{id: 3, userHeadImg: '../../static/article/headImg.png', userName: '小王', content: '可以', time:'2019-12-12 13:38'}]
				
			}
		},
		onLoad(data) {
			var _this = this 
			if(data.aTitle) {
				_this.article.title = data.aTitle
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	page {
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
		padding-bottom: 5upx;
	}
	
	.article-main {
		padding: 10upx 20upx;	
		width: 100%;
		height: auto;
		text-align: justify; 
		.article-title {
			width: 710upx;
			font-size: 40upx;
			font-weight: 550;
		}
		.article-type {
			margin: 30upx auto;
			font-size: 28upx;
			color: #8D8D8D;
		}
		.article-rich {
			width: 710upx;
			.article-content {
				font-weight: 300;
				font-size: 30upx;
			}
			image {
				margin-left: 45upx;
				width: 500upx;
				height: 200upx;
			}
		}
		
	}
	.feedback {
		width: 100%;
		height: 100upx;
		background: #FFFFFF;
		z-index: 100;
		position: fixed;
		bottom: 0;
		padding-left:10uxp;
		
		.feedback-internal {
			align-items: center;
			justify-content: space-around;
			width: 90%;
			height: 100%;
			image {
				width: 40upx;
				height: 40upx;
			}
			.feedback-comment {			
				width: 510upx;
				height: 70upx;
				border-radius: 35upx;
				background: #E7E7E7;
			}
		}
		
	}
	
	.comment-zone {
		margin-top: 20upx;
		margin-bottom: 120upx;
		padding: auto 20upx;
		height: auto;
		width: 100%;
		.comment-zone-title {
			padding-left: 20upx;
			font-size: 38upx;
			font-weight: 550;
			margin-bottom: 20upx;
		}
		.commet-all {
			width:100%;
			height: auto;
			.comment-item {
				width: 680upx;
				margin-left: 50upx;
				margin-bottom: 20upx;
				.user-info {
					.user-info-headImg {
						width: 45upx;
						height: 45upx;
						border-radius: 50%;
					}
					.user-info-right {
						width: 640upx;
						height: 80upx;
						margin-left: 25upx;
						.user-info-name {
							font-size: 28upx;
							color: #999999;
						}
						.comment-time {
							font-size: 27upx;
							color: #555555;
						}
					}
				}
				.comment-content {
					width: 595upx;
					margin-left: 65upx;
					height: auto;
					font-size: 31upx;
				}
			}
		}
	}
	
</style>
