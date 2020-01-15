<template>
	<view class="content">
		<!-- <filterTop :type="conditionType"  class="filter-board" @hide="closeFilter()"></filterTop> -->
		<uniPop ref="popup" type="top" class="pop">
			<filterTop :filterType="conditionType"  class="filter-board" @hide="closeFilter(arguments)" :sortType="sortType"></filterTop>
		</uniPop>
		<view class="top-carousel">	
			<!-- 搜索 -->
			<view class="stickyTop">
				<view class="search-view flex-row-wrap" @tap="toSearch()">
					<image class="icon-loc" src="../../static/index/new/icon-loc.png" mode="aspectFit"></image>
					<view class="location-info">南京</view>
					<image class="search-img" src="../../static/index/top/sousuo.png" mode="scaleToFill"></image>
					<!-- <view class="search-tip">搜索寺庙</view> -->
					<input class="search-input flex-row-wrap flex-center" :adjust-position="false" type="text" placeholder="搜索寺庙" 
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
				<image src="../../static/index/new/top-pingan.png" mode="scaleToFill"></image>
			</view>
			<view>
				<image class="jieyuan" src="../../static/index/top/jieyuan.gif" mode="aspectFit"></image>
			</view>
			
			<!-- 分类 -->
			<view class="type-view">
				<swiper class="type-swiper" :circular="true" :autoplay="false" >
					<swiper-item v-for="(singleGroup, index) in newBlessType" :key="index">
						<view class="type-grid flex-row-nowrap">
							<view class='type-item flex-col-nowrap flex-center' :class="(tinx % 5) == 0 ? 'mgleft' : (tinx % 5 == 4 ? 'mgright' : '')" 
								v-for="(type, tinx) in singleGroup" :key="tinx" @tap="toUrl(type.url,type.title)">
								<image :src="type.icon" mode="scaleToFill"></image>
								<view class="type-font">{{type.title}}</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		
		
		<!-- 这里为了解决横向滑动问题在外层设置overflow,但是导致搜索sticky失效 -->
		<view class="hidden-overflow">
			<!-- 著名寺庙 -->
			<view class="famous-temple">
				<view class="bottom-title flex-row-nowrap">
					<view class="title-view flex-row-nowrap">
						<image class="title-dot" src="../../static/index/middle/yuanxing.png" mode="aspectFit"></image>
						<view class="title-word">著名寺庙</view>
					</view>
				</view>
				<view class="temple-view">
					<view class="temple-zone flex-row-wrap">
						<view class="temple-item" v-for="(t, index) in famousTemples" :key="index">
							<image class="temple-back" :src="t.img"></image>
							<view class="temple-name">{{t.name}}</view>
							<view class="temple-add flex-row-nowrap city-font">
								<image class="icon-location" src="../../static/index/new/famous/icon-location.png" mode="aspectFit"></image>
								<view>{{t.city}}</view>
							</view>
							<view class="temple-dis">{{t.dis}}km</view>
						</view>
					</view>
					
					<image class="temple-float" src="../../static/index/new/float-qiucai.gif" ></image>
				</view>
			</view>
			
			<!-- 寺庙筛选 -->
			<view class="temple-filter">
				
				<!-- 条件 -->
				<view class="temple-condition flex-row-nowrap">
					
					<view class="nearby flex-row-nowrap col-center">
						<view>{{nearbyType}}</view>
						<i class="down" @tap="showFilter('nearby')"></i>
					</view>
					<view class="intel-sort flex-row-nowrap col-center">
						<view>{{sortType}}</view>
						<i class="down" @tap="showFilter('smart')"></i>
					</view>
					<view class="filter flex-row-nowrap col-center">
						<view>筛选</view>
						<i class="down" @tap="showFilter('filter')"></i>
					</view>
				</view>
				<!-- 列表 -->
				<view class="temples-by-condition flex-row-wrap">
					<view class="temple-item" v-for="(t, index) in templesByCondition" :key="index">
						<view class="item-city city-font flex-row-nowrap">
							<image class="icon-location" src="../../static/index/new/famous/icon-location.png" mode="aspectFit"></image>
							<view>{{t.city}}</view>
						</view>
						<view class="flex-col-nowrap flex-center">
							<image class="item-back" :src="t.img"></image>
							<view class="item-info flex-row-nowrap">
								<view class="item-name overflow-mag">{{t.name}}</view>
								<view class="item-loc">{{t.dis}}km</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			
			<!-- 众生圈 -->
			<view class="middle-zone">	
				<view class="zone-view">
					<swiper class="block-swiper" :circular="false" :autoplay="false" display-multiple-items="2" next-margin="100rpx">
						<swiper-item v-for="(b, index) in blocks" :key="index" class="zhongsheng">
							<image class="zhongsheng-main" :src="b.backImg"></image>
							<view class="zhongsheng-click flex-row-nowrap flex-center" @click="toUrl(b.url)">
								<image :src="b.iconImg" class="zhongsheng-icon" mode="aspectFit"></image>
								<view>进入{{b.name}}</view>
							</view>
						</swiper-item>
						
					</swiper>
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
					
				blessType: [{id: 1, title: '求财', icon: '../../static/index/new/qiucai.png', url: '../fivefunctions/function'},
					{id: 2, title: '求子', icon: '../../static/index/new/qiuzi.png', url: '../fivefunctions/function'},
					{id: 3, title: '求平安', icon: '../../static/index/new/qiupingan.png', url: '../fivefunctions/function'},
					{id: 4, title: '求姻缘', icon: '../../static/index/new/qiuyinyuan.png', url: '../fivefunctions/function'},
					{id: 5, title: '求学业', icon: '../../static/index/new/qiuxueye.png', url: '../fivefunctions/function'}
					],
					
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
						{id: 8, img: '../../static/index/birth/huineng_birth.png'}],
				famousTemples: [{id: 1, name: "栖霞寺", city: "南京市", dis: 6.9, img: "../../static/index/new/famous/famous-qixia.png"},
								{id: 1, name: "茅山道院", city: "南京市", dis: 6.9, img: "../../static/index/new/famous/famous-maoshan.png"},
								{id: 1, name: "静海寺", city: "南京市", dis: 6.9, img: "../../static/index/new/famous/famous-jinghai.png"},
								{id: 1, name: "崇阳书院", city: "南京市", dis: 6.9, img: "../../static/index/new/famous/famous-chongyang.png"}],
				// 已筛选的寺庙
				templesByCondition: [{id: 1, name: "鸡鸣寺", city: "南京市", dis: 6.9, img: "../../static/index/new/temple/jimingsi.png"},
									{id: 2, name: "鸡鸣寺", city: "南京市", dis: 6.9, img: "../../static/index/new/temple/jimingsi.png"},
									{id: 3, name: "鸡鸣寺", city: "南京市", dis: 6.9, img: "../../static/index/new/temple/jimingsi.png"},
									{id: 4, name: "鸡鸣寺", city: "南京市", dis: 6.9, img: "../../static/index/new/temple/jimingsi.png"},
									{id: 5, name: "鸡鸣寺", city: "南京市", dis: 6.9, img: "../../static/index/new/temple/jimingsi.png"},
									{id: 6, name: "鸡鸣寺", city: "南京市", dis: 6.9, img: "../../static/index/new/temple/jimingsi.png"},
									{id: 7, name: "鸡鸣寺", city: "南京市", dis: 6.9, img: "../../static/index/new/temple/jimingsi.png"},
									{id: 8, name: "鸡鸣寺", city: "南京市", dis: 6.9, img: "../../static/index/new/temple/jimingsi.png"},
									{id: 9, name: "鸡鸣寺", city: "南京市", dis: 6.9, img: "../../static/index/new/temple/jimingsi.png"}
									],
				// 显示筛选板
				showFilterBorad: false,
				// 筛选条件传递给子组件
				conditionType: "nearby",
				sortType: "智能排序",
				// 多个版块
				blocks: [{name:'梵音',backImg:'../../static/index/new/fanyin-back.png',iconImg:'../../static/index/new/icon-fanyin.png', url:'../buddhist/musiclist'},
						{name:'视频',backImg:'../../static/index/new/shipin-back.png',iconImg:'../../static/index/new/icon-shipin.png', url:'../video/list'},
						{name:'圣诞日',backImg:'../../static/index/new/shengdanri-back.png',iconImg:'../../static/index/new/icon-shengdanri.png', url: '../birthday/birthday'}
						],
				nearbyType: '附近'
			
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
				for(var i = 0; i < items.length; i+=5) {				
					newItems.push(items.slice(i, i+5))
				}
				//console.log(newItems)
				return newItems	
			},
			changeDot(e) {
				this.current = e.detail.current;
			},
			// 跳转指定板块
			toUrl(url,title) {
				uni.navigateTo({
					url: url + "?title=" + title
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
			},
			// 显示筛选板
			showFilter(type) {
				let _this = this
				_this.conditionType = type
				this.$refs.popup.open()
				this.filterToTop()
			},
			// 关闭筛选版
			closeFilter(args) {
				if(args.length == 2) {
					console.log(args[0] + args[1])
					if('nearby' == args[0]) {
						if(args[1].indexOf('m') == -1) {
							this.nearbyType = args[1]
						} else {
							this.nearbyType = '附近'
						}
					}else if('smart' == args[0] && this.sortType != args[1]) {
						this.sortType = args[1]
					}
				}
				this.$refs.popup.close()
			},
			// 上滑到筛选寺庙置顶
			filterToTop() {
				uni.pageScrollTo({
					scrollTop: 700,
					duration:300
				});
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
		margin-top: 15upx;
	}

	// 上部
	.top-carousel {
		width: 100%;
		height: 810upx;
		position: relative;
		.search-view {
			position: absolute;
			top: 20upx;
			width: 100%;
			height: 65upx;
			opacity: 0.9;
			align-items: center;
			//z-index: 10000;	
			.search-img {
				position: absolute;
				left: 326upx;
				top: 18upx;
				height: 30upx;
				width: 30upx;		
			}
			.search-input {
				margin-left: 25upx;
				height: 100%;
				width: 580upx;
				border-radius: 40upx;
				background: #ffffff;
				font-size: 33upx;
				color: #343844;
			}
			.icon-loc {
				margin-left: 10upx;
				width: 40upx;
				height: 40upx;
			}
			.location-info {
				font-size: 30upx;
				color: #FFFFFF;
			}
		}
		.m-carousel {
			height: 600upx;
			image {
				width: 100%;
				height: 600upx;
			}
		}
		.type-view {
			width: 100%;
			height: 210upx;
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
						height: 157upx;
						margin-bottom: 20upx;
						&.mgleft {
							margin-left: 15upx;
						}
						&.mgright {
							margin-right: 15upx;
						}
						image {
							width: 95upx;
							height: 95upx;
							margin-bottom: 20upx;
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
		left: 120upx;
		top: 190upx;
	}
	
	.pop {
		z-index: 5000;
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
	
	// 著名寺庙
	.famous-temple {
		background: #FFFFFF;
		width: 100%;
		height: 510upx;
		padding-top: 25upx;
		.temple-view {
			width: 100%;
			position: relative;
			.temple-zone {
				
			}
			.temple-item {
				position: relative;
				width: 338upx;
				height: 203upx;
				margin-top: 20upx;
				margin-left: 27upx;
				.temple-back {
					width: 336upx;
					height: 203upx;
					border-radius: 10upx;
				}
				.temple-name {
					z-index: 10;
					position: absolute;
					width: 150upx;
					height: 50upx;
					top: 0upx;
					left: 0upx;
					background: -moz-linear-gradient( left, rgb( 255, 204, 106 ) 0%, rgb( 255, 245, 180 ) 100%);
					background: -webkit-linear-gradient( left, rgb( 255, 204, 106 ) 0%, rgb( 255, 245, 180 ) 100%);
					background: linear-gradient( left, rgb( 255, 204, 106 ) 0%, rgb( 255, 245, 180 ) 100%);
					text-align: center;
					line-height: 50upx;
					color: #a70010;
					font-size: 32upx;
					font-weight: 600;
					border-top-left-radius: 10upx;
					border-bottom-right-radius: 10upx;
				}
				.temple-add {
					position: absolute;
					left: 15upx;
					bottom: 15upx;
					.icon-location {
						width: 25upx;
						height: 25upx;
						margin-left: -2upx;
						margin-top: 1upx;
					}
				}
				.temple-dis {
					position: absolute;
					right: 15upx;
					bottom: 18upx;
					width: auto;
					height: 30upx;
					font-size: 26upx;
					color: #FFFFFF;
				}
			}
			
			.temple-float {
				position: absolute;
				top: -45upx;
				right: 20upx;
				width: 125upx;
				height: 125upx;
			}
		}
	}
	
	.city-font {
		width: auto;
		line-height: 26upx;
		z-index: 10;
		border-radius: 30upx;
		background: #333333;
		opacity: 0.8;
		font-size: 26upx;
		color: #FFFFFF;
		height: 28upx;
		padding: 5upx 10upx;
		text-align: center;
	}
	
	// 寺庙筛选
	.temple-filter {
		.temple-condition {
			position: relative;
			width: 100%;
			height: 100upx;
			color: #bf7938;
			font-size: 32upx;
			justify-content: space-around;
			align-items: center;
			font-weight: 500;
		}
		.col-center {
			margin-top: 5upx;
		}
		
		// 寺庙列表
		.temples-by-condition {
			padding: 20upx auto;
			background: #FFFFFF;
			.temple-item {
				width: 230upx;
				height: 340upx;
				position: relative;
				margin-left: 16upx;
				.item-city {
					position: absolute;
					left: 15upx;
					bottom: 78upx;
					.icon-location {
						width: 25upx;
						height: 25upx;
						margin-left: -2upx;
						margin-top: 1upx;
					}
				}
				.item-back {
					width: 219upx;
					height: 278upx;
				}
				.item-info {
					justify-content: space-around;
					align-items: center;
					width: 100%;
					.item-name {
						font-size: 32upx;
						font-weight: 600;
						color: #000000;
						width: 140upx;
					}
					.item-loc {
						color: #8c8d92;
						font-size: 24upx;
					}
				}
			}
		}
		
	}
	
	// 箭头
	i {
		width: 15upx;
		height: 15upx;
		//background: #000000;
		border: solid #bf7938;
		border-width: 0 4upx 4upx 0;
		display: inline-block;
		padding: 1upx;
		margin-left: 15upx;
		margin-top: 8upx;
	}
	
	.down {
		transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
	}
	
	// 众生圈
	.middle-zone {
		background: #FFFFFF;
		width:100%;
		height: 310upx;
		padding-top:20upx;
		margin-top: 15upx;
		.zone-view {
			padding-top:20upx;
			width: 100%;
			height:100%;
			.block-swiper {
				width:100%;
				height: 100%;
			}
			.zhongsheng {
				position: relative;
				margin-left: 20upx;
				.zhongsheng-main {
					width: 305upx;
					height: 250upx;
				}
				.zhongsheng-click {
					position: absolute;
					width: 190upx;
					height: 60upx;
					background: #FFFFFF;
					opacity: 0.8;
					border-radius: 30upx;
					top: 160upx;
					left: 55upx;
					font-size: 28upx;
					text-align: center;
					line-height: 60upx;
					font-weight: 600;
					.zhongsheng-icon {
						width: 40upx;
						height: 40upx;
					}
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
