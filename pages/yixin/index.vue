<template>
	<!-- <view class="my">
		<view class="lazhu">
			<view class="huomiao" style="background-size: 100% 100%;"></view>
			<image class="lazhu" src="../../static/temple/candle1.png"></image>
		</view>
	</view> -->
	<view>
		<navCustom class="nav-custom" :showTempleIcon="true" :showSearch="true" :navTitle="navTitle" :backStyle="navBackStyle" :isTab="true"></navCustom>
		<h2>这里是乙信</h2>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				navTitle: "乙信",
				navBackStyle: "whiteback"
			}
		}
	}
</script>

<style>
	page {
		background: #FFFFFF;
	}

	
	@keyframes light
	{
	    0%   {background: url(../../static/canvas/baifo_foxiang_guangquan01.png) no-repeat center;}
	    25%  {background: url(../../static/canvas/baifo_foxiang_guangquan02.png) no-repeat center;}
	    50%  {background: url(../../static/canvas/baifo_foxiang_guangquan03.png) no-repeat center;}
	    100% {background: url(../../static/canvas/baifo_foxiang_guangquan04.png) no-repeat center;}
	}
	@-webkit-keyframes light /* Safari 与 Chrome */
	{
	    0%   {background: url(../../static/canvas/baifo_foxiang_guangquan01.png) no-repeat center;}
	    25%  {background: url(../../static/canvas/baifo_foxiang_guangquan02.png) no-repeat center;}
	    50%  {background: url(../../static/canvas/baifo_foxiang_guangquan03.png) no-repeat center;}
	    100% {background: url(../../static/canvas/baifo_foxiang_guangquan04.png) no-repeat center;}
	}
	.light-img {
		animation-name: light;
		animation-duration: 0.6s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: infinite;
		animation-direction: normal;
		animation-play-state: running;
		/* Safari 与 Chrome: */
		-webkit-animation-name: light;
		-webkit-animation-duration: 0.2s;
		-webkit-animation-timing-function: linear;
		-webkit-animation-delay: 0s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-direction: normal;
		-webkit-animation-play-state: running;
	}
	@keyframes lotus
	{
	    0%   {background: url(../../static/canvas/baifo_lianhua01.png) no-repeat center;}
	    25%  {background: url(../../static/canvas/baifo_lianhua02.png) no-repeat center;}
	    50%  {background: url(../../static/canvas/baifo_lianhua03.png) no-repeat center;}
	    100% {background: url(../../static/canvas/baifo_lianhua04.png) no-repeat center;}
	}
	@-webkit-keyframes lotus /* Safari 与 Chrome */
	{
	    0%   {background: url(../../static/canvas/baifo_lianhua01.png) no-repeat center;}
	    25%  {background: url(../../static/canvas/baifo_lianhua02.png) no-repeat center;}
	    50%  {background: url(../../static/canvas/baifo_lianhua03.png) no-repeat center;}
	    100% {background: url(../../static/canvas/baifo_lianhua04.png) no-repeat center;}
	}
	.lotus-img {
		animation-name: lotus;
		animation-duration: 0.8s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: infinite;
		animation-direction: normal;
		animation-play-state: running;
		/* Safari 与 Chrome: */
		-webkit-animation-name: lotus;
		-webkit-animation-duration: 0.5s;
		-webkit-animation-timing-function: linear;
		-webkit-animation-delay: 0s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-direction: normal;
		-webkit-animation-play-state: running;
	}
	.my {
		text-align: center;
		width: 750upx;
		height: 1000upx;
	}
	.light-img {
		width: 500upx;
		height: 500upx;
	}
	.lotus-img {
		width: 500upx;
		height: 500upx;
	}
	
	@keyframes huo
	{
	    0%  {background: url(../../static/temple/huomiao.png) no-repeat center;background-size: 100% 100%;}
	    50%  {background: inherit;}
	    100%  {background: url(../../static/temple/huomiao.png) no-repeat center;background-size: 100% 100%;} 
	}
	@-webkit-keyframes huo /* Safari 与 Chrome */
	{
	    0%  {background: url(../../static/temple/huomiao.png) no-repeat center;background-size: 100% 100%;}
	    50%  {background: inherit;}
	    100%  {background: url(../../static/temple/huomiao.png) no-repeat center;background-size: 100% 100%;} 
	}
	.huomiao {
		width: 32upx;
		height: 38upx;
		animation-name: huo;
		animation-duration: 0.8s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: infinite;
		animation-direction: normal;
		animation-play-state: running;
		/* Safari 与 Chrome: */
		-webkit-animation-name: huo;
		-webkit-animation-duration: 0.8s;
		-webkit-animation-timing-function: linear;
		-webkit-animation-delay: 0s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-direction: normal;
		-webkit-animation-play-state: running;
	}
	.lazhu {
		width: 30upx;
		height: 120upx;
	}
</style>
