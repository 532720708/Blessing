<script>
	import Vue from 'vue'
	export default {
		onLaunch: function() {
			console.log('App Launch')			
			var baguaImgs = [
					require("./static/canvas/bagua/bagua0001.png"),
					require("./static/canvas/bagua/bagua0002.png"),
					require("./static/canvas/bagua/bagua0003.png"),
					require("./static/canvas/bagua/bagua0004.png"),
					require("./static/canvas/bagua/bagua0005.png"),
					require("./static/canvas/bagua/bagua0006.png"),
					require("./static/canvas/bagua/bagua0007.png"),
					require("./static/canvas/bagua/bagua0008.png"),
					require("./static/canvas/bagua/bagua0009.png"),
					require("./static/canvas/bagua/bagua0010.png"),
					require("./static/canvas/bagua/bagua0011.png"),
					require("./static/canvas/bagua/bagua0012.png"),
					require("./static/canvas/bagua/bagua0013.png"),
					require("./static/canvas/bagua/bagua0014.png"),
					require("./static/canvas/bagua/bagua0015.png"),
					require("./static/canvas/bagua/bagua0016.png"),
					require("./static/canvas/bagua/bagua0017.png"),
					require("./static/canvas/bagua/bagua0018.png"),
					require("./static/canvas/bagua/bagua0019.png"),
					require("./static/canvas/bagua/bagua0020.png"),
					require("./static/canvas/bagua/bagua0021.png"),
					require("./static/canvas/bagua/bagua0022.png"),
					require("./static/canvas/bagua/bagua0023.png"),
					require("./static/canvas/bagua/bagua0024.png"),
					require("./static/canvas/bagua/bagua0025.png"),
					require("./static/canvas/bagua/bagua0026.png"),
					require("./static/canvas/bagua/bagua0027.png"),
					require("./static/canvas/bagua/bagua0028.png"),
					require("./static/canvas/bagua/bagua0029.png"),
					require("./static/canvas/bagua/bagua0030.png"),
					require("./static/canvas/bagua/bagua0031.png"),
					require("./static/canvas/bagua/bagua0032.png"),
					require("./static/canvas/bagua/bagua0033.png"),
					require("./static/canvas/bagua/bagua0034.png"),
					require("./static/canvas/bagua/bagua0035.png"),
					require("./static/canvas/bagua/bagua0036.png"),
					require("./static/canvas/bagua/bagua0037.png"),
					require("./static/canvas/bagua/bagua0038.png"),
					require("./static/canvas/bagua/bagua0039.png"),
					require("./static/canvas/bagua/bagua0040.png"),
					require("./static/canvas/bagua/bagua0040.png"),
				]
			// var imgs = baguaImgs
			// for(let img of imgs) {
			// 	let i = new Image();
			// 	i.src = img
			// 	i.onload = () => {
			// 		console.log("加载")
			// 		
			// 	}
			// }
			console.log("加载完毕")
			// //宽高信息
			// uni.getSystemInfo({
			// 	success:function(e){
			// 		Vue.prototype.statusBar = e.statusBarHeight
			// 		// #ifndef MP
			// 		if(e.platform == 'android') {
			// 			Vue.prototype.customBar = e.statusBarHeight + 50
			// 		}else {
			// 			Vue.prototype.customBar = e.statusBarHeight + 45
			// 		}
			// 		// #endif
			// 		
			// 		// #ifdef MP-WEIXIN
			// 		let custom = wx.getMenuButtonBoundingClientRect()
			// 		Vue.prototype.customBar = custom.bottom + custom.top - e.statusBarHeight
			// 		// #endif
			// 		
			// 		// #ifdef MP-ALIPAY
			// 		Vue.prototype.customBar = e.statusBarHeight + e.titleBarHeight
			// 		// #endif
			// 	}
			// })
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import "style/icon.css";
	@import "style/flex.css";
	@import "style/title.css";

	
	page {
		width: 100%;		
		//height: 100%;
		//overflow: hidden;
		//overflow-y: auto;
	}
	
	
	/*每个页面公共css */
	/* 修改导航条字体颜色 */
	uni-page-head .uni-page-head__title {
	    font-weight: 600;
	    font-size: 15px;
	    line-height: 30px;
	    text-align: center;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #e2a163;
		letter-spacing:2px;
	}
	/*checkbox选中后样式  */
	/* uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked{ background: #3D7EFF; border-color:#3D7EFF; } */
	/*checkbox选中后图标样式  */
	uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked::before{
	    width: 20upx;
	    height: 20upx;  
		line-height: 20upx;
		margin-left: -10upx;
		font-size: 48rpx;
		color: #a40000;
		background: url(static/temple/gou.png);
		transform: translate(-70%, -50%) scale(1);
		-webkit-transform: translate(-70%, -50%) scale(1);
	}


</style>
