<template>
	<view>
		<canvas v-show="show"  style="width: 280upx; height: 280upx;" canvas-id="yuanbaoCanvas" ></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				allImgs: [require("../../static/canvas/jinyuanbao/jinyuanbao0001.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0002.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0003.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0004.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0005.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0006.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0007.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0008.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0009.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0010.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0011.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0012.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0013.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0014.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0015.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0016.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0017.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0018.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0019.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0020.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0021.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0022.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0023.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0024.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0025.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0026.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0027.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0028.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0029.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0030.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0031.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0032.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0033.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0034.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0035.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0036.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0037.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0038.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0039.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0040.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0041.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0042.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0043.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0044.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0045.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0046.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0047.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0048.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0049.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0050.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0051.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0052.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0053.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0054.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0055.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0056.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0057.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0058.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0059.png"),
						require("../../static/canvas/jinyuanbao/jinyuanbao0060.png")
						],
				show: false,
				per: 0,
				count: 0
			}
		},
		watch: {
			per: function(val) {
				if(val == 100) {
					this.addCanvas()
				}
			}
		},
		mounted() {
			this.loadImg()
			//this.addCanvas()
		},
		methods: {
			
			// 预加载图片
			loadImg() {
				// 加入
				var imgs = this.allImgs
				for(let img of imgs) {
					let i = new Image();		
					i.onload = () => {
						//console.log("加载")
						this.count ++
						this.per = this.count / imgs.length * 100
					}
					i.src = img
				}
			},
			
			addCanvas(images) {
				var ctx = uni.createCanvasContext('yuanbaoCanvas')
				//var ctxCache = uni.createCanvasContext('secondCanvas')					
				var i = -1
				var res = this.allImgs
				ctx.drawImage(res[0], 0, 0, 150, 150)
				ctx.draw()
						
				setInterval(function () {				
					i = i == 59 ? -1 : i
	
					ctx.clearRect(0,0,100,100)
					ctx.drawImage(res[++i], 0, 0, 150, 150)
					ctx.draw()
				},45);  // 1帧图像/100s
				
				//console.log(this.show)
				
				let _this = this
				_this.show = true
			
			}
		}
	}
</script>

<style lang="scss">
	   
</style>

