<template>
	<view>
		<!-- <canvas id="cavs">
			你的浏览器不支持canvas，请升级浏览器
		</canvas> -->
		
		<div class="box">
			<canvas id="canvas" width="800" height="600" ref="canvas"></canvas>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: new Image(), // 背景图片缓存
				context: {} // canvas对象
			}
		},
		mounted() {
			//this.canvasInit()
			this.initDraw()
		},
		methods:{		
			initDraw () {
			  // 初始化画布
			  // this.img.src = './static/baifo_lianhua01.png'
			  // const canvas = this.$refs.canvas
			  // this.context = canvas.getContext('2d')
			  // this.context.drawImage(this.img, 0, 0, 800, 600)
			  // this.context.strokeStyle = '#FF0000'
			  var context = uni.createCanvasContext('firstCanvas')
			  
			},
			canvasInit() {
				// var canvas = document.querySelector( '#cavs' );
				// var ctx = canvas.getContext( '2d' );
				// canvas.width = 200;
				// canvas.height = 200;
				// canvas.style.border = "1px solid #000";
				
				let myCanvas = this.$refs.myCanvas
				var ctx = myCanvas.getContext('2d')
			}
		}
	}
</script>

<style>
</style>
