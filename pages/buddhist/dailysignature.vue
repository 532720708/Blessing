<template>
	<view>
		<swiper :current="swiperId" class="swiperView" next-margin="50upx" previous-margin="140upx" @change="showLikeNum">
			<swiper-item v-for="(item,index) in inf">
				<view class="swiperItem">
					<view class="item">
						<image class="backgroundImg" :src="item.src" ></image>
						<view class="dataImf">
							<text>{{timeString}}</text>
							<text>{{day}}</text>
							<text>农历{{nongli}}</text>
						</view>
						<image class="codeIcon" :src="codeIcon"></image>
						<view class="signatureTextView">
							<image class="symbol " src="../../static/dailysignature/leftsymbol.JPG"></image>
							<view class="signatureText overflow-manage">
								<rich-text :nodes="item.text"></rich-text>
							</view>
							<image class="symbol rightSymbol" src="../../static/dailysignature/rightsymbol.JPG"></image>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="userActionView">
			<image class="userActionIcon downloadIcon" src="../../static/dailysignature/download.png"></image>
			<image class="userActionIcon transpond" src="../../static/dailysignature/transpond.png"></image>
			<image class="likeIcon" :class="changed.includes(swiperId) ? 'changedLikeIcon' : 'unchangeLikeIcon'"  @click="likeAction"></image>
			<text class="likeNumText">{{inf[swiperId].likeNumber}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//农历
				nongli:"",
				//月日
				timeString:"",
				//星期
				day:"",
				selectedLikeIcon:false,
				selectedLikeNum:-1,
				swiperId:1,
				changed:[],
				codeIcon:"../../static/dailysignature/codeicon.JPG",
				inf:[{src:"../../static/dailysignature/church.jpg",text:"<p>同在一座城市，<br>为什么已好久不见......</p>",likeNumber:665},
				{src:"../../static/dailysignature/church.jpg",text:"<p>同在一座城市，<br>为什么已好久不见......</p>",likeNumber:666},
				{src:"../../static/dailysignature/church.jpg",text:"<p>同在一座城市，<br>为什么已好久不见......</p>",likeNumber:667},
				{src:"../../static/dailysignature/church.jpg",text:"<p>同在一座城市，<br>为什么已好久不见......</p>",likeNumber:668}]
			}
		},
		methods: {
			//显示对应图片的喜欢人数
			showLikeNum(e){
				this.swiperId = e.detail.current
			},
			//喜欢图标点亮选择
			likeAction(){
				this.selectedLikeNum = this.swiperId;
				if(!this.changed.includes(this.selectedLikeNum)){
					this.changed.push(this.selectedLikeNum)
					console.log(this.changed)
					return
				}
				let index = this.changed.indexOf(this.selectedLikeNum)
				this.changed.splice(index,1)
				console.log(this.changed)
			},
			//当前日期和星期
			transform(month,data,day){
				this.timeString = month + "/" + data
				let dayArray = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"]
				this.day = dayArray[day]
			},
			//农历
			getLunarDay (solarYear, solarMonth, solarDay) { 
			  const madd = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
			  // const tgString = '甲乙丙丁戊己庚辛壬癸'
			  // const dzString = '子丑寅卯辰巳午未申酉戌亥'
			  const numString = '一二三四五六七八九十'
			  const monString = '正二三四五六七八九十冬腊'
			  const CalendarData = [0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6, 0x957, 0x2092F, 0x497, 0x60C96, 0xD4A, 0xEA5, 0x50DA9, 0x5AD, 0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A, 0x61B4A, 0xB55, 0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA, 0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95, 0x6AA, 0x615AA, 0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26, 0xD95, 0x70B55, 0x56A, 0x96D, 0x5095D, 0x4AD, 0xA4D, 0x41A4D, 0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B, 0x49B, 0x41497, 0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F, 0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D, 0x92E, 0xC96, 0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95]
			  if (!(solarYear < 1921 || solarYear > 2020)) {
			    solarMonth = (parseInt(solarMonth) > 0) ? (solarMonth - 1) : 11
			    const timeArr = [solarYear, solarMonth, solarDay]
			    let TheDate = (timeArr.length !== 3) ? new Date() : new Date(timeArr[0], timeArr[1], timeArr[2])
			    let total, m, n, k
			    let isEnd = false
			    let theDateYear = TheDate.getFullYear()
			    total = (theDateYear - 1921) * 365 + Math.floor((theDateYear - 1921) / 4) + madd[TheDate.getMonth()] + TheDate.getDate() - 38
			    if (theDateYear % 4 === 0 && TheDate.getMonth() > 1) {
			      total++
			    }
			    for (m = 0; ; m++) {
			      k = (CalendarData[m] < 0xfff) ? 11 : 12
			      for (n = k; n >= 0; n--) {
			        if (total <= this.getBit(CalendarData[m], n)) {
			          isEnd = true
			          break
			        }
			        total = total - this.getBit(CalendarData[m], n)
			      }
			      if (isEnd) {
			        break
			      }
			    }
			    let cMonth, cDay 
			    cMonth = k - n + 1
			    cDay = total
			    if (k === 12) {
			      if (cMonth === Math.floor(CalendarData[m] / 0x10000) + 1) {
			        cMonth = 1 - cMonth
			      }
			      if (cMonth > Math.floor(CalendarData[m] / 0x10000) + 1) {
			        cMonth--
			      }
			    }
				cMonth = monString.charAt(cMonth - 1) + "月"
			    // let run = ''
			    let cDayStr = numString.charAt(cDay - 1)
			    /* if (cMonth < 1) {
			      run = '(闰)'
			    } */
			    if (cDay % 10 !== 0 || cDay === 10) {
			      cDayStr = numString.charAt((cDay - 1) % 10)
			    }
				cDay = (cDay < 11 ? '初' : (cDay < 20 ? '十' : (cDay < 30 ? '廿' : '三十'))) + cDayStr;
				return cMonth + cDay;
			  }
			},
			getBit (m, n) { 
			  return 29 + ((m >> n) & 1)
			}
		},
		onLoad() {
			let myDate = new Date()
			let year = myDate.getFullYear()
			let month = myDate.getMonth() + 1
			let data = myDate.getDate()
			let day = myDate.getDay()
			//加载当前日期和农历日期
			this.transform(month,data,day)
			this.nongli =  this.getLunarDay(year,month,data)
		}
		
	}
</script>

<style lang="scss" scoped>
	page{
		background: #1b1b1b;
	}
	.swiperView{
		margin-top: 100upx;
		height: 910upx;
		width: 100%;
		.swiperItem{
			width: 650upx;
			height: 910upx;
			.item{
				width: 480upx;
				height: 910upx;
				background: white;
				/* text-align: center; */
				.backgroundImg{
					margin-top: 20upx;
					width: 448upx;
					height: 700upx;
					margin-left: 15upx;
				}
				.dataImf{
					display: flex;
					flex-direction: column;
					top: 590upx;
					left: 17upx;
					width: 410upx;
					height: 130upx;
					margin-left: 30upx;
					color: white;
					font-size: 15px;
					font-weight: 500;
					position: absolute;
					background-color: #ff0000;
					background-color: rgba(0, 0, 0, 0.3);
					
				}
				.codeIcon{
					position: absolute;
					left: 350upx;
					top: 600upx;
					width: 98upx;
					height: 98upx;
				
				}
				.signatureTextView{
					padding-left: 20upx;
					height: 180upx;
					width: 448upx;
					.symbol{
						width: 34upx;
						height: 34upx;
					}
					.rightSymbol{
						margin-top: 10upx;
						margin-left: 400upx;
					}
					.signatureText{
						margin-left: 40upx;
						width: 360upx;
						height: 80upx;
						color: #181818;
						font-size: 15px;
						font-weight: 550;
					}
				}
			}
			
		}
	}
	.userActionView{
		padding-top: 100upx;
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100upx;
		.userActionIcon{
			width: 50upx;
			height: 46upx;
		}
		.downloadIcon{
			margin-left: 150upx;
		}
		.transpond{
			margin-left: 50upx;
		}
		.likeIcon{
			width: 40upx;
			height: 40upx;
			margin-left: 220upx;
		}
		.likeNumText{
			margin-top: 4upx;
			margin-left: 10upx;
			color: white;
			font-size: 15px;
			font-weight: 500;
		}
	}
	.unchangeLikeIcon{
		background: url(../../static/article/xihuan.png);
		background-size: 100% 100%;
	}
	.changedLikeIcon{
		background: url(../../static/dailysignature/selectedlike.png);
		background-size: 100% 100%;
	}
	.overflow-manage {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
</style>
