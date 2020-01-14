import Vue from 'vue'
import App from './App'

// 轮播样式
import swiperDots from './component/carousel/swiper-dots.vue'
Vue.component('swiperDots', swiperDots)

// 请求
import http from './http/http.js'
Vue.prototype.$http = http

// 吸顶
import stickySlot from './component/ceiling/sticky-slot.vue'
Vue.component('stickySlot', stickySlot)

// 标题导航
import navTop from './component/nav/nav-top.vue'
Vue.component('navTop', navTop)


//佛音分类栏
import aColumnMusic from './component/music/aColumnMusic'
Vue.component('aColumnMusic', aColumnMusic)

// 标题导航
import navCustom from './component/nav/nav-custom.vue'
Vue.component('navCustom', navCustom)

// 动画测试
import aniTest from './component/animation/ani-test.vue'
Vue.component('aniTest', aniTest)

// 动画
import bagua from './component/animation/bagua.vue'
Vue.component('bagua', bagua)

// 预加载
import preload from './component/preload/img-load.vue'
Vue.component('preload', preload)

// 光效
import guangxiao from './component/animation/guangxiao.vue'
Vue.component('guangxiao', guangxiao)

// 蜡烛
import candle from './component/animation/candle.vue'
Vue.component('candle', candle)

// 烟
import smog from './component/animation/smog.vue'
Vue.component('smog', smog)

// 莲花
import lianhua from './component/animation/lianhua.vue'
Vue.component('lianhua', lianhua)

// 金元宝
import jinyuanbao from './component/animation/jinyuanbao.vue'
Vue.component('jinyuanbao', jinyuanbao)

// 金元宝
import aixin from './component/animation/aixin.vue'
Vue.component('aixin', aixin)

// 祈福动作
import qifu from './component/animation/qifu.vue'
Vue.component('qifu', qifu)

// canvas
import cav from './component/animation/canvas-test.vue'
Vue.component('cav', cav)

//法师说众生说中的一条认知
import aViewPoint from './component/viewpoint/aViewPoint.vue'
Vue.component('aViewPoint', aViewPoint)

//上拉加载
import uniloadmore from './component/uni-load-more/uni-load-more.vue'
Vue.component('uni-load-more', uniloadmore)

// 筛选面板
import filterTop from './component/filter/filter-top.vue'
Vue.component('filterTop', filterTop)

// popup
import uniPop from './component/uni-popup/uni-popup.vue'
Vue.component('uniPop', uniPop)

import store from './store'
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
