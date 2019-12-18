<template>
	<view>
		<navTop class="stickyTop" :showTempleIcon="false" :showSearch="false" :navTitle="navTitle" :backStyle="navBackStyle"></navTop>

		
		<view class="top-txt flex-row-wrap">
			<image class="quotation" src="../../static/buddhist/double-quotation.png"></image>
			<view class="top-txt-sen">佛曰：菩提本无树，明镜亦非台，本来无一物，何处惹尘埃。</view>
		</view>
		<view>
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
				@scroll="scroll">
				<view class="fojing-list flex-row-wrap">
					<view class="fojing-item flex-col-nowrap" @tap="toBuddhistInfo(item.name)" :class="(index % 3) == 0 ? 'mgleft' : (index % 3 == 2 ? 'mgright' : '')" 
					v-for="(item, index) in buddhistTxt" :key="index">
						<view>
							<image class="back-main" src="../../static/buddhist/fojing_back.png"></image>
							<view class="back-title-view flex-row-nowrap flex-center">
								<view class="internal fojing-back-title" >
									{{item.name}}
									<!-- <view class="title-txt fojing-back-title">{{item.name}}</view> -->
								</view>
								<!-- <image class="back-title" src="../../static/buddhist/fojing_title_back.png"></image> -->	
							</view>
						</view>	
						<view class="fojing-title">{{item.name}}</view>
					</view>	
					
				</view>
			</scroll-view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data () {
			return {
				navTitle: "佛经大全",
				navBackStyle: "whiteback",
				buddhistTxt: [{id: 1, name: '般若波罗蜜多心经'}, {id: 2, name: '地藏经'}, {id: 3, name: '金刚经'}, {id: 4, name: '楞严经'},
					{id: 5, name: '阿弥陀经'}, {id: 6, name: '无量寿经'}, {id: 7, name: '药师经'}, {id: 8, name: '大悲咒'},
					{id: 9, name: '华严经'}, {id: 10, name: '法华经'}, {id: 11, name: '六祖坛经'}, {id: 12, name: '大般涅槃经'},
					{id: 13, name: '十善业道经'}, {id: 14, name: '佛说四十二章经'}, {id: 15, name: '圆觉经'}, {id: 16, name: '观世音菩萨普门品'},
					{id: 17, name: '楞伽经'}, {id: 18, name: '大势至菩萨念佛圆通章'}, {id: 19, name: '观无量寿经'}, {id: 20, name: '维摩诘经'},
					{id: 21, name: '占察善恶业报经'}, {id: 22, name: '僧伽吒经'}, {id: 23, name: '佛遗教经'}, {id: 24, name: '解深密经'},
					{id: 25, name: '悲华经'}]
			}
		},
		methods: {
			toBuddhistInfo(name) {
				uni.navigateTo({
					url:"./info?bName=" +  name
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../style/SourceHanSerifSC-Regular/SourceHanSerifSC-Regular.css";
	
	page {	
		background: #FFFFFF;
	}
	
	.top-txt {
		//background: #007AFF;
		width: 100%;
		height: 130upx;
		padding: 20upx;
		.quotation {
			width: 60upx;
			height: 45upx;
		}
		.top-txt-sen {
			margin-left: 15upx;
			width: 640upx;
			height: 100%;
			font-size: 35upx;
		}
	}
	
	.fojing-list {
		width: 100%;
		height: auto;
		//justify-content: space-around;
		//justify-content: center;
		//align-items: center;
	
		.fojing-item {
			height: 380upx;
			width: 208upx;
			position: relative;
			margin-left: 43upx;
			&.mgleft {
				margin-left: 20upx;
			}
			&.mgright {
				margin-right: 20upx;
			}
			.back-main {
				width: 208upx;
				height: 272upx;
			}
			.back-title-view {
				position: absolute;
				top: 22upx;
				right: 0upx;
				margin-right: 40upx;
				width: auto;
				height: auto;
				padding: 5upx;
				//background: #007AFF;
				z-index: 1000;
				border: 0.4upx solid rgb( 180, 133, 45 );
				border-radius: 6upx;
				.internal {
					padding: 4upx;
					//text-align: center;
					max-height: 150upx;
					width: auto;
					border: 1.8upx solid rgb( 106, 57, 6 );
					border-radius: 6upx;
					background-image: -moz-linear-gradient( 90deg, rgb( 237, 222, 119 ) 0%, rgb( 255, 255, 255 ) 100%);
					background-image: -webkit-linear-gradient( 90deg, rgb( 237, 222, 119 ) 0%, rgb( 255, 255, 255 ) 100%);
					-webkit-writing-mode: vertical-rl;
					writing-mode: vertical-rl;/*从左向右 从右向左是 writing-mode: vertical-rl;*/
					writing-mode: tb-rl;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/ 
					text-align: left;
					
					// .title-txt {
					// 	
					// 	-webkit-writing-mode: vertical-rl;
					// 	writing-mode: vertical-rl;/*从左向右 从右向左是 writing-mode: vertical-rl;*/
					// 	writing-mode: tb-rl;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/ 
					// 	text-align: left;
					// }
		
				}
				.back-title {
					position: absolute;
					z-index: 100;
					width: 100%;
					height: 100%;
				}
				
			}
			.fojing-title {
				height: 100upx;
				text-align: center;
				width: 100%;
				font-size: 31upx;
				font-family: "SourceHanSerifSC-Regular";
				color: rgb( 0, 0, 0 );
				font-weight: 600;
			}
		}
		
	}
	
	
	// 佛经图中字体
	.fojing-back-title {
		font-size: 28upx;
		font-family: "SourceHanSerifSC-Regular";
		color: rgb( 0, 0, 0 );
		font-weight: 600;
	}
	
	
</style>
