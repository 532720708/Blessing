<template>
	<view>
		<view class="musicView" v-for="(t, i) in title" :key="i">
			<text class="title">{{t}}</text>
			<view class="akindMusic">
				<view class="aMusciView" v-for="(item,index) in list" :key="index">
					<view>
						<image class="foImage" src="../../static/music/amusicicon.JPG" ></image>
						<view class="playView flex-row-nowrap">
							<image class="icon" @click="playMusic(item.src, index, i)" 
								:class="curType == i && curIndex == index && play ? 'play' : 'pause' "></image>						
							<text class="hottext">{{item.hot}}</text>
						</view>
					</view>
					<text class="nameText overflow-manage">{{item.name}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:["title","list"],
		data() {
			return {
				play:false,
				innerAudioContext:{},
				curIndex:-1,
				curType: -1
			}
		},
		onLoad() {
		},
		methods: {
			playMusic(src, index, i){
				// 没有在播放
				if(!this.play) {					
					this.curIndex = index;
					this.curType = i;
					this.startPlay(src);
					return
				}
							
				console.log("stop")
				let innerAudioContext = this.innerAudioContext;
				
				innerAudioContext.pause(() => {
				});
				this.play = false;
				
				// 有其他在播放,开启播放
				if(this.curIndex == index && this.curType == i)	{
					return
				}
				this.curIndex = index;
				this.curType = i;
				this.startPlay(src)
						
			},
			startPlay(src){
				const innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.autoplay = true;
				innerAudioContext.src = src;
				innerAudioContext.play(() => {
				});
				this.innerAudioContext = innerAudioContext;			
				this.play = true;
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.musicView{
		margin-top: 25upx;
		width: 100%;
		height: 690upx;
		.title{
			background: url(../../static/index/yuanjiao_back_index.png) no-repeat center;
			background-size: 100% 50%;
			margin-left: 22upx;
			color: black;
			font-size: 20px;
			font-weight: 800;
		}
		.akindMusic{
			padding-top: 20upx;
			width: 100%;
			height: 620upx;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			.aMusciView{
				display: flex;
				flex-direction: column;
				align-items: center;
				position: relative;
				width: 225upx;
				height: 290upx;
				padding-left: 20upx;
				.foImage{
					background: #000000;
					width: 225upx;
					height: 225upx;
					border-radius: 15upx;
				}
				.playView{
					border-radius: 40upx;
					position: absolute;
					top: 170upx;
					left: 128upx;
					width: 100upx;
					height: 35upx;
					//background: #007AFF;
					background: #312417;
					opacity: 0.8;
					justify-content: center;
					align-items: center;
					.icon {
						width: 30upx;
						height: 30upx;
					}
					.hottext{
						color: #ffffff;
						font-size: 10px;
						font-weight: 500;
					}
				}
				
				.nameText{
					margin-top: 10upx;
					width: 180upx;
					font-size: 17px;
					//font-weight: 500;
					text-align: center;
				}
			}
		}
		
	}
	.overflow-manage {
		white-space: nowrap;
		overflow : hidden;
		text-overflow: ellipsis;
	}
	

	.play {				
		background: url(../../static/music/pause.png);
		background-size: 100% 100%;
	}
	
	.pause {		
		background: url(../../static/music/play.png);
		background-size: 100% 100%;
	}
</style>
