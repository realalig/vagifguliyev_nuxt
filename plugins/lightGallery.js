import Vue from 'vue'
import lightGallery from 'lightgallery'
import '@/assets/css/lggallery.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgFullscreen from 'lightgallery/plugins/fullscreen'
import lgZoom from 'lightgallery/plugins/zoom'
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgPager from 'lightgallery/plugins/pager'
import lgHash from 'lightgallery/plugins/hash'

Vue.prototype.$lightGallery = lightGallery
Vue.prototype.$lgThumbnail = lgThumbnail
Vue.prototype.$lgFullscreen = lgFullscreen
Vue.prototype.$lgZoom = lgZoom
Vue.prototype.$lgAutoplay = lgAutoplay
Vue.prototype.$lgPager = lgPager
Vue.prototype.$lgHash = lgHash
