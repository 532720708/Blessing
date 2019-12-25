<template>
	<view>
		<transition>
			<view  class="bagua-mode"></view>
		</transition>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		mounted() {
			this.addAnimation()
		},
		methods: {
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
				
				// 40张40张循环播放
				// for(var i = 0; i <= 40; i++) {
				// 	var percent = i * 2.5 
				// 	var imgUrl = i < 9 ? "0" + (i+1) : i == 40 ? 40 : (i+1)
				// 	
				// 	//var imgUrl = "0" + (i % 2+1)
				// 	
				// 	//动态添加规则,styleSheets[0]表示style样式
				// 	var run = `@keyframes bagua-injs {` + percent + `% {background-image: url(../../static/canvas/bagua/bagua00` + imgUrl + `.png) no-repeat center; 
				// 				background-size: contain;}}`
				// 	var run_webkit = `-webkit-@keyframes bagua-injs  {` + percent + `% {background-image: url(../../static/canvas/bagua/bagua00` + imgUrl + `.png) no-repeat center; 
				// 				background-size: contain;}}`
				// 	
				// 	this.addKeyframe(run)
				// 	this.addKeyframe(run_webkit)
				// 	
				// }
				
				
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
		width: 250upx;
		height: 250upx;
	}
</style>
