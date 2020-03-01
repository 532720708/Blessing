<template>
	<view>
		<h1>接口测试</h1>
	</view>
</template>

<script>
	//import {sdk} from '../../static/js/open.plt.0.1.js'
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			var _this = this
			uniReady(function() {
			    alert('平台SDK载入成功')
				$abAct('token', 0, function(err, token) {
							//uniConsole()
				          console.log("loginAct err = " + err)
				          console.log("loginAct back = " + token)
						  //_this.getPrayData(token)
				        })
						
				// 参数传0平台不需要检测token失效，传1需要检测token失效
				// $abAct('login', 1, function(err, token) {
				// 			uniConsole()
				//           console.log("loginAct err = " + err)
				//           console.log("loginAct back = " + token)
				//         })
			
				
			})
			//_this.getPrayData('ghsaghs/sahjshaj')
			//this.getPrayData()
			
			// this.getCity()
			
			// this.getTempleData()
			
			// this.getArticleData()
			
			// this.getBuddhistData()
			
			// this.searchInMagePage()
			
			// this.getAdsData()
			
			// this.getPrayData()
			
			// this.getBirthData()
			
			// this.getBuddistArticleData()
			
			// this.getCommentData()
			
			// this.getMusicData()
			
			// this.getVideoData()
		},
		methods: {			
			// 获取省市信息
			getCity() {
				var _this = this
				// 获取所有省市信息
				_this.$http.Api_C.province(1, [], function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.provinces = rep
						console.log('所有省市信息:' , _this.provinces)
					}			
					else {
						console.log(err)
					}
				})
			},
			
			// 获取寺庙相关数据
			getTempleData() {
				var _this = this
				
				// 获取所有寺庙信息
				_this.$http.Api_C.templeList(1, [], function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.allTemple = rep
						console.log('所有寺庙信息:' , _this.allTemple)
					}			
					else {
						console.log(err)
					}
				})
				
				// 获取所有热门寺庙信息
				_this.$http.Api_C.hotTempleList(1, [], 20, function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.hotTemples = rep
						console.log('所有热门寺庙信息:' , _this.hotTemples)
					}			
					else {
						console.log(err)
					}
				})
				
				// 按省获取所有寺庙信息
				_this.$http.Api_C.templeListByP(1, [], 3, function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.templesByP = rep
						console.log('按省获取寺庙:' , _this.templesByP)
					}			
					else {
						console.log(err)
					}
				})
				
				// 按id获取寺庙信息
				_this.$http.Api_C.templeById(1, [], 5, function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.templeInfo = rep
						console.log('按id获取寺庙:' , _this.templeInfo)
					}			
					else {
						console.log(err)
					}
				})	
			},
			
			// 获取文章信息
			getArticleData() {
				var _this = this
				
				// 获取所有文章信息
				_this.$http.Api_C.articleList(1, [], function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.allArticles = rep
						console.log('所有文章信息:' , _this.allArticles)
					}			
					else {
						console.log(err)
					}
				})
					
				// 按id获取文章具体信息
				_this.$http.Api_C.articleById(1, [], 1, function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.articleInfo = rep
						console.log('按id获取文章信息' , _this.articleInfo)
					}			
					else {
						console.log(err)
					}
				})	
			},
			
			// 获取所有佛经信息
			getBuddhistData() {
				var _this = this
				
				// 获取所有佛经信息
				_this.$http.Api_C.buddhistList(1, [], function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.allBuddhist = rep
						console.log('所有佛经信息:' , _this.allBuddhist)
					}			
					else {
						console.log(err)
					}
				})
				
				// 按id佛经信息
				_this.$http.Api_C.buddhistById(1, [], 1, function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.buddhistInfo = rep
						console.log('按id获取单个佛经' , _this.buddhistInfo)
					}			
					else {
						console.log(err)
					}
				})
				
				
			},
			
			// 首页搜索佛经和寺庙
			searchInMagePage() {
				var _this = this
				
				var key = '鸡鸣寺'
				// 搜索佛经/寺庙
				_this.$http.Api_C.searchInMainPage(1, [], key, function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.res = rep
						console.log('搜索' + key + '得到:' , _this.res)
					}			
					else {
						console.log(err)
					}
				})
			},
			
			// 获取轮播广告
			getAdsData() {
				var _this = this
				
				// 获取所有轮播广告
				_this.$http.Api_C.ads(1, [], function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.allAds = rep
						console.log('所有轮播广告' , _this.allAds)
					}			
					else {
						console.log(err)
					}
				})
				
				// 取固定数量轮播广告
				_this.$http.Api_C.adsByNum(1, [], 3, function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.adsFixedNum = rep
						console.log('固定数量轮播广告:' + _this.adsFixedNum)
					}			
					else {
						console.log(err)
					}
				})
			},
			
			// 祈福信息
			getPrayData(token) {
				var _this = this
				var now = Date.parse(new Date())/1000;
				var prayDetail = {'token': token, 'timestamp': now, 'buddhaId': 1, 'content': '身体健康', 'templeId': 1, 'worship': '1,2'}
				
				// 获取默认的祈福语句
				/**
				 * @param {Object} buddhaId 佛像id
				 * @param {Object} num 祈福语条数
				 */
				// _this.$http.Api_C.defaultPrayContent(1, [], 1, 1, function(err, rep) {
				// 	//uni.stopPullDownRefresh()
				// 	if (rep) {
				// 		//console.log(rep)
				// 		_this.defaultPrayContent = rep
				// 		console.log('默认的祈福语句' , _this.defaultPrayContent)
				// 	}			
				// 	else {
				// 		console.log(err)
				// 	}
				// })
				
				//祈福行为（暂时无法测试）
				_this.$http.Api_C.wish(1, [] , JSON.stringify(prayDetail), function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.prayRes = rep
						alert('祈福结果：' +  _this.prayRes)
					}			
					else {
						console.log('错误')
					}
				})
				
				
				// // 还愿行为（暂时无法测试）
				// _this.$http.Api_C.backWish(1, [], '', function(err, rep) {
				// 	//uni.stopPullDownRefresh()
				// 	if (rep) {
				// 		//console.log(rep)
				// 		_this.backWishRes = rep
				// 		console.log('还愿结果：' + _this.backWishRes)
				// 	}			
				// 	else {
				// 		console.log(err)
				// 	}
				// })
				
				// 获得用户许愿记录
				// _this.$http.Api_C.prayHistory(1, [], 1, function(err, rep) {
				// 	//uni.stopPullDownRefresh()
				// 	if (rep) {
				// 		//console.log(rep)
				// 		_this.prayHistory = rep
				// 		console.log('用户许愿记录:' + _this.prayHistory)
				// 	}			
				// 	else {
				// 		console.log(err)
				// 	}
				// })
			},
			
			// 诸佛圣诞日信息
			getBirthData() {
				var _this = this
				
				// 获得固定时间范围固定数量
				/**
				 * @param {Object} args(timestamp,n) 根据timestamp前后一个月选出n个
				 * @param {Object} timestamp
				 * @param {Object} num
				 */
				_this.$http.Api_C.birthByTime(1, [], 1, 1,  function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.birthsByCondition = rep
						console.log('固定时间数量圣诞日：' , _this.birthsByCondition)
					}			
					else {
						console.log(err)
					}
				})
				
				// 获取全部诸佛圣诞日
				_this.$http.Api_C.allBirth(1, [],  function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.allBirth = rep
						console.log('全部诸佛圣诞日:' + _this.allBirth)
					}			
					else {
						console.log(err)
					}
				})
			},
			
			// 获取佛学文章(和上面文章的区别？)
			getBuddistArticleData() {
				var _this = this
				
				// 首页固定数量佛学文章
				_this.$http.Api_C.buddhisArticleFixedCount(1, [], 1,  function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.buddistArticleFixedNum = rep
						console.log('首页固定数量佛学文章:' , _this.buddistArticleFixedNum)
					}			
					else {
						console.log(err)
					}
				})
				
				// 所有佛学文章
				_this.$http.Api_C.allBuddhisArticle(1, [],  function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.allBuddistArticle = rep
						console.log('所有佛学文章' , _this.allBuddistArticle)
					}			
					else {
						console.log(err)
					}
				})
			},
			
			// 获取评论信息
			getCommentData() {
				var _this = this
				
				// 获取评论信息
				/**
				* @param cmtType  评论对象类型ID
				* @param cmtObjId 评论对象具体ID
				* @param need     是否需要跟回复 1要0不要
				 */
				_this.$http.Api_C.comment(1, [], 1, 1, 0,  function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.comment = rep
						console.log('获取评论信息' , _this.comment)
					}			
					else {
						console.log(err)
					}
				})
			},
			
			// 获取佛音
			getMusicData() {
				var _this = this
				
				// 全部佛音
				_this.$http.Api_C.allMusic(1, [],  function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.allMusic = rep
						console.log('全部佛音：' , _this.allMusic)
					}			
					else {
						console.log(err)
					}
				})
				
				// 根据id获取佛音
				_this.$http.Api_C.musicById(1, [], 1,  function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.musicInfo= rep
						console.log('根据id获取佛音:' , _this.musicInfo)
					}			
					else {
						console.log(err)
					}
				})	
			},
			
			// 获取视频
			getVideoData() {
				var _this = this
				
				// 获取全部视频
				_this.$http.Api_C.allVideo(1, [], function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.allVideo = rep
						console.log('全部视频' , _this.allVideo)
					}			
					else {
						console.log(err)
					}
				})
				
				// 按id获取视频
				_this.$http.Api_C.videoById(1, [], 1, function(err, rep) {
					//uni.stopPullDownRefresh()
					if (rep) {
						//console.log(rep)
						_this.videoInfo = rep
						console.log('按id获取视频' , _this.videoInfo)
					}			
					else {
						console.log(err)
					}
				})	
			}
		}
	}
</script>

<style>
</style>
