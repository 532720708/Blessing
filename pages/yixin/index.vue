<template>
	<!-- <view class="my">
		<view class="lazhu">
			<view class="huomiao" style="background-size: 100% 100%;"></view>
			<image class="lazhu" src="../../static/temple/candle1.png"></image>
		</view>
	</view> -->
	<view>
		<navCustom class="nav-custom" :showTempleIcon="false" :showSearch="true" :navTitle="navTitle" :backStyle="navBackStyle" :isTab="true"></navCustom>
		<h2>乙信</h2>
		
		<!-- <image style="width: 300upx;height: 300upx;" mode="aspectFit" src="../../static/canvas/aixin/aixin.gif"></image> -->
		<!-- <aniTest></aniTest> -->
		<!-- <image style="width: 200upx; height: 200upx;" mode="aspectFit" src="../../static/canvas/bagua/bagua.gif"></image -->
		<!-- <bagua></bagua> -->

		<!-- <guangxiao></guangxiao>
		<candle></candle>
		<smog></smog> -->
		<!-- <qifu></qifu> -->
		<!-- <cav></cav> -->
		<view>
			<!-- <canvas style="width: 300px; height: 200px;" canvas-id="firstCanvas"></canvas> -->
			<!-- <canvas style="width: 400px; height: 500px;" canvas-id="secondCanvas" id="c1"></canvas> -->
		<!-- 	<canvas style="width: 400px; height: 500px;" canvas-id="secondCanvas" @error="canvasIdErrorCallback"></canvas> -->
		</view>
		
		<!-- <div class="box">
			<canvas id="canvas" width="800" height="600" ref="canvas"></canvas>
		</div> -->
		<!-- <bagua></bagua>
		<candle></candle>
		<guangxiao></guangxiao>
		<smog></smog> -->
	</view>
	
	
</template>

<script>	
	import animations from 'create-keyframe-animation';
	export default {
		data () {
			return {
				navTitle: "乙信",
				navBackStyle: "whiteback",
				img: new Image(), // 背景图片缓存
				context: {}, // canvas对象
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
						]
			}
		},
		mounted() {
			
			//this.initDraw()
		},
		watch: {
			
		},
		onLoad() {
			
		},
		onReady: function (e) {
		// 	var ctx = uni.createCanvasContext('firstCanvas')
		// 	var ctxCache = uni.createCanvasContext('secondCanvas')
		// 	
		// 	var width = 250
		// 	var height = 250
		// 	var duration = 100
		// 
		// 	var i = -1
		// 	var res = this.res
		// 	ctxCache.drawImage(res[0], 0, 0, 150, 150)
		// 	ctxCache.draw()
		// 	
		// 	
		// 	setInterval(function () {				
		// 		i = i == 39 ?  -1 : i
		// 		//console.log(i)
		// 	    // 裁剪图片
		// 		uni.getImageInfo({
		// 			src: res[++i],
		// 			success: function (image) {
		// 				// console.log(image.width);
		// 				// console.log(image.height);
		// 				ctxCache.drawImage(image.path, 0, 0, 150, 150)
		// 				ctxCache.draw()
		// 				//console.log(image.path)
		// 			},
		// 			fail: function  (e) {
		// 				console.log(e)
		// 			} 
		// 		});
		// 	},50);  // 1帧图像/100s
			

			// var res = "../../static/canvas/bagua/bagua0001.png"
			// uni.getImageInfo({
			// 	src: res,
			// 	success: function (image) {
			// 		console.log(image.width);
			// 		console.log(image.height);
			// 		ctx.drawImage(image.path, 0, 0, 150, 150)
			// 		ctx.draw()
			// 	},
			// 	fail: function  (e) {
			// 		console.log(e)
			// 	} 
			// });
			
			
			// uni.chooseImage({
			//   success: function(res){
			//     ctx.drawImage(res[0], 0, 0, 300, 300)
			//     ctx.draw()
			//   }
			// })
				
			// 	
			//ctx.setStrokeStyle("#00ff00")
			// ctx.setLineWidth(5)
			// ctx.rect(0, 0, 200, 200)
			// ctx.stroke()
			// context.setStrokeStyle("#ff0000")
			// context.setLineWidth(2)
			// context.moveTo(160, 100)
			// context.arc(100, 100, 60, 0, 2 * Math.PI, true)
			// context.moveTo(140, 100)
			// context.arc(100, 100, 40, 0, Math.PI, false)
			// context.moveTo(85, 80)
			// context.arc(80, 80, 5, 0, 2 * Math.PI, true)
			// context.moveTo(125, 80)
			// context.arc(120, 80, 5, 0, 2 * Math.PI, true)
			// context.stroke()
			//ctx.draw()
		},
		methods:{
			canvasIdErrorCallback: function (e) {
				console.error(e.detail.errMsg)
			},
			
		},
		onLoad() {
			
		}
	}
</script>

<style lang="scss">
	page {
		background: #000000;
	}
	
	h2 {
		color: #4CD964;
	}
	
</style>