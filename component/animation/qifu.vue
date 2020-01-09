<template>
	<view>
		<canvas v-show="show"  style="width: 280upx; height: 280upx;" canvas-id="qifuCanvas" ></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				res: ["../../static/canvas/lianhua/lianhua0001.png",
						"../../static/canvas/lianhua/lianhua0002.png",
						"../../static/canvas/lianhua/lianhua0003.png"
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
				var ctx = uni.createCanvasContext('qifuCanvas')
					
				var i = -1
				var res = this.res
				ctx.drawImage(res[0], 0, 0, 100, 100)
				ctx.draw()
						
				setInterval(function () {				
					i = i == 2 ? -1 : i
	
					ctx.clearRect(0,0,100,100)
					ctx.drawImage(res[++i], 0, 0, 100, 100)
					ctx.draw()
				},200);  // 1帧图像/100s
				
				
				let _this = this
				_this.show = true

			}
		}
	}
</script>

<style lang="scss">
	   
</style>

