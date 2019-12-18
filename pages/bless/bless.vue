<template>
	<view>
		<view class="swiperView" >
			<view class="swiper">
				<image class="templeImg" :src="temple.img"></image>
			</view>
			<!-- 祈福场景 -->
			<view class="fo-display">
				<!-- 光圈 -->
				<!-- <view class="light-view">
					<image class="light-img" style="background-size: 50% 50%;background: no-repeat;"></image>
				</view> -->
				<!-- 莲花 -->
				<view class="lutos-left-view">
					<image class="lutos-left" src="../../static/temple/lotus.png"></image>
					<!-- 直接在keyframes写background-size不奏效（safari） -->
					<image class="lutos-light-left" style="background-size: 100% 100%;opacity: 0.4;"></image>
				</view>
				<view class="lutos-right-view">
					<image class="lutos-right" src="../../static/temple/lotus.png"></image>
					<image class="lutos-light-right" style="background-size: 100% 100%;opacity: 0.4;"></image>
				</view>
				<!-- 佛像+椅子 -->
				<view id="fo-img" class="fo-view">
					<image class="fo-img" :src="choiceImg"></image>
				</view>				
				<!-- 花 -->
				<view id="flower" :style="opStyle[2]">
					<image class="flowerLeft" src="../../static/temple/toFlower.png" mode="aspectFit"></image>
					<image class="flowerRight" src="../../static/temple/toFlower.png" mode="aspectFit"></image>
				</view>
				
				<!-- 油 -->
				<view id="oil" :style="opStyle[0]">
					<image class="candleImgleft" src="../../static/temple/candle.png" mode="aspectFit"></image>
					<image class="candleImgRight" src="../../static/temple/candle.png" mode="aspectFit"></image>
				</view>
				<!-- 香 -->
				<image id="xiang" :style="opStyle[1]" class="xiangImg" src="../../static/temple/toXiang.png" mode="aspectFit"></image>
				<!-- 果 -->
				<view id="fruit" :style="opStyle[3]">
					<image class="fruitRight" src="../../static/temple/fruitRight.png" mode="aspectFit"></image>
					<image class="fruitLeft" src="../../static/temple/fruitLeft.png" mode="aspectFit"></image>
				</view>

			</view>
			<view class="choiceView">
				<view class="Title">
					<image class="lotusImg" src="../../static/temple/qiyuan_logo.png" mode="aspectFit"></image>
					<text class="titleText1">我的祈愿</text>
					<text class="titleText2">(选择供奉神明)</text>
				</view>

				<view class="choiceline flex-row-wrap">
					<view class="choiceline-item flex-col-wrap flex-center" v-for="(choicItem, index) in temple.choice" :id="index" @click="choiceButton" :key="index">
						<image class="choiceImg" :src="choicItem.img" mode="aspectFit"></image>
						<view class="choice-font" :class="state[index]">{{choicItem.title}}</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="BlessContentView">
			<view class="Title">
				<image class="lotusImg" src="../../static/temple/blessTitleLogo.png" mode="aspectFit"></image>
				<text class="titleText1">许愿选择</text>
			</view>
			<scroll-view class="blessChoice" scroll-y="true" :show-scrollbar="true">
				<view v-for="(item,index) in temple.blessChoiceText" :id="index" @click="blessButton(index)" :key="index">
					<button class="blessButton overflow-manage" :class="index === txtIndex ? 'changeTextStyle' : 'unchangeTextStyle'">{{item}}</button>
				</view>
			</scroll-view>
	
		    <textarea class="textAreaView" v-model="text" placeholder="点击此处输入许愿内容" ></textarea>
		</view>
		
		<view class="buttonView flex-row-wrap flex-center">
			<button class="pray-button" @click="sumbit">祈愿</button>
			<button class="pray-button" @click="sumbit">还愿</button>
		</view>
	</view>
</template>


<script>
	export default {
	    data() {
	        return {
				phoneHeight: 0,
				choiceImg:"../../static/temple/caishen.png",
				name:"",
				temple:{
					img:"../../static/temple/background.png",
					choice:[{img:"../../static/temple/you.png", title: "供油"}, 
						{img: "../../static/temple/xiang.png", title: "供香"},
						{img: "../../static/temple/hua.png", title: "供花"},
						{img: "../../static/temple/guo.png", title: "供果"}],
					
					introduce:"<p>鸡鸣寺历史可追溯至东吴的栖玄寺，寺址所在为三国时属吴国后苑之地，300年（西晋永康元年）在此倚山造室，始创道场。"+
					"东晋以后，此处被辟为廷尉署，至527年（南朝梁普通八年）梁武帝在鸡鸣埭兴建同泰寺，使这里从此真正成为佛教胜地。"+
					"1387年（明朝洪武二十年）明太祖朱元璋下令拆去旧屋，扩大规模，重建寺院。</p><p>朱元璋题额为“鸡鸣寺”。后经明宣德、成化、弘治年间扩建，院落规模宏大，占地达百余亩。"+
					"后来古寺毁于咸丰战火，虽同治年间重修，规模已大大缩小，但香火却一直旺盛不衰。</p>",
					blessChoiceText:["愿我和我的家人在这一年里平安",
					"我祈求菩萨保佑我一家人平平安安",
					"请菩萨保佑，祝愿朋友健康",
					"请求平安"]
				},
				subGroupLength : 4,
				swiper:[],
				txtIndex: -1,	// 祈福文本选择记号
				state: ["offStyle", "offStyle", "offStyle", "offStyle"],
				
				opStyle: [{opacity: 0}, {opacity: 0}, {opacity: 0}, {opacity: 0}],
				toXiang:false,
				toOil:false,
				toFlower:false,
				toFruit:false,
				text:""

			};
	    },
		methods:{ 	
			swiperGroup(array,subGroupLength){
				let index = 0;
				let newArray = [];
				while(index < array.length) {
				    newArray.push(array.slice(index, index += subGroupLength));
				}
				return newArray;
			},
			choiceButton(e){
				this.showImg(e.currentTarget.id)
				
				if(this.state[e.currentTarget.id] === "onStyle") {
					this.state[e.currentTarget.id] == "offStyle";
				} else {
					this.state[e.currentTarget.id] = "onStyle"
				}
				 
			},
			blessButton(index){
				if(index === this.txtIndex) {
					this.txtIndex = !this.txtIndex
				}else {
					this.txtIndex = index;
					console.log(this.txtIndex)
				}
				
				this.text = this.temple.blessChoiceText[index]
				
			},

			// 图片浮现
			showImg(index) {
				let _this = this
				// var oImg = document.getElementById(_this.imgId);
				var alpha = 0;                //用一个变量存储当前透明度 
				
				var timer = null;
				clearInterval(timer);　　　　//在开启一个定时器之前，先关闭已经开起的定时器
				timer = setInterval(function(){
					var speed = 0.1;                //设置透明度变化的速度
					//console.log(alpha)
					if(alpha >= 1){
						clearInterval(timer)
						return ;
					}else{
						alpha += speed;       //开始计算 递减
						_this.opStyle[index].opacity = alpha; //这里 将递减结果alpha 赋给页面的透明度 显示出来
					}
				},150);
			}
		},
		onLoad(options) {
			 // 计算屏幕剩余高度  填补剩余高度
			let _this = this;
			uni.getSystemInfo({
				success(res) {
					console.log(res.statusBarHeigh)
					console.log(res.navigationBarHeight)
					console.log(Window.windowHeight)
				}
			});
			console.log('w' + this.scrollviewHigh);
	
			this.swiper = this.swiperGroup(this.temple.choice,4)
			
			//接收temple界面传递过来的参数
			var inf = JSON.parse(options.transInfJson)
			this.name = inf.choice
			
			uni.setNavigationBarTitle({
				title: this.name,
			});
			
			
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../style/animation.css";
	page{
		-webkit-perspective: 1000;
		-webkit-backface-visibility: hidden;
		-webkit-transform-style: preserve-3d;
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
		background: #f5f5f5;
	}
	.swiperView{
		width:100%;
		height: 770upx;
		position:relative;
		.swiper{
			width: 100%;
			height: 770upx;
			position:absolute;
			.templeImg{
				 width: 100%;
				 height: 770upx;
			}
		}
		// 佛 +桌子
		.fo-img {
			width: 676upx;
			position: absolute;
			top: 120upx;
			left: 37upx;
			height: 640upx;
			z-index: 900;
			//opacity: 50;
		}
		.flowerLeft{
			position: absolute;
			top: 325upx;
		
			height: 180upx;
			width: 130upx;
			z-index: 900;
		}
		.flowerRight{
			position: absolute;
			top: 335upx;
			right: 30upx;
			height: 178upx;
			width: 130upx;
			z-index: 900;
		}
		.candleImgleft{
			position: absolute;
			top: 360upx;
			left: 115upx;
			height: 150upx;
			width: 30upx;
			z-index: 900;
		}
		.candleImgRight{
			position: absolute;
			top: 366upx;
			right: 130upx;
			height: 150upx;
			width: 30upx;
			z-index: 900;
		}
		.xiangImg{
			position: absolute;
			top: 332upx;
			left: 295upx;
			height: 200upx;
			width: 130upx;
			z-index: 900;
		}
		.fruitLeft{
			position: absolute;
			top: 350upx;
			left: 145upx;
			height: 200upx;
			width: 140upx;
			z-index: 900;
		}
		.fruitRight{
			position: absolute;
			top: 358upx;
			right: 177upx;
			height: 200upx;
			width: 140upx;
			z-index: 900;
		}
		.choiceView{
			position: absolute;
			z-index: 1000;
			top: 580upx;
			left: 22upx;
			width: 705upx;
			height: 230upx;
			border-radius: 18upx;
			background: #ffffff;
			.choiceline{
				margin-top: 25upx;
				width: 100%;
				height: 155upx;
				justify-content: space-around;
				.choiceline-item {
					flex-wrap: nowrap;
					width: 115upx;
					height: 135upx;
					font-size: 30upx;
					font-weight: 600;
					.choiceImg{
						width: 100%;
						height: 95upx;
					}
				}
				
			}
		}
	}
	.Title{
		padding-top: 25upx;
		padding-left: 25upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		height: 40upx;
		.lotusImg{
			padding-top: 0upx;
			width: 40upx;
			height: 35upx;
		}
		.titleText1{
			padding-left: 10upx;
			color: black;
			font-size: 17px;
			font-weight: 550;
		}
		.titleText2{
			padding-left: 10upx;
			color: #8d8d8d;
			font-size: 17px;
			font-weight: 500;
		}
	}
	.BlessContentView{
		padding-bottom: 27upx;
		background: #ffffff;
		height: 430upx;
		width: 705upx;
		margin-top: 60upx;
		margin-left: 22upx;
		border-radius: 18upx;
		.blessChoice{
			padding-bottom: 8upx;
			margin-top: 20upx;
			margin-left: 25upx;
			height: 150upx;
			width: 650upx;
			background: #ffe8a9;
			border-radius: 18upx;
			padding-top: 5upx;
			.blessButton{
				margin-top: 16upx;
				height: 55upx;
				width: 560upx;
				line-height: 28px;
				font-size: 15px;
				font-weight: 550;
				border-radius: 18upx;
			}
		}
		.textAreaView{
			margin-top: 20upx;
			margin-left: 25upx;
			height: 110upx;
			width: 610upx;
			background: #ffe8a9;
			border-radius: 18upx;
			color: #894b0e;
			font-size: 15px;
			font-weight: 550; 	
			padding-top: 10px;
			padding-left: 20px;
		}
	}
	
	.buttonView{
		margin-top: 20upx;
		margin-left: 22upx;
		width: 705upx;
		height: 80upx;
		margin-bottom: 10upx;
		.pray-button{
			width: 300upx;
			height: 80upx;
			background: #eeb980;
			color: #ffffff;
			font-size: 17px;
			font-weight: 700;
		}
	}
	
	// 溢出处理
	.overflow-manage {
		white-space: nowrap;
		overflow : hidden;
		text-overflow: ellipsis;
	}
	
	// 祈福选项变色
	.onStyle {
		color: #c40600;
	}
	.offStyle {
		color: #80450b;
	}
	
	// 祈福文本变色
	.changeTextStyle {
		background: #894b0e;
		color: #ffe8a9;
	}
	
	.unchangeTextStyle {
		background: #fff8e5;
		color: #894b0e;
	}
	
	
	// 佛像
	.lutos-left, .lutos-right {
		position: absolute;
		width: 172upx;
		height: 139upx;
		top: 180upx;
		z-index: 900;
	}
	
	.lutos-left {
		left: 40upx;
	}
	.lutos-right {
		right: 40upx;

	}
	
	.lutos-light-left, .lutos-light-right {
		position: absolute;
		width: 240upx;
		height: 240upx;
		top: 130upx;
		z-index: 800;
	}
	.lutos-light-left {
		left: 12upx;
	}
	.lutos-light-right {
		right: 12upx;		
	}
	
	.light-view {	
		position: absolute;
		left: 122upx;
		z-index: 700;
		width: 200upx;
		height: 200upx;
	}
	
	
	.light-img {
		margin-top: -40upx;
		animation-name: light;
		animation-duration: 0.3s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: infinite;
		animation-direction: normal;
		animation-play-state: running;
		animation-fill-mode: forwards;
		/* Safari 与 Chrome: */
		-webkit-animation-name: light;
		-webkit-animation-duration: 0.3s;
		-webkit-animation-timing-function: linear;
		-webkit-animation-delay: 0s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-direction: normal;
		-webkit-animation-play-state: running;
		-webkit-animation-fill-mode: forwards;
	}
	
	
	// @-webkit-keyframes lotus
	// {
	//     0%   {background: url(../../static/canvas/baifo_lianhua01.png) no-repeat center; }
	//     25%  {background: url(../../static/canvas/baifo_lianhua02.png) no-repeat center; }
	//     50%  {background: url(../../static/canvas/baifo_lianhua03.png) no-repeat center; }
	//     100% {background: url(../../static/canvas/baifo_lianhua04.png) no-repeat center; }
	// }
	
	.lutos-light-left, .lutos-light-right {
		animation-name: lotus;
		animation-duration: 1s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: infinite;
		animation-direction: normal;
		animation-play-state: running;
		animation-fill-mode: forwards;
		/* Safari 与 Chrome: */
		-webkit-animation-name: lotus;
		-webkit-animation-duration: 1s;
		-webkit-animation-timing-function: linear;
		-webkit-animation-delay: 0s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-direction: normal;
		-webkit-animation-play-state: running;
		-webkit-animation-fill-mode: forwards;
	}
	.light-img {
		width: 500upx;
		height: 500upx;
	}
	.lotus-img {
		width: 500upx;
		height: 500upx;
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
