<template>
  <div class="banner">
    <div v-swiper:mySwiper="swiperOption" v-if="swiperList.length">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="index" v-for="(item,index) in swiperList">
          <img :src="item.img" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
// import style
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
export default {
  props: {
    swiperList: {
      type: Array,
      required: true
    },
    swiperOption: {
      type: Object,
      required: true
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
};
</script>
<style>
.banner img {
  width: 100%;
  height: 150px;
}
</style>