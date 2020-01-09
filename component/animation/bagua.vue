<template>
	<view>
		<canvas v-show="show"  style="width: 280upx; height: 280upx;" canvas-id="firstCanvas" ></canvas>
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
						//当所有图片加载完成时，执行回调函数callback
						if (++loadedImages >= numImages) {
							callback(images);
							console.log(loadedImages)							
						}
					};
					//把sources中的图片信息导入images数组
					images[i].src = sources[i];
				}
				//this.show = true
			},
			
			addCanvas(images) {
				var ctx = uni.createCanvasContext('firstCanvas')
				//var ctxCache = uni.createCanvasContext('secondCanvas')					
				var i = -1
				var res = this.res
				ctx.drawImage(res[0], 0, 0, 100, 100)
				ctx.draw()
						
				setInterval(function () {				
					i = i == 38 ? -1 : i
	
					ctx.clearRect(0,0,100,100)
					ctx.drawImage(res[++i], 0, 0, 100, 100)
					ctx.draw()
				},50);  // 1帧图像/100s
				
				//console.log(this.show)
				
				let _this = this
				setTimeout(function() {
					_this.show = true
				}, 2000)
				//this.show = true
				_this.show = true
				//console.log(_this.show)
			}
		}
	}
</script>

<style lang="scss">
	   
</style>
