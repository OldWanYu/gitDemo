<template>
  <div class="songList">
    <ul>
      <li v-for="item in songList" :key="item.id" @click="goSongDetail(item.id)">
        <div class="d-flex jc-between">
          <div class="li-left">
            <img :src="item.coverImgUrl" width="100%" />
          </div>
          <div class="li-right">
            <p class="text-weight-7">{{item.creator.nickname}}</p>
            <p class="text-gray2">{{item.name}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload)

export default {
  props: {
    songList: {
      type: Array,
      required: true
    }
  },
  methods: {
    goSongDetail(songListId) {
      this.$router.push({ name: "SongDetail", params: { id: songListId } });
    }
  }
};
</script>
<style less>
.songList ul {
  display: block;
}
.songList li {
  width: 100%;
  height: 60px;
  padding: 5px;
  display: block;
  overflow: hidden;
}
.songList {
  padding-top: 10px;
}
.li-left {
  width: 20%;
  height: 100%;
}
.li-right {
  width: 80%;
  height: 100%;
}
.li-right p {
  text-align: left;
  padding: 4px 10px;
  margin: 0;
}
</style>