<template>
	<view >
			<view class="swiperView" >
				<view class="swiper">
					<image class="templeImg" :src="temple.img"></image>
				</view>
				<guangxiao class="light-view"></guangxiao>
				<!-- 祈福场景 -->
				<view style="text-align: center;width: 100%;">
					<view v-if="name == '求财'">
						<image mode="aspectFit" class="lutos-left" src="../../static/temple/qiucaiCombination.png"></image>
						<image mode="aspectFit" class="lutos-right" src="../../static/temple/qiucaiCombination.png"></image>
						<!-- <image class="foguang" src="../../static/temple/foguang.png"></image> -->
						<image class="fo-img" src="../../static/temple/qiucai.png"></image>
					</view>	
					<view v-if="name == '求子'">
						<image mode="aspectFit" class="lutos-left" src="../../static/temple/qiuziCombination.png"></image>
						<image mode="aspectFit" class="lutos-right" src="../../static/temple/qiuziCombination.png"></image>
						<image class="foguang qiuzifoguang" src="../../static/temple/foguang.png"></image>
						<image class="fo-img" src="../../static/temple/qiuzi.png"></image>
					</view>	
					<view v-if="name == '求姻缘'">
						<image mode="aspectFit" class="lutos-left" src="../../static/temple/qiuyinyuanCombination.png"></image>
						<image mode="aspectFit" class="lutos-right" src="../../static/temple/qiuyinyuanCombination.png"></image>
						<!-- <image class="foguang" src="../../static/temple/foguang.png"></image> -->
						<image class="fo-img" src="../../static/temple/qiuyinyuan.png"></image>
					</view>	
					<view v-if="name == '求平安'">
						<image mode="aspectFit" class="lutos-left" src="../../static/temple/qiuziCombination.png"></image>
						<image mode="aspectFit" class="lutos-right" src="../../static/temple/qiuziCombination.png"></image>
						<!-- <image class="foguang qiupinganfoguang" src="../../static/temple/foguang.png"></image> -->
						<image class="fo-img" src="../../static/temple/qiupingan.png"></image>
					</view>	
					<view v-if="name == '求学业'">
						<!-- <image mode="aspectFit" class="lutos-left" src="../../static/temple/qiuxueyeCombination.png"></image>
						<image mode="aspectFit" class="lutos-right" src="../../static/temple/qiuxueyeCombination.png"></image> -->
						<bagua class="bagua-left"></bagua>
						<!-- <image class="bagua-left" mode="aspectFit" src="../../static/canvas/bagua/bagua0001.gif"></image> -->
						<bagua class="bagua-right"></bagua>
						<!-- <image class="foguang qiuxueyefoguang" src="../../static/temple/foguang.png"></image> -->
						<image class="fo-img" src="../../static/temple/qiuxueye.png"></image>
					</view>	
					<!-- 椅子 -->
					<view>
						<image class="table" src="../../static/temple/table.png"></image>
					</view>			
					<!-- 花 -->
					<view id="flower" :style="opStyle[2]">
						<image class="flowerLeft" src="../../static/temple/flower.png" mode="aspectFit"></image>
						<image class="flowerRight" src="../../static/temple/flower.png" mode="aspectFit"></image>
					</view>
					
					<!-- 油 -->
					<view id="oil" :style="opStyle[0]">
						<image class="candleImgleft" src="../../static/temple/lazhu.png" mode="aspectFit"></image>
						<image class="candleImgRight" src="../../static/temple/lazhu.png" mode="aspectFit"></image>
					</view>
					<!-- 香 -->
					<image id="xiang" :style="opStyle[1]" class="xiangImg" src="../../static/temple/xiang.png" mode="aspectFit"></image>
					<!-- 果 -->
					<view id="fruit" :style="opStyle[3]">
						<image class="fruitRight" src="../../static/temple/fruitRight.png" mode="aspectFit"></image>
						<image class="fruitLeft" src="../../static/temple/fruitLeft.png" mode="aspectFit"></image>
					</view>
			
				</view>
				<view class="choiceView" v-if="!showRalizeBlessing">
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
			
			<view class="BlessContentView" v-if="!showRalizeBlessing">
				<view class="Title">
					<image class="lotusImg" src="../../static/temple/blessTitleLogo.png" mode="aspectFit"></image>
					<text class="titleText1">许愿选择</text>
				</view>
				<scroll-view class="blessChoice" scroll-y="true" show-scroller="true">
					<view v-for="(item,index) in temple.blessChoiceText" :id="index" @click="blessButton(index)" :key="index">
						<button class="blessButton overflow-manage" :class="index === txtIndex ? 'changeTextStyle' : 'unchangeTextStyle'">{{item}}</button>
					</view>
				</scroll-view>
				
			    <textarea class="textAreaView" v-model="text" placeholder="点击此处输入许愿内容" ></textarea>
			</view>
			
			<view class="buttonView flex-row-wrap flex-center" v-if="!showRalizeBlessing">
				<button class="pray-button" @click="sumbit">祈愿</button>
				<button class="pray-button" @click="realizeBlessingButton">还愿</button>
			</view>
			<view v-if="showRalizeBlessing" class="realizeBlessingView">
				<view class="recordTitleView">
					<text class="titleText1">许愿记录</text>
				</view>
				<view class="recordsView">
					<checkbox-group @change="checkboxChanged">
						<label v-for="item in blessContent">
							<view class="aRecordView">
								<view class="aColumn">
									<view>
										<image class="dot" src="../../static/temple/dot.png"></image>
										<text class="textTitle">许愿日期</text>
									</view>	
									<text class="textContent">{{item.blessingData}}</text>
									<view>
										<image class="dot" src="../../static/temple/dot.png"></image>
										<text class="textTitle">还愿日期</text>
									</view>
									<text v-if="!item.realizeData == ''" class="textContent">{{item.realizeData}}</text>
									<text v-else class="textContent specialText">尚未还愿</text>
								</view>
								<view>
									<image class="line" src="../../static/temple/line.png"></image>
								</view>
								<view class="aColumn secondColumn">
									<view>
										<image class="dot" src="../../static/temple/dot.png"></image>
										<text class="textTitle">许愿内容</text>
									</view>	
									<text class="textContent overflow-manage-3">{{item.content}}</text>
								</view>
								<view>
									<image class="line" src="../../static/temple/line.png"></image>
								</view>
								<view class="checkbox">
									<checkbox :value="item.content" :checked="item.isSelcted"/>
								</view>
								
							</view>
						</label>
					</checkbox-group>
				</view>
				<view class="buttonView">
					<button class="aButton selectedButton" @click="selectAll" >勾选全部</button>
					<button class="aButton selectedButton" @click="cancelSelected">取消勾选全部</button>
					<button class="aButton buttonRealize" @click="buttonRealize">还愿</button>
				</view>	
			</view>
	</view>
</template>


<script>
	export default {
	    data() {
	        return {
				phoneHeight: 0,
				name:"",
				blessContent:[{blessingData:"2019-12-22 5:50",realizeData:"2019-12-22 5:50",content:"幸福美满",isSelcted:false},
				{blessingData:"2019-12-22 13:50",realizeData:"2019-12-22 5:50",content:"早生贵子",isSelcted:false},
				{blessingData:"2019-12-22 15:50",realizeData:"",
				content:"幸福美满早生贵子早生贵子早生贵子早早生贵子早生贵子早生贵子早生贵子",isSelcted:false}],
				temple:{
					img:"../../static/temple/background.png",
					choice:[{img:"../../static/temple/gongYou.png", title: "供油"}, 
						{img: "../../static/temple/gongXiang.png", title: "供香"},
						{img: "../../static/temple/gongHua.png", title: "供花"},
						{img: "../../static/temple/gongGuo.png", title: "供果"}],
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
				/* toXiang:false,
				toOil:false,
				toFlower:false,
				toFruit:false, */
				showRalizeBlessing:false,
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
			},
			//判断祈福的项目
			/* selectedBlessing(choice){
				switch(choice)
				{
				    case "求姻缘":
				        this.choiceImg = "../../static/temple/qiuyinyuan.png"
						this.blessingCombination = "../../static/temple/qiuyinyuanCombination.png"
				        break;
				    case "求财":
				       this.choiceImg = "../../static/temple/qiucai.png"
					   this.blessingCombination = "../../static/temple/qiucaiCombination.png"
				       break;
					case "求子":
					   this.choiceImg = "../../static/temple/qiuzi.png"
					   this.blessingCombination = "../../static/temple/qiuziCombination.png"
					   break;
					case "求学业":
					   this.choiceImg = "../../static/temple/qiuxueye.png"
					   this.blessingCombination = "../../static/temple/qiuxueyeCombination.png"
					   break;
					case "求平安":
					   this.choiceImg = "../../static/temple/qiupingan.png"
					   this.blessingCombination = "../../static/temple/qiuziCombination.png"
					   break;   
				}
			}, */
			//还愿时显示所有供品和屏蔽一些组件
			realizeBlessingButton(){
				this.showRalizeBlessing = true;
				for(var i = 0 ; i < 4 ; i ++){
					this.showImg(i);
				}
			},
			//全选
			selectAll(){
				this.blessContent.forEach(function(item){
					item.isSelcted = true
				})
			},
			//取消选择
			cancelSelected(){
				console.log("cancel")
				this.blessContent.forEach(function(item){
					item.isSelcted = false;
				})
			
			},
			checkboxChanged(e){
				let   values = e.detail.value;
				  for (var i = 0, lenI = this.blessContent.length; i < lenI; ++i) {
				        const item = this.blessContent[i]
				        if(values.includes(item.content)){
				            item.isSelcted = true;
				        }else{
				            item.isSelcted = false;
				         }
				    }
			},
			//还愿按钮
			buttonRealize(){
				let indicator = false;
				this.blessContent.forEach(function(item){
					if(item.isSelcted == true){
						console.log(item.content)
						indicator = true;
					}
				})
				if(indicator == false){
					uni.showModal({
						showCancel: false ,
					    title: '提示',
					    content: '您还没有选择需要的还愿'
					});
				}else{
					this.showRalizeBlessing = false;
				}
				
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
			/* this.selectedBlessing(inf.choice); */
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
	.realizeBlessingView{
		background:#ffffff;
		width: 705upx;
		right: 22upx;
		height: 660upx;
		position: absolute;
		top: 580upx;
		z-index: 900;
		border-radius: 10upx;
		.recordTitleView{
			margin-top: 20upx;
			margin-left: 10upx;
		}
		.recordsView{
			overflow: auto;
			margin-left: 25upx;
			width: 650upx;
			height: 450upx;
			background: #ffffff;
			.aRecordView{
				height: 180upx;
				width: 650upx;
				background: #ffe8a9;
				margin-top: 10upx;
				border-radius: 10upx;
				display: flex;
				flex-direction: row;
				.aColumn{
					display: flex;
					flex-direction: column;
					width: 200upx;
					height: 160upx;
					padding-left: 15upx;
					padding-top: 10upx;
					.dot{
						width: 15upx;
						height: 15upx;
						
					}
					.textTitle{
						
					     margin-left: 10upx;
						font-weight: 500;
						font-size: 17px;
						color: #97612a;
					}
					.textContent{
						margin-top: 5upx;
						font-weight: 500;
						font-size: 10px;
						color: black;
					}
					.specialText{
						margin-left: 30upx;
					}
				}
				.line{
					padding-top: 20upx;
					width: 5upx;
					height: 135upx;
				}
				.secondColumn{
					width: 345upx;
				}
				.checkbox{
					padding-top: 60upx;
					padding-left: 10upx;
				}
			}
		}
		.buttonView{
			width: 650upx;
			height: 70upx;
			display: flex;
			flex-direction: row;
			padding-top: 15upx;
			
			.aButton{
				width: 205upx;
				height: 70upx;
				background: #e7715a;
				line-height:70upx;
				font-size: 16px;
				font-weight: 500upx;
				color: #ffffff;
			}
			.buttonRealize{
				background: url(../../static/temple/button/realizeBlessing.png);
				background-size: 100% 100%;
			}
			.selectedButton{
				background: url(../../static/temple/button/selectedButton.png);
				background-size: 100% 100%;
			}
		}
	}
	.swiperView{
		width:100%;
		height: 770upx;
		position:relative;
		text-align: center;
		.swiper{
			width: 100%;
			height: 770upx;
			position:absolute;
			.templeImg{
				 width: 100%;
				 height: 770upx;
			}
		}
		// 佛像
		.fo-img {
			position: absolute;
			top: 130upx;
			z-index: 900;
			left: 237upx;
			width: 280upx;
			height: 420upx;
			background-size: contain;
		}
		.foguang{
			top:50upx;
			left: 262upx;
			position:absolute;
			z-index:800;
			height:225upx;
			width:225upx;
		}
		.qiuzifoguang{
			left:265upx;
		}
		.qiupinganfoguang{
			left:265upx;
		}
		.qiuxueyefoguang{
			left:258upx;
		}
		.table{
			position: absolute;
			top: 535upx;
			left: 30upx;
			z-index: 900;
			height: 90upx;
			width: 690upx;
		}
		.flowerLeft{
			position: absolute;
			top: 383upx;
			left: 5upx;
			height: 180upx;
			width: 130upx;
			z-index: 900;
		}
		.flowerRight{
			position: absolute;
			top: 383upx;
			right: 5upx;
			height: 178upx;
			width: 130upx;
			z-index: 900;
		}
		.candleImgleft{
			position: absolute;
			top: 388upx;
			left: 125upx;
			height: 150upx;
			width: 30upx;
			z-index: 900;
		}
		.candleImgRight{
			position: absolute;
			top: 388upx;
			right: 125upx;
			height: 150upx;
			width: 30upx;
			z-index: 900;
		}
		.xiangImg{
			position: absolute;
			top: 355upx;
			left: 313upx;
			height: 200upx;
			width: 130upx;
			z-index: 900;
		}
		.fruitLeft{
			position: absolute;
			top: 385upx;
			left: 165upx;
			height: 200upx;
			width: 140upx;
			z-index: 900;
		}
		.fruitRight{
			position: absolute;
			top: 380upx;
			right: 165upx;
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
		height: 390upx;
		width: 705upx;
		margin-top: 60upx;
		margin-left: 22upx;
		border-radius: 18upx;
		
		::-webkit-scrollbar {
		    -webkit-appearance: none;
		    width: 8px;
			heigh:4px;
		}
		
		::-webkit-scrollbar-track {
		    background-color:#894b0e;
		    border-radius: 8px;
		}
		::-webkit-scrollbar-thumb {
		    border-radius: 8px;
		    background-color: #fff8e5;
		}
		
	
		.blessChoice{
			padding-bottom: 8upx;
			margin-top: 20upx;
			margin-left: 25upx;
			height: 150upx;
			width: 650upx;
			background: #ffe8a9;
			border-radius: 18upx;
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
			color: #ffffff;
			font-size: 17px;
			font-weight: 700;
			background: url(../../static/temple/button/blessingButton.png);
			background-size: 100% 100%;
		}
	}
	
	// 溢出处理
	.overflow-manage {
		white-space: nowrap;
		overflow : hidden;
		text-overflow: ellipsis;
	}
	.overflow-manage-3 {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
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
	
	
	// 左右两边挂件
	.lutos-left, .lutos-right, .bagua-left, .bagua-right {
		position: absolute;
		width: 152upx;
		height: 118upx;
		top: 150upx;
		z-index: 900;
	}
	
	.lutos-left {
		left: 40upx;
	}
	.lutos-right {
		right: 40upx;

	}
	.bagua-left {
		left: 16upx;
	}
	.bagua-right {
		right: 80upx;
	}
	
	.light-view {	
		position: absolute;
		left: 246upx;
		top: 50upx;
		z-index: 700;
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
