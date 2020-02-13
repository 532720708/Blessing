<template>
	<view>
		<navTop class="stickyTop" :showTempleIcon="false" :showSearch="false" :navTitle="temple.name" :backStyle="navBackStyle"></navTop>
		<view  class="videoView">
			<!-- 正常操作逻辑 -->
			<!-- <video class="templeVideo" :src="temple.video" ></video> -->
			<!-- 模拟视频播放时背景 -->

			<image v-if="showBackground" src="../../static/templeinf/videobackground.png" style="width: 100%;height: 400upx;" @click="showVideo"></image>
			<video v-else autoplay="true" class="templeVideo" :src="temple.video"></video>

		</view>
		<view class="choiceView">
			<view class="Title">
				<image class="logoImg" src="../../static/templeinf/qiyuan_logo.png" mode="aspectFit"></image>
				<text class="titleText1">祈愿选择</text>
			</view>
			<swiper class="swiperView" >
				<swiper-item class="swiperItem" v-for="item in swiper">
					<view class="oneChoice" v-for="choiceItem in item" :data-choiceID=choiceItem.title @click="choiceButton">
						<image class="swiperImg" :src="choiceItem.img"></image>
						<text class="fiveTitle">{{choiceItem.title}}</text>
					</view>
				</swiper-item>
			</swiper>		
		</view>
		<view class="introduceView">
			<view class="Title">
				<image class="logoImg" src="../../static/templeinf/simiao_logo.png" mode="widthFix"></image>
				<text class="titleText1">关于寺庙</text>
			</view>
			<scroll-view class="introduceText" scroll-y="true">
				<rich-text :nodes="temple.introduce"></rich-text>
			</scroll-view>
			<view></view> 	
		</view>
		
	</view>
</template>


<script>
	export default {
	    data() {
	        return {
				showBackground:true,

				navBackStyle: 'redback',
				temple:{
					video:"../../static/templeinf/video.mp4",
					choice:[{img:"../../static/templeinf/qiucai.png", title: "求财"}, 
						{img: "../../static/templeinf/qiuzi.png", title: "求子"},
						{img: "../../static/templeinf/qiuyinyuan.png", title: "求姻缘"},
						{img: "../../static/templeinf/qiupingan.png", title: "求平安"},
						{img: "../../static/templeinf/qiuxueye.png", title: "求学业"}],
					name:"鸡鸣寺",
					introduce:"<p>鸡鸣寺历史可追溯至东吴的栖玄寺，寺址所在为三国时属吴国后苑之地，300年（西晋永康元年）在此倚山造室，始创道场。"+
					"东晋以后，此处被辟为廷尉署，至527年（南朝梁普通八年）梁武帝在鸡鸣埭兴建同泰寺，使这里从此真正成为佛教胜地。"+
					"1387年（明朝洪武二十年）明太祖朱元璋下令拆去旧屋，扩大规模，重建寺院。</p><p>朱元璋题额为“鸡鸣寺”。后经明宣德、成化、弘治年间扩建，院落规模宏大，占地达百余亩。"+
					"后来古寺毁于咸丰战火，虽同治年间重修，规模已大大缩小，但香火却一直旺盛不衰。</p>",
				},
				subGroupLength : 5,
				swiper:[],
				transInfJson: ''
			};
	    },
		methods:{
			showVideo(){
				this.showBackground = false
			},
			swiperGroup(array,subGroupLength){
				let index = 0;
				let newArray = [];
				while(index < array.length) {
				    newArray.push(array.slice(index, index += subGroupLength));
				}
				return newArray;
			},
			choiceButton(e){ 
				var id = e.currentTarget.dataset.choiceid ;
				var transInf = {choice:id,templeName:this.temple.name};
				var transInfJson = JSON.stringify(transInf);
				this.transInfJson = transInfJson

				uni.navigateTo({
				    url: '../bless/bless?transInfJson=' + transInfJson
				});
			},
			
			// 按照id获取寺庙信息
			getData(tId) {
				var _this = this
				_this.$http.Api_C.templeById(1, [], tId, function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.temple.name = rep[0].title 
					}			
					else {
						console.log(err)
					}
				})
			}
		},
		onLoad(data) {
			let _this = this
			if (data.tName) {
				//_this.getTempleInfoById(data.tId)
				_this.temple.name = data.tName
			}
	
			/* uni.setNavigationBarTitle({
				title: this.temple.name,
			}); */
			this.swiper = this.swiperGroup(this.temple.choice,this.subGroupLength)
			
			// 按照寺庙id获取寺庙详细信息
			//_this.getData(1)
		}
		
	}
</script>

<style lang="scss" scoped>

	page{
		-webkit-perspective: 1000;
		-webkit-backface-visibility: hidden;
		-webkit-transform-style: preserve-3d;
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
		background: #f6f6f6;
	}
	
	.videoView{
		width: 100%;
		height: 400upx;
		.templeVideo{
			width: 100%;
			height: 400upx;
		}
	}
	.choiceView{
		background:  #ffffff;
		margin-top: 40upx;
		margin-left: 22upx;
		margin-right: 22upx;
		height: 250upx;
		width: 706upx;
		.swiperView{
			height: 160upx;
			width: 100%;
			padding-top: 40upx;
			.swiperItem{
				width: 65upx;
				height: 70upx;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				.oneChoice{
					display: flex;
					flex-direction: column;
					align-items: center;
					
					.swiperImg{
						width: 80upx;
						height: 80upx;
					}
					.fiveTitle{
						font-size: 30upx;
						font-weight: 600;
						color: black;
					}
				}
			}
			
		}
	}
	.introduceView{
		background:  #ffffff;
		margin-top: 15upx;
		margin-left: 22upx;
		width: 705upx;
		height: 510upx;
		border-radius: 18upx;
		.introduceText{
			padding-top: 15upx;
			margin-left: 22upx;
			margin-right: 220upx;
			width: 670upx;
			height: 408upx;
			text-indent: 2em;
			color: #868686;
			font-size: 15px;
			font-weight: 500;
		}
	}
	// 定位
	.flex-row-wrap {
		display: -webkit-flex;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.flex-col-wrap {
		display: -webkit-flex;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}
	
	.flex-col-nowrap {
		display: -webkit-flex;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
	}
	
	.flex-center {
		justify-content: center;
		align-items: center;
	}
</style>
