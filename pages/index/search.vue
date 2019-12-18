<template>
	<view class="searchContent">
		<view class="search-box" >
			<!-- mSearch组件 如果使用原样式，删除组件元素-->
			<view class="action" @tap="backClik"><text class="cuIcon-back"><span></span></text></view>
			<mSearch class="mSearch-input-box" :mode="2" button="outside" :placeholder="defaultKeyword" @search="doSearch(false)"
			 @input="inputChange" @confirm="doSearch(false)" v-model="keyword"  ref="mainindex"></mSearch>
		</view>
		<view class="search-keyword flex-col-nowrap" @touchstart="blur">
			<scroll-view class="keyword-list-box" v-show="isShowkeywordList" scroll-y>
				<view class="keyword-section flex-row-wrap flex-center" v-if="keywordList.length > 0" v-for="(tp, i) in keywordList" :key="i">
					<view class="keyword-type">{{tp.type}}</view>
					<view class="keyword-entry" hover-class="keyword-entry-tap" v-for="(row, index) in tp.keywords" :key="index" @tap="doSearch(row,1)">						
						<view class="keyword-text" >
							<!-- <image class="searchLogo" :src="$g_.cdn + row.icon"></image> -->
							<!-- <image class="keyword-logo" :src="row.logo"></image> -->
							<rich-text :nodes="row"></rich-text>
						</view>
						<!-- @tap="setkeyword(row)" -->
						<view class="keyword-img" >
							<image src="../../static/search/back.png"></image>
						</view>
					</view>
					<view v-if="keywordList.length-1 > i" class="keyword-gap"></view>
				</view>
				<view class="nodata" v-if="keywordList.length == 0">
					<text>暂无数据</text>
				</view>
			</scroll-view>
			<scroll-view class="keyword-box" v-show="!isShowkeywordList" scroll-y>
				<view class="keyword-block" v-if="oldKeywordList.length>0">
					<view class="keyword-list-header">
						<view>历史搜索</view>
						<view>
							<image @tap="oldDelete" src="/static/index/delete.png"></image>
						</view>
					</view>
					<view class="keyword">
						<view v-for="(keyword,index) in oldKeywordList" @tap="doSearch(keyword,keyword.name == undefined ?null : 1)" :key="index">
							<!-- <image class="searchLogo" src="/static/HM-search/back.png"></image> -->
							{{keyword.name == undefined ? keyword : keyword.name}}
						</view>
					</view>
				</view>
				
				<!-- 		<view class="keyword-block">
					<view class="keyword-list-header">
						<view>热门搜索</view>
						<view>
							<image @tap="hotToggle" :src="'/static/HM-search/attention'+forbid+'.png'"></image>
						</view>
					</view>
					<view class="keyword" v-if="forbid==''">
						<view v-for="(keyword,index) in hotKeywordList" @tap="doSearch(keyword)" :key="index">{{keyword}}</view>
					</view>
					<view class="hide-hot-tis" v-else>
						<view>当前搜热门搜索已隐藏</view>
					</view>
				</view> -->
			</scroll-view>
		</view>
	</view>
</template>

<script>
	//引用mSearch组件，如不需要删除即可
	import mSearch from '@/component/search/mehaotian-search-revision.vue';
	export default {
		data() {
			return {
				defaultKeyword: "",
				keyword: "",
				oldKeywordList: [],
				hotKeywordList: [],
				keywordList: [],		// 寺庙搜索关键字
				buddhistKeyswords: [],	// 佛经关键字
				forbid: '',
				isShowkeywordList: false,
				aaa: 'bg-gradual-fff'
			}
		},
		onLoad() {
			this.init();
		},
		computed: {
		},
		components: {
			//引用mSearch组件，如不需要删除即可
			mSearch
		},
		methods: {
			init() {
				this.loadDefaultKeyword();
				this.loadOldKeyword();
				// this.loadHotKeyword();
				
			},
			blur() {
				uni.hideKeyboard();
				console.log('关闭键盘')
				// this.$refs.mainindex.blur();
			},
			//加载默认搜索关键字
			loadDefaultKeyword() {
				//定义默认搜索关键字，可以自己实现ajax请求数据再赋值,用户未输入时，以水印方式显示在输入框，直接不输入内容搜索会搜索默认关键字
				this.defaultKeyword = "搜索";
			},
			//加载历史搜索,自动读取本地Storage
			loadOldKeyword() {
				var self = this;
				uni.getStorage({
					key: 'OldKeys',
					success: (res) => {
						var OldKeys = JSON.parse(res.data);
						self.oldKeywordList = OldKeys;
					}
				});
			},
			//加载热门搜索
			// loadHotKeyword() {
			// 	//定义热门搜索关键字，可以自己实现ajax请求数据再赋值
			// 	this.hotKeywordList = ['键盘', '鼠标', '显示器', '电脑主机', '蓝牙音箱', '笔记本电脑', '鼠标垫', 'USB', 'USB3.0'];
			// },
			//监听输入
			inputChange(event) {
				
				let _this = this
				var keyword = event;
				
				console.log(_this.keywordList)
				
				// 未输入内容
				if(!keyword) {
					_this.isShowkeywordList = false
					_this.keywordList = []
					return
				}
				
				_this.isShowkeywordList = true
				
				if(keyword == '鸡' || keyword == "鸡鸣" || keyword == "鸡鸣寺")	{
					var o1 = {type: "寺庙", keywords: []}
					//var o2 = {type: "佛经", keywords: []}
					_this.keywordList.push(o1)
					//_this.keywordList.push(o2)
					
					if(_this.keywordList[0].keywords.indexOf('鸡鸣寺') == -1) {
						_this.keywordList[0].keywords.push('鸡鸣寺')
					}
					
					// if(_this.keywordList[1].keywords.indexOf('金钢经') == -1) {
					// 	_this.keywordList[1].keywords.push('金刚经')
					// }
				} else {
					_this.keywordList = []
				}
				
				if(keyword == '金' || keyword == "金刚")	{
					var o1 = {type: "寺庙", keywords: []}
					var o2 = {type: "佛经", keywords: []}
					_this.keywordList.push(o1)
					_this.keywordList.push(o2)
					
					if(_this.keywordList[0].keywords.indexOf('金刚寺') == -1) {
						_this.keywordList[0].keywords.push('金刚寺')
					}
					
					if(_this.keywordList[1].keywords.indexOf('金钢经') == -1) {
						_this.keywordList[1].keywords.push('金刚经')
					}
				} else {
					_this.keywordList = []
				}
				
			},
			//顶置关键字
			setkeyword(data) {
				this.keyword = data.keyword;
			},
			//清除历史搜索
			oldDelete() {
				uni.showModal({
					content: '确定清除历史搜索记录？',
					success: (res) => {
						if (res.confirm) {
							console.log('用户点击确定');
							this.oldKeywordList = [];
							uni.removeStorage({
								key: 'OldKeys'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			//热门搜索开关
			hotToggle() {
				this.forbid = this.forbid ? '' : '_forbid';
			},
			//执行搜索
			doSearch(key, index) {
				console.log(key);
				key = key ? key : this.keyword ? this.keyword : this.defaultKeyword;
				if (index == 1) {
					this.keyword = key;
				} else {
					this.keyword = key;
					this.inputChange(this.keyword)
				}
				this.saveKeyword(key); //保存为历史
				
				if (key === '鸡鸣寺') {
					uni.navigateTo({
						url: "../temple/temple" 
					})
				}
				
				// uni.showToast({
				// 	title: key,
				// 	icon: 'none',
				// 	duration: 2000
				// });

			},
			//保存关键字到历史记录
			saveKeyword(keyword) {
				uni.getStorage({
					key: 'OldKeys',
					success: (res) => {
						
						console.log(res.data);
						var OldKeys = JSON.parse(res.data);

						var findIndex = -1;
							
						for (let i = 0; i < OldKeys.length; i++) {
							if(JSON.stringify(OldKeys[i]) == JSON.stringify(keyword)){
								findIndex = i;
							}
						}
						 
						//判断是关键字还是搜索后的数据
						// for (let i = 0; i < OldKeys.length; i++) {
							
						// 	if(JSON.toString(OldKeys[i]) == JSON.toString(keyword)){
						// 		findIndex = i;
						// 	}
						// }
						// var findIndex = OldKeys.indexOf(JSON.stringify(keyword));
						if (findIndex == -1) {
							OldKeys.unshift(keyword);
						} else {
							OldKeys.splice(findIndex, 1);
							OldKeys.unshift(keyword);
						}
						//最多10个纪录
						OldKeys.length > 10 && OldKeys.pop();
						uni.setStorage({
							key: 'OldKeys',
							data: JSON.stringify(OldKeys)
						});
						this.oldKeywordList = OldKeys; //更新历史搜索
					},
					fail: (e) => {
						var OldKeys = [keyword];
						uni.setStorage({
							key: 'OldKeys',
							data: JSON.stringify(OldKeys)
						});
						this.oldKeywordList = OldKeys; //更新历史搜索
					}
				});
			},
			backClik() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>
<style>
	view {
		display: block;
	}
	.searchContent{
		
	}
	.search-box {
		width: 100%;
		background-color: rgb(242, 242, 242);
		padding: 15upx 2.5%;
		display: flex;
		justify-content: space-between;
	}

	.search-box .action {
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		height: 60upx;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		width: 60upx;
		cursor: pointer;
		font-size: 40upx;
	}

	.search-box .mSearch-input-box {
		width: 100%;

	}

	.search-box .input-box {
		width: 85%;
		flex-shrink: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.search-box .search-btn {
		width: 15%;
		margin: 0 0 0 2%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		font-size: 28upx;
		color: #fff;
		background: linear-gradient(to right, #ff9801, #ff570a);
		border-radius: 60upx;
	}

	.search-box .input-box>input {
		width: 100%;
		height: 60upx;
		font-size: 32upx;
		border: 0;
		border-radius: 60upx;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		padding: 0 3%;
		margin: 0;
		background-color: #ffffff;
	}

	.placeholder-class {
		color: #9e9e9e;
	}

	.search-keyword {
		width: 100%;
		background-color: rgb(242, 242, 242);
	}

	.keyword-list-box {
		height: calc(100vh - 110upx);
		padding-top: 10upx;
		//border-radius: 20upx 20upx 0 0;
		background-color: #fff;
	}

	.keyword-entry-tap {
		background-color: #eee;
	}

	.keyword-entry {
		width: 94%;
		height: 80upx;
		margin: 0 6%;
		font-size: 30upx;
		color: #333;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: solid 1upx #e7e7e7;
		margin-bottom: 30upx;
	}

	.keyword-entry image {
		width: 60upx;
		height: 60upx;
	}

	.keyword-entry .keyword-text,
	.keyword-entry .keyword-img {
		height: 80upx;
		display: flex;
		align-items: center;
	}

	.keyword-entry .keyword-text {
		width: 90%;
	}

	.keyword-entry .keyword-img {
		height: 80upx;
		display: flex;
		align-items: center;
	}

	.keyword-box {
		height: calc(100vh - 110upx);
		// border-radius: 20upx 20upx 0 0;
		background-color: #fff;
	}

	.keyword-box .keyword-block {
		padding: 10upx 0;
	}

	.keyword-box .keyword-block .keyword-list-header {
		width: 94%;
		padding: 10upx 3%;
		font-size: 27upx;
		color: #333;
		display: flex;
		justify-content: space-between;
	}

	.keyword-box .keyword-block .keyword-list-header image {
		width: 40upx;
		height: 40upx;
	}

	.keyword-box .keyword-block .keyword {
		width: 100%;
		padding: 3px 3%;
		display: flex;
		flex-flow: wrap;
		justify-content: flex-start;
	}

	.keyword-box .keyword-block .hide-hot-tis {
		display: flex;
		justify-content: center;
		font-size: 28upx;
		color: #6b6b6b;
	}

	.keyword-box .keyword-block .keyword>view {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-radius: 60upx;
		padding: 0 20upx;
		margin: 10upx 20upx 10upx 0;
		height: 60upx;
		font-size: 28upx;
		background-color: #eee;
		color: #6b6b6b;
	}

	.keyword-box .keyword-block .keyword .searchLogo {
		width: 60upx;
		height: 60upx;
	}

	.sback {
		font-size: 16px;
	}

	.sback:before {
		content: "\E679";
	}
	
	.nodata{
		width: 100%;
		height: 100upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28upx;
		color: #999999;
	}
	
	.keyword-type {
		line-height: 50upx;
		margin: 0 6%;
		width: 94%;
		font-size: 26upx;
		height: 50upx;
		color: #999999;
		border-bottom: solid 1upx #e7e7e7;
	}
	
	.keyword-gap {
		height: 10upx;
		width: 750upx;
		background-color: rgb(242, 242, 242);
	}
	
</style>

