<template>
  <div class="playsong" style="width:100%;height:100%;">
    <div class="songdetail-header text-primary" style="position:fixed;top:0;left:0">
      <button @click="goBack()"></button>
    </div>
    <div class="playsong-pic" style="height:100%;padding-top:50px;padding-bottom:79px;background:rgba(0,0,0,0.5)">
      <div v-if="lrc==0&&songImg" class="text-gray2">
        <img :src="songImg" width="100%" height="100%" />
      </div>
      <div v-if="lrc==1" class="text-gray2">
        <div v-for="item in myLyrics" :key="item.data">{{item.content}}</div>
      </div>
    </div>
    <div
      class="playSong-bottom bottom-0 text-center text-gray2"
      style="width:100%;position:fixed;background:#1c73e8"
    >
      <div class="d-flex text-md" style="justify-content: space-around">
        <span @click="LikeSong()">
          <i :class="{'fa fa-heart-o':(flag==0),'fa fa-heart likeSong-active':(flag==1)}"></i>
        </span>
        <span @click="DownLoadSong()">
          <i
            :class="{'fa fa-arrow-circle-o-down':(down==0),'fa fa-arrow-circle-o-down likeSong-active':(down==1) }"
          ></i>
        </span>
        <span @click="Lyrics()">
          <i
            :class="{'fa fa-file-text-o':(lrc==0),'fa fa fa-file-text-o likeSong-active':(lrc==1)}"
          ></i>
        </span>
      </div>
      <audio :src="song" autoplay controls style="width:100%;"></audio>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Video",
  data() {
    return {
      song: "",
      flag: 0,
      lrc: 0,
      down: 0,
      myLyrics: [],
      songImg: this.$route.params.img
    };
  },
  methods: {
    goBack(){
      if (localStorage.getItem('playSong')) {
        localStorage.removeItem('playSong');
      }
          var url=this.song
          console.log('返回',url)
          window.localStorage.setItem('playSong',url)
          
          history.back()
    },
    async getSong() {
      const res = await this.$http.get("/song/url?id=" + this.$route.params.id);
      this.song = res.data.data[0].url;
        console.log(this.song);
        
    },
    async LikeSong() {
      if (this.flag == 0) {
        this.flag = 1;
      } else {
        this.flag = 0;
      }
      //   console.log(this.flag);
    },
    DownLoadSong() {
      if (this.down == 0) {
        this.down = 1;
      } else {
        this.down = 0;
      }
      //   console.log(this.down);
    },
    async Lyrics() {
      const res = await this.$http.get("/lyric?id=" + this.$route.params.id);
      var Lyrics = res.data.lrc.lyric;

      //解析歌词
      var lrcs = Lyrics.split("\n"); //用回车拆分成数组
      for (let i = 0; i < lrcs.length; i++) {
        var obj = {};
        obj.data = lrcs[i].substring(1, lrcs[i].indexOf("]"));
        obj.content = lrcs[i].substring(lrcs[i].indexOf("]") + 1);
        this.myLyrics.push(obj);
      }
      // console.log(this.myLyrics);
      if (this.lrc == 0) {
        this.lrc = 1;
      } else {
        this.lrc = 0;
      }
    }
  },
  created() {
    this.getSong();
  }
};
</script>

<style>
.likeSong-active {
  color: red;
}
.playsong-pic {
  overflow: scroll;
}
</style>