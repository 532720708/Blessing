<template>
	<view>
		<view class="top-back stickyTop">
			<image class="close-img" src="../../static/index/new/location/close.png" @tap="backToIndex()"></image>
			<image v-if="!isFocus && inputVal == ''" class="search-img" src="../../static/index/top/sousuo.png" mode="scaleToFill"></image>
			<!-- <view class="search-tip">搜索寺庙</view> -->
			<input class="search-input flex-row-wrap flex-center" :adjust-position="false" type="text" :placeholder="place" 
				placeholder-style="text-align:center;color: #343844" confirm-type="search" :focus="isFocus" @focus="focus"
				@blur="blur" @input="inputChange" @confirm="toSearch()">
			</input>
		</view>
		
		<view class="sub-info">
			<!-- 当前位置 -->
			<view class="cur-city">
				<view class="title-font">当前位置</view>
				<view class="cur-city-block flex-row-nowrap" @tap="searchToIndex(curCity)">
					<image src="../../static/index/new/location/loc-red.png" class="loc-red-img" mode="aspectFit"></image>
					<view>{{curCity}}</view>
				</view>
			</view>
			
			<!-- 热门城市 -->
			<view class="hot-city">
				<view class="title-font">热门城市</view>
				<view class="hot-city-layout flex-row-wrap">
					<view v-for="(ht, index) in hotCities" :key="index" class="hot-city-block" @tap="searchToIndex(ht.name)">{{ht.name}}</view>
				</view>
			</view>
		</view>
		
		<!-- 按首字母分 -->
		<view class="city-by-initial">
			<view class="initial-city-block" v-for="(cs, index) in allCities" :key="index">
				<view class="initial-letter">{{cs.name}}</view>
				<view class="part-cities">
					<view class="flex-col-nowrap" v-for="(c, i) in cs.citys" :key="i">
						<view class="item-city"  @tap="searchToIndex(c)">{{c}}</view>
						<view v-if="!(cs.citys.length - 1 == i)" class="spilt">
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="letters flex-col-nowrap">
			<view class="s-letter" v-for="(l, index) in allCities" :key="index">{{l.name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputVal: '',
				isFocus: false,
				place: '搜索城市',
				curCity: '南京',
				hotCities: [{id:1, name: '上海'},{id: 2, name: '苏州'},{id: 3, name: '镇江'},
							{id: 4, name: '无锡'},{id: 5, name: '南通'},{id: 6, name: '北京'},
							{id: 7, name: '杭州'},{id: 8, name: '扬州'},{id: 9, name: '徐州'}],
				allCities: [{
								name: "A",
								citys: ["阿坝", "阿拉善", "阿里", "安康", "安庆", "鞍山", "安顺", "安阳", "澳门"]
							},
							{
								name: "B",
								citys: ["北京", "白银", "保定", "宝鸡", "保山", "包头", "巴中", "北海", "蚌埠", "本溪", "毕节", "滨州", "百色", "亳州"]
							},
							{
								name: "C",
								citys: ["重庆", "成都", "长沙", "长春", "沧州", "常德", "昌都", "长治", "常州", "巢湖", "潮州", "承德", "郴州", "赤峰", "池州", "崇左", "楚雄", "滁州", "朝阳"]
							},
							{
								name: "D",
								citys: ["大连", "东莞", "大理", "丹东", "大庆", "大同", "大兴安岭", "德宏", "德阳", "德州", "定西", "迪庆", "东营"]
							},
							{
								name: "E",
								citys: ["鄂尔多斯", "恩施", "鄂州"]
							},
							{
								name: "F",
								citys: ["福州", "防城港", "佛山", "抚顺", "抚州", "阜新", "阜阳"]
							},
							{
								name: "G",
								citys: ["广州", "桂林", "贵阳", "甘南", "赣州", "甘孜", "广安", "广元", "贵港", "果洛"]
							},
							{
								name: "H",
								citys: ["杭州", "哈尔滨", "合肥", "海口", "呼和浩特", "海北", "海东", "海南", "海西", "邯郸", "汉中", "鹤壁", "河池", "鹤岗", "黑河", "衡水", "衡阳", "河源", "贺州", "红河", "淮安", "淮北", "怀化", "淮南", "黄冈", "黄南", "黄山", "黄石", "惠州", "葫芦岛", "呼伦贝尔", "湖州", "菏泽"]
							},
							{
								name: "J",
								citys: ["济南", "佳木斯", "吉安", "江门", "焦作", "嘉兴", "嘉峪关", "揭阳", "吉林", "金昌", "晋城", "景德镇", "荆门", "荆州", "金华", "济宁", "晋中", "锦州", "九江", "酒泉"]
							},
							{
								name: "K",
								citys: ["昆明", "开封"]
							},
							{
								name: "L",
								citys: ["兰州", "拉萨", "来宾", "莱芜", "廊坊", "乐山", "凉山", "连云港", "聊城", "辽阳", "辽源", "丽江", "临沧", "临汾", "临夏", "临沂", "林芝", "丽水", "六安", "六盘水", "柳州", "陇南", "龙岩", "娄底", "漯河", "洛阳", "泸州", "吕梁"]
							},
							{
								name: "M",
								citys: ["马鞍山", "茂名", "眉山", "梅州", "绵阳", "牡丹江"]
							},
							{
								name: "N",
								citys: ["南京", "南昌", "南宁", "宁波", "南充", "南平", "南通", "南阳", "那曲", "内江", "宁德", "怒江"]
							},
							{
								name: "P",
								citys: ["盘锦", "攀枝花", "平顶山", "平凉", "萍乡", "莆田", "濮阳"]
							},
							{
								name: "Q",
								citys: ["青岛", "黔东南", "黔南", "黔西南", "庆阳", "清远", "秦皇岛", "钦州", "齐齐哈尔", "泉州", "曲靖", "衢州"]
							},
							{
								name: "R",
								citys: ["日喀则", "日照"]
							},
							{
								name: "S",
								citys: ["上海", "深圳", "苏州", "沈阳", "石家庄", "三门峡", "三明", "三亚", "商洛", "商丘", "上饶", "山南", "汕头", "汕尾", "韶关", "绍兴", "邵阳", "十堰", "朔州", "四平", "绥化", "遂宁", "随州", "宿迁", "宿州"]
							},
							{
								name: "T",
								citys: ["天津", "太原", "泰安", "泰州", "台州", "唐山", "天水", "铁岭", "铜川", "通化", "通辽", "铜陵", "铜仁", "台湾"]
							},
							{
								name: "W",
								citys: ["武汉", "乌鲁木齐", "无锡", "威海", "潍坊", "文山", "温州", "乌海", "芜湖", "乌兰察布", "武威", "梧州"]
							},
							{
								name: "X",
								citys: ["厦门", "西安", "西宁", "襄樊", "湘潭", "湘西", "咸宁", "咸阳", "孝感", "邢台", "新乡", "信阳", "新余", "忻州", "西双版纳", "宣城", "许昌", "徐州", "香港", "锡林郭勒", "兴安"]
							},
							{
								name: "Y",
								citys: ["银川", "雅安", "延安", "延边", "盐城", "阳江", "阳泉", "扬州", "烟台", "宜宾", "宜昌", "宜春", "营口", "益阳", "永州", "岳阳", "榆林", "运城", "云浮", "玉树", "玉溪", "玉林",]
							},
							{
								name: "Z",
								citys: ["杂多县", "赞皇县", "枣强县", "枣阳市", "枣庄", "泽库县", "增城市", "曾都区", "泽普县", "泽州县", "札达县", "扎赉特旗", "扎兰屯市", "扎鲁特旗", "扎囊县", "张北县", "张店区", "章贡区", "张家港", "张家界", "张家口", "漳平市", "漳浦县", "章丘市", "樟树市", "张湾区", "彰武县", "漳县", "张掖", "漳州", "长子县", "湛河区", "湛江", "站前区", "沾益县", "诏安县", "召陵区", "昭平县", "肇庆", "昭通", "赵县", "昭阳区", "招远市", "肇源县", "肇州县", "柞水县", "柘城县", "浙江", "镇安县", "振安区", "镇巴县", "正安县", "正定县", "正定新区", "正蓝旗", "正宁县", "蒸湘区", "正镶白旗", "正阳县", "郑州", "镇海区", "镇江", "浈江区", "镇康县", "镇赉县", "镇平县", "振兴区", "镇雄县", "镇原县", "志丹县", "治多县", "芝罘区", "枝江市", "芷江侗族自治县", "织金县", "中方县", "中江县", "钟楼区", "中牟县", "中宁县", "中山", "中山区", "钟山区", "钟山县", "中卫", "钟祥市", "中阳县", "中原区", "周村区", "周口", "周宁县", "舟曲县", "舟山", "周至县", "庄河市", "诸城市", "珠海", "珠晖区", "诸暨市", "驻马店", "准格尔旗", "涿鹿县", "卓尼", "涿州市", "卓资县", "珠山区", "竹山县", "竹溪县", "株洲", "株洲县", "淄博", "子长县", "淄川区", "自贡", "秭归县", "紫金县", "自流井区", "资溪县", "资兴市", "资阳"]
							}
						],
			}
		},
		onLoad(data) {
			if(data.city) {
				this.curCity = data.city
			}
		},
		watch: {
			inputVal(newVal) {
				// if (newVal) {
				// 	this.searchName = '搜索';
				// 	//this.isDelShow = true; //HM修改 直接点击页面预设关键字样式异常，注销
				// } else {
				// 	this.searchName = '取消';
				// 	this.isDelShow = false;
				// }
			},
			//HM修改 双向绑定
			value(val) {
				// if(val) {
				// 	this.isDelShow = true
				// }
				// this.inputVal = val;
			},
		},
		methods:{
			focus() {
				this.isFocus = true;
				this.place = ''
			},
			blur() {
				this.isFocus = false;
				this.place = '搜索城市'
			},
			//HM修改 触发组件input事件
			inputChange(event){
				this.inputVal = event.detail.value;
			},
			backToIndex() {
				uni.navigateBack({
					delta:1
				})
			},
			// 确认搜索
			toSearch() {
				uni.hideKeyboard()
				console.log(this.inputVal)
				var val = this.inputVal
				var cities = this.allCities
				for(var i = 0;i < cities.length; i++) {
					for(var j = 0; j < cities[i].citys.length; j++) {
						var c = cities[i].citys
						if(c[j].indexOf(val.replace(/\s/g,"")) != -1) {
							this.searchToIndex(c[j])
							return
						}
					}
				}
				
				// 未找到
				uni.showModal({
				    title: '',
				    content: '未找到该地区',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			searchToIndex(cityName) {
				// uni.setStorage({
				// 	key: 'curCity',
				// 	data: cityName,
				// 	success: function() {
				// 		uni.switchTab({
				// 			url:'../index/newIndex'
				// 		})
				// 	}
				// })
				let pages = getCurrentPages(); 
				let prevPage = pages[ pages.length - 2 ];  //上一页页面实例
				prevPage.$vm.curCity = cityName
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #f6f6f6;
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	}
	
	.top-back {
		
		width: 100%;
		height: 160upx;
		background-image: -moz-linear-gradient( 180deg, rgb( 234, 181, 128 ) 0%, rgb( 255, 214, 163 ) 100%);
		background-image: -webkit-linear-gradient( 180deg, rgb( 234, 181, 128 ) 0%, rgb( 255, 214, 163 ) 100%);
		//position:relative;
		.close-img {
			position: absolute;
			width: 40upx;
			height: 40upx;
			bottom: 70upx;
			left: 40upx;
		}
		.search-img {
			position: absolute;
			left: 300upx;
			bottom: 74upx;
			height: 30upx;
			width: 30upx;
			z-index: 10;
		}
		.search-input {
			padding-left: 30upx;
			line-height: 60upx;
			position: absolute;
			left: 125upx;
			bottom: 60upx;
			height: 60upx;
			width: 500upx;
			border-radius: 40upx;
			background: #ffffff;
			font-size: 33upx;
			color: #343844;
		}
	}
	
	// 当前及热门城市
	.sub-info {
		.cur-city {
			.cur-city-block  {
				margin-left: 30upx;
				margin-top: 30upx;
				.loc-red-img {
					width: 50upx;
					height: 50upx;
					margin-left: 30upx;
					margin-top: 10upx;
				}
			}
		}
		.hot-city {
			.hot-city-layout {
				.hot-city-block {
					margin-left: 30upx;
					margin-top: 30upx;
				}
				
			}
		}
	}
	
	// 城市块
	.cur-city-block, .hot-city-block {
		width: 200upx;
		height: 75upx;
		background-color: #FFFFFF;
		text-align: center;
		line-height: 75upx;
		font-size: 32upx;
		border-radius: 15upx;
	}
	
	// 按首字母分
	.initial-city-block {
		.initial-letter {
			padding-left: 40upx;
			width: 650upx;
			height: 70upx;
			font-size: 34upx;
			font-weight: 700;
			line-height: 70upx;
		}
		.item-city {
			padding-left: 40upx;
			background-color: #FFFFFF;
			width: 650upx;
			height: 90upx;
			line-height: 90upx;
			font-size: 35upx;
		}
		.part-cities {
			width: 690upx;
			background-color: #FFFFFF;
		}
	}
	
	// 字母
	.letters  {
		position: absolute;
		right: 0;
		width: 50upx;
		top: 540upx;
		font-size: 24upx;
		.s-letter {
			margin-left: 10upx;
		}
	}
	
	
	// 分割线
	.spilt {
		margin-left: 30upx;
		width: 85%;
		border-top: 1upx solid #e3e3e3;
	}
	
	.title-font {
		margin-left: 30upx;
		margin-top: 30upx;
		font-size: 32upx;
		color: #999999;
	}
</style>
