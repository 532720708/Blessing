<template>
	<view>
		<navTop class="stickyTop" :showTempleIcon="false" :showSearch="false" :navTitle="navTitle" :backStyle="navBackStyle"></navTop>
		<view class="entry-view" v-for="(entry, index) in videoList" :key="index">
			<view class="entry-title">佛·{{entry.type}}</view>
			<view class="entry-content flex-row-wrap">
				<view class="entry-item flex-col-nowrap flex-center" v-for="(item, i) in entry.videos" :key="i">
					<view class="item-img">
						<video v-show="false" class="item-img-main" :id="generateId(i, entry.type)" src="../../static/templeinf/video.mp4"  @error="videoErrorCallback" 
							controls></video>
						<image class="item-img-main" :src="item.img"></image>
						<image class="item-img-play" src="../../static/video/bofang_video.png" @tap="showVideo(i, entry.type)"></image>
					</view>
					<view class="item-title">{{item.title}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data()	{
			return {
				videoList: [{type: '法音', videos: [{img: '../../static/video/fayin_1.png', title: '大悲咒'}, {img: '../../static/video/fayin_1.png', title: '佛说金刚咒'},
					{img: '../../static/video/fayin_1.png', title: '观世音菩萨赞'}, {img: '../../static/video/fayin_1.png', title: '吉祥偈'},
					{img: '../../static/video/fayin_1.png', title: '搭衣咒'}, {img: '../../static/video/fayin_1.png', title: '警众偈'}]},
						{type: '演讲', videos: [{img: '../../static/video/yanjiang_1.png', title: '佛教眼中的神秘'}, {img: '../../static/video/yanjiang_2.png', title: '红尘中的净土'}, 
					{img: '../../static/video/yanjiang_2.png', title: '一切从心开始'}, {img: '../../static/video/yanjiang_2.png', title: '点亮一盏心灯'},
					{img: '../../static/video/yanjiang_2.png', title: '回归心灵的故乡'}, {img: '../../static/video/yanjiang_2.png', title: '觉醒的大地'}]},
						{type: '参寺', videos: [{img: '../../static/video/cansi_1.png', title: '鸡鸣寺'}, {img: '../../static/video/cansi_2.png', title: '栖霞寺'},
					{img: '../../static/video/cansi_3.png', title: '九华山'}, {img: '../../static/video/cansi_4.png', title: '定慧寺'},
					{img: '../../static/video/cansi_1.png', title: '灵隐寺'}, {img: '../../static/video/cansi_1.png', title: '岳王庙'}]} ],
				navTitle: '佛·视频',
				navBackStyle: 'whiteback',
				showBack: true,
				showBtn: false
			}
		},
		methods: {
			showVideo(index, type) {
				var curId = this.generateId(index, type)
				this.showBack = false
				// 获取 video 上下文 videoContext 对象
				this.videoContext = uni.createVideoContext(curId);
				//console.log(videoContext)
				// 进入全屏状态
				this.videoContext.requestFullScreen();
				this.videoContext.play()
			},
			videoErrorCallback(e) {
				console.log('视频错误信息:')
				console.log(e.target.errMsg)
			},
			// 生成视频id
			generateId(index, type) {
				let vId = ''
				switch(type) {
					case '法音':
						vId = 'v_t1_i' + index
						break;
					case '演讲':
						vId = 'v_t2_i' + index
						break;
					case '参寺':
						vId = 'v_t3_i' + index
						break;
					default:
						vId = ''
				}
				console.log(vId)
				return vId;
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #EEEEEE;
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	}
	
	.entry-view {
		width: 100%;
		height: 660upx;
		margin-bottom: 10upx;
		background-color: #FFFFFF;
		.entry-title {
			background: url(../../static/index/yuanjiao_back_index.png) no-repeat center;
			background-size: 100% 50%;
			display: inline-block;
			line-height: 70upx;
			margin-left: 30upx;
			font-size: 36upx;
			font-weight: 550;
			height: 70upx;
			width: auto;
			margin-bottom: 10upx;
		}
		.entry-content {		
			align-items: center;
			width: 100%;
			//padding: auto 12upx;
			.entry-item {
				margin-left: 30upx;
				width: 211upx;
				height: 280upx;
				.item-img {
					width: 211upx;
					height: 211upx;
					position: relative;
					.item-img-main {
						width: 211upx;
						height: 211upx;
					}
					.item-img-play {
						position: absolute;
						left: 16upx;
						bottom: 16upx;
						width: 60upx;
						height: 60upx;
						z-index: 0.5;
						opacity: 0.8;
					}
				}
				.item-title {
					font-size: 30upx;
				}
			}
		}
	}
</style>
