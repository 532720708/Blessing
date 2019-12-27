<template>
	<view>
		<!-- <transition>
			<view  class="bagua-mode"></view>
		</transition> -->
		<canvas v-show="show"  style="width: 280upx; height: 280upx;" canvas-id="firstCanvas" ></canvas>
		<canvas v-show="show"  style="width: 280upx; height: 280upx;" canvas-id="secondCanvas" ></canvas>
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
			this.loading(this.res,this.addCanvas())
			//this.addCanvas()
			//this.cacheTest()
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
	// 测试js
	.bagua-mode {
		animation-name: baguamove; 
		animation-duration: 1.8s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: infinite;
		animation-direction: normal;
		animation-play-state: running;
		animation-fill-mode: backwards;
		/* Safari 与 Chrome: */
		-webkit-animation-name: baguamove;
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
