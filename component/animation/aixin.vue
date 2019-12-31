<template>
	<view>
		<canvas v-show="show"  style="width: 280upx; height: 280upx;" canvas-id="aixinCanvas" ></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				res: ["../../static/canvas/aixin/xin0001.png",
						"../../static/canvas/aixin/xin0001.png",
						"../../static/canvas/aixin/xin0002.png",
						"../../static/canvas/aixin/xin0003.png",
						"../../static/canvas/aixin/xin0004.png",
						"../../static/canvas/aixin/xin0005.png",
						"../../static/canvas/aixin/xin0006.png"
						],
				show: false
			}
		},
		mounted() {
			//this.loading(this.res,this.addCanvas)
			this.addCanvas()
		},
		methods: {
			
			addCanvas(images) {
				var ctx = uni.createCanvasContext('aixinCanvas')
					
				var i = -1
				var res = this.res
				ctx.drawImage(res[0], 0, 0, 150, 150)
				ctx.draw()
						
				setInterval(function () {				
					i = i == 6 ? -1 : i
	
					//ctx.clearRect(0,0,150,150)
					ctx.drawImage(res[++i], 0, 0, 150, 150)
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


