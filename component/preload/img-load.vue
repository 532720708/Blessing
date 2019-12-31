<template>
	<view>
		<!-- <view class="loading-txt">加载中，请稍后 {{per}}%...</view> -->
		<div class="main-site">
		    <div class="main-content space-top wrapper" role="main" id="mainContent">
		        <div class="loader loader-black loader-5"></div><p>正在拼命加载中...</p>
		    </div>
		</div>
		
		
		<!-- <div class="loading">
		  <div class="left"></div>
		  <div class="right"></div>
		  <div class="progress">85%</div>
		</div> -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				allImgs: [require("../../static/canvas/bagua/bagua0001.png"),
						require("../../static/canvas/bagua/bagua0002.png"),
						require("../../static/canvas/bagua/bagua0003.png"),
						require("../../static/canvas/bagua/bagua0004.png"),
						require("../../static/canvas/bagua/bagua0005.png"),
						require("../../static/canvas/bagua/bagua0006.png"),
						require("../../static/canvas/bagua/bagua0007.png"),
						require("../../static/canvas/bagua/bagua0008.png"),
						require("../../static/canvas/bagua/bagua0009.png"),
						require("../../static/canvas/bagua/bagua0010.png"),
						require("../../static/canvas/bagua/bagua0011.png"),
						require("../../static/canvas/bagua/bagua0012.png"),
						require("../../static/canvas/bagua/bagua0013.png"),
						require("../../static/canvas/bagua/bagua0014.png"),
						require("../../static/canvas/bagua/bagua0015.png"),
						require("../../static/canvas/bagua/bagua0016.png"),
						require("../../static/canvas/bagua/bagua0017.png"),
						require("../../static/canvas/bagua/bagua0018.png"),
						require("../../static/canvas/bagua/bagua0019.png"),
						require("../../static/canvas/bagua/bagua0020.png"),
						require("../../static/canvas/bagua/bagua0021.png"),
						require("../../static/canvas/bagua/bagua0022.png"),
						require("../../static/canvas/bagua/bagua0023.png"),
						require("../../static/canvas/bagua/bagua0024.png"),
						require("../../static/canvas/bagua/bagua0025.png"),
						require("../../static/canvas/bagua/bagua0026.png"),
						require("../../static/canvas/bagua/bagua0027.png"),
						require("../../static/canvas/bagua/bagua0028.png"),
						require("../../static/canvas/bagua/bagua0029.png"),
						require("../../static/canvas/bagua/bagua0030.png"),
						require("../../static/canvas/bagua/bagua0031.png"),
						require("../../static/canvas/bagua/bagua0032.png"),
						require("../../static/canvas/bagua/bagua0033.png"),
						require("../../static/canvas/bagua/bagua0034.png"),
						require("../../static/canvas/bagua/bagua0035.png"),
						require("../../static/canvas/bagua/bagua0036.png"),
						require("../../static/canvas/bagua/bagua0037.png"),
						require("../../static/canvas/bagua/bagua0038.png"),
						require("../../static/canvas/bagua/bagua0039.png"),
						require("../../static/canvas/bagua/bagua0040.png"),					
						require("../../static/canvas/lianhua/lianhua0001.png"),
						require("../../static/canvas/lianhua/lianhua0002.png"),
						require("../../static/canvas/lianhua/lianhua0003.png"),
						require("../../static/canvas/aixin/xin0001.png"),
						require("../../static/canvas/aixin/xin0002.png"),
						require("../../static/canvas/aixin/xin0003.png"),
						require("../../static/canvas/aixin/xin0004.png"),
						require("../../static/canvas/aixin/xin0005.png"),
						require("../../static/canvas/aixin/xin0006.png"),
						require("../../static/canvas/candle/lazhu0001.png"),
						require("../../static/canvas/candle/lazhu0002.png"),
						require("../../static/canvas/candle/lazhu0003.png"),
						require("../../static/canvas/candle/lazhu0004.png"),
						require("../../static/canvas/guangxiao/foguang0001.png"),
						require("../../static/canvas/guangxiao/foguang0002.png"),
						require("../../static/canvas/guangxiao/foguang0003.png"),
						require("../../static/canvas/guangxiao/foguang0004.png"),
						require("../../static/canvas/smog/yan0001.png"),
						require("../../static/canvas/smog/yan0002.png"),
						require("../../static/canvas/smog/yan0003.png"),
						require("../../static/canvas/smog/yan0004.png"),
						require("../../static/canvas/smog/yan0005.png"),
						require("../../static/canvas/smog/yan0006.png"),
						require("../../static/canvas/smog/yan0007.png"),
						require("../../static/canvas/smog/yan0008.png"),
						require("../../static/canvas/smog/yan0009.png"),
						require("../../static/canvas/smog/yan0010.png"),
						require("../../static/canvas/smog/yan0011.png"),
						require("../../static/canvas/smog/yan0012.png"),
						require("../../static/canvas/smog/yan0013.png"),
						require("../../static/canvas/smog/yan0014.png"),
						require("../../static/canvas/smog/yan0015.png"),
						require("../../static/canvas/smog/yan0016.png"),
						require("../../static/canvas/smog/yan0017.png"),
						require("../../static/canvas/smog/yan0018.png"),
						require("../../static/canvas/smog/yan0019.png"),
						require("../../static/canvas/smog/yan0020.png"),
						require("../../static/temple/blessTitleLogo.png"),
						require("../../static/temple/dot.png"),
						require("../../static/temple/flower.png"),
						require("../../static/temple/foguang.png"),
						require("../../static/temple/fruitLeft.png"),
						require("../../static/temple/fruitRight.png"),
						require("../../static/temple/gongGuo.png"),
						require("../../static/temple/gongHua.png"),
						require("../../static/temple/gongXiang.png"),
						require("../../static/temple/gongYou.png"),
						require("../../static/temple/lazhu.png"),
						require("../../static/temple/line.png"),
						require("../../static/temple/lotus.jpg"),
						require("../../static/temple/qiucai.png"),
						require("../../static/temple/qiucaiCombination.png"),
						require("../../static/temple/qiupingan.png"),
						require("../../static/temple/qiupinganCombination.png"),
						require("../../static/temple/qiuxueye.png"),
						require("../../static/temple/qiuxueyeCombination.png"),
						require("../../static/temple/qiuyinyuan.png"),
						require("../../static/temple/qiuyinyuanCombination.png"),
						require("../../static/temple/qiuzi.png"),
						require("../../static/temple/qiuziCombination.png"),
						require("../../static/temple/qiyuan_logo.png"),
						require("../../static/temple/table.png"),
						require("../../static/temple/xiang.png"),
						require("../../static/temple/shangxiang.gif")
						],
				per: 0,
				count: 0
			}
		},
		mounted() {
			this.loading()
		},
		onLoad() {
			
		},
		watch: {
			count: function(val) {
			  // console.log(val)
			 //  if (val === 40) {
				// // 图片加载完成后跳转页面
				// //this.$router.push({path: 'cover'})
				// console.log(this.count)
				// console.log("加载完毕")
			 //  }
			},
			per: function(val) {
				if(val == 100) {
					this.$emit('func')
				}
			}
		},
		methods: {
			loading() {
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
				return true	
			}
		}
	}
	
	
</script>

<style lang="scss">
	/* .loading-txt {
		height: 50upx;
		width: 300upx;
		background: #999999;
		opacity: 0.5;
		font-size: 22upx;
		z-index: 100;
		text-align: center;
		border-radius: 10upx;
	}
	
	.loading{margin:100px auto; width: 8em; height: 8em; position: relative;}
	  .loading .progress{position: absolute; width: 6em; height:6em; background-color: white; border-radius: 50%; left: 1em; top: 1em; line-height: 6em; text-align: center;
	  }
	  .left,.right{width: 4em;height: 8em;overflow: hidden; position: relative; float: left;}
	  .left{ border-radius: 8em 0 0 8em;}
	  .right{ border-radius: 0 8em 8em 0;}
	  .left:after,.right:after{content:"";  position:absolute; display:block; width: 4em;height: 8em; background-color: white;border-radius: 8em 0 0 8em;background-color: red;}
	  .right:after{content:"";  position:absolute; display:block;   border-radius: 0 8em 8em 0; }
	  @-webkit-keyframes rotateB{
	    25%,50%{transform:rotateZ(180deg);}
	    75%,100%{transform:rotateZ(360deg);}
	  }
	  @-webkit-keyframes rotateA{
	    0%,25%{transform:rotateZ(0deg);}
	    50%,75%{transform:rotateZ(180deg);}
	    100%{transform:rotateZ(360deg);}
	  }
	  .left:after{-webkit-animation:rotateA 2s infinite linear; transform-origin:right center;  }
	  .right:after{-webkit-animation:rotateB 2s infinite linear; transform-origin:left center;} */
	  
	.main-site{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: #000;
		opacity: 0.4;
	}
	#mainContent{
		position: absolute;
		width: 250upx;
		height: 100upx;
		top: 42%;
		left: 45%;
		margin-top: -50upx;
		margin-left: -60upx;
	}
	#mainContent>p{
		margin-left: 6upx;
		color: #EF7F00;
		font-size: 30upx;
		font-weight: bold;
	}
	.loader {
		width: 50upx;
		height: 50upx;
		border-radius: 50%;
		margin: 50upx 80upx;
		display: inline-block;
		position: relative;
		vertical-align: middle;
	}
	.loader,.loader:before,.loader:after {
		animation:1s infinite ease-in-out;
	}
	.loader:before,.loader:after {
		width:100%;
		height:100%;
		border-radius:50%;
		position:absolute;
		top:0;
		left:0;
	}
	.loader-black {
		background-color: #EF7F00;
	}
	.loader-5 {
		animation: loader5 1s infinite linear;
		-webkit-animation: loader5 1s infinite linear;
	}
	@keyframes loader5 {
		0% {
			transform: rotate(0deg);
			border-radius: 50%;
		}
		50% {
			transform: rotate(90deg);
			border-radius: 0%;
		}
		100% {
			transform: rotate(180deg);
			border-radius: 50%;
		}
	}
	@-webkit-keyframes loader5 {
		0% {
			transform: rotate(0deg);
			border-radius: 50%;
		}
		50% {
			transform: rotate(90deg);
			border-radius: 0%;
		}
		100% {
			transform: rotate(180deg);
			border-radius: 50%;
		}
	}
</style>
