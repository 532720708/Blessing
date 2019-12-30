<template>
	<view>
		<transition>
			<view  class="bagua-mode"></view>
		</transition>
		<!-- <canvas v-show="show"  style="width: 280upx; height: 280upx;" canvas-id="firstCanvas" ></canvas>
		<canvas v-show="show"  style="width: 280upx; height: 280upx;" canvas-id="secondCanvas" ></canvas> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				res: ["../../static/canvas/bagua/bagua0001.png",
						"../../static/canvas/bagua/bagua0002.png",
						"../../static/canvas/bagua/bagua0003.png",
						"../../static/canvas/bagua/bagua0004.png",
						"../../static/canvas/bagua/bagua0005.png",
						"../../static/canvas/bagua/bagua0006.png",
						"../../static/canvas/bagua/bagua0007.png",
						"../../static/canvas/bagua/bagua0008.png",
						"../../static/canvas/bagua/bagua0009.png",
						"../../static/canvas/bagua/bagua0010.png",
						"../../static/canvas/bagua/bagua0011.png",
						"../../static/canvas/bagua/bagua0012.png",
						"../../static/canvas/bagua/bagua0013.png",
						"../../static/canvas/bagua/bagua0014.png",
						"../../static/canvas/bagua/bagua0015.png",
						"../../static/canvas/bagua/bagua0016.png",
						"../../static/canvas/bagua/bagua0017.png",
						"../../static/canvas/bagua/bagua0018.png",
						"../../static/canvas/bagua/bagua0019.png",
						"../../static/canvas/bagua/bagua0020.png",
						"../../static/canvas/bagua/bagua0021.png",
						"../../static/canvas/bagua/bagua0022.png",
						"../../static/canvas/bagua/bagua0023.png",
						"../../static/canvas/bagua/bagua0024.png",
						"../../static/canvas/bagua/bagua0025.png",
						"../../static/canvas/bagua/bagua0026.png",
						"../../static/canvas/bagua/bagua0027.png",
						"../../static/canvas/bagua/bagua0028.png",
						"../../static/canvas/bagua/bagua0029.png",
						"../../static/canvas/bagua/bagua0030.png",
						"../../static/canvas/bagua/bagua0031.png",
						"../../static/canvas/bagua/bagua0032.png",
						"../../static/canvas/bagua/bagua0033.png",
						"../../static/canvas/bagua/bagua0034.png",
						"../../static/canvas/bagua/bagua0035.png",
						"../../static/canvas/bagua/bagua0036.png",
						"../../static/canvas/bagua/bagua0037.png",
						"../../static/canvas/bagua/bagua0038.png",
						"../../static/canvas/bagua/bagua0039.png",
						"../../static/canvas/bagua/bagua0040.png",
						],
				show: false
			}
		},
		mounted() {
			//this.loading(this.res,this.addCanvas())
			//this.addCanvas()
			//this.cacheTest()
			//this.addAnimation()
		},
		methods: {
			cacheTest() {
				var ctxCache = uni.createCanvasContext('secondCanvas')
				ctxCache.drawImage(this.res[0], 0, 0, 220, 220)
				ctxCache.draw()
				console.log(ctxCache)
				
				
				var ctx = uni.createCanvasContext("firstCanvas")
				ctx.drawImage(ctxCache.canvas, 0,0,220,220)
				ctx.draw()
				
				
			},
			
			loading(sources,callback) {
				var images=[];
				var loadedImages = 0;
				// get num of sources
				var numImages = sources.length;
				for (var i = 0,len = sources.length ; i<len ; i++) {
					images[i] = new Image();
					//当一张图片加载完成时执行
					images[i].onload = function(){
						//当所有图片加载完成时，执行回调函数callback
						if (++loadedImages >= numImages) {
							callback(images);
							console.log(loadedImages)							
							console.log(this.show)
						}
					};
					//把sources中的图片信息导入images数组
					images[i].src = sources[i];
				}
				//this.show = true
			},
			
			// 动态增加动画帧
			addAnimation() {
				// 单张40帧旋转
				for(var i = 0; i <= 40; i++) {
					var dg = i * 9 
					var percent = i * 2.5 
					
					//动态添加规则,styleSheets[0]表示style样式
					var run = `@keyframes baguamove {` + percent + `% {background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center; 
								background-size: contain; -webkit-transform: rotate(` + dg + `deg); -moz-transform: rotate(`+ dg + `deg); -ms-transform: rotate(`+ dg + `deg);
								-o-transform: rotate(` + dg + `deg); transform: rotate(` + dg + `deg);}}`
					var run_webkit = `-webkit-@keyframes baguamove {` + percent + `% {background: url(../../static/canvas/bagua/bagua0001.png) no-repeat center;
								background-size: contain; -webkit-transform: rotate(` + dg + `deg); -moz-transform: rotate(`+ dg + `deg); -ms-transform: rotate(`+ dg + `deg);
								-o-transform: rotate(` + dg + `deg); transform: rotate(` + dg + `deg);}}`
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
			addCanvas(images) {
				//this.show = true
				var ctx = uni.createCanvasContext('firstCanvas')
				//var ctxCache = uni.createCanvasContext('secondCanvas')
										
				var i = -1
				var res = this.res
				ctx.drawImage(res[0], 0, 0, 220, 220)
				ctx.draw()
						
				setInterval(function () {				
					i = i == 39 ? -1 : i
					//console.log(i)
					ctx.clearRect(0,0,220,220)
					ctx.drawImage(res[++i], 0, 0, 220, 220)
					ctx.draw()
				},50);  // 1帧图像/100s
			}
		}
	}
</script>

<style lang="scss">
	
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
	
	
	// 测试js
	.bagua-mode {
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
		width: 220upx;
		height: 220upx;
	}
</style>
