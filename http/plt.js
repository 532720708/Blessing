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
			 * 寺庙列表(按省划分或者热门)
			 * @param {Object} _t
			 * @param {Object} args 无参即热门
			 * @param {Object} _back
			 */
			templeList(_t, args, _back){
				_rpc(_t, 'api/dev/getAllTempleList', args, _back)
			},
			
			/**
			 * 热门寺庙
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} _back
			 */
			hotTempleList(_t, args, num, _back){
				_rpc(_t, 'api/dev/getTopTempleList/' + num, args, _back)
			},
			
			/**
			 * 按省份获得寺庙列表
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} _back
			 */
			templeListByP(_t, args, pId, _back) {
				_rpc(_t, 'api/dev/getTempleListByP/' + pId, args, _back)
			},
			
			/**
			 * 按照寺庙id获得寺庙信息
			 * @param {Object} _t
			 * @param {Object} args
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
				_rpc(_t, 'api/dev/getAllArticle', args, _back)
			},
			
			/**
			 * 按照id获取文章信息
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} _back
			 */
			articleById(_t, args, _back) {
				_rpc(_t, 'api/dev/getArticleById', args, _back)
			},
			
			/**
			 * 所有佛经
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} _back
			 */
			buddhistList(_t, args, _back) {
				_rpc(_t, 'api/dev/getAllScripture', args, _back)
			},
			
			/**
			 * 按照id获取佛经信息
			 * @param {Object} _t
			 * @param {Object} args
			 * @param {Object} _back
			 */
			buddhistById(_t, args, _back) {
				_rpc(_t, 'api/dev/getScriptureById', args, _back)
			},
			
		},
		
	}
}