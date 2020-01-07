<template>
	<view>
		<view v-for="item in group">
			<view class="aView">
				<view class="first">
					<text class="nameText">{{item[0].name}}</text>
					<view class="back"></view>
					<image class="foImg" :src="item[0].picture"></image>
					<view class="dataBack"></view>
					<text class="dataText">{{item[0].birthday}}</text>
					<button class="setTime" @click="setTime(item[0].birthday)">添加提醒</button>
				</view>
				<view class="first">
					<text class="nameText">{{item[1].name}}</text>
					<view class="back"></view>
					<image class="foImg" :src="item[1].picture"></image>
					<view class="dataBack"></view>
					<text class="dataText">{{item[1].birthday}}</text>
					<button class="setTime" @click="setTime(item[1].birthday)">添加提醒</button>
				</view>
			</view>
		</view>
		<view class="bottomView">
			<image class="aLine" src="../../static/birthday/aLine.PNG"></image>
			<text class="bottomText">如是精进，能调付其心</text>
			<image class="aLine" src="../../static/birthday/aLine.PNG"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				buddha:[{name:'弥勒菩萨圣诞',birthday:'正月初一日',picture:'../../static/birthday/mile.png'},
				{name:'定光佛圣诞',birthday:'正月初六日',picture:'../../static/birthday/dingguangfo.png'},
				{name:'帝释天尊圣诞',birthday:'正月初九日',picture:'../../static/birthday/dishitian.png'},
				{name:'释迦摩尼圣诞',birthday:'正月初九日',picture:'../../static/birthday/dishitian.png'},
				{name:'弥勒菩萨圣诞',birthday:'正月初一日',picture:'../../static/birthday/mile.png'},
				{name:'定光佛圣诞',birthday:'正月初六日',picture:'../../static/birthday/dingguangfo.png'},
				{name:'帝释天尊圣诞',birthday:'正月初九日',picture:'../../static/birthday/dishitian.png'},
				{name:'释迦摩尼圣诞',birthday:'正月初九日',picture:'../../static/birthday/dishitian.png'},
				{name:'弥勒菩萨圣诞',birthday:'正月初一日',picture:'../../static/birthday/mile.png'},
				{name:'定光佛圣诞',birthday:'正月初六日',picture:'../../static/birthday/dingguangfo.png'},
				{name:'帝释天尊圣诞',birthday:'正月初九日',picture:'../../static/birthday/dishitian.png'},
				{name:'释迦摩尼圣诞',birthday:'正月初九日',picture:'../../static/birthday/dishitian.png'}],
				group:[]
			}
		},
		methods:{
			swiperGroup(array,subGroupLength){
				let index = 0;
				let newArray = [];
				while(index < array.length) {
				    newArray.push(array.slice(index, index += subGroupLength));
				}
				return newArray;
			},
			setTime(item){
				console.log("111" + item)
				uni.showModal({
					showCancel: false ,
				    title: '提醒成功',
				    content: '将于' + item + "提醒"
				});
			}
		},
		onLoad() {
			this.group = this.swiperGroup(this.buddha,2);
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background: #fce4ca;
	}
	.bottomView{
		display: flex;
		flex-direction: row;
		width: 690upx;
		height: 80upx;
		align-items: center;
		margin-left: 50upx;
		.aLine{
			width: 150upx;
			height: 5upx;
		}
		.bottomText{
			padding-left: 20upx;
			padding-right: 20upx;
			font-size: 15px;
			font-weight: 500;
			color: #e2a163;
		}
	}
	.aView{
		display: flex;
		flex-direction: row;
		margin-top: 20upx;
		margin-left:30upx ;
		width: 690upx;
		height: 420upx;
		background: url(../../static/birthday/back.png);
		background-size: 100%;
		background-repeat: no-repeat;
		.first{
			position: relative;
			margin-left: 30upx;
			width: 300upx;
			height: 390upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.nameText{
				font-size: 16px;
				font-weight: 550;
				color: #323643;
			}
			.back{
				margin-top: 10upx;
				width: 300upx;
				height: 270upx;
				background: #ffffff;
				border-radius: 20upx;
			}
			.foImg{
				position: absolute;
				top: 60upx;
				width: 280upx;
				height: 250upx;
				border-radius: 20upx;
			}
			.dataBack{
				position: absolute;
				top:257upx;
				width: 280upx;
				height: 55upx;
				/* background:rgba(0,0,0,0); */
				border-bottom-right-radius:20upx;
				border-bottom-left-radius:20upx;
				background:  #e5ffff;
				 opacity:0.4;
			}
			.dataText{
				position: absolute;
				top: 257upx;
				font-size: 16px;
				font-weight: 550;
				color: #844401;
			}
			.setTime{
			/* 	position: absolute;
				top: 325upx; */
				margin-top: 10upx;
				width: 220upx;
				height: 65upx;
				border-radius: 30upx;
				border: none;
				background: url(../../static/birthday/buttonBack.png);
				background-size: 100% 100%;
				vertical-align:middle ;
				line-height:65upx;
				font-size: 15px;
				font-weight: 500;
				color: #e2a163;
			}
		}
	}
</style>
