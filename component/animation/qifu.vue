<template>
	<view>
		<transition>
			<view  class="qifu"></view>
			<view @tap="startAni()">祈愿</view>
		</transition>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				aniClass: ''
			}
		},
		mounted() {
			//this.addAnimation()
			// setTimeout(() => {
			// 	this.aniClass='guangxiao'
			// }, 500)
		},
		methods: {
			// 开启祈愿动画
			startAni() {
				
			},
			
			// 动态增加动画帧
			addAnimation() {
				// 20帧
				for(var i = 0; i <= 20; i++) {
					var imgUrl = i == 20 ? + "0001" : "000" + (parseInt(i / 5) + 1)
					var percent = i * 5
					
					//动态添加规则,styleSheets[0]表示style样式
					var run = `@keyframes guangxiaomove {` + percent + `% {background: url(../../static/canvas/guangxiao/foguang` + imgUrl + `.png) no-repeat center; 
								background-size: contain; -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); -ms-transform: rotate(0deg);
								-o-transform: rotate(0deg); transform: rotate(0deg);}}`
					var run_webkit = `-webkit-@keyframes guangxiaomove {` + percent + `% {background: url(../../static/canvas/guangxiao/foguang` + imgUrl + `.png) no-repeat center; 
								background-size: contain; -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); -ms-transform: rotate(0deg);
								-o-transform: rotate(0deg); transform: rotate(0deg);}}`
					this.addKeyframe(run)
					this.addKeyframe(run_webkit)
				}
				
				setTimeout(1000)
				var run1 = `.guangxiao {animation-name: guangxiaomove; -webkit-animation-name: guangxiaomove;}`
				this.addKeyframe(run1)
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

<style style="scss">
	@keyframes qifumove {
		0%  {
				background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain; 
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		1.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		3.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		5.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		7.2%  {
				background: url(../../static/canvas/qiyuan/shangxiang0005.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		9%  {
				background: url(../../static/canvas/qiyuan/shangxiang0006.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);   
			}
		10.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0005.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		12.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		14.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		16.2%  {
				background: url(../../static/canvas/qiyuan/shangxiang0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		18%  {
				background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		19.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}	
		21.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);  
			}	
		23.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}	
		25.2%  {
				background: url(../../static/canvas/qiyuan/shangxiang0005.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		27%  {
				background: url(../../static/canvas/qiyuan/shangxiang0006.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		28.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0005.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		30.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		32.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		34.2%  {
				background: url(../../static/canvas/qiyuan/shangxiang0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		36%  {
				background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		37.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		39.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		41.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		43.2%  {
				background: url(../../static/canvas/qiyuan/shangxiang0005.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		45%  {
				background: url(../../static/canvas/qiyuan/shangxiang0006.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		46.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0005.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		48.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		50.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		52.2%  {
				background: url(../../static/canvas/qiyuan/shangxiang0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		54%  {
				background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		55.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		57.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		59.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		61.2%  {
				background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		63%  {
				background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		63%  {
				background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		64.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0007.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		66.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0008.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		68.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0009.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		70.2%  {
				background: url(../../static/canvas/qiyuan/shangxiang0010.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		72%  {
				background: url(../../static/canvas/qiyuan/shangxiang0011.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		73.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0011.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		75%  {
				background: url(../../static/canvas/qiyuan/shangxiang0011.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		76.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0011.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		78.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0011.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		80.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0012.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		82.2%  {
				background: url(../../static/canvas/qiyuan/shangxiang0013.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		84%  {
				background: url(../../static/canvas/qiyuan/shangxiang0014.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		85.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0015.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		87.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0016.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		89.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0017.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		91.2%  {
				background: url(../../static/canvas/qiyuan/shangxiang0018.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		93%  {
				background: url(../../static/canvas/qiyuan/shangxiang0019.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		94.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0020.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		96.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0021.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		98.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0022.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		100% {
			background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain;
			-webkit-transform: translate3d(0, 0, 0);
			-moz-transform: translate3d(0, 0, 0);
			-ms-transform: translate3d(0, 0, 0);
			-o-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
	}
	@-webkit-keyframes qifumove {
		0%  {
				background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain; 
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		1.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		3.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		5.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		7.2%  {
				background: url(../../static/canvas/qiyuan/shangxiang0005.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		9%  {
				background: url(../../static/canvas/qiyuan/shangxiang0006.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);   
			}
		10.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0005.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		12.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		14.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		16.2%  {
				background: url(../../static/canvas/qiyuan/shangxiang0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		18%  {
				background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		19.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}	
		21.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);  
			}	
		23.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}	
		25.2%  {
				background: url(../../static/canvas/qiyuan/shangxiang0005.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		27%  {
				background: url(../../static/canvas/qiyuan/shangxiang0006.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		28.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0005.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		30.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		32.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		34.2%  {
				background: url(../../static/canvas/qiyuan/shangxiang0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0); 
			}
		36%  {
				background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		37.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		39.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		41.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		43.2%  {
				background: url(../../static/canvas/qiyuan/shangxiang0005.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		45%  {
				background: url(../../static/canvas/qiyuan/shangxiang0006.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		46.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0005.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		48.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0004.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		50.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0003.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		52.2%  {
				background: url(../../static/canvas/qiyuan/shangxiang0002.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		54%  {
				background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		55.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		57.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		59.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		61.2%  {
				background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		63%  {
				background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		63%  {
				background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		64.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0007.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		66.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0008.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		68.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0009.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		70.2%  {
				background: url(../../static/canvas/qiyuan/shangxiang0010.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		72%  {
				background: url(../../static/canvas/qiyuan/shangxiang0011.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		73.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0011.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		75%  {
				background: url(../../static/canvas/qiyuan/shangxiang0011.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		76.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0011.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		78.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0011.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		80.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0012.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		82.2%  {
				background: url(../../static/canvas/qiyuan/shangxiang0013.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		84%  {
				background: url(../../static/canvas/qiyuan/shangxiang0014.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		85.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0015.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		87.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0016.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		89.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0017.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		91.2%  {
				background: url(../../static/canvas/qiyuan/shangxiang0018.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		93%  {
				background: url(../../static/canvas/qiyuan/shangxiang0019.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		94.8%  {
				background: url(../../static/canvas/qiyuan/shangxiang0020.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		96.6%  {
				background: url(../../static/canvas/qiyuan/shangxiang0021.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		98.4%  {
				background: url(../../static/canvas/qiyuan/shangxiang0022.png) no-repeat center; background-size: contain;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
				-ms-transform: translate3d(0, 0, 0);
				-o-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		100% {
			background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center; background-size: contain;
			-webkit-transform: translate3d(0, 0, 0);
			-moz-transform: translate3d(0, 0, 0);
			-ms-transform: translate3d(0, 0, 0);
			-o-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
	}
	
	
	
	.qifu {
		animation-name: qifumove; 
		animation-duration: 2.5s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: infinite;
		animation-direction: normal;
		animation-play-state: running;
		animation-fill-mode: both;
		/* Safari 与 Chrome: */
		-webkit-animation-name: qifumove;
		-webkit-animation-duration: 2.5s;
		-webkit-animation-timing-function: linear;
		-webkit-animation-delay: 0s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-direction: normal;
		-webkit-animation-play-state: running;
		-webkit-animation-fill-mode: both;
		background: url(../../static/canvas/qiyuan/shangxiang0001.png) no-repeat center;
		background-size: contain;
		width: 300upx;
		height: 300upx;
	}
	
</style>


