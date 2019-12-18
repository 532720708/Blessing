import plt from './plt.js'
import cfg from '../cfg.js'

let _header = {}
let _loading = 0

let ab_ = {
	load(show) {
		if (show) {
			//console.log('showLoading')
			//var end = 0
			// #ifdef APP-PLUS
			if (Vue.prototype.$abPostEvent) {
				Vue.prototype.$abPostEvent('showLoading', '1')
			}
			var ws = plus.webview.currentWebview()
			// 显示遮罩层
			ws.setStyle({
				mask: 'rgba(0,0,0,0.5)'
			})
			// #endif
			// #ifndef APP-PLUS
			uni.showLoading({
				title: '加载中',
				mask: true,
			})
			// #endif
	
	
		} else {
			//console.log('hideLoading')
			// #ifdef APP-PLUS
			var ws = plus.webview.currentWebview()
			ws.setStyle({
				mask: 'none'
			})
			if (Vue.prototype.$abPostEvent) {
				Vue.prototype.$abPostEvent('hideLoading', '1')
			}
			// #endif
			// #ifndef APP-PLUS
			uni.hideLoading()
			// #endif
		}
	},
	loading(rq) {
		if (rq) {
			if (++_loading === 1) {
				ab_.load(true)
			}
	
		} else {
			if (--_loading <= 0) {
				ab_.load(false)
			}
		}
	},
	rq(uri, postData, callback, files, backgroud, host) {
		
		let req = typeof(uri) === 'object' ? uri : {
			header: _header,
			url: uri
		}
		console.log(req.url)
		
		// console.log('rq ' + req.url)
		// 通用回调
		req.success = function(rep) {
			if (!backgroud) {
				ab_.loading()
			}
	
			if (callback) {
				callback(undefined, rep.data)
			}
		}
		req.fail = function(err) {
			let sErr = 0
			if (!backgroud) {
				ab_.loading()
				sErr = 1
			}
	
			if (callback) {
				sErr = !callback(err, undefined)
			}
	
			if (sErr) {
				// 显示请求错误提示
				ab_.toast('请求错误, (' + err.errMsg + ')')
			}
		}
	
		// 请求中
		if (!backgroud) {
			ab_.loading(1)
		}
		
		// 请求文件
		if (files) {
			let len = files.length
			if (!len) {
				// 表单提交
				let header = {
					...req.header
				}
	
				header['content-type'] = 'application/x-www-form-urlencoded'
				req.header = header
				req.method = 'post'
				req.dataType = 'x-www-form-urlencoded'
				req.data = postData
				uni.request(req)
				return
			}
	
			if (len === 1) {
				// 单文件上传
				let file = files[0]
				req.name = file.name
				req.filePath = file.filePath
	
			} else {
				// 多文件上传
				req.files = files
			}
	
			if (postData) {
				req.formData = postData
			}
	
			let header = {
				...req.header
			}
	
			header['Content-Type'] = 'multipart/form-data'
			req.header = header
			uni.uploadFile(req)
	
		} else {
			if (postData !== undefined && postData !== 0) {
				// post请求
				req.method = 'post'
				if (postData !== '') {
					req.data = postData
				}
			}
	
			uni.request(req)
		}
	},
	rpc(type, uri, args, callback, host) {
		let rpcRep = function(err, rep) {
			ab_.rpcRep(rep, callback)
		}
	
		if (args) {
			ab_.rq(uri, JSON.stringify(args), rpcRep, 0, type === 0, host)
	
		} else {
			ab_.rq(uri, 0, rpcRep, 0, type === 0, host)
		}
	},
	rpcRep(data, callback) {
		if (typeof(data) === 'string' && data[0] === '[') {
			try {
				data = ab.parseJson(data)
	
			} catch (e) {
				console.err(e)
			}
		}
	
		if (!data || !Array.isArray(data)) {
			callback('data err', undefined)
			return
		}
	
		try {
			if (data.length > 2) {
				ab.posts(data, 2)
			}
	
		} finally {
			if (data[0] === 1) {
				if (callback) callback(undefined, data[1])
	
			} else {
				let err = data[0]
				if (err === 'NO_LOGIN') {
					ab_.rqErr(err, data[1])
					return
				}
	
				try {
					if (callback && callback(err, undefined, data[1])) {
						return
					}
	
				} catch (e) {
					throw e
				}
	
				ab_.rqErr(err, data[1])
			}
		}
	},
	
	toast(msg, icon, dur) {
		uni.showToast({
			title: msg,
			icon: icon || 'none',
			duration: dur || 1000
		})
	},
	
	rqErr(err, errData) {
		if (err === 'NO_LOGIN') {
			alert('未登录')
			return
		}
	
		// 处理错误
		var msg;
		switch (err) {
			default:
				msg = '访问出错[' + err + ']'
				break
		}
	
		ab_.toast(msg)
	},
}

let http = plt(ab_.rpc) 
export default http