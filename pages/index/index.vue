<template>
	<view class="content">
		<view class="top-carousel">
			<!-- 搜索 -->
			<view class="stickyTop">
				<view class="search-view flex-row-wrap flex-center" @tap="toSearch()">
					<image class="search-img" src="../../static/index/top/sousuo.png" mode="scaleToFill"></image>
					<!-- <view class="search-tip">搜索寺庙/佛经</view> -->
					<input class="search-input flex-row-wrap flex-center" :adjust-position="false" type="text" placeholder="搜索寺庙/佛经" 
						placeholder-style="text-align:center;color: #343844" disabled confirm-type="search">
					</input>	
				</view>
			</view>
			
			<!-- 轮播 -->
			<!-- <swiper autoplay="true">
				<swiper-item  v-for="(carousel, index) in tCarousels" :key="index" @tap="toDetail(carousel.id)">
					<image :src="carousel.img" mode="scaleToFill"></image>
				</swiper-item>
			</swiper> -->
			<view class="m-carousel">
				<image src="../../static/index/top/buddha.png" mode="scaleToFill"></image>
			</view>
			<view>
				<image class="jieyuan" src="../../static/index/top/jieyuan.gif" mode="aspectFit"></image>
			</view>
			
			<!-- 分类 -->
			<view class="type-view">
				<swiper class="type-swiper" :circular="true" :autoplay="false">
					<swiper-item v-for="(singleGroup, index) in newBlessType" :key="index">
						<view class="type-grid flex-row-wrap">
							<view class='type-item flex-col-nowrap flex-center' :class="(tinx % 4) == 0 ? 'mgleft' : (tinx % 4 == 3 ? 'mgright' : '')" 
								v-for="(type, tinx) in singleGroup" :key="tinx" @tap="toUrl(type.url)">
								<image :src="type.icon" mode="scaleToFill"></image>
								<view class="type-font">{{type.title}}</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		
		<!-- 佛教资讯 -->
		<view class="zixun-block flex-center flex-row-nowrap">
			<view class="zixun-view flex-row-nowrap">
				<image class="zixun-icon" src="../../static/index/top/zixun_icon.png" mode="aspectFit"></image>
				<view class="zixun-title">佛教资讯</view>
				<swiper autoplay="true" vertical="true">
					<swiper-item v-for="(msg, index) in msgs" @tap="toMsgInfo(msg.id)" :key=index>
						<view class="overflow-mag">{{msg.txt}}</view>
					</swiper-item>
				</swiper>
			</view>		
		</view>
		
		<!-- 这里为了解决横向滑动问题在外层设置overflow,但是导致搜索sticky失效 -->
		<view class="hidden-overflow">	
			<view class="middle-carousel flex-row-wrap flex-center">
				<!-- 轮播 -->
				<view class="swiper-view">
					<swiper autoplay="true" indicator-dots="true" indicator-color="#a4a4a3" indicator-active-color="#ffffff">
						<swiper-item  v-for="(m, index) in mCarousels" :key="index" @tap="toDetail(m.id)">
							<!-- 由于图片问题目前只保留长边 -->
							<image :src="m.img" mode="aspectFill"></image>
						</swiper-item>
					</swiper>
				</view>
				<!-- <swiperDots class="dots" :current="current" :dots="mCarousels"></swiperDots> -->
			</view>
			
			<!-- 诸佛圣诞日 -->
			<view class="middle-birth">	
				<view class=" bottom-title flex-row-wrap">
					<view class="title-view flex-row-nowrap">
						<image class="title-dot" src="../../static/index/middle/yuanxing.png" mode="aspectFit"></image>
						<view class="title-word">诸佛圣诞日</view>
					</view>
					<view class="title-more" @tap="toBirthday()">查看更多</view>
				</view>
				
				<swiper class="birth-view flex-row-nowrap" :autoplay="false" display-multiple-items="5">
					<swiper-item class="birth-img-view" v-for="(b, index) in birthInfo" :style="'left:' + curLeft(index) + 'upx;z-index:' + curZIndex(index) " :key="index">
						<image class="birth-img" :src="b.img" mode="scaleToFill" :z-index="index"></image>
					</swiper-item>
				</swiper>
				<!-- <view class="birth-view flex-row-nowrap">
					<view class="birth-img-view" v-for="(b, index) in birthInfo" :style="'left:' + curLeft(index) + 'upx;z-index:' + curZIndex(index) " :key="index">
						<image class="birth-img" :src="b.img" mode="scaleToFill" :z-index="index"></image>
					</view>	
				</view> -->
			</view>
			
			<!-- 众生圈 -->
			<view class="middle-zone">	
				<view class="bottom-title flex-row-wrap">
					<view class="title-view flex-row-nowrap">
						<image class="title-dot" src="../../static/index/middle/yuanxing.png" mode="aspectFit"></image>
						<view class="title-word">众生圈</view>
					</view>
					<view class="zone-view flex-row-nowrap">
						<view class="zhongsheng">
							<image class="zhongsheng-main" src="../../static/index/community/zhongsheng.png"></image>
							<view class="zhongsheng-click" @click="toCommand('众生说')">进入众生说</view>
						</view>
						<view class="zhongsheng">
							<image class="zhongsheng-main" src="../../static/index/community/fashi.png"></image>
							<view class="zhongsheng-click" @click="toCommand('法师说')">进入法师说</view>
						</view>
					</view>
				</view>
				
			</view>
			
			<view class="bottom-article">
				<view class="bottom-title flex-row-nowrap">
					<view class="title-view flex-row-nowrap">
						<image class="title-dot" src="../../static/index/middle/yuanxing.png" mode="aspectFit"></image>
						<view class="title-word">学佛好文</view>
					</view>
					<view class="title-more" @tap="toMore()">查看更多</view>
				</view>
				<view class="title-sen flex-row-wrap">
					<image src="../../static/index/quotation_index.png"></image>
					<view class="title-sen-txt">禅者心也，处处是禅也。</view>
				</view>
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
			
			<!-- 最底部 -->
			<view class="very-bottom flex-row-nowrap">
				<view class="very-bottom-txt flex-row-nowrap flex-center">
					————————<span>如是勤精进，能调付其心</span>————————  
				</view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tCarousels: [{id: 1, title: '一花一世界，一佛一如来', img: '../../static/index/top/buddha.png'},
					{id: 2, title: '一花一世界，一佛一如来', img: '../../static/index/top/buddha.png'},
					{id: 3, title: '一花一世界，一佛一如来', img: '../../static/index/top/buddha.png'}],
				// blessType: [{id: 1, title: '祈福', icon: '../../static/index/type/qifu.png', url: ''},
				// 	{id: 2, title: '许愿', icon: '../../static/index/type/xuyuan.png', url: ''},
				// 	{id: 3, title: '姻缘', icon: '../../static/index/type/yinyuan.png', url: ''},
				// 	{id: 4, title: '金榜', icon: '../../static/index/type/jinbang.png', url: ''},
				// 	{id: 5, title: '上香', icon: '../../static/index/type/shangxiang.png', url: ''},
				// 	{id: 6, title: '生财', icon: '../../static/index/type/shengcai.png', url: ''},
				// 	{id: 7, title: '求子', icon: '../../static/index/type/qiuzi.png', url: ''},
				// 	{id: 8, title: '佛学', icon: '../../static/index/type/foxue.png', url: ''},
				// 	{id: 9, title: '上香', icon: '../../static/index/type/shangxiang.png', url: ''},
				// 	{id: 10, title: '生财', icon: '../../static/index/type/shengcai.png', url: ''},
				// 	{id: 11, title: '求子', icon: '../../static/index/type/qiuzi.png', url: ''}],
					
				blessType: [{id: 1, title: '佛经', icon: '../../static/index/type/foxue.png', url: '../buddhist/list'},
					{id: 2, title: '梵音', icon: '../../static/index/type/fanyin.png', url: '../buddhist/musiclist'},
					{id: 3, title: '日签', icon: '../../static/index/type/riqian.png', url: '../buddhist/dailysignature'},
					{id: 4, title: '视频', icon: '../../static/index/type/shipin.png', url: '../video/list'}],
					
				mCarousels: [{id: 1, title: '一花一世界，一佛一如来', img: '../../static/index/middle/middle.png'},
					{id: 2, title: '一花一世界，一佛一如来', img: '../../static/index/middle/middle.png'},
					{id: 3, title: '一花一世界，一佛一如来', img: '../../static/index/middle/middle.png'},
					{id: 4, title: '一花一世界，一佛一如来', img: '../../static/index/middle/middle.png'}],
				current: 0,
				articles: [{id: 1, title: '宗性法师：如何处理与出家师父之间的关系', source: '第三方投稿', viewNum: 4520, mImg: '../../static/index/article/wenzhang_1.png'},
					{id: 2, title: '指挥法语：佛对众生的爱超越父母对子女的爱', source: '第三方投稿', viewNum: 4520, mImg: '../../static/index/article/wenzhang_2.png'},
					{id: 3, title: '佛教故事：有些话选择不说往往能增加福德', source: '第三方投稿', viewNum: 4520, mImg: '../../static/index/article/wenzhang_3.png'}],
				msgs: [{txt: '明白了这个道理，就是一通一切通',id: 1},{txt: '有些话选择不说，往往能增加福德', id: 2},{txt: '佛对众生的爱，超越父母对子女的爱', id: 3}],
				birthInfo: [{id: 1, img: '../../static/index/birth/mile_birth.png'},
						{id: 2, img: '../../static/index/birth/dingguang_birth.png'},
						{id: 3, img: '../../static/index/birth/dishi_birth.png'},
						{id: 4, img: '../../static/index/birth/shijia_birth.png'},
						{id: 5, img: '../../static/index/birth/huineng_birth.png'},
						{id: 6, img: '../../static/index/birth/dishi_birth.png'},
						{id: 7, img: '../../static/index/birth/shijia_birth.png'},
						{id: 8, img: '../../static/index/birth/huineng_birth.png'}]
			
			}
		},
		computed: {
			// 8个一组
			newBlessType() {
				return this.groupType()
			}
		},
		onLoad() {
			// 模拟下拉刷新
			// setTimeout(function () {
			// 	console.log('start pulldown');
			// }, 1000);
			
			// 显示tabbar
			// uni.showTabBar({
			// 	animation: false,
			// 	success(info) {
			// 		console.log(info)
			// 	},
			// 	fail(err) {
			// 		console.log(err)
			// 	},
			// 	complete() {
			// 		
			// 	}
			// })
					
		},
		// 停止刷新动画
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 500);
		},
		methods: {
			groupType() {
				var newItems = []
				var items = this.blessType
				for(var i = 0; i < items.length; i+=4) {				
					newItems.push(items.slice(i, i+4))
				}
				//console.log(newItems)
				return newItems	
			},
			changeDot(e) {
				this.current = e.detail.current;
			},
			// 跳转指定板块
			toUrl(url) {
				uni.navigateTo({
					url: url
				})
			},
			// 跳转搜索界面
			toSearch() {
				uni.navigateTo({
					url: './search'
				})
			},
			// 跳转文章详情
			toArticle(aTitle) {
				uni.navigateTo({
					url: '../article/article?aTitle=' + aTitle
				})
			},
			// 跳转更多文章列表
			toMore() {
				uni.navigateTo({
					url: '../article/more'
				})
			},
			//跳转到诸佛圣诞日
			toBirthday(){
				uni.navigateTo({
					url: '../birthday/birthday'
				})
			},
			// 跳转到资讯列表
			toMsgInfo() {
				uni.navigateTo({
					url: '../msg/list'
				})
			},
			toCommand(selected){
				uni.navigateTo({
					url: '../viewpoint/viewpoints?selected=' + selected
				})
			},
			// 圣诞日卡片位置
			curLeft(index) {
				//return index*140 + 30
				return 30;
			},
			// 卡片zindex
			curZIndex(index) {
				return this.birthInfo.length - index
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: #f9f9f9;
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	}
	
	.hidden-overflow {
		width: 100%;
		overflow-x: hidden;
	}

	// 上部
	.top-carousel {
		width: 100%;
		height: 655upx;
		position: relative;
		.search-view {
			position: absolute;
			top: 20upx;
			width: 100%;
			height: 65upx;
			opacity: 0.9;
			//z-index: 10000;	
			.search-img {
				position: absolute;
				left: 230upx;
				top: 18upx;
				height: 30upx;
				width: 30upx;		
			}
			.search-input {
				
				height: 100%;
				width: 690upx;
				border-radius: 40upx;
				background: #ffffff;
				font-size: 33upx;
				color: #343844;
			}
		}
		.m-carousel {
			height: 475upx;
			image {
				width: 100%;
				height: 475upx;
			}
		}
		.type-view {
			width: 100%;
			height: 180upx;
			background: #FFFFFF;
			.type-swiper {
				height: 100%;
				width: 100%;
				.type-grid {				
					height: 100%;
					width: 100%;
					justify-content: center;
					align-items: flex-end;
					.type-item {
	
						width: 175upx;
						height: 137upx;
						margin-bottom: 20upx;
						&.mgleft {
							margin-left: 25upx;
						}
						&.mgright {
							margin-right: 25upx;
						}
						image {
							width: 95upx;
							height: 95upx;
						}
					}
				}
			}
		}
	}
	
	.jieyuan {
		position: absolute;
		z-index: 2000;
		width: 150upx;
		height: 300upx;
		right: 26upx;
		top: 75upx;
	}
	
	// 资讯
	.zixun-block {
		width: 100%;
		height: 75upx;
		background: #FFFFFF;
		line-height: 75upx;
		.zixun-view {
			margin-top: 5upx;
			width: 690upx;
			height: 100%;
			border-top: 2upx solid #efefef;
			border-bottom: 2upx solid #efefef;
			.zixun-icon {
				margin-right: 10upx;
				width: 35upx;
				height: 75upx;
			}
			.zixun-title {
				font-size: 34upx;
				font-weight: 700;
				width: 180upx;
			}
			swiper {
				height: 100%;
				width: 550upx;
				font-size: 28upx;
			}
			
		}
	}
	
	
	// 中部
	.middle-carousel {
		height: 300upx;
		padding: 10upx 0upx;
		width: 100%;
		background: #FFFFFF;
		margin-top: 0upx;
		.swiper-view {
			border-radius: 22upx;
			overflow: hidden;
			swiper {
				width: 700upx;
				height: 232upx;
				border-radius: 22upx;
				overflow: hidden;
				swiper-item {
					text-align: center;
					image {
						border-radius: 22upx;
						width: 690upx;
						height: 230upx;
					}
				}
			}
			
		}
		.dots {
			width: 90%;
			height: 8upx;
		}	
	}
	
	// 圣诞日
	.middle-birth {
		margin: 30upx auto;
		width: 100%;
		height: 300upx;
		.birth-view {
			position: relative;
			width: 100%;
			height: 100%;
			margin: 30upx auto;
			.birth-img-view {
				position: absolute;
				width: 160upx;
				height: 230upx;
				.birth-img {
					border-radius: 20upx;
					border-bottom-right-radius: 35upx;
					width: 160upx;
					height: 230upx;
				}
			}
				
			
		}	
	}
	
	// 众生圈
	.middle-zone {
		background: #FFFFFF;
		width:100%;
		height: 320upx;
		padding-top:20upx;
		.zone-view {
			padding-top:20upx;
			width: 100%;
			.zhongsheng {
				position: relative;
				margin-left: 33upx;
				.zhongsheng-main {
					width: 330upx;
					height: 239upx;
				}
				.zhongsheng-click {
					position: absolute;
					width: 180upx;
					height: 60upx;
					background: #FFFFFF;
					opacity: 0.8;
					border-radius: 30upx;
					top: 150upx;
					left: 75upx;
					font-size: 28upx;
					text-align: center;
					line-height: 60upx;
					font-weight: 600;
				}
				
				
			}
		}
	}
	
	// 下部
	.bottom-article {
		width: 100%;
		height: auto;
		margin: 15upx auto;
		padding-top: 20upx;
		padding-bottom: 15upx;
		background: #FFFFFF;
		
		.title-sen {
			width: 100%;
			height: 50upx;
			margin-left: 30upx;
			line-height: 60upx;
			image {
				margin-top: 10upx;
				margin-right: 10upx;
				width: 40upx;
				height: 32upx;
			}
			.title-sen-txt {
				font-size: 31upx;
				color: #acadb1;
			}
		}
		.bottom-content {
			width: 100%;
			.content-item {
				height: 175upx;
				width: 690upx;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 15upx;
				.item-intro {
					width: 420upx;  	// 原为410，由于溢出省略在ios上显示问题，稍微增大
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
	
	
	
	// 标题
	.bottom-title {
		height: 40upx;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		.title-view {
			padding-left: 30upx;
			width: 400upx;
			height: 100%;
			// 标题前圆点
			.title-dot {
				width: 25upx;
				height: 100%;
				margin-right: -15upx;
			}
			.title-word {
				background: url(../../static/index/yuanjiao_back_index.png);
				background-size: 100% 100%;
				line-height: 40upx;
				margin-left: 30upx;
				font-size: 36upx;
				font-weight: 650;
			}
		}
		
		.title-more{
			text-align: center;
			line-height: 45upx;
			font-size: 26upx;
			margin-right: 30upx;
			color: #323643;
			width: 120upx;
			height: 45upx;
			border-radius: 40upx;
			border: 1upx solid #acadb1;
		}
	}
	
	// 最底部
	.very-bottom {
		height: 130upx;
		width: 100%;
		text-align: center;
		letter-spacing: -10upx; 
		color: #b1b2b5;
		padding-left:55upx;
		.very-bottom-txt {
			height: 100%;
			line-height: 130upx;
			text-align: center;
			color: #b1b2b5;
			font-size: 28upx;
		}
		span {
			 letter-spacing: 0; 
			 color: #b1b2b5; 
			 margin:0 20upx;
		}
	}
	
	/*
	    通过设置top的值，控制固定的位置，0是顶部，值为number(px)
	  */
	.stickyTop {
		position: -webkit-sticky;//safari 里这样写
		position: sticky;
		top: 0;
		z-index: 2001;
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
