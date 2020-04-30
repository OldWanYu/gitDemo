<template>
  <div class="rankDetail">
    <div class="songdetail-header text-primary">
      <button @click="$router.back(-1)"></button>
    </div>
    <div style="width:100%;height:200px;" class="pos-r">
      <div class="pos-a bottom-0 left-1 text-gray2 text-left">
        <h4 class="mb-1">{{createor.name}}</h4>
        <div>{{createor.description}}</div>
      </div>
      <img :src="createor.coverImgUrl" width="100%" height="100%" />
    </div>
    <div class="rankdetail-content">
      <div class="pos-r mt-1 mb-1" v-for="(item,index) in List" :key="item.id" style="height:100px">
        <span v-if="item.mv!=0" class="pos-a top-2 right-2" @click="goPlayMV(item.mv)">
          <i class="fa fa-play-circle-o" aria-hidden="true" style="display:block;height:20px"></i>
        </span>
        <div class="d-flex jc-around pos-r" @click="goPlaySong(item.id,item.al.picUrl)">
             <h4 class="pl-2 pt-2 text-gray2 " style="width=10%">{{index+1}}</h4>
          <div style="width:100px;height:100px" class="pos-a top-0 left-2">
            <img :src="item.al.picUrl" width="100%" height="100%"/>
          </div>
          <div style="width:100%;padding-left:115px">
            <div style="width:80%" class="text-left mb-1">
              <h4 class="mb-1 mt-1">{{item.name}}</h4>
              <div>{{item.alia[0]}}</div>
              <div class="d-flex jc-around" style="flex-wrap: wrap;">
                <span v-for="v in item.ar" :key="v.id">{{v.name}}</span>
              </div>
            </div>
          </div>
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
      List: [],
      createor: []
    };
  },
  methods: {
    async RankList() {
      const res = await this.$http.get("/top/list", {
        params: {
          idx: this.$route.params.idx
        }
      });
      this.List = res.data.playlist.tracks;
      this.createor = res.data.playlist;
      console.log(res.data);
    },
    goPlaySong(id, img) {
        console.log(img)
      this.$router.push({ name: "PlaySong", params: { id: id, img: img } });
    }
  },
  created() {
    this.RankList();
  }
};
</script>
<style>
.rankDetail .rankdetail-content span {
  padding: 1px;
  border-radius: 5px;
  border: 1px solid gray;
  color: gray;
  margin: 2px 5px;
}
</style>