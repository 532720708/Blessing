<script>
	import Vue from 'vue'
	import {sdk} from './static/js/open.plt.0.1.js'
	export default {
	
		onLaunch: function() {
			console.log('App Launch')			
			uniReady(function() {
			    alert('平台SDK载入成功')	 
			})
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
