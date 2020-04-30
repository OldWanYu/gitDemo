<template>
  <div class="songdetail">
    <div class="songdetail-header text-primary">
      <button @click="$router.back(-1)"></button>
    </div>
    <div>
      <img :src="songdetaillists.coverImgUrl" width="100%" height="150px" />
      <ul>
        <!-- <li>
          <div>作者：{{songdetaillists.creator.nickname}}</div>
        </li> -->
        <li>{{songdetaillists.name}}</li>
        <li style="display:flex; justify-content: space-around;">
          <span v-for="item in songdetaillists.tags" :key="item">{{item}}</span>
        </li>
        <li>描述：{{songdetaillists.description}}</li>
        <li>播放量：{{songdetaillists.playCount}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      songdetaillists: []
    };
  },
  methods: {
    async SongDetail() {
      const res = await this.$http.get(
        "/top/playlist/detail?id=" + this.$route.params.id
      );
      for (let i = 0; i < res.data.playlists.length; i++) {
        if (this.$route.params.id == res.data.playlists[i].id) {
          this.songdetaillists = res.data.playlists[i];
        }
      }
      console.log(this.songdetaillists);
    }
  },
  created() {
    this.SongDetail();
  }
};
</script>
<style>
.songdetail-header {
  width: 100%;
  height: 50px;
  background-color: #1a73e8;
  text-align: left;
  padding-top: 10px;
}
.songdetail-header button {
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 25px;
  text-align: left;
  background-color: #1a73e8;
  background-image: url("../../../assets/left.png");
}
.songdetail ul{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.songdetail ul li {
  text-align: left;
}
.songdetail ul li span {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 10px;
  color: #999;
  font-size: 13px;
  height: 30px;
}
</style>