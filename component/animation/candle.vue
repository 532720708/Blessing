<template>
	<view>
		<canvas v-show="show"  style="width: 80upx; height: 80upx;" canvas-id="candleCanvas" ></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				res: ["../../static/canvas/candle/lazhu0001.png",
						"../../static/canvas/candle/lazhu0002.png",
						"../../static/canvas/candle/lazhu0003.png",
						"../../static/canvas/candle/lazhu0004.png"
						],
				show: false
			}
		},
		mounted() {
			//this.loading(this.res,this.addCanvas)
			this.addCanvas()
		},
		methods: {
			loading(sources,callback) {
				var images=[];
				var loadedImages = 0;
				// get num of sources
				var numImages = sources.length;
				for (var i = 0,len = sources.length ; i<len ; i++) {
					images[i] = new Image();
					//当一张图片加载完成时执行
					images[i].onload = function(){
						console.log(numImages)
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
			
			addCanvas(images) {
				//this.show = true
				var ctx = uni.createCanvasContext('candleCanvas')
				//var ctxCache = uni.createCanvasContext('secondCanvas')
										
				var i = -1
				var res = this.res
				ctx.drawImage(res[0], 0, 0, 30, 30)
				ctx.draw()
						
				setInterval(function () {				
					i = i == 3 ? -1 : i
					//console.log(i)
					ctx.clearRect(0,0,30,30)
					ctx.drawImage(res[++i], 0, 0, 30, 30)
					ctx.draw()
				},450);  // 1帧图像/100s
				
				let _this = this
				setTimeout(function() {
					_this.show = true
				}, 2000)
				//this.show = true
				console.log(_this.show)
			}
		}
	}
</script>

<style lang="scss">
	
	
</style>
