<template>
  <div class="zhuanjidetail">
    <div class="songdetail-header text-primary">
      <button @click="$router.back(-1)"></button>
    </div>
    <div class="zhuanjidetail-header pos-r" style="width:100%;height:200px">
        <img :src="detail.picUrl" width="100%" height="100%">
        <div class="pos-a bottom-1 left-2 text-left text-primary" >
            <h3>{{detail.name}}</h3>
            <div>歌手：{{artist.name}}</div>
        </div>
    </div>
    <div class="pos-r" v-for="(item,index) in detaillists.songs"
        :key="item.id">
      <span v-if="item.mv!=0" class="pos-a top-2 right-2" @click="goPlayMV(item.mv)">
        <i class="fa fa-play-circle-o" aria-hidden="true" style="display:block;height:20px"></i>
      </span>
      <div
        class="d-flex jc-around"
        @click="goPlaySong(item.id,item.al.picUrl)"
      >
        <h4 class="pl-2 pr-2 text-gray2" style="width=10%">{{index+1}}</h4>
        <div style="width:80%" class="text-left mb-1">
          <h4 class="mb-1">{{item.name}}</h4>
          <span>{{item.ar[0].name}}</span>
        </div>
      </div>
    </div>
    <PlayMini />
  </div>
</template>
<script>
import PlayMini from '@/components/main/play/PlayMini'
export default {
  components:{
    
 PlayMini 
  },
  data() {
    return {
      detaillists: [],
      detail:[],
      artist:{},
    };
  },
  methods: {
    async ZhuanJiDetail() {
      const res = await this.$http.get("/album?id=" + this.$route.params.id);
      this.detaillists = res.data;
      this.detail=res.data.album;
       this.artist=this.detail.artist;
      console.log(this.detaillists,this.detail);
    },
    goPlaySong(id,img) {
      this.$router.push({ name: "PlaySong", params: { id: id,img:img } });
    },
    async goPlayMV(mv) {
      const res = await this.$http.get("/mv/url?id=" + mv);
      console.log(res.data.data.url)
      var url=res.data.data.url
      window.location.href = url;
      
    }
  },
  created() {
    this.ZhuanJiDetail();
  }
};
</script>