<template>
	<view>
		<transition>
			<view  class="candle"></view>
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
	@keyframes candlemove {
		0%  {
				background: url(../../static/canvas/candle/lazhu0001.png) no-repeat center; background-size: contain; 
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		5%  {
				background: url(../../static/canvas/candle/lazhu0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		10%  {
				background: url(../../static/canvas/candle/lazhu0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		15%  {
				background: url(../../static/canvas/candle/lazhu0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		20%  {
				background: url(../../static/canvas/candle/lazhu0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);  
			}
		25%  {
				background: url(../../static/canvas/candle/lazhu0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);   
			}
		30%  {
				background: url(../../static/canvas/candle/lazhu0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		35%  {
				background: url(../../static/canvas/candle/lazhu0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		40%  {
				background: url(../../static/canvas/candle/lazhu0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		45%  {
				background: url(../../static/canvas/candle/lazhu0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		50%  {
				background: url(../../static/canvas/candle/lazhu0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		55%  {
				background: url(../../static/canvas/candle/lazhu0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}	
		60%  {
				background: url(../../static/canvas/candle/lazhu0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);  
			}	
		65%  {
				background: url(../../static/canvas/candle/lazhu0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}	
		70%  {
				background: url(../../static/canvas/candle/lazhu0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);  
			}
		75%  {
				background: url(../../static/canvas/candle/lazhu0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		80%  {
				background: url(../../static/canvas/candle/lazhu0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		85%  {
				background: url(../../static/canvas/candle/lazhu0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		90%  {
				background: url(../../static/canvas/candle/lazhu0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		95%  {
				background: url(../../static/canvas/candle/lazhu0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		100%  {
				background: url(../../static/canvas/candle/lazhu0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
	}
	@-webkit-keyframes candlemove {
		0%  {
				background: url(../../static/canvas/candle/lazhu0001.png) no-repeat center; background-size: contain; 
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		5%  {
				background: url(../../static/canvas/candle/lazhu0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		10%  {
				background: url(../../static/canvas/candle/lazhu0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		15%  {
				background: url(../../static/canvas/candle/lazhu0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		20%  {
				background: url(../../static/canvas/candle/lazhu0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);  
			}
		25%  {
				background: url(../../static/canvas/candle/lazhu0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);   
			}
		30%  {
				background: url(../../static/canvas/candle/lazhu0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		35%  {
				background: url(../../static/canvas/candle/lazhu0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		40%  {
				background: url(../../static/canvas/candle/lazhu0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		45%  {
				background: url(../../static/canvas/candle/lazhu0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		50%  {
				background: url(../../static/canvas/candle/lazhu0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		55%  {
				background: url(../../static/canvas/candle/lazhu0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}	
		60%  {
				background: url(../../static/canvas/candle/lazhu0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);  
			}	
		65%  {
				background: url(../../static/canvas/candle/lazhu0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}	
		70%  {
				background: url(../../static/canvas/candle/lazhu0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);  
			}
		75%  {
				background: url(../../static/canvas/candle/lazhu0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		80%  {
				ackground: url(../../static/canvas/candle/lazhu0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		85%  {
				background: url(../../static/canvas/candle/lazhu0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		90%  {
				background: url(../../static/canvas/candle/lazhu0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		95%  {
				background: url(../../static/canvas/candle/lazhu0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		100%  {
				background: url(../../static/canvas/candle/lazhu0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
	}
	
	
	
	.candle {
		animation-name: candlemove; 
		animation-duration: 1s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: infinite;
		animation-direction: normal;
		animation-play-state: running;
		animation-fill-mode: both;
		/* Safari 与 Chrome: */
		-webkit-animation-name: candlemove;
		-webkit-animation-duration: 1s;
		-webkit-animation-timing-function: linear;
		-webkit-animation-delay: 0s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-direction: normal;
		-webkit-animation-play-state: running;
		-webkit-animation-fill-mode: both;
		background: url(../../static/canvas/candle/lazhu0001.png) no-repeat center;
		background-size: contain;
		width: 50upx;
		height: 50upx;
	}
	
</style>

