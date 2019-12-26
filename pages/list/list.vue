<template>	
	<view>
		<!-- <view class="list-nav flex-row-nowrap">
			<view class="nav-internal flex-row-nowrap">
				<image src="../../static/list/arrow-left-2.png" mode="aspectFit" class="arrow-left" @tap="back()"></image>
				<view class="nav-title flex-row-wrap flex-center">
					<image src="../../static/list/remensimiao_icon2.png" class="nav-title-icon left"></image>
					<view class="nav-title-font">{{navTitle}}</view>
					<image src="../../static/list/remensimiao_icon2.png" class="nav-title-icon right"></image>
				</view>
				<image src="../../static/list/remensousuo_icon.png" mode="aspectFit" class="search-icon"></image>
			</view>
		</view> -->
		<!-- 标题 -->
		<navTop class="stickyTop" :showTempleIcon="false" :showSearch="true" :navTitle="navTitle" :backStyle="navBackStyle" :isTab="true"></navTop>
		
		<!-- 主体 -->
		<view class="list-content flex-row-nowrap">
			<!-- 左边导航 -->
			<view class="content-left flex-col-nowrap">
				<scroll-view scroll-y="true" class="scroll-Y">
						<view class="province-scroll-item flex-row-wrap flex-center" :class="curType == '热门寺庙' ? 'chooseStyle' : '' " @tap="filter(-1)">
							<image src="../../static/list/remen_huo_icon.png" class="hot-icon"></image>
							<view>热门寺庙</view>
						</view>
						<view class="province-scroll-item" :class="curType == item.id ? 'chooseStyle' : '' " v-for="(item, index) in province" :key="index" @tap="filter(item.id)">
							{{item.name}}
						</view>
				</scroll-view>
			</view>
			
			<!-- 寺庙列表 -->			
			<view class="content-main">
				<view class="content-swiper flex-row-wrap flex-center">
					<swiper autoplay="true">
						<swiper-item  v-for="(m, index) in curCarousel.carousels" :key="index">
							<!-- 由于图片问题目前只保留长边 -->
							<image :src="m"></image>
						</swiper-item>
					</swiper>
				</view>
				<view >
					<scroll-view scroll-y="true" class="scroll-Y">
						<view class="content-list flex-row-wrap">
							<view class="list-item flex-col-nowrap" v-for="(item, index) in curTempleList" :key="index"
								:class="(index % 2) == 0 ? 'mgleft' : (index % 2 == 1 ? 'mgright' : '')" @tap="toTempleInfo(item.name)">
								<image class="item-img" :src="item.img"></image>
								<view class="item-title-view flex-row-nowrap">
									<view class="title-left flex-row-nowrap">
										<view class="item-title overflow-manage">{{item.name}}</view>
										
									</view>
									
								</view>
								<view class="item-bottom flex-row-nowrap">
									<view class="item-add overflow-manage" v-if="item.add">({{item.add}})</view>
									<view class="item-hot overflow-manage" :class="item.add ? 'txtright' : 'txtleft'">{{item.hot}}观看</view>
								</view>
								<!-- <view class="item-desc overflow-manage-muti">{{item.desc}}</view> -->
							</view>
						</view>					
					</scroll-view>				
				</view>
				<!-- 无寺庙信息 -->
				<view class="no-info-tip" v-if="curTempleList.length == 0">暂无当地寺庙信息</view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navTitle: '热门寺庙',
				province: [{id:2, name: "安徽省"},{id:3, name: "北京市"},{id:4, name: "重庆市"},{id:5, name: "福建省"},
					{id:6, name: "甘肃省"},{id:7, name: "广东省"},{id:8, name: "广西壮族"},{id:9, name: "贵州省"},{id:10, name: "海南省"},
					{id:11, name: "河北省"},{id:12, name: "河南省"},{id:13, name: "黑龙江省"},{id:14, name: "湖北省"},{id:15, name: "湖南省"},
					{id:16, name: "江西省"},{id:17, name: "吉林省"},{id:18, name: "江苏省"},{id:19, name: "辽宁省"},{id:20, name: "内蒙古"},
					{id:21, name: "宁夏回族"},{id:22, name: "青海省"},{id:23, name: "山西省"},{id:24, name: "山东省"},{id:25, name: "陕西省"},
					{id:26, name: "上海市"},{id:27, name: "四川省"},{id:28, name: "天津市"},{id:29, name: "西藏"},{id:30, name: "新疆维吾尔"},
					{id:31, name: "云南省"},{id:32, name: "浙江省"}],
				templeCarousel: [{id: 1, carousels: ["../../static/list/remen_carousel1.png"]},
					{id: 2, carousels: ["../../static/list/anhui_carousel1.jpg"]}],
				curCarousel: [],
				templeList: [{id: 2, province: "安徽省", temples: [{id: 1, name: "弘愿寺", add: "宣城市", desc: "弘愿寺位于安徽省宣城市敬亭山脚下，前身为大唐广教寺，为唐代大中年间黄檗禅师创建，历代高僧辈出....", hot: 603, img: "../../static/list/anhui_temple_4.jpg"},
						{id: 2, name: "明教寺", add: "合肥市", desc: "明教寺，原名明教院、铁佛寺，又称明教台、曹操点将台。原址是三国时期曹操所筑的教弩台，俗称“曹操点将台”....", hot: 603, img: "../../static/list/anhui_temple_3.jpg"},
						{id: 3, name: "化城寺", add: "九华山", desc: "九华山化城寺是九华山的开山主寺，历史最悠久又是地藏菩萨道场，是九华的“总丛林”。 始建于唐....", hot: 603, img: "../../static/list/anhui_temple_2.jpg"},
						{id: 4, name: "西庐寺", add: "合肥市肥西县", desc: "西庐寺位于安徽省合肥市肥西县，在紫蓬山国家森林公园内，始建于公元180年，为皖中名寺。初为汉末李陵庙...", hot: 603, img: "../../static/list/anhui_temple_1.png"},
						{id: 5, name: "祗园寺", add: "池州市", desc: "祇园寺建于清乾隆年，该庙面积分一厘五毫，房屋十二间。管理及使用情况为供佛及自住外出租...", hot: 603, img: "../../static/list/anhui_temple_6.png"},
						{id: 6, name: "甘露寺", add: "池州市", desc: "甘露寺位于安徽省南部的九华山中，也是九华山重要寺庙之一，位于化城山腰定心石下。原名甘露庵，又名甘露禅林...", hot: 603, img: "../../static/list/anhui_temple_5.png"},
						{id: 1, name: "弘愿寺", add: "宣城市", desc: "弘愿寺位于安徽省宣城市敬亭山脚下，前身为大唐广教寺，为唐代大中年间黄檗禅师创建，历代高僧辈出....", hot: 603, img: "../../static/list/anhui_temple_4.jpg"},
						{id: 2, name: "明教寺", add: "合肥市", desc: "明教寺，原名明教院、铁佛寺，又称明教台、曹操点将台。原址是三国时期曹操所筑的教弩台，俗称“曹操点将台”....", hot: 603, img: "../../static/list/anhui_temple_3.jpg"},
						{id: 3, name: "化城寺", add: "九华山", desc: "九华山化城寺是九华山的开山主寺，历史最悠久又是地藏菩萨道场，是九华的“总丛林”。 始建于唐....", hot: 603, img: "../../static/list/anhui_temple_2.jpg"},
						{id: 4, name: "西庐寺", add: "合肥市肥西县", desc: "西庐寺位于安徽省合肥市肥西县，在紫蓬山国家森林公园内，始建于公元180年，为皖中名寺。初为汉末李陵庙...", hot: 603, img: "../../static/list/anhui_temple_1.png"},
						{id: 5, name: "祗园寺", add: "池州市", desc: "祇园寺建于清乾隆年，该庙面积分一厘五毫，房屋十二间。管理及使用情况为供佛及自住外出租...", hot: 603, img: "../../static/list/anhui_temple_6.png"},
						{id: 6, name: "甘露寺", add: "池州市", desc: "甘露寺位于安徽省南部的九华山中，也是九华山重要寺庙之一，位于化城山腰定心石下。原名甘露庵，又名甘露禅林...", hot: 603, img: "../../static/list/anhui_temple_5.png"},
						{id: 1, name: "弘愿寺", add: "宣城市", desc: "弘愿寺位于安徽省宣城市敬亭山脚下，前身为大唐广教寺，为唐代大中年间黄檗禅师创建，历代高僧辈出....", hot: 603, img: "../../static/list/anhui_temple_4.jpg"},
						{id: 2, name: "明教寺", add: "合肥市", desc: "明教寺，原名明教院、铁佛寺，又称明教台、曹操点将台。原址是三国时期曹操所筑的教弩台，俗称“曹操点将台”....", hot: 603, img: "../../static/list/anhui_temple_3.jpg"},
						{id: 3, name: "化城寺", add: "九华山", desc: "九华山化城寺是九华山的开山主寺，历史最悠久又是地藏菩萨道场，是九华的“总丛林”。 始建于唐....", hot: 603, img: "../../static/list/anhui_temple_2.jpg"},
						{id: 4, name: "西庐寺", add: "合肥市肥西县", desc: "西庐寺位于安徽省合肥市肥西县，在紫蓬山国家森林公园内，始建于公元180年，为皖中名寺。初为汉末李陵庙...", hot: 603, img: "../../static/list/anhui_temple_1.png"},
						{id: 5, name: "祗园寺", add: "池州市", desc: "祇园寺建于清乾隆年，该庙面积分一厘五毫，房屋十二间。管理及使用情况为供佛及自住外出租...", hot: 603, img: "../../static/list/anhui_temple_6.png"},
						{id: 6, name: "甘露寺", add: "池州市", desc: "甘露寺位于安徽省南部的九华山中，也是九华山重要寺庙之一，位于化城山腰定心石下。原名甘露庵，又名甘露禅林...", hot: 603, img: "../../static/list/anhui_temple_5.png"}
						]}],
				curTempleList: [],
				hotTempleList: [{id: 1, name: "灵谷寺", add: "南京市", desc: "灵谷寺位于江苏省南京市玄武区紫金山东南坡下，中山陵以东约1.5千米处，始建于天监十三年（514年）...", hot: 603, img: "../../static/list/remen_temple_1.png"},
						{id: 2, name: "鸡鸣寺", add: "南京市", desc: "鸡鸣寺位于南京市玄武区鸡笼山东麓山阜上，又称古鸡鸣寺，始建于西晋，是南京最古老的梵刹之一...", hot: 603, img: "../../static/list/remen_temple_2.png"},
						{id: 3, name: "白马寺", add: "洛阳市", desc: "白马寺位于河南省洛阳市老城以东12公里，洛龙区白马寺镇内。创建于东汉永平十一年（公元68年），中国第一古刹...", hot: 603, img: "../../static/list/remen_temple_3.png"},
						{id: 4, name: "寒山寺", add: "苏州市", desc: "寒山寺位于苏州市姑苏区，始建于南朝萧梁代天监年间（公元502～519年），初名“妙利普明塔院”...", hot: 603, img: "../../static/list/remen_temple_4.png"},
						{id: 1, name: "灵谷寺", add: "南京市", desc: "灵谷寺位于江苏省南京市玄武区紫金山东南坡下，中山陵以东约1.5千米处，始建于天监十三年（514年）...", hot: 603, img: "../../static/list/remen_temple_1.png"},
						{id: 2, name: "鸡鸣寺", add: "南京市", desc: "鸡鸣寺位于南京市玄武区鸡笼山东麓山阜上，又称古鸡鸣寺，始建于西晋，是南京最古老的梵刹之一...", hot: 603, img: "../../static/list/remen_temple_2.png"},
						{id: 3, name: "白马寺", add: "洛阳市", desc: "白马寺位于河南省洛阳市老城以东12公里，洛龙区白马寺镇内。创建于东汉永平十一年（公元68年），中国第一古刹...", hot: 603, img: "../../static/list/remen_temple_3.png"},
						{id: 4, name: "寒山寺", add: "苏州市", desc: "寒山寺位于苏州市姑苏区，始建于南朝萧梁代天监年间（公元502～519年），初名“妙利普明塔院”...", hot: 603, img: "../../static/list/remen_temple_4.png"},
						{id: 1, name: "灵谷寺", add: "南京市", desc: "灵谷寺位于江苏省南京市玄武区紫金山东南坡下，中山陵以东约1.5千米处，始建于天监十三年（514年）...", hot: 603, img: "../../static/list/remen_temple_1.png"},
						{id: 2, name: "鸡鸣寺", add: "南京市", desc: "鸡鸣寺位于南京市玄武区鸡笼山东麓山阜上，又称古鸡鸣寺，始建于西晋，是南京最古老的梵刹之一...", hot: 603, img: "../../static/list/remen_temple_2.png"},
						{id: 3, name: "白马寺", add: "洛阳市", desc: "白马寺位于河南省洛阳市老城以东12公里，洛龙区白马寺镇内。创建于东汉永平十一年（公元68年），中国第一古刹...", hot: 603, img: "../../static/list/remen_temple_3.png"},
						{id: 4, name: "寒山寺", add: "苏州市", desc: "寒山寺位于苏州市姑苏区，始建于南朝萧梁代天监年间（公元502～519年），初名“妙利普明塔院”...", hot: 603, img: "../../static/list/remen_temple_4.png"},
						{id: 1, name: "灵谷寺", add: "南京市", desc: "灵谷寺位于江苏省南京市玄武区紫金山东南坡下，中山陵以东约1.5千米处，始建于天监十三年（514年）...", hot: 603, img: "../../static/list/remen_temple_1.png"},
						{id: 2, name: "鸡鸣寺", add: "南京市", desc: "鸡鸣寺位于南京市玄武区鸡笼山东麓山阜上，又称古鸡鸣寺，始建于西晋，是南京最古老的梵刹之一...", hot: 603, img: "../../static/list/remen_temple_2.png"},
						{id: 3, name: "白马寺", add: "洛阳市", desc: "白马寺位于河南省洛阳市老城以东12公里，洛龙区白马寺镇内。创建于东汉永平十一年（公元68年），中国第一古刹...", hot: 603, img: "../../static/list/remen_temple_3.png"},
						{id: 4, name: "寒山寺", add: "苏州市", desc: "寒山寺位于苏州市姑苏区，始建于南朝萧梁代天监年间（公元502～519年），初名“妙利普明塔院”...", hot: 603, img: "../../static/list/remen_temple_4.png"},
						{id: 1, name: "灵谷寺", add: "南京市", desc: "灵谷寺位于江苏省南京市玄武区紫金山东南坡下，中山陵以东约1.5千米处，始建于天监十三年（514年）...", hot: 603, img: "../../static/list/remen_temple_1.png"}
						],
				curType: "热门寺庙",
				navBackStyle: 'redback',
}
		},
		onLoad() {
			let _this = this
			_this.curCarousel = _this.templeCarousel[0]
			_this.curTempleList = _this.hotTempleList
			
		},
		// 停止刷新动画
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 500);
		},
		methods: {
			init() {
				let _this = this
				// 请求后端接口，有刷新动画
				_this.$http.Api_C.province(1, [], function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						console.log(rep)
						_this.province = rep
					}			
					else {
						console.log(err)
					}
				})
				
				// 请求热门寺庙
				_this.getHotTemples()
				
			},		
			
			// 返回页面顶部
			toTop() {
				uni.pageScrollTo({
					scrollTop: 0,
				});
			},
			
			// 分类
			filter(id) {
			
				var _this = this
				uni.startPullDownRefresh();
				_this.toTop()
				
				// 模拟刷新
				setTimeout(function () {
					uni.stopPullDownRefresh();
				}, 500);
				
				// 热门寺庙
				if(id == -1) {
					_this.curType = "热门寺庙"
					_this.curTempleList = _this.hotTempleList
					_this.curCarousel = _this.templeCarousel[0]
					_this.navTitle = _this.curType
					return
				}
				
				// 控制样式变化
				_this.curType = id
				_this.navTitle = "寺庙列表"
				_this.curTempleList = _this.templeList[0].temples
				_this.curCarousel = _this.templeCarousel[1]
				
				// 向后台请求20个当前省份的
				// _this.$http.Api_C.templeListByP(1, [], id, function(err, rep) {
				// 	//uni.stopPullDownRefresh()
				// 	if (rep) {
				// 		_this.curTempleList = rep
				// 		_this.mockTempleByP()
				// 		console.log(rep)
				// 	}			
				// 	else {
				// 		console.log(err)
				// 	}
				// })
			},
			
			// 跳转详细信息页
			toTempleInfo(tName) {
				uni.navigateTo({
					url: "../temple/temple?tName=" + tName
				})
			},
			
			getHotTemples() {
				var _this = this
				// 默认请求热门寺庙
				_this.$http.Api_C.hotTempleList(1, [], 20, function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						_this.hotTempleList = rep
						_this.mockImg()
						console.log(rep)
					}			
					else {
						console.log(err)
					}
				})
				
			},
			
			// mock各省寺庙数据
			mockTempleByP() {				
				var pTemples = this.curTempleList.slice(0,20)
				for(var i = 0;i < pTemples.length; i++) {
					switch(i%6) {
						case 0:
							pTemples[i].img = '../../static/list/anhui_temple_1.png'
							break;
						case 1:
							pTemples[i].img = '../../static/list/anhui_temple_2.jpg'
							break;
						case 2:
							pTemples[i].img = '../../static/list/anhui_temple_3.jpg'
							break;
						case 3:
							pTemples[i].img = '../../static/list/anhui_temple_4.jpg'
							break;
						case 4:
							pTemples[i].img = '../../static/list/anhui_temple_5.png'
							break;
						case 5:
							pTemples[i].img = '../../static/list/anhui_temple_6.png'
							break;
						default:
							pTemples[i].img = ''
					}
				}
				this.curTempleList = pTemples
			},
			
			// mock热门寺庙图片
			mockImg() {
				var hTemples = this.hotTempleList 
				for(var i = 0;i < hTemples.length; i++) {
					switch(i%4) {
						case 0:
							hTemples[i].img = '../../static/list/remen_temple_1.png'
							break;
						case 1:
							hTemples[i].img = '../../static/list/remen_temple_2.png'
							break;
						case 2:
							hTemples[i].img = '../../static/list/remen_temple_3.png'
							break;
						case 3:
							hTemples[i].img = '../../static/list/remen_temple_4.png'
							break;
						default:
							hTemples[i].img = ''
					}
				}
				this.hotTempleList = hTemples
				this.curTempleList = hTemples
			}
			
		}
	}
</script>

<style lang="scss" scoped> 
	page {
		background: #FFFFFF;
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	}
	
	// 解决fixed布局脱离文档流遮挡下面内容
	.empty-view {
		width: 100%;
		height: 150upx;
	}
	
	// 主体
	.list-content {
		margin-bottom: 20upx;
		// 省分类 
		.content-left {
			height: auto;
			width: 170upx;
			//background: url(../../static/list/sheng_back.png) repeat;
			background: #faf2dd;
			font-size: 30upx;
			color: #6d5a48;
			scroll-view {
				//height: 600upx;
				height: auto;
				.province-scroll-item {
					line-height: 75upx;
					text-align: center;
					height: 80upx;
					.hot-icon {
						margin-right: 5upx;
						width: 25upx;
						height: 31upx;
					}				
				}
			}		
		}
		
		// 分类选中样式
		.chooseStyle {
			background: #FFFFFF;
		}
		
		// 内容
		.content-main {
			width: 580upx;
			height: 900upx;	
			.content-swiper {
				width: 100%;
				height: 170upx;	
				//background:#007AFF;
				swiper {
					width: 550upx;
					height: 150upx;
					image {
						border-radius: 18upx;
						width: 100%;
						height: 100%;
					}
				}
			}
			
			scroll-view {
				height: auto;
			}
			
			.content-list {
				//justify-content: space-around;
				align-content: flex-start;
				width: 580upx;
				height: auto;
				margin-top: 20upx;
				.list-item {		
					width: 268upx;
					height: 265upx;
					&.mgleft {
						margin-left: 15upx;
					}
					&.mgright {
						margin-left: 14upx;
					}
					.item-img {
						border-radius: 14upx;
						width: 268upx;
						height: 160upx;
					}
					.item-title-view {
						margin-top: 5upx;
						height: 40upx;
						justify-content: space-between;
						.title-left {
							width: 200upx;
							.item-title {
								width: auto;
								font-size: 32upx;
							}
							
						}		
					}
					
					.item-bottom {
						width: 100%;
						height: 40upx;
						align-items: center;
						justify-content: space-between;
						.item-add {
							font-size: 20upx;
							line-height: 52upx;
							width: 160upx;
							color: #68584b;
						}
						.item-hot {
							font-size: 20upx;
							line-height: 54upx;
							color: #68584b;
							width: 108upx;
							
							&.txtleft {
								text-align: left;
							}
							&.txtright {
								text-align: right;
							}
						}
					}
					
					.item-desc {
						margin-top: 10upx;
						height: 66upx;
						font-size: 22upx;
						color: #a7a7a7;
					}
				}
			}
		}
	}
	
	// 单行溢出处理
	.overflow-manage {
		white-space: nowrap;
		overflow : hidden;
		text-overflow: ellipsis;
	}
	
	// 多行溢出处理
	.overflow-manage-muti {
		// 对非webkit内核的浏览器有兼容问题
		display: -webkit-box; /* 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
		-webkit-box-orient: vertical; /* 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。*/
		text-overflow: ellipsis; /* 可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
		-webkit-line-clamp: 2;
		overflow : hidden;
	}
	
	.no-info-tip {
		width: 100%;
		text-align: center;
		font-size: 30upx;
		color: #999999;
	}
</style>
