<template>
	<view>
		<navTop class="stickyTop" :showTempleIcon="false" :showSearch="false" :navTitle="navTitle" :backStyle="navBackStyle"></navTop>
		<view class="flex-col-nowrap">
			<view class="msg-view" v-for="(m, index) in msgList" :key="index">
				<image class="msg-img" :src="m.img"></image>
				<view class="msg-main flex-col-nowrap" @tap="toDetail(m.title)">
					<view class="msg-title overflow-mag">{{m.title}}</view>
					<view class="msg-content overflow-mag-muti">{{m.content}}</view>
				</view>
				<image v-if="m.star == 1" class="star-img" src="../../static/index/msg/star.png" mode="aspectFit"></image>
			</view>
		</view>
		<view class="no-msg">
			没有更多数据了~
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navTitle: "佛教资讯",
				navBackStyle: "whiteback",
				msgList: [{id: 1, img: '../../static/index/msg/zixun_img.png', title: '有些话不说 往往能增加福德', 
							content: '佛诞日，即释迦牟尼佛祖诞生之日，又称浴佛节、灌佛会、龙华会、华严会等。公元前 623年，佛祖诞生于北印度。',star: 1},
							{id: 2, img: '../../static/index/msg/zixun_img.png', title: '有些话不说 往往能增加福德',
										content: '佛诞日，即释迦牟尼佛祖诞生之日，又称浴佛节、灌佛会、龙华会、华严会等。公元前 623年，佛祖诞生于北印度。',star: 0},
							{id: 3, img: '../../static/index/msg/zixun_img.png', title: '有些话不说 往往能增加福德',
										content: '佛诞日，即释迦牟尼佛祖诞生之日，又称浴佛节、灌佛会、龙华会、华严会等。公元前 623年，佛祖诞生于北印度。',star: 1},
							{id: 4, img: '../../static/index/msg/zixun_img.png', title: '有些话不说 往往能增加福德',
										content: '佛诞日，即释迦牟尼佛祖诞生之日，又称浴佛节、灌佛会、龙华会、华严会等。公元前 623年，佛祖诞生于北印度。',star: 0},
							{id: 5, img: '../../static/index/msg/zixun_img.png', title: '有些话选择不说 往往能增加福德',
										content: '佛诞日，即释迦牟尼佛祖诞生之日，又称浴佛节、灌佛会、龙华会、华严会等。公元前 623年，佛祖诞生于北印度。',star: 0}]
			}
		},
		methods:{
			toDetail(title) {
				uni.navigateTo({
					url: "./detail?mTitle=" + title
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: #f9f9f9;
	}
	
	.msg-view {
		width: 100%;
		position: relative;
		height: 270upx;
		margin-top: 50upx;
		.msg-img {
			position: absolute;
			z-index: 10;
			width: 150upx;
			height: 250upx;
			top: -25upx;
			left: 20upx;
		}
		.msg-main {
			margin-left: 130upx;
			border-radius: 18upx;
			height: 260upx;
			width: 540upx;
			background: #FFFFFF;
			padding-left: 60upx;
			.msg-title {
				margin-top: 20upx;
				font-size: 34upx;
				font-weight: 600;
				width: 460upx;
				height: 60upx;
			}
			.msg-content {
				text-align: justify;
				width: 520upx;
				height: 170upx;
				font-size: 30upx;
				color: #8e8e8e;
			}
		}
		.star-img {
			position: absolute;
			z-index: 11;
			right: 45upx;
			width: 42upx;
			height: 60upx;
			top: 0upx;
		}
	}
	
	.no-msg {
		height: 130upx;
		width: 100%;
		text-align: center;
		line-height: 130upx;
		color: #b5b6b9;
		font-size: 30upx;
	}
	
	.stickyTop {
		color: #000000;
		z-index: 100;
	}
	
	.overflow-mag-muti {
		// 对非webkit内核的浏览器有兼容问题
		display: -webkit-box; /* 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
		-webkit-box-orient: vertical; /* 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。*/
		text-overflow: ellipsis; /* 可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
		-webkit-line-clamp: 4;
		overflow : hidden;
	}
</style>
