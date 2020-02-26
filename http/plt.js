export default function(_rpc) {
	return {
		Api_C:{
						
			/**
			 * 省市信息
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} _back
			 */
			province(_t, args, _back) {
				_rpc(_t, 'api/dev/getCity',  args, _back)
			},
			
			/**
			 * 寺庙列表
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} _back
			 */
			templeList(_t, args, _back){
				_rpc(_t, 'api/dev/getAllTempleList', args, _back)
			},
			
			/**
			 * 热门寺庙
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} num
			 * @param {Object} _back
			 */
			hotTempleList(_t, args, num, _back){
				_rpc(_t, 'api/dev/getTopTempleList/' + num, args, _back)
			},
			
			/**
			 * 按省份获得寺庙列表
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} pid
			 * @param {Object} _back
			 */
			templeListByP(_t, args, pid, _back) {
				_rpc(_t, 'api/dev/getTempleListByP/' + pid, args, _back)
			},
			
			/**
			 * 按照寺庙id获得寺庙信息
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} tid
			 * @param {Object} _back
			 */
			templeById(_t, args, tId, _back) {
				_rpc(_t, 'api/dev/getTempleListById/' + tId, args, _back)
			},
			
			/**
			 * 获得所有文章
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} _back
			 */
			articleList(_t, args, _back) {
				_rpc(_t, 'api/dev/getArticle', args, _back)
			},
			
			/**
			 * 按照id获取文章信息
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} aId
			 * @param {Object} _back
			 */
			articleById(_t, args, aId, _back) {
				_rpc(_t, 'api/dev/getArticle/' + aId, args, _back)
			},
			
			/**
			 * 所有佛经
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} _back
			 */
			buddhistList(_t, args, _back) {
				_rpc(_t, 'api/dev/getScripture', args, _back)
			},
			
			/**
			 * 按照id获取佛经信息
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} bId
			 * @param {Object} _back
			 */
			buddhistById(_t, args, bId, _back) {
				_rpc(_t, 'api/dev/getScripture/' + bId, args, _back)
			},
			
			/**
			 * 主页搜索寺庙或佛经
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} keywords
			 * @param {Object} _back
			 */
			searchInMainPage(_t, args, keywords, _back) {
				_rpc(_t, 'api/dev/search/' + keywords, args, _back)
			},
			
			/**
			 * 获取轮播广告
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} _back
			 */
			ads(_t, args, _back) {
				_rpc(_t, 'api/dev/getAd', args, _back)
			},
			
			/**
			 * 按数量获取轮播广告
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} num
			 * @param {Object} _back
			 */
			adsByNum(_t, args, num, _back) {
				_rpc(_t, 'api/dev/getAd/' + num, args, _back)
			},
			
			/**
			 * 获得默认的祈福语句
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} buddhaId 佛像id
			 * @param {Object} num 祈福语条数
			 * @param {Object} _back
			 */
			defaultPrayContent(_t, args, buddhaId, num, _back) {
				_rpc(_t, 'api/dev/getDefaultPrayContent/' + buddhaId + '/' + num, args, _back)
			},
			
			/**
			 * 祈福行为,暂无返回值
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} _back
			 */
			wish(_t, args, str, _back) {
				_rpc(_t, 'api/dev/wish/' + str, args, _back)
			},
			
			/**
			 * 还愿,暂无返回值
			 * @param {Object} _t
			 * @param {Object} args 
			 * @param {Object} _back
			 */
			backWish(_t, args, _back) {
				_rpc(_t, 'api/dev/backWish', args, _back)
			},
			
			/**
			 * 获得用户pray记录
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} uId
			 * @param {Object} _back
			 */
			prayHistory(_t, args, uId, _back) {
				_rpc(_t, 'api/dev/getPrayHistory/' + uId, args, _back)
			},
			
			/**
			 * 获取诸佛圣诞日
			 * @param {Object} _t
			 * @param {Object} args(timestamp,n) 根据timestamp前后一个月选出n个
			 * @param {Object} timestamp
			 * @param {Object} num
			 * @param {Object} _back
			 */
			birthByTime(_t, args, timestamp, num, _back) {
				_rpc(_t, 'api/dev/getBirth/' + timestamp + '/' + num, args, _back)
			},
			
			/**
			 * 获取全部诸佛圣诞日
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} _back
			 */
			allBirth(_t, args, _back) {
				_rpc(_t, 'api/dev/getBirth', args, _back)
			},
			
			/**
			 * 首页佛学文章
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} num
			 * @param {Object} _back
			 */
			buddhisArticleFixedCount(_t, args, num, _back) {
				_rpc(_t, 'api/dev/getBuddhistArticle/' + num, args, _back)
			},
			
			/**
			 * 全部佛学文章
			 * @param {Object} _t
			 * @param {Object} args 
			 * @param {Object} _back
			 */
			allBuddhisArticle(_t, args, _back) {
				_rpc(_t, 'api/dev/getBuddhistArticle', args, _back)
			},
			
			/**
			 * 获取评论
			 * @param {Object} _t
			 * @param {Object} args
			 * 	* @param cmtType  评论对象类型ID
				* @param cmtObjId 评论对象具体ID
				* @param need     是否需要跟回复 1要0不要
			 * @param {Object} _back
			 */
			comment(_t, args, type, cId, need, _back) {
				_rpc(_t, 'api/dev/getComment/' + type + '/' + cId + '/' + need, args, _back)
			},
			
			/**
			 * 全部佛音
			 * @param {Object} _t
			 * @param {Object} args 
			 * @param {Object} _back
			 */
			allMusic(_t, args, _back) {
				_rpc(_t, 'api/dev/getMusic', args, _back)
			},
			
			/**
			 * 根据id获取佛音
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} mId
			 * @param {Object} _back
			 */
			musicById(_t, args, mId, _back) {
				_rpc(_t, 'api/dev/getMusic/' + mId, args, _back)
			},
			
			/**
			 * 获取全部视频
			 * @param {Object} _t
			 * @param {Object} args 
			 * @param {Object} _back
			 */
			allVideo(_t, args, _back) {
				_rpc(_t, 'api/dev/getVideo', args, _back)
			},
			
			/**
			 * 根据id获取视频
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} vId
			 * @param {Object} _back
			 */
			videoById(_t, args, vId, _back) {
				_rpc(_t, 'api/dev/getVideo/' + vId, args, _back)
			},
			
		},
		
	}
}