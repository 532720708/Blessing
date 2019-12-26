<template>
	<!-- <view class="my">
		<view class="lazhu">
			<view class="huomiao" style="background-size: 100% 100%;"></view>
			<image class="lazhu" src="../../static/temple/candle1.png"></image>
		</view>
	</view> -->
	<view>
		<transition>
			<view class="bagua-img" style="background-size: contain;">
			</view>
		</transition>
		
		
	<!-- 	<view class="bagua-img-single" style="background-size: contain;">
		</view> -->
		
		<!-- <view class="test-img" style="background: contain;"></view> -->
		<!-- <transition>
			<view  class="my-test"></view>
		</transition>
		
		<transition>
			<view class="addCss"></view>
		</transition> -->
		
		<!-- <view class="myImg">
			
		</view>
		
		<view class="sprite"></view> -->
	</view>
	
	
</template>

<script>	
	import animations from 'create-keyframe-animation';
	export default {
		data () {
			return {
				navTitle: "乙信",
				navBackStyle: "whiteback",
				baguaImgs : [
						require("../../static/canvas/bagua/bagua0001.png"),
						require("../../static/canvas/bagua/bagua0002.png"),
						require("../../static/canvas/bagua/bagua0003.png"),
						require("../../static/canvas/bagua/bagua0004.png"),
						require("../../static/canvas/bagua/bagua0005.png"),
						require("../../static/canvas/bagua/bagua0006.png"),
						require("../../static/canvas/bagua/bagua0007.png"),
						require("../../static/canvas/bagua/bagua0008.png"),
						require("../../static/canvas/bagua/bagua0009.png"),
						require("../../static/canvas/bagua/bagua0010.png"),
						require("../../static/canvas/bagua/bagua0011.png"),
						require("../../static/canvas/bagua/bagua0012.png"),
						require("../../static/canvas/bagua/bagua0013.png"),
						require("../../static/canvas/bagua/bagua0014.png"),
						require("../../static/canvas/bagua/bagua0015.png"),
						require("../../static/canvas/bagua/bagua0016.png"),
						require("../../static/canvas/bagua/bagua0017.png"),
						require("../../static/canvas/bagua/bagua0018.png"),
						require("../../static/canvas/bagua/bagua0019.png"),
						require("../../static/canvas/bagua/bagua0020.png"),
						require("../../static/canvas/bagua/bagua0021.png"),
						require("../../static/canvas/bagua/bagua0022.png"),
						require("../../static/canvas/bagua/bagua0023.png"),
						require("../../static/canvas/bagua/bagua0024.png"),
						require("../../static/canvas/bagua/bagua0025.png"),
						require("../../static/canvas/bagua/bagua0026.png"),
						require("../../static/canvas/bagua/bagua0027.png"),
						require("../../static/canvas/bagua/bagua0028.png"),
						require("../../static/canvas/bagua/bagua0029.png"),
						require("../../static/canvas/bagua/bagua0030.png"),
						require("../../static/canvas/bagua/bagua0031.png"),
						require("../../static/canvas/bagua/bagua0032.png"),
						require("../../static/canvas/bagua/bagua0033.png"),
						require("../../static/canvas/bagua/bagua0034.png"),
						require("../../static/canvas/bagua/bagua0035.png"),
						require("../../static/canvas/bagua/bagua0036.png"),
						require("../../static/canvas/bagua/bagua0037.png"),
						require("../../static/canvas/bagua/bagua0038.png"),
						require("../../static/canvas/bagua/bagua0039.png"),
						require("../../static/canvas/bagua/bagua0040.png"),
						require("../../static/canvas/bagua/bagua0040.png"),
					],
					count:0
				// baguaImgs: [
				// 		`url("../../static/canvas/bagua/bagua0001.png")`,
				// 		`url("../../static/canvas/bagua/bagua0002.png")`,
				// 		`url("../../static/canvas/bagua/bagua0003.png")`,
				// 		`url("../../static/canvas/bagua/bagua0004.png")`,
				// 		url("../../static/canvas/bagua/bagua0005.png"),
				// 		url("../../static/canvas/bagua/bagua0006.png"),
				// 		url("../../static/canvas/bagua/bagua0007.png"),
				// 		url("../../static/canvas/bagua/bagua0008.png"),
				// 		url("../../static/canvas/bagua/bagua0009.png"),
				// 		url("../../static/canvas/bagua/bagua0010.png"),
				// 		url("../../static/canvas/bagua/bagua0011.png"),
				// 		url("../../static/canvas/bagua/bagua0012.png"),
				// 		url("../../static/canvas/bagua/bagua0013.png"),
				// 		url("../../static/canvas/bagua/bagua0014.png"),
				// 		url("../../static/canvas/bagua/bagua0015.png"),
				// 		url("../../static/canvas/bagua/bagua0016.png"),
				// 		url("../../static/canvas/bagua/bagua0017.png"),
				// 		url("../../static/canvas/bagua/bagua0018.png"),
				// 		url("../../static/canvas/bagua/bagua0019.png"),
				// 		url("../../static/canvas/bagua/bagua0020.png"),
				// 		url("../../static/canvas/bagua/bagua0021.png"),
				// 		url("../../static/canvas/bagua/bagua0022.png"),
				// 		url("../../static/canvas/bagua/bagua0023.png"),
				// 		url("../../static/canvas/bagua/bagua0024.png"),
				// 		url("../../static/canvas/bagua/bagua0025.png"),
				// 		url("../../static/canvas/bagua/bagua0026.png"),
				// 		url("../../static/canvas/bagua/bagua0027.png"),
				// 		url("../../static/canvas/bagua/bagua0028.png"),
				// 		url("../../static/canvas/bagua/bagua0029.png"),
				// 		url("../../static/canvas/bagua/bagua0030.png"),
				// 		url("../../static/canvas/bagua/bagua0031.png"),
				// 		url("../../static/canvas/bagua/bagua0032.png"),
				// 		url("../../static/canvas/bagua/bagua0033.png"),
				// 		url("../../static/canvas/bagua/bagua0034.png"),
				// 		url("../../static/canvas/bagua/bagua0035.png"),
				// 		url("../../static/canvas/bagua/bagua0036.png"),
				// 		url("../../static/canvas/bagua/bagua0037.png"),
				// 		url("../../static/canvas/bagua/bagua0038.png"),
				// 		url("../../static/canvas/bagua/bagua0039.png"),
				// 		url("../../static/canvas/bagua/bagua0040.png"),
				// 		url("../../static/canvas/bagua/bagua0040.png"),
				// 	]
			}
		},
		mounted() {
			
			// this.loading().then(res => {
			// 	console.log(res)
			// 	if(res) {
			// 		// 动态添加动画样式
			// 		this.addAnimation()
			// 		
			// 	}
			// })

			this.loading()
			//console.log(this.count)
			//this.addAnimation()
			
			
		},
		watch: {
			count: function(val) {
			  // console.log(val)
			  if (val === 40) {
				// 图片加载完成后跳转页面
				//this.$router.push({path: 'cover'})
				this.addAnimation()
				console.log(this.count)
				console.log("加载完毕")
			  }
			}
		},
		onLoad() {
			
		},
		methods:{
			loading() {
				var imgs = this.baguaImgs
				for(let img of imgs) {
					let i = new Image();
					i.src = img
					i.onload = () => {
						console.log("加载")
						this.count ++
					}
				}
				
				return true
					
			},
			
			// 动态增加动画帧
			addAnimation() {
				// 单张40帧旋转
				for(var i = 0; i <= 40; i++) {
					var dg = i * 9 
					var percent = i * 2.5 
					
					//动态添加规则,styleSheets[0]表示style样式
					var run = `@keyframes mymove {` + percent + `% {background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; 
								background-size: contain; -webkit-transform: rotate(` + dg + `deg); -moz-transform: rotate(`+ dg + `deg); -ms-transform: rotate(`+ dg + `deg);
								-o-transform: rotate(` + dg + `deg); transform: rotate(` + dg + `deg);}}`
					var run_webkit = `-webkit-@keyframes mymove {` + percent + `% {background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
								background-size: contain; -webkit-transform: rotate(` + dg + `deg); -moz-transform: rotate(`+ dg + `deg); -ms-transform: rotate(`+ dg + `deg);
								-o-transform: rotate(` + dg + `deg); transform: rotate(` + dg + `deg);}}`
					this.addKeyframe(run)
					this.addKeyframe(run_webkit)
				}
				
				// 40张40张循环播放
				for(var i = 0; i <= 40; i++) {
					var percent = i * 2.5 
					var imgUrl = i < 9 ? "0" + (i+1) : i == 40 ? 40 : (i+1)
					
					//var imgUrl = "0" + (i % 2+1)
					
					//动态添加规则,styleSheets[0]表示style样式
					var run = `@keyframes bagua-injs {` + percent + `% {background-image: url(../../static/canvas/bagua/bagua00` + imgUrl + `.png) no-repeat center; 
								background-size: contain;}}`
					var run_webkit = `-webkit-@keyframes bagua-injs  {` + percent + `% {background-image: url(../../static/canvas/bagua/bagua00` + imgUrl + `.png) no-repeat center; 
								background-size: contain;}}`
					
					this.addKeyframe(run)
					this.addKeyframe(run_webkit)
					
				}
				
				
				//删除规则
				// setTimeout(function(){
				// 	 delCSSRule(document.styleSheets[0]);
				// 	 divNode.parentNode.removeChild(divNode);
				// 	 for(var i=0; i < goodsListButton.length; i++){
				// 		goodsListButton[i].disabled = false; 
				// 	 }
				// },1000)
			},
			
			//添加css规则
			addCSSRule(sheet, selector, rules, index) {
				if("insertRule" in sheet) {
					sheet.insertRule(selector + "{" + rules + "}", index);
				}else if("addRule" in sheet) {
					sheet.addRule(selector, rules, index);
				}
			},
			
			//删除CSS规则
			delCSSRule(sheet){
			  sheet.deleteRule(0)
			},
			
			// @keyframe不能用insertRule,采取下面方法
			addKeyframe(run) {
				var runKeyframe = run
				
				var style = document.createElement('style');
				style.type = 'text/css';
				style.innerHTML = runKeyframe;
				document.getElementsByTagName('head')[0].appendChild(style);
				this.stylesheet = document.styleSheets[document.styleSheets.length-1];				
				try {
				    this.stylesheet.insertRule( rule , this.stylesheet.rules.length);
				} catch (e) {
				};
			},
			
		},

		onLoad() {
			
		}
	}
</script>

<style lang="scss">
	page {
		//background: #000000;
	}
	
	.sprite {
		//display: block;
		width: 250px;
		height: 250px;
		background-image: url(../../static/canvas/css_sprites.png);
		background-repeat: no-repeat;
		background-position: -750px -1250px;
		//background: #007AFF;
		//background-size: contain;
		
	}
	
	@keyframes myimg {
		0%   {transform: translate3d(-0px,-0px, 0);}
		50%  {transform: translate3d(-250px,-0px, 0); }
		100%  {transform: translate3d(-500px,-0px, 0);}
		// 60%  {transform: translate3d(-1000px,-1250px, 0);background-size: contain;}
		// 100%  {transform: translate3d(-1000px,-1250px, 0);background-size: contain;}
	}
	@-webkit-keyframes myimg {
		0%   {transform: translate3d(-0px,-0px, 0);}
		50%  {transform: translate3d(-250px,-0px, 0); }
		100%  {transform: translate3d(-500px,-1250px, 0);}
		//60%  {transform: translate3d(-1000px,-1250px, 0);background-size: contain;}
		//100%  {transform: translate3d(-1000px,-1250px, 0);background-size: contain;}
	}
	
	// @keyframes myimg
	// {
	//     0%   { transform: translate3d(-0px,-0px, 0); background-size: contain; }
	//     2.5%  {transform: translate3d(-250px,-0px, 0); background-size: contain;}
	//     5%  {transform: translate3d(-750px,-1250px, 0); background-size: contain;}
	//     7.5%  {transform: translate3d(-1000px,-1250px, 0); background-size: contain;}
	//     10%  {transform: translate3d(-1250px,-1250px, 0); background-size: contain;}
	//     12.5%  {transform: translate3d(-1500px,-0px, 0); background-size: contain;}
	//     15%  {transform: translate3d(-0px,-250px, 0); background-size: contain;}
	//     17.5%  {transform: translate3d(-250px,-250px, 0); background-size: contain;}
	//     20%  {transform: translate3d(-500px,-0px, 0); background-size: contain;}
	//     22.5%  {transform: translate3d(-500px,-250px, 0); background-size: contain;}
	//     25%  {transform: translate3d(-0px,-500px, 0); background-size: contain;}
	//     27.5%  {transform: translate3d(-250px,-500px, 0);  background-size: contain;}
	//     30%  {transform: translate3d(-500px,-500px, 0);  background-size: contain;}
	//     32.5%  {transform: translate3d(-750px,-0px, 0);  background-size: contain;}
	//     35%  {transform: translate3d(-750px,-250px, 0);  background-size: contain;}
	//     37.5%  {transform: translate3d(-1500px,-250px, 0);  background-size: contain;}
	//     40%  {transform: translate3d(-750px,-500px, 0);  background-size: contain;}
	//     42.5%  {transform: translate3d(-0px,-750px, 0);  background-size: contain;}
	//     45%  {transform: translate3d(-250px,-750px, 0);  background-size: contain;}
	//     47.5%  {transform: translate3d(-500px,-750px, 0);  background-size: contain;}
	//     50%  {transform: translate3d(-750px,-750px, 0);  background-size: contain;}
	//     52.5%  {transform: translate3d(-1000px,-0px, 0);  background-size: contain;}
	//     55%  {transform: translate3d(-1000px,-250px, 0);  background-size: contain;}
	//     57.5%  {transform: translate3d(-1000px,-500px, 0);  background-size: contain;}
	//     60%  {transform: translate3d(-1000px,-750px, 0);  background-size: contain;}
	//     62.5%  {transform: translate3d(-0px,-1000px, 0);  background-size: contain;}
	//     65%  {transform: translate3d(-250px,-1000px, 0);  background-size: contain;}
	//     67.5%  {transform: translate3d(-500px,-1000px, 0);  background-size: contain;}
	//     70%  {transform: translate3d(-750px,-1000px, 0);  background-size: contain;}
	//     72.5%  {transform: translate3d(-1000px,-1000px, 0); background-size: contain;}
	//     75%  {transform: translate3d(-1250px,-0px, 0); background-size: contain;}
	//     77.5%  {transform: translate3d(-1250px,-250px, 0); background-size: contain;}
	//     80%  {transform: translate3d(-1250px,-500px, 0); background-size: contain;}
	//     82.5%  {transform: translate3d(-1250px,-750px, 0); background-size: contain;}
	//     85%  {transform: translate3d(-1250px,-1000px, 0); background-size: contain;}
	//     87.5%  {transform: translate3d(-0px,-1250px, 0); background-size: contain;}
	//     90%  {transform: translate3d(-1500px,-500px, 0); background-size: contain;}
	//     92.5%  {transform: translate3d(-1500px,-750px, 0); background-size: contain;}
	//     95%  {transform: translate3d(-250px,-1250px, 0); background-size: contain;}
	//     97.5%  {transform: translate3d(-500px,-1250px, 0); background-size: contain;}
	//     100%  {transform: translate3d(-0px,-0px, 0); background-size: contain;}
	// }
	// @-webkit-keyframes myimg {
	// 	0%   { transform: translate3d(-0px,-0px, 0); background-size: contain; }
	// 	2.5%  {transform: translate3d(-250px,-0px, 0); background-size: contain;}
	// 	5%  {transform: translate3d(-750px,-1250px, 0); background-size: contain;}
	// 	7.5%  {transform: translate3d(-1000px,-1250px, 0); background-size: contain;}
	// 	10%  {transform: translate3d(-1250px,-1250px, 0); background-size: contain;}
	// 	12.5%  {transform: translate3d(-1500px,-0px, 0); background-size: contain;}
	// 	15%  {transform: translate3d(-0px,-250px, 0); background-size: contain;}
	// 	17.5%  {transform: translate3d(-250px,-250px, 0); background-size: contain;}
	// 	20%  {transform: translate3d(-500px,-0px, 0); background-size: contain;}
	// 	22.5%  {transform: translate3d(-500px,-250px, 0); background-size: contain;}
	// 	25%  {transform: translate3d(-0px,-500px, 0); background-size: contain;}
	// 	27.5%  {transform: translate3d(-250px,-500px, 0);  background-size: contain;}
	// 	30%  {transform: translate3d(-500px,-500px, 0);  background-size: contain;}
	// 	32.5%  {transform: translate3d(-750px,-0px, 0);  background-size: contain;}
	// 	35%  {transform: translate3d(-750px,-250px, 0);  background-size: contain;}
	// 	37.5%  {transform: translate3d(-1500px,-250px, 0);  background-size: contain;}
	// 	40%  {transform: translate3d(-750px,-500px, 0);  background-size: contain;}
	// 	42.5%  {transform: translate3d(-0px,-750px, 0);  background-size: contain;}
	// 	45%  {transform: translate3d(-250px,-750px, 0);  background-size: contain;}
	// 	47.5%  {transform: translate3d(-500px,-750px, 0);  background-size: contain;}
	// 	50%  {transform: translate3d(-750px,-750px, 0);  background-size: contain;}
	// 	52.5%  {transform: translate3d(-1000px,-0px, 0);  background-size: contain;}
	// 	55%  {transform: translate3d(-1000px,-250px, 0);  background-size: contain;}
	// 	57.5%  {transform: translate3d(-1000px,-500px, 0);  background-size: contain;}
	// 	60%  {transform: translate3d(-1000px,-750px, 0);  background-size: contain;}
	// 	62.5%  {transform: translate3d(-0px,-1000px, 0);  background-size: contain;}
	// 	65%  {transform: translate3d(-250px,-1000px, 0);  background-size: contain;}
	// 	67.5%  {transform: translate3d(-500px,-1000px, 0);  background-size: contain;}
	// 	70%  {transform: translate3d(-750px,-1000px, 0);  background-size: contain;}
	// 	72.5%  {transform: translate3d(-1000px,-1000px, 0); background-size: contain;}
	// 	75%  {transform: translate3d(-1250px,-0px, 0); background-size: contain;}
	// 	77.5%  {transform: translate3d(-1250px,-250px, 0); background-size: contain;}
	// 	80%  {transform: translate3d(-1250px,-500px, 0); background-size: contain;}
	// 	82.5%  {transform: translate3d(-1250px,-750px, 0); background-size: contain;}
	// 	85%  {transform: translate3d(-1250px,-1000px, 0); background-size: contain;}
	// 	87.5%  {transform: translate3d(-0px,-1250px, 0); background-size: contain;}
	// 	90%  {transform: translate3d(-1500px,-500px, 0); background-size: contain;}
	// 	92.5%  {transform: translate3d(-1500px,-750px, 0); background-size: contain;}
	// 	95%  {transform: translate3d(-250px,-1250px, 0); background-size: contain;}
	// 	97.5%  {transform: translate3d(-500px,-1250px, 0); background-size: contain;}
	// 	100%  {transform: translate3d(-0px,-0px, 0); background-size: contain;}
	// }
	
	// @keyframes myimg {
	// 	0%   {background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain; }
	// 	20%  {background: url(../../static/canvas/bagua/bagua0002.png) no-repeat center; background-size: contain;}
	// 	40%  {background: url(../../static/canvas/bagua/bagua0003.png) no-repeat center; background-size: contain;}
	// 	60%  {background: url(../../static/canvas/bagua/bagua0004.png) no-repeat center; background-size: contain;}
	// 	80%  {background: url(../../static/canvas/bagua/bagua0005.png) no-repeat center; background-size: contain;}
	// 	100%  {background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;}
	// }
	// @-webkit-keyframes myimg {
	// 	0%   {background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain; }
	// 	20%  {background: url(../../static/canvas/bagua/bagua0002.png) no-repeat center; background-size: contain;}
	// 	40%  {background: url(../../static/canvas/bagua/bagua0003.png) no-repeat center; background-size: contain;}
	// 	60%  {background: url(../../static/canvas/bagua/bagua0004.png) no-repeat center; background-size: contain;}
	// 	80%  {background: url(../../static/canvas/bagua/bagua0005.png) no-repeat center; background-size: contain;}
	// 	100%  {background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;}
	// }
	
	.myImg {
		
		overflow: hidden;
		//background: #007AFF;
		// background-image: url(../../static/canvas/css_sprites.png);
		// background-repeat: no-repeat;		
		//background-position: -10px, -10px;
		//background-size: contain;
		width: 250px;
		height: 250px;
		
		// animation-name: myimg;
		// animation-duration: 1s;
		// animation-timing-function: linear;
		// animation-delay: 0s;
		// animation-iteration-count: infinite;
		// animation-direction: normal;
		// animation-play-state: running;
		// animation-fill-mode: both;
		// /* Safari 与 Chrome: */
		// -webkit-animation-name: myimg;
		// -webkit-animation-duration: 1s;
		// -webkit-animation-timing-function: linear;
		// -webkit-animation-delay: 0s;
		// -webkit-animation-iteration-count: infinite;
		// -webkit-animation-direction: normal;
		// -webkit-animation-play-state: running;
		// -webkit-animation-fill-mode: both;
		
		
	}
	
	
	
	.myImg:after {
		content: "";
		display: block;
		width: 1890px;
		height: 1620px;
		background-image: url(../../static/canvas/css_sprites.png);
		background-repeat: no-repeat;
		background-size: contain;
		
		animation: myimg linear 3s infinite;
		//animation-timing-function: linear;
		animation-delay: 0s;
		animation-direction: normal;
		animation-play-state: running;
		animation-fill-mode: both;
		/* Safari 与 Chrome: */
		-webkit-animation: myimg linear 3s infinite;
		//-webkit-animation-timing-function: linear;
		-webkit-animation-delay: 0s;
		-webkit-animation-direction: normal;
		-webkit-animation-play-state: running;
		-webkit-animation-fill-mode: both;
	}
	
	
	
	// 测试js
	.my-test {
		animation-name: mymove; 
		animation-duration: 1.8s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: infinite;
		animation-direction: normal;
		animation-play-state: running;
		animation-fill-mode: backwards;
		/* Safari 与 Chrome: */
		-webkit-animation-name: mymove;
		-webkit-animation-duration: 1.8s;
		-webkit-animation-timing-function: linear;
		-webkit-animation-delay: 0s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-direction: normal;
		-webkit-animation-play-state: running;
		-webkit-animation-fill-mode: backwards;
		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
		background-size: contain;
		width: 250upx;
		height: 250upx;
	}
	
	
	
	
	
	@keyframes bagua
	{
	    0%   {background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain; }
	    2.5%  {background: url(../../static/canvas/bagua/bagua0002.png) no-repeat center; background-size: contain;}
	    5%  {background: url(../../static/canvas/bagua/bagua0003.png) no-repeat center; background-size: contain;}
	    7.5%  {background: url(../../static/canvas/bagua/bagua0004.png) no-repeat center; background-size: contain;}
	    10%  {background: url(../../static/canvas/bagua/bagua0005.png) no-repeat center; background-size: contain;}
	    12.5%  {background: url(../../static/canvas/bagua/bagua0006.png) no-repeat center; background-size: contain;}
	    15%  {background: url(../../static/canvas/bagua/bagua0007.png) no-repeat center; background-size: contain;}
	    17.5%  {background: url(../../static/canvas/bagua/bagua0008.png) no-repeat center; background-size: contain;}
	    20%  {background: url(../../static/canvas/bagua/bagua0009.png) no-repeat center; background-size: contain;}
	    22.5%  {background: url(../../static/canvas/bagua/bagua0010.png) no-repeat center; background-size: contain;}
	    25%  {background: url(../../static/canvas/bagua/bagua0011.png) no-repeat center; background-size: contain;}
	    27.5%  {background: url(../../static/canvas/bagua/bagua0012.png) no-repeat center; background-size: contain;}
	    30%  {background: url(../../static/canvas/bagua/bagua0013.png) no-repeat center; background-size: contain;}
	    32.5%  {background: url(../../static/canvas/bagua/bagua0014.png) no-repeat center; background-size: contain;}
	    35%  {background: url(../../static/canvas/bagua/bagua0015.png) no-repeat center; background-size: contain;}
	    37.5%  {background: url(../../static/canvas/bagua/bagua0016.png) no-repeat center; background-size: contain;}
	    40%  {background: url(../../static/canvas/bagua/bagua0017.png) no-repeat center; background-size: contain;}
	    42.5%  {background: url(../../static/canvas/bagua/bagua0018.png) no-repeat center; background-size: contain;}
	    45%  {background: url(../../static/canvas/bagua/bagua0019.png) no-repeat center; background-size: contain;}
	    47.5%  {background: url(../../static/canvas/bagua/bagua0020.png) no-repeat center; background-size: contain;}
	    50%  {background: url(../../static/canvas/bagua/bagua0021.png) no-repeat center; background-size: contain;}
	    52.5%  {background: url(../../static/canvas/bagua/bagua0022.png) no-repeat center; background-size: contain;}
	    55%  {background: url(../../static/canvas/bagua/bagua0023.png) no-repeat center; background-size: contain;}
	    57.5%  {background: url(../../static/canvas/bagua/bagua0024.png) no-repeat center; background-size: contain;}
	    60%  {background: url(../../static/canvas/bagua/bagua0025.png) no-repeat center; background-size: contain;}
	    62.5%  {background: url(../../static/canvas/bagua/bagua0026.png) no-repeat center; background-size: contain;}
	    65%  {background: url(../../static/canvas/bagua/bagua0027.png) no-repeat center; background-size: contain;}
	    67.5%  {background: url(../../static/canvas/bagua/bagua0028.png) no-repeat center; background-size: contain;}
	    70%  {background: url(../../static/canvas/bagua/bagua0029.png) no-repeat center; background-size: contain;}
	    72.5%  {background: url(../../static/canvas/bagua/bagua0030.png) no-repeat center;background-size: contain;}
	    75%  {background: url(../../static/canvas/bagua/bagua0031.png) no-repeat center;background-size: contain;}
	    77.5%  {background: url(../../static/canvas/bagua/bagua0032.png) no-repeat center;background-size: contain;}
	    80%  {background: url(../../static/canvas/bagua/bagua0033.png) no-repeat center;background-size: contain;}
	    82.5%  {background: url(../../static/canvas/bagua/bagua0034.png) no-repeat center;background-size: contain;}
	    85%  {background: url(../../static/canvas/bagua/bagua0035.png) no-repeat center;background-size: contain;}
	    87.5%  {background: url(../../static/canvas/bagua/bagua0036.png) no-repeat center;background-size: contain;}
	    90%  {background: url(../../static/canvas/bagua/bagua0037.png) no-repeat center;background-size: contain;}
	    92.5%  {background: url(../../static/canvas/bagua/bagua0038.png) no-repeat center;background-size: contain;}
	    95%  {background: url(../../static/canvas/bagua/bagua0039.png) no-repeat center;background-size: contain;}
	    97.5%  {background: url(../../static/canvas/bagua/bagua0040.png) no-repeat center;background-size: contain;}
	    100%  {background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;background-size: contain;}
	}
	@-webkit-keyframes bagua
	{
	   0%   {background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain; }
	   2.5%  {background: url(../../static/canvas/bagua/bagua0002.png) no-repeat center; background-size: contain;}
	   5%  {background: url(../../static/canvas/bagua/bagua0003.png) no-repeat center; background-size: contain;}
	   7.5%  {background: url(../../static/canvas/bagua/bagua0004.png) no-repeat center; background-size: contain;}
	   10%  {background: url(../../static/canvas/bagua/bagua0005.png) no-repeat center; background-size: contain;}
	   12.5%  {background: url(../../static/canvas/bagua/bagua0006.png) no-repeat center;}
	   15%  {background: url(../../static/canvas/bagua/bagua0007.png) no-repeat center;}
	   17.5%  {background: url(../../static/canvas/bagua/bagua0008.png) no-repeat center;}
	   20%  {background: url(../../static/canvas/bagua/bagua0009.png) no-repeat center;}
	   22.5%  {background: url(../../static/canvas/bagua/bagua0010.png) no-repeat center;}
	   25%  {background: url(../../static/canvas/bagua/bagua0011.png) no-repeat center;}
	   27.5%  {background: url(../../static/canvas/bagua/bagua0012.png) no-repeat center;}
	   30%  {background: url(../../static/canvas/bagua/bagua0013.png) no-repeat center;}
	   32.5%  {background: url(../../static/canvas/bagua/bagua0014.png) no-repeat center;}
	   35%  {background: url(../../static/canvas/bagua/bagua0015.png) no-repeat center;}
	   37.5%  {background: url(../../static/canvas/bagua/bagua0016.png) no-repeat center;}
	   40%  {background: url(../../static/canvas/bagua/bagua0017.png) no-repeat center;}
	   42.5%  {background: url(../../static/canvas/bagua/bagua0018.png) no-repeat center;}
	   45%  {background: url(../../static/canvas/bagua/bagua0019.png) no-repeat center;}
	   47.5%  {background: url(../../static/canvas/bagua/bagua0020.png) no-repeat center;}
	   50%  {background: url(../../static/canvas/bagua/bagua0021.png) no-repeat center;}
	   52.5%  {background: url(../../static/canvas/bagua/bagua0022.png) no-repeat center;}
	   55%  {background: url(../../static/canvas/bagua/bagua0023.png) no-repeat center;}
	   57.5%  {background: url(../../static/canvas/bagua/bagua0024.png) no-repeat center;}
	   60%  {background: url(../../static/canvas/bagua/bagua0025.png) no-repeat center;}
	   62.5%  {background: url(../../static/canvas/bagua/bagua0026.png) no-repeat center;}
	   65%  {background: url(../../static/canvas/bagua/bagua0027.png) no-repeat center;}
	   67.5%  {background: url(../../static/canvas/bagua/bagua0028.png) no-repeat center;}
	   70%  {background: url(../../static/canvas/bagua/bagua0029.png) no-repeat center;}
	   72.5%  {background: url(../../static/canvas/bagua/bagua0030.png) no-repeat center;}
	   75%  {background: url(../../static/canvas/bagua/bagua0031.png) no-repeat center;}
	   77.5%  {background: url(../../static/canvas/bagua/bagua0032.png) no-repeat center;}
	   80%  {background: url(../../static/canvas/bagua/bagua0033.png) no-repeat center;}
	   82.5%  {background: url(../../static/canvas/bagua/bagua0034.png) no-repeat center;}
	   85%  {background: url(../../static/canvas/bagua/bagua0035.png) no-repeat center;}
	   87.5%  {background: url(../../static/canvas/bagua/bagua0036.png) no-repeat center;}
	   90%  {background: url(../../static/canvas/bagua/bagua0037.png) no-repeat center;}
	   92.5%  {background: url(../../static/canvas/bagua/bagua0038.png) no-repeat center;}
	   95%  {background: url(../../static/canvas/bagua/bagua0039.png) no-repeat center;}
	   97.5%  {background: url(../../static/canvas/bagua/bagua0040.png) no-repeat center;}
	   100%  {background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;}
	}
	
	
	@keyframes bagua1
	{
	    0%   { background: url(../../static/canvas/css_sprites.png);transform: translate3d(-10px,-10px, 0); background-size: contain; }
	    2.5%  {transform: translate3d(-280px,-10px, 0); background-size: contain;}
	    5%  {transform: translate3d(-820px,-1360px, 0); background-size: contain;}
	    7.5%  {transform: translate3d(-1090px,-1360px, 0); background-size: contain;}
	    10%  {transform: translate3d(-1360px,-1360px, 0); background-size: contain;}
	    12.5%  {transform: translate3d(-1630px,-10px, 0); background-size: contain;}
	    15%  {transform: translate3d(-10px,-280px, 0); background-size: contain;}
	    17.5%  {transform: translate3d(-280px,-280px, 0); background-size: contain;}
	    20%  {transform: translate3d(-550px,-10px, 0); background-size: contain;}
	    22.5%  {transform: translate3d(-550px,-280px, 0); background-size: contain;}
	    25%  {transform: translate3d(-10px,-550px, 0); background-size: contain;}
	    27.5%  {transform: translate3d(-280px,-550px, 0);  background-size: contain;}
	    30%  {transform: translate3d(-550px,-550px, 0);  background-size: contain;}
	    32.5%  {transform: translate3d(-820px,-10px, 0);  background-size: contain;}
	    35%  {transform: translate3d(-820px,-280px, 0);  background-size: contain;}
	    37.5%  {transform: translate3d(-1630px,-280px, 0);  background-size: contain;}
	    40%  {transform: translate3d(-820px,-550px, 0);  background-size: contain;}
	    42.5%  {transform: translate3d(-10px,-820px, 0);  background-size: contain;}
	    45%  {transform: translate3d(-280px,-820px, 0);  background-size: contain;}
	    47.5%  {transform: translate3d(-550px,-820px, 0);  background-size: contain;}
	    50%  {transform: translate3d(-820px,-820px, 0);  background-size: contain;}
	    52.5%  {transform: translate3d(-1090px,-10px, 0);  background-size: contain;}
	    55%  {transform: translate3d(-1090px,-280px, 0);  background-size: contain;}
	    57.5%  {transform: translate3d(-1090px,-550px, 0);  background-size: contain;}
	    60%  {transform: translate3d(-1090px,-820px, 0);  background-size: contain;}
	    62.5%  {transform: translate3d(-10px,-1090px, 0);  background-size: contain;}
	    65%  {transform: translate3d(-280px,-1090px, 0);  background-size: contain;}
	    67.5%  {transform: translate3d(-550px,-1090px, 0);  background-size: contain;}
	    70%  {transform: translate3d(-820px,-1090px, 0);  background-size: contain;}
	    72.5%  {transform: translate3d(-1090px,-1090px, 0); background-size: contain;}
	    75%  {transform: translate3d(-1360px,-10px, 0); background-size: contain;}
	    77.5%  {transform: translate3d(-1360px,-280px, 0); background-size: contain;}
	    80%  {transform: translate3d(-1360px,-550px, 0); background-size: contain;}
	    82.5%  {transform: translate3d(-1360px,-820px, 0); background-size: contain;}
	    85%  {transform: translate3d(-1360px,-1090px, 0); background-size: contain;}
	    87.5%  {transform: translate3d(-10px,-1360px, 0); background-size: contain;}
	    90%  {transform: translate3d(-16300px,-550px, 0); background-size: contain;}
	    92.5%  {transform: translate3d(-1630px,-820px, 0); background-size: contain;}
	    95%  {transform: translate3d(-280px,-1360px, 0); background-size: contain;}
	    97.5%  {transform: translate3d(-550px,-1360px, 0); background-size: contain;}
	    100%  {transform: translate3d(-10px,-10px, 0); background-size: contain;}
	}
	@-webkit-keyframes bagua1
	{
	   0%   {background: url(../../static/canvas/css_sprites.png);transform: translate3d(-10px,-10px, 0); background-size: contain; }
	   2.5%  {background: url(../../static/canvas/css_sprites.png);transform: translate3d(-280px,-10px, 0); background-size: contain;}
	   5%  {transform: translate3d(-820px,-1360px, 0); background-size: contain;}
	   7.5%  {transform: translate3d(-1090px,-1360px, 0); background-size: contain;}
	   10%  {transform: translate3d(-1360px,-1360px, 0); background-size: contain;}
	   12.5%  {transform: translate3d(-1630px,-10px, 0); background-size: contain;}
	   15%  {transform: translate3d(-10px,-280px, 0); background-size: contain;}
	   17.5%  {transform: translate3d(-280px,-280px, 0); background-size: contain;}
	   20%  {transform: translate3d(-550px,-10px, 0); background-size: contain;}
	   22.5%  {transform: translate3d(-550px,-280px, 0); background-size: contain;}
	   25%  {transform: translate3d(-10px,-550px, 0); background-size: contain;}
	   27.5%  {transform: translate3d(-280px,-550px, 0);  background-size: contain;}
	   30%  {transform: translate3d(-550px,-550px, 0);  background-size: contain;}
	   32.5%  {transform: translate3d(-820px,-10px, 0);  background-size: contain;}
	   35%  {transform: translate3d(-820px,-280px, 0);  background-size: contain;}
	   37.5%  {transform: translate3d(-1630px,-280px, 0);  background-size: contain;}
	   40%  {transform: translate3d(-820px,-550px, 0);  background-size: contain;}
	   42.5%  {transform: translate3d(-10px,-820px, 0);  background-size: contain;}
	   45%  {transform: translate3d(-280px,-820px, 0);  background-size: contain;}
	   47.5%  {transform: translate3d(-550px,-820px, 0);  background-size: contain;}
	   50%  {transform: translate3d(-820px,-820px, 0);  background-size: contain;}
	   52.5%  {transform: translate3d(-1090px,-10px, 0);  background-size: contain;}
	   55%  {transform: translate3d(-1090px,-280px, 0);  background-size: contain;}
	   57.5%  {transform: translate3d(-1090px,-550px, 0);  background-size: contain;}
	   60%  {transform: translate3d(-1090px,-820px, 0);  background-size: contain;}
	   62.5%  {transform: translate3d(-10px,-1090px, 0);  background-size: contain;}
	   65%  {transform: translate3d(-280px,-1090px, 0);  background-size: contain;}
	   67.5%  {transform: translate3d(-550px,-1090px, 0);  background-size: contain;}
	   70%  {transform: translate3d(-820px,-1090px, 0);  background-size: contain;}
	   72.5%  {transform: translate3d(-1090px,-1090px, 0); background-size: contain;}
	   75%  {transform: translate3d(-1360px,-10px, 0); background-size: contain;}
	   77.5%  {transform: translate3d(-1360px,-280px, 0); background-size: contain;}
	   80%  {transform: translate3d(-1360px,-550px, 0); background-size: contain;}
	   82.5%  {transform: translate3d(-1360px,-820px, 0); background-size: contain;}
	   85%  {transform: translate3d(-1360px,-1090px, 0); background-size: contain;}
	   87.5%  {transform: translate3d(-10px,-1360px, 0); background-size: contain;}
	   90%  {transform: translate3d(-16300px,-550px, 0); background-size: contain;}
	   92.5%  {transform: translate3d(-1630px,-820px, 0); background-size: contain;}
	   95%  {transform: translate3d(-280px,-1360px, 0); background-size: contain;}
	   97.5%  {transform: translate3d(-550px,-1360px, 0); background-size: contain;}
	   100%  {transform: translate3d(-10px,-10px, 0); background-size: contain;}
	}
	
	
	
	.bagua-img {	
		animation-name: bagua;
		animation-duration: 1.8s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: infinite;
		animation-direction: normal;
		animation-play-state: running;
		animation-fill-mode: both;
		/* Safari 与 Chrome: */
		-webkit-animation-name: bagua;
		-webkit-animation-duration: 1.8s;
		-webkit-animation-timing-function: linear;
		-webkit-animation-delay: 0s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-direction: normal;
		-webkit-animation-play-state: running;
		-webkit-animation-fill-mode: both;
		//background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
		
		//background: url(../../static/canvas/css_sprites.png);
		//-webkit-transform: translate3d(-550px,-1360px, 0);
		background-size: contain;
		width: 250upx;
		height: 250upx;
	}	
	
	
	@keyframes bagua-single
	{
	    0%  {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg);
			}
		2.5%  {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
				-webkit-transform: rotate(9deg);
				-moz-transform: rotate(9deg);
				-ms-transform: rotate(9deg);
				-o-transform: rotate(9deg);
				transform: rotate(9deg);
			  }
	    5%  {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
				-webkit-transform: rotate(18deg);
				-moz-transform: rotate(18deg);
				-ms-transform: rotate(18deg);
				-o-transform: rotate(18deg);
				transform: rotate(18deg);
			}
	    7.5%  {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
				-webkit-transform: rotate(27deg);
				-moz-transform: rotate(27deg);
				-ms-transform: rotate(27deg);
				-o-transform: rotate(27deg);
				transform: rotate(27deg);
			  }
	    10%  {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
				-webkit-transform: rotate(36deg);
				-moz-transform: rotate(36deg);
				-ms-transform: rotate(36deg);
				-o-transform: rotate(36deg);
				transform: rotate(36deg);
			 }
	    12.5%  {
					background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
					-webkit-transform: rotate(45deg);
					-moz-transform: rotate(45deg);
					-ms-transform: rotate(45deg);
					-o-transform: rotate(45deg);
					transform: rotate(45deg);
			   }
	    15% {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
				-webkit-transform: rotate(54deg);
				-moz-transform: rotate(54deg);
				-ms-transform: rotate(54deg);
				-o-transform: rotate(54deg);
				transform: rotate(54deg);
			}
	    17.5%   {
					background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
					-webkit-transform: rotate(63deg);
					-moz-transform: rotate(63deg);
					-ms-transform: rotate(63deg);
					-o-transform: rotate(63deg);
					transform: rotate(63deg);
				}
	    20% {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
				-webkit-transform: rotate(72deg);
				-moz-transform: rotate(72deg);
				-ms-transform: rotate(72deg);
				-o-transform: rotate(72deg);
				transform: rotate(72deg);
			}
	    22.5%   {
					background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
					-webkit-transform: rotate(81deg);
					-moz-transform: rotate(81deg);
					-ms-transform: rotate(81deg);
					-o-transform: rotate(81deg);
					transform: rotate(81deg);
				}
	    25% {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
				-webkit-transform: rotate(90deg);
				-moz-transform: rotate(90deg);
				-ms-transform: rotate(90deg);
				-o-transform: rotate(90deg);
				transform: rotate(90deg);
			}
	    27.5%   {
					background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
					-webkit-transform: rotate(99deg);
					-moz-transform: rotate(99deg);
					-ms-transform: rotate(99deg);
					-o-transform: rotate(99deg);
					transform: rotate(99deg);
				}
	    30% {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
				-webkit-transform: rotate(108deg);
				-moz-transform: rotate(108deg);
				-ms-transform: rotate(108deg);
				-o-transform: rotate(108deg);
				transform: rotate(108deg);
			}
	    32.5%   {
					background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
					-webkit-transform: rotate(117deg);
					-moz-transform: rotate(117deg);
					-ms-transform: rotate(117deg);
					-o-transform: rotate(117deg);
					transform: rotate(117deg);
				}
	    35% {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
				-webkit-transform: rotate(126deg);
				-moz-transform: rotate(126deg);
				-ms-transform: rotate(126deg);
				-o-transform: rotate(126deg);
				transform: rotate(126deg);
			}
	    37.5%   {
					background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
					-webkit-transform: rotate(135deg);
					-moz-transform: rotate(135deg);
					-ms-transform: rotate(135deg);
					-o-transform: rotate(135deg);
					transform: rotate(135deg);
				}
	    40% {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
				-webkit-transform: rotate(144deg);
				-moz-transform: rotate(144deg);
				-ms-transform: rotate(144deg);
				-o-transform: rotate(144deg);
				transform: rotate(144deg);
			}
	    42.5%   {
					background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
					-webkit-transform: rotate(153deg);
					-moz-transform: rotate(153deg);
					-ms-transform: rotate(153deg);
					-o-transform: rotate(153deg);
					transform: rotate(153deg);
				}
	    45% {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
				-webkit-transform: rotate(162deg);
				-moz-transform: rotate(162deg);
				-ms-transform: rotate(162deg);
				-o-transform: rotate(162deg);
				transform: rotate(162deg);
			}
	    47.5%   {
					background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
					-webkit-transform: rotate(171deg);
					-moz-transform: rotate(171deg);
					-ms-transform: rotate(171deg);
					-o-transform: rotate(171deg);
					transform: rotate(171deg);
				}
	    50% {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
				-webkit-transform: rotate(180deg);
				-moz-transform: rotate(180deg);
				-ms-transform: rotate(180deg);
				-o-transform: rotate(180deg);
				transform: rotate(180deg);
			}
	    52.5%   {
					background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
					-webkit-transform: rotate(189deg);
					-moz-transform: rotate(189deg);
					-ms-transform: rotate(189deg);
					-o-transform: rotate(189deg);
					transform: rotate(189deg);
				}
	    55% {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
				-webkit-transform: rotate(198deg);
				-moz-transform: rotate(198deg);
				-ms-transform: rotate(198deg);
				-o-transform: rotate(198deg);
				transform: rotate(198deg);
			}
	    57.5%   {
					background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
					-webkit-transform: rotate(207deg);
					-moz-transform: rotate(207deg);
					-ms-transform: rotate(207deg);
					-o-transform: rotate(207deg);
					transform: rotate(207deg);
				}
	    60% {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
				-webkit-transform: rotate(216deg);
				-moz-transform: rotate(216deg);
				-ms-transform: rotate(216deg);
				-o-transform: rotate(216deg);
				transform: rotate(216deg);
			}
	    62.5%   {
					background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
					-webkit-transform: rotate(225deg);
					-moz-transform: rotate(225deg);
					-ms-transform: rotate(225deg);
					-o-transform: rotate(225deg);
					transform: rotate(225deg);
				}
	    65% {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
				-webkit-transform: rotate(234deg);
				-moz-transform: rotate(234deg);
				-ms-transform: rotate(234deg);
				-o-transform: rotate(234deg);
				transform: rotate(234deg);
			}
	    67.5%   {
					background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
					-webkit-transform: rotate(243deg);
					-moz-transform: rotate(243deg);
					-ms-transform: rotate(243deg);
					-o-transform: rotate(243deg);
					transform: rotate(243deg);
				}
	    70% {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
				-webkit-transform: rotate(252deg);
				-moz-transform: rotate(252deg);
				-ms-transform: rotate(252deg);
				-o-transform: rotate(252deg);
				transform: rotate(252deg);
			}
	    72.5%   {
					background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
					-webkit-transform: rotate(261deg);
					-moz-transform: rotate(261deg);
					-ms-transform: rotate(261deg);
					-o-transform: rotate(261deg);
					transform: rotate(261deg);
				}
	    75% {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
				-webkit-transform: rotate(270deg);
				-moz-transform: rotate(270deg);
				-ms-transform: rotate(270deg);
				-o-transform: rotate(270deg);
				transform: rotate(270deg);
			}
	    77.5%   {
					background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
					-webkit-transform: rotate(279deg);
					-moz-transform: rotate(279deg);
					-ms-transform: rotate(279deg);
					-o-transform: rotate(279deg);
					transform: rotate(279deg);
				}
	    80% {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
				-webkit-transform: rotate(288deg);
				-moz-transform: rotate(288deg);
				-ms-transform: rotate(288deg);
				-o-transform: rotate(288deg);
				transform: rotate(288deg);
			}
	    82.5%   {
					background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
					-webkit-transform: rotate(297deg);
					-moz-transform: rotate(297deg);
					-ms-transform: rotate(297deg);
					-o-transform: rotate(297deg);
					transform: rotate(297deg);
				}
	    85% {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
				-webkit-transform: rotate(306deg);
				-moz-transform: rotate(306deg);
				-ms-transform: rotate(306deg);
				-o-transform: rotate(306deg);
				transform: rotate(306deg);
			}
	    87.5%   {
					background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
					-webkit-transform: rotate(315deg);
					-moz-transform: rotate(315deg);
					-ms-transform: rotate(315deg);
					-o-transform: rotate(315deg);
					transform: rotate(315deg);
				}
	    90% {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
				-webkit-transform: rotate(324deg);
				-moz-transform: rotate(324deg);
				-ms-transform: rotate(324deg);
				-o-transform: rotate(324deg);
				transform: rotate(324deg);
			}
	    92.5%   {
					background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
					-webkit-transform: rotate(333deg);
					-moz-transform: rotate(333deg);
					-ms-transform: rotate(333deg);
					-o-transform: rotate(333deg);
					transform: rotate(333deg);
				}
	    95% {
				background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
				-webkit-transform: rotate(342deg);
				-moz-transform: rotate(342deg);
				-ms-transform: rotate(342deg);
				-o-transform: rotate(342deg);
				transform: rotate(342deg);
			}
	    97.5%   {
					background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
					-webkit-transform: rotate(351deg);
					-moz-transform: rotate(351deg);
					-ms-transform: rotate(351deg);
					-o-transform: rotate(351deg);
					transform: rotate(351deg);
				}
	    100%    {
					background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; background-size: contain;
					-webkit-transform: rotate(360deg);
					-moz-transform: rotate(360deg);
					-ms-transform: rotate(360deg);
					-o-transform: rotate(360deg);
					transform: rotate(360deg);
			    }
	}
	@-webkit-keyframes bagua-single
	{
	  0%  {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; 
	  		-webkit-transform: rotate(0deg);
	  		-moz-transform: rotate(0deg);
	  		-ms-transform: rotate(0deg);
	  		-o-transform: rotate(0deg);
	  		transform: rotate(0deg);
	  	}
	  2.5%  {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  		-webkit-transform: rotate(9deg);
	  		-moz-transform: rotate(9deg);
	  		-ms-transform: rotate(9deg);
	  		-o-transform: rotate(9deg);
	  		transform: rotate(9deg);
	  	  }
	  5%  {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  		-webkit-transform: rotate(18deg);
	  		-moz-transform: rotate(18deg);
	  		-ms-transform: rotate(18deg);
	  		-o-transform: rotate(18deg);
	  		transform: rotate(18deg);
	  	}
	  7.5%  {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  		-webkit-transform: rotate(27deg);
	  		-moz-transform: rotate(27deg);
	  		-ms-transform: rotate(27deg);
	  		-o-transform: rotate(27deg);
	  		transform: rotate(27deg);
	  	  }
	  10%  {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  		-webkit-transform: rotate(36deg);
	  		-moz-transform: rotate(36deg);
	  		-ms-transform: rotate(36deg);
	  		-o-transform: rotate(36deg);
	  		transform: rotate(36deg);
	  	 }
	  12.5%  {
	  			background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  			-webkit-transform: rotate(45deg);
	  			-moz-transform: rotate(45deg);
	  			-ms-transform: rotate(45deg);
	  			-o-transform: rotate(45deg);
	  			transform: rotate(45deg);
	  	   }
	  15% {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  		-webkit-transform: rotate(54deg);
	  		-moz-transform: rotate(54deg);
	  		-ms-transform: rotate(54deg);
	  		-o-transform: rotate(54deg);
	  		transform: rotate(54deg);
	  	}
	  17.5%   {
	  			background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  			-webkit-transform: rotate(63deg);
	  			-moz-transform: rotate(63deg);
	  			-ms-transform: rotate(63deg);
	  			-o-transform: rotate(63deg);
	  			transform: rotate(63deg);
	  		}
	  20% {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  		-webkit-transform: rotate(72deg);
	  		-moz-transform: rotate(72deg);
	  		-ms-transform: rotate(72deg);
	  		-o-transform: rotate(72deg);
	  		transform: rotate(72deg);
	  	}
	  22.5%   {
	  			background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  			-webkit-transform: rotate(81deg);
	  			-moz-transform: rotate(81deg);
	  			-ms-transform: rotate(81deg);
	  			-o-transform: rotate(81deg);
	  			transform: rotate(81deg);
	  		}
	  25% {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  		-webkit-transform: rotate(90deg);
	  		-moz-transform: rotate(90deg);
	  		-ms-transform: rotate(90deg);
	  		-o-transform: rotate(90deg);
	  		transform: rotate(90deg);
	  	}
	  27.5%   {
	  			background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  			-webkit-transform: rotate(99deg);
	  			-moz-transform: rotate(99deg);
	  			-ms-transform: rotate(99deg);
	  			-o-transform: rotate(99deg);
	  			transform: rotate(99deg);
	  		}
	  30% {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  		-webkit-transform: rotate(108deg);
	  		-moz-transform: rotate(108deg);
	  		-ms-transform: rotate(108deg);
	  		-o-transform: rotate(108deg);
	  		transform: rotate(108deg);
	  	}
	  32.5%   {
	  			background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  			-webkit-transform: rotate(117deg);
	  			-moz-transform: rotate(117deg);
	  			-ms-transform: rotate(117deg);
	  			-o-transform: rotate(117deg);
	  			transform: rotate(117deg);
	  		}
	  35% {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  		-webkit-transform: rotate(126deg);
	  		-moz-transform: rotate(126deg);
	  		-ms-transform: rotate(126deg);
	  		-o-transform: rotate(126deg);
	  		transform: rotate(126deg);
	  	}
	  37.5%   {
	  			background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  			-webkit-transform: rotate(135deg);
	  			-moz-transform: rotate(135deg);
	  			-ms-transform: rotate(135deg);
	  			-o-transform: rotate(135deg);
	  			transform: rotate(135deg);
	  		}
	  40% {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  		-webkit-transform: rotate(144deg);
	  		-moz-transform: rotate(144deg);
	  		-ms-transform: rotate(144deg);
	  		-o-transform: rotate(144deg);
	  		transform: rotate(144deg);
	  	}
	  42.5%   {
	  			background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  			-webkit-transform: rotate(153deg);
	  			-moz-transform: rotate(153deg);
	  			-ms-transform: rotate(153deg);
	  			-o-transform: rotate(153deg);
	  			transform: rotate(153deg);
	  		}
	  45% {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  		-webkit-transform: rotate(162deg);
	  		-moz-transform: rotate(162deg);
	  		-ms-transform: rotate(162deg);
	  		-o-transform: rotate(162deg);
	  		transform: rotate(162deg);
	  	}
	  47.5%   {
	  			background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  			-webkit-transform: rotate(171deg);
	  			-moz-transform: rotate(171deg);
	  			-ms-transform: rotate(171deg);
	  			-o-transform: rotate(171deg);
	  			transform: rotate(171deg);
	  		}
	  50% {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  		-webkit-transform: rotate(180deg);
	  		-moz-transform: rotate(180deg);
	  		-ms-transform: rotate(180deg);
	  		-o-transform: rotate(180deg);
	  		transform: rotate(180deg);
	  	}
	  52.5%   {
	  			background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  			-webkit-transform: rotate(189deg);
	  			-moz-transform: rotate(189deg);
	  			-ms-transform: rotate(189deg);
	  			-o-transform: rotate(189deg);
	  			transform: rotate(189deg);
	  		}
	  55% {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  		-webkit-transform: rotate(198deg);
	  		-moz-transform: rotate(198deg);
	  		-ms-transform: rotate(198deg);
	  		-o-transform: rotate(198deg);
	  		transform: rotate(198deg);
	  	}
	  57.5%   {
	  			background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  			-webkit-transform: rotate(207deg);
	  			-moz-transform: rotate(207deg);
	  			-ms-transform: rotate(207deg);
	  			-o-transform: rotate(207deg);
	  			transform: rotate(207deg);
	  		}
	  60% {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  		-webkit-transform: rotate(216deg);
	  		-moz-transform: rotate(216deg);
	  		-ms-transform: rotate(216deg);
	  		-o-transform: rotate(216deg);
	  		transform: rotate(216deg);
	  	}
	  62.5%   {
	  			background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  			-webkit-transform: rotate(225deg);
	  			-moz-transform: rotate(225deg);
	  			-ms-transform: rotate(225deg);
	  			-o-transform: rotate(225deg);
	  			transform: rotate(225deg);
	  		}
	  65% {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  		-webkit-transform: rotate(234deg);
	  		-moz-transform: rotate(234deg);
	  		-ms-transform: rotate(234deg);
	  		-o-transform: rotate(234deg);
	  		transform: rotate(234deg);
	  	}
	  67.5%   {
	  			background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  			-webkit-transform: rotate(243deg);
	  			-moz-transform: rotate(243deg);
	  			-ms-transform: rotate(243deg);
	  			-o-transform: rotate(243deg);
	  			transform: rotate(243deg);
	  		}
	  70% {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  		-webkit-transform: rotate(252deg);
	  		-moz-transform: rotate(252deg);
	  		-ms-transform: rotate(252deg);
	  		-o-transform: rotate(252deg);
	  		transform: rotate(252deg);
	  	}
	  72.5%   {
	  			background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  			-webkit-transform: rotate(261deg);
	  			-moz-transform: rotate(261deg);
	  			-ms-transform: rotate(261deg);
	  			-o-transform: rotate(261deg);
	  			transform: rotate(261deg);
	  		}
	  75% {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  		-webkit-transform: rotate(270deg);
	  		-moz-transform: rotate(270deg);
	  		-ms-transform: rotate(270deg);
	  		-o-transform: rotate(270deg);
	  		transform: rotate(270deg);
	  	}
	  77.5%   {
	  			background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  			-webkit-transform: rotate(279deg);
	  			-moz-transform: rotate(279deg);
	  			-ms-transform: rotate(279deg);
	  			-o-transform: rotate(279deg);
	  			transform: rotate(279deg);
	  		}
	  80% {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  		-webkit-transform: rotate(288deg);
	  		-moz-transform: rotate(288deg);
	  		-ms-transform: rotate(288deg);
	  		-o-transform: rotate(288deg);
	  		transform: rotate(288deg);
	  	}
	  82.5%   {
	  			background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  			-webkit-transform: rotate(297deg);
	  			-moz-transform: rotate(297deg);
	  			-ms-transform: rotate(297deg);
	  			-o-transform: rotate(297deg);
	  			transform: rotate(297deg);
	  		}
	  85% {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  		-webkit-transform: rotate(306deg);
	  		-moz-transform: rotate(306deg);
	  		-ms-transform: rotate(306deg);
	  		-o-transform: rotate(306deg);
	  		transform: rotate(306deg);
	  	}
	  87.5%   {
	  			background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  			-webkit-transform: rotate(315deg);
	  			-moz-transform: rotate(315deg);
	  			-ms-transform: rotate(315deg);
	  			-o-transform: rotate(315deg);
	  			transform: rotate(315deg);
	  		}
	  90% {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  		-webkit-transform: rotate(324deg);
	  		-moz-transform: rotate(324deg);
	  		-ms-transform: rotate(324deg);
	  		-o-transform: rotate(324deg);
	  		transform: rotate(324deg);
	  	}
	  92.5%   {
	  			background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  			-webkit-transform: rotate(333deg);
	  			-moz-transform: rotate(333deg);
	  			-ms-transform: rotate(333deg);
	  			-o-transform: rotate(333deg);
	  			transform: rotate(333deg);
	  		}
	  95% {
	  		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  		-webkit-transform: rotate(342deg);
	  		-moz-transform: rotate(342deg);
	  		-ms-transform: rotate(342deg);
	  		-o-transform: rotate(342deg);
	  		transform: rotate(342deg);
	  	}
	  97.5%   {
	  			background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  			-webkit-transform: rotate(351deg);
	  			-moz-transform: rotate(351deg);
	  			-ms-transform: rotate(351deg);
	  			-o-transform: rotate(351deg);
	  			transform: rotate(351deg);
	  		}
	  100%    {
	  			background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
	  			-webkit-transform: rotate(360deg);
	  			-moz-transform: rotate(360deg);
	  			-ms-transform: rotate(360deg);
	  			-o-transform: rotate(360deg);
	  			transform: rotate(360deg);
	  	    }
	}
	
	.bagua-img-single {
		animation-name: bagua-single;
		animation-duration: 1.8s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: infinite;
		animation-direction: normal;
		animation-play-state: running;
		animation-fill-mode: backwards;
		/* Safari 与 Chrome: */
		-webkit-animation-name: bagua-single;
		-webkit-animation-duration: 1.8s;
		-webkit-animation-timing-function: linear;
		-webkit-animation-delay: 0s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-direction: normal;
		-webkit-animation-play-state: running;
		-webkit-animation-fill-mode: backwards;
		background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
		background-size: contain;
		width: 250upx;
		height: 250upx;
	}
	
	
	
	@keyframes light
	{
	    0%   {background: url(../../static/canvas/baifo_foxiang_guangquan01.png) no-repeat center;}
	    25%  {background: url(../../static/canvas/baifo_foxiang_guangquan02.png) no-repeat center;}
	    50%  {background: url(../../static/canvas/baifo_foxiang_guangquan03.png) no-repeat center;}
	    100% {background: url(../../static/canvas/baifo_foxiang_guangquan04.png) no-repeat center;}
	}
	@-webkit-keyframes light /* Safari 与 Chrome */
	{
	    0%   {background: url(../../static/canvas/baifo_foxiang_guangquan01.png) no-repeat center;}
	    25%  {background: url(../../static/canvas/baifo_foxiang_guangquan02.png) no-repeat center;}
	    50%  {background: url(../../static/canvas/baifo_foxiang_guangquan03.png) no-repeat center;}
	    100% {background: url(../../static/canvas/baifo_foxiang_guangquan04.png) no-repeat center;}
	}
	.light-img {
		animation-name: light;
		animation-duration: 0.6s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: infinite;
		animation-direction: normal;
		animation-play-state: running;
		/* Safari 与 Chrome: */
		-webkit-animation-name: light;
		-webkit-animation-duration: 0.2s;
		-webkit-animation-timing-function: linear;
		-webkit-animation-delay: 0s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-direction: normal;
		-webkit-animation-play-state: running;
	}
	
	@keyframes lotus
	{
	    0%   {background: url(../../static/canvas/baifo_lianhua01.png) no-repeat center;}
	    25%  {background: url(../../static/canvas/baifo_lianhua02.png) no-repeat center;}
	    50%  {background: url(../../static/canvas/baifo_lianhua03.png) no-repeat center;}
	    100% {background: url(../../static/canvas/baifo_lianhua04.png) no-repeat center;}
	}
	@-webkit-keyframes lotus /* Safari 与 Chrome */
	{
	    0%   {background: url(../../static/canvas/baifo_lianhua01.png) no-repeat center;}
	    25%  {background: url(../../static/canvas/baifo_lianhua02.png) no-repeat center;}
	    50%  {background: url(../../static/canvas/baifo_lianhua03.png) no-repeat center;}
	    100% {background: url(../../static/canvas/baifo_lianhua04.png) no-repeat center;}
	}
	.lotus-img {
		animation-name: lotus;
		animation-duration: 0.8s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: infinite;
		animation-direction: normal;
		animation-play-state: running;
		/* Safari 与 Chrome: */
		-webkit-animation-name: lotus;
		-webkit-animation-duration: 0.5s;
		-webkit-animation-timing-function: linear;
		-webkit-animation-delay: 0s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-direction: normal;
		-webkit-animation-play-state: running;
	}
	.my {
		text-align: center;
		width: 750upx;
		height: 1000upx;
	}
	.light-img {
		width: 500upx;
		height: 500upx;
	}
	.lotus-img {
		width: 500upx;
		height: 500upx;
	}
	

</style>

