<script>
	import Vue from 'vue'
	export default {
		onLaunch: function() {
			console.log('App Launch')
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
		/* width: 100%;		
		height: 100%; */
		//overflow-x: hidden;
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
	
</style>
