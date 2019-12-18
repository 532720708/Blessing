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


import store from './store'
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
