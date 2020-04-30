<template>
  <div class="SingerSong">
    <div class="songdetail-header text-primary">
      <button @click="$router.back(-1)"></button>
    </div>
    <div class="nav">
      <span class="song" :class="{'SingerSong-active':(flag==1)}" @click="getList('',1)">单曲</span>
      <span class="zhuanji" :class="{'SingerSong-active':(flag==2)}" @click="getList('/album',2)">专辑</span>
      <span class="mv" :class="{'SingerSong-active':(flag==3)}" @click="getList('/mv',3)">MV</span>
      <span
        class="Singerdetail"
        :class="{'SingerSong-active':(flag==4)}"
        @click="getList('/desc',4)"
      >歌手描述</span>
    </div>
    <SingerActical :actical="actical" :flag="flag" />
    <PlayMini/>
  </div>
</template>
<script>
// import axios from "axios";
import SingerActical from "@/components/main/singer/SingerActical";
import PlayMini from '@/components/main/play/PlayMini'
export default {
  data() {
    return {
      flag: 1,
      desc: [],
      actical: []
    };
  },
  methods: {
    async getList(api, type) {
      this.flag = type;
      if(api==''){
        const res = await this.$http.get("/artists" + api, {
        params: {
          id: this.$route.params.id
        }
      });
      this.actical = res.data;
      // console.log(res, this.flag, this.actical);
      }else{
        const res = await this.$http.get("/artist" + api, {
        params: {
          id: this.$route.params.id
        }
      });
      this.actical = res.data;
      // console.log(res, this.flag, this.actical);
      }
    }
  },
  created() {
    this.getList("", 1);
  },
  components: {
    SingerActical,PlayMini
  }
};
</script>
<style>
.SingerSong .Singerdetail {
  width: 100%;
  height: 150px;
}
.SingerSong .desc {
  width: 100%;
  height: 150px;
}
.SingerSong .nav {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
}
.SingerSong .nav span {
  width: 100px;
  height: 40px;
  line-height: 30px;
  color: #999;
  font-size: 15px;
  padding: 5px;
}
.SingerSong-active {
  border-bottom: 2px solid #1c73e8;
  color: #1c73e8 !important;
}
</style>