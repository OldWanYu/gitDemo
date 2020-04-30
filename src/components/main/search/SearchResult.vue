<template>
  <div class="searchresult">
    <div v-if="result" style="background:#fff;overflow: scroll;">
      <div
        v-for="item in result"
        :key="item.id"
        class="d-flex mt-2 mb-2"
        @click="goPlaySong(item.id,item.album.artist.img1v1Url)"
      >
        <i class="fa fa-search ml-1 mr-2" style="font-size:12px"></i>
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    result: {
      type: Array,
      requried: true
    }
  },
  methods: {
    goPlaySong(id, img) {
      this.$router.push({ name: "PlaySong", params: { id: id, img: img } });
    }
  }
};
</script>
<style>
</style>