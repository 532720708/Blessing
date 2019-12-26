<template>
	<view>
		<navTop class="stickyTop" :showTempleIcon="false" :showSearch="false" :navTitle="navTitle" :backStyle="navBackStyle"></navTop>
		<view class="bottom-article">
			<view class="bottom-content flex-col-wrap flex-center">
				<view class="content-item flex-row-wrap" v-for="(article, index) in articles" :key="index" @tap="toArticle(article.title)">
					<view class="item-intro flex-col-wrap">
						<text class="intro-title intro-title-font">{{article.title}}</text>
						<view class="intro-view intro-view-font flex-row-wrap">
							<text class="intro-source">{{article.source}}</text>
							<text class="intro-view">{{article.viewNum}}人阅读</text>
						</view>
					</view>
					<image class="item-img" :src="article.mImg"></image>						
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				articles: [{id: 1, title: '宗性法师：如何处理与出家师父之间的关系', source: '第三方投稿', viewNum: 4520, mImg: '../../static/index/article/wenzhang_1.png'},
					{id: 2, title: '指挥法语：佛对众生的爱超越父母对子女的爱的数据库恢复健康收到货福建师范', source: '第三方投稿', viewNum: 4520, mImg: '../../static/index/article/wenzhang_2.png'},
					{id: 3, title: '佛教故事：有些话选择不说往往能增加福德', source: '第三方投稿', viewNum: 4520, mImg: '../../static/index/article/wenzhang_3.png'},
					{id: 4, title: '宗性法师：如何处理与出家师父之间的关系', source: '第三方投稿', viewNum: 4520, mImg: '../../static/index/article/wenzhang_1.png'},
					{id: 5, title: '指挥法语：佛对众生的爱超越父母对子女的爱', source: '第三方投稿', viewNum: 4520, mImg: '../../static/index/article/wenzhang_2.png'},
					{id: 6, title: '佛教故事：有些话选择不说往往能增加福德', source: '第三方投稿', viewNum: 4520, mImg: '../../static/index/article/wenzhang_3.png'},
					{id: 7, title: '宗性法师：如何处理与出家师父之间的关系', source: '第三方投稿', viewNum: 4520, mImg: '../../static/index/article/wenzhang_1.png'},
					{id: 8, title: '指挥法语：佛对众生的爱超越父母对子女的爱', source: '第三方投稿', viewNum: 4520, mImg: '../../static/index/article/wenzhang_2.png'},
					{id: 9, title: '佛教故事：有些话选择不说往往能增加福德', source: '第三方投稿', viewNum: 4520, mImg: '../../static/index/article/wenzhang_3.png'}],
				navTitle: "学佛好文",
				navBackStyle: "whiteback"
			}
		},
		// 停止刷新动画
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 500);
		},
		methods:{
			// 跳转文章详情
			toArticle(aTitle) {
				uni.navigateTo({
					url: '../article/article?aTitle=' + aTitle
				})
			},
		}
	}
</script>

<style lang="scss">
	page {
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	}
	// 下部
	.bottom-article {
		width: 100%;
		height: auto;
		margin: 15upx auto;
		padding-top: 20upx;
		padding-bottom: 15upx;
		background: #FFFFFF;
		.bottom-content {
			width: 100%;
			.content-item {
				height: 175upx;
				width: 690upx;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 15upx;
				.item-intro {
					width: 420upx;
					height: 130upx;
					justify-content: space-between;
					.intro-title {
						width: 100%;
						height: 80upx;		
						text-align: justify;	// 文字两端对齐
						// overflow : hidden;
						// text-overflow: ellipsis;  //只对单行文本框有效
						
						// 对非webkit内核的浏览器有兼容问题
						display: -webkit-box; /* 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
						-webkit-box-orient: vertical; /* 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。*/
						text-overflow: ellipsis; /* 可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
						-webkit-line-clamp: 2;
						overflow : hidden;		
					}
					.intro-view {
						justify-content: space-between;
					}
				}
				image {
					width: 225upx;
					height: 130upx;
				}
			}
		}
	}
	
	// 溢出处理
	.overflow-manage {
		width: 100%;
		height: 42upx;
		white-space: nowrap;
		overflow : hidden;
		text-overflow: ellipsis;
		text-align: center;
	}
	
	// 字体
	.type-font {
		font-size: 32upx;
	}
	
	.intro-title-font {
		font-size: 30upx;
	}
	
	.intro-view-font {
		font-size: 25upx;
		color: #acadb1;
	}
</style>
