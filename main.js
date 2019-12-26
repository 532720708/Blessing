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


import store from './store'
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
