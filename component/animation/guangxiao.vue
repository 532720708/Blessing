<template>
	<view>
		<transition>
			<view  class="guangxiao"></view>
		</transition>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				aniClass: ''
			}
		},
		mounted() {
			//this.addAnimation()
			// setTimeout(() => {
			// 	this.aniClass='guangxiao'
			// }, 500)
		},
		methods: {
			// 动态增加动画帧
			addAnimation() {
				// 20帧
				for(var i = 0; i <= 20; i++) {
					var imgUrl = i == 20 ? + "0001" : "000" + (parseInt(i / 5) + 1)
					var percent = i * 5
					
					//动态添加规则,styleSheets[0]表示style样式
					var run = `@keyframes guangxiaomove {` + percent + `% {background: url(../../static/canvas/guangxiao/foguang` + imgUrl + `.png) no-repeat center; 
								background-size: contain; -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); -ms-transform: rotate(0deg);
								-o-transform: rotate(0deg); transform: rotate(0deg);}}`
					var run_webkit = `-webkit-@keyframes guangxiaomove {` + percent + `% {background: url(../../static/canvas/guangxiao/foguang` + imgUrl + `.png) no-repeat center; 
								background-size: contain; -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); -ms-transform: rotate(0deg);
								-o-transform: rotate(0deg); transform: rotate(0deg);}}`
					this.addKeyframe(run)
					this.addKeyframe(run_webkit)
				}
				
				setTimeout(1000)
				var run1 = `.guangxiao {animation-name: guangxiaomove; -webkit-animation-name: guangxiaomove;}`
				this.addKeyframe(run1)
				
				// 40张40张循环播放
				// for(var i = 0; i <= 40; i++) {
				// 	var percent = i * 2.5 
				// 	var imgUrl = i < 9 ? "0" + (i+1) : i == 40 ? 40 : (i+1)
				// 	
				// 	//var imgUrl = "0" + (i % 2+1)
				// 	
				// 	//动态添加规则,styleSheets[0]表示style样式
				// 	var run = `@keyframes bagua-injs {` + percent + `% {background-image: url(../../static/canvas/bagua/bagua00` + imgUrl + `.png) no-repeat center; 
				// 				background-size: contain;}}`
				// 	var run_webkit = `-webkit-@keyframes bagua-injs  {` + percent + `% {background-image: url(../../static/canvas/bagua/bagua00` + imgUrl + `.png) no-repeat center; 
				// 				background-size: contain;}}`
				// 	
				// 	this.addKeyframe(run)
				// 	this.addKeyframe(run_webkit)
				// 	
				// }
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
		}
	}
	
</script>

<style style="scss">
	page {
		-webkit-backface-visibility: hidden;
	}
	
	
	@keyframes guangxiaomove {
		0%  {
				background: url(../../static/canvas/guangxiao/foguang0001.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		5%  {
				background: url(../../static/canvas/guangxiao/foguang0001.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		10%  {
				background: url(../../static/canvas/guangxiao/foguang0001.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		15%  {
				background: url(../../static/canvas/guangxiao/foguang0001.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		20%  {
				background: url(../../static/canvas/guangxiao/foguang0001.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		25%  {
				background: url(../../static/canvas/guangxiao/foguang0002.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		30%  {
				background: url(../../static/canvas/guangxiao/foguang0002.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		35%  {
				background: url(../../static/canvas/guangxiao/foguang0002.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		40%  {
				background: url(../../static/canvas/guangxiao/foguang0002.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		45%  {
				background: url(../../static/canvas/guangxiao/foguang0002.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		50%  {
				background: url(../../static/canvas/guangxiao/foguang0003.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		55%  {
				background: url(../../static/canvas/guangxiao/foguang0003.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}	
		60%  {
				background: url(../../static/canvas/guangxiao/foguang0003.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}	
		65%  {
				background: url(../../static/canvas/guangxiao/foguang0003.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}	
		70%  {
				background: url(../../static/canvas/guangxiao/foguang0003.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		75%  {
				background: url(../../static/canvas/guangxiao/foguang0004.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		80%  {
				background: url(../../static/canvas/guangxiao/foguang0004.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		85%  {
				background: url(../../static/canvas/guangxiao/foguang0004.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		90%  {
				background: url(../../static/canvas/guangxiao/foguang0004.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		95%  {
				background: url(../../static/canvas/guangxiao/foguang0004.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		100%  {
				background: url(../../static/canvas/guangxiao/foguang0001.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
	}
	@-webkit-keyframes guangxiaomove {
		0%  {
				background: url(../../static/canvas/guangxiao/foguang0001.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		5%  {
				background: url(../../static/canvas/guangxiao/foguang0001.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		10%  {
				background: url(../../static/canvas/guangxiao/foguang0001.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		15%  {
				background: url(../../static/canvas/guangxiao/foguang0001.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		20%  {
				background: url(../../static/canvas/guangxiao/foguang0001.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		25%  {
				background: url(../../static/canvas/guangxiao/foguang0002.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		30%  {
				background: url(../../static/canvas/guangxiao/foguang0002.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		35%  {
				background: url(../../static/canvas/guangxiao/foguang0002.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		40%  {
				background: url(../../static/canvas/guangxiao/foguang0002.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		45%  {
				background: url(../../static/canvas/guangxiao/foguang0002.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		50%  {
				background: url(../../static/canvas/guangxiao/foguang0003.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		55%  {
				background: url(../../static/canvas/guangxiao/foguang0003.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}	
		60%  {
				background: url(../../static/canvas/guangxiao/foguang0003.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}	
		65%  {
				background: url(../../static/canvas/guangxiao/foguang0003.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}	
		70%  {
				background: url(../../static/canvas/guangxiao/foguang0003.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		75%  {
				background: url(../../static/canvas/guangxiao/foguang0004.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		80%  {
				background: url(../../static/canvas/guangxiao/foguang0004.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		85%  {
				background: url(../../static/canvas/guangxiao/foguang0004.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		90%  {
				background: url(../../static/canvas/guangxiao/foguang0004.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		95%  {
				background: url(../../static/canvas/guangxiao/foguang0004.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
		100%  {
				background: url(../../static/canvas/guangxiao/foguang0001.png) no-repeat center; background-size: contain; 
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg); 
			}
	}
	
	
	
	.guangxiao {
		
		animation-name: guangxiaomove; 
		animation-duration: 0.4s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: infinite;
		animation-direction: normal;
		animation-play-state: running;
		animation-fill-mode: backwards;
		/* Safari 与 Chrome: */
		-webkit-animation-name: guangxiaomove;
		-webkit-animation-duration: 0.4s;
		-webkit-animation-timing-function: linear;
		-webkit-animation-delay: 0s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-direction: normal;
		-webkit-animation-play-state: running;
		-webkit-animation-fill-mode: backwards;
		background: url(../../static/canvas/guangxiao/foguang0001.png) no-repeat center;
		background-size: contain;
		width: 240upx;
		height: 240upx;
	}
	
</style>
