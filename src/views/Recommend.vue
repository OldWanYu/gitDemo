<template>
  <div class="recommend">
    <div>
      <!-- 轮播图 -->
      <Banner :swiper-list="List" :swiper-option="swiperOption" />
      <!-- 歌单列表 -->
      <SongList :songList="songlists" />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/main/recommend/Banner";
import SongList from "@/components/main/recommend/SongList";
export default {
  data() {
    return {
      List: [],
      songlists: [],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoplay: true
      }
    };
  },
  components: {
    Banner,
    SongList
  },
  methods: {
    async SwiperList() {
      const res = await this.$http.get("/banner");
      this.List = res.data.banners.map(item => ({ img: item.imageUrl }));
    },
    async SongList() {
      const res = await this.$http.get("/top/playlist");
      //  console.log(res.data.playlists);
      this.songlists = res.data.playlists;
      // console.log(this.songlists);
    }
  },
  created() {
    this.SwiperList();
    this.SongList();
  }
};
</script>
<style>
/* .banner {
  padding-top: 85px;
} */
</style>

