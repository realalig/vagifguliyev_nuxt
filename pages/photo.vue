<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    const images = ref([
      '1-1.jpg',
      '1-2.jpg',
      '1-3.jpg',
      '1-4.jpg',
      '1-5.jpg',
      '1-6.jpg',
      '1-7.jpg',
      '1-8.jpg',
      '2-1.jpg',
      '2-2.jpg',
      '2-3.jpg',
      '2-4.jpg',
      '3-1.jpg',
      '4.jpg',
      '4-1.jpg',
      '4-2.jpg',
      '4-3.jpg',
      '4-5.jpg',
      '4-6.jpg',
      '4-7.jpg',
      '4-8.jpg',
      '5-1.jpg',
      '5.jpg',
    ])
    const getImageSrc = (filename) => {
      return new URL(`../assets/img/gallery/${filename}`, import.meta.url).href
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
      images,
      getImageSrc,
    }
  },
}
</script>

<template>
  <div id="tooplate_main">
    <div id="about" class="main_box">
      <h1 class="pho">Photos</h1>
      Here you can find different photos from different conferences, seminars, workshops and academic visits.

      <div class="demo-gallery">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange">
          <swiper-slide v-for="img in images" :key="img">
            <img :src="getImageSrc(img)" alt="" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
}

ul {
  list-style: none;
}

li {
  margin-bottom: 20px;
}
</style>
