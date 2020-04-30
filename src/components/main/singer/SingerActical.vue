<template>
  <div class="singeractical">
    <!-- 单曲 -->
    <div v-if="flag==1" class="danqu">
      <div
        v-for="(item,index) in actical.hotSongs"
        :key="item.id"
        class="d-flex jc-around"
        @click="goPlaySong(item.id,item.al.picUrl)"
      >
        <h2 class="pl-2 pr-2 text-gray2">{{index+1}}</h2>
        <div class="img pl-1" style="width:80px;">
          <img :src="item.al.picUrl" width="100%" />
        </div>
        <div style="width:80%" class="text-left pl-2">
          <h3>{{item.name}}</h3>
          <span v-for="v in item.ar" :key="v.id">{{v.name}}</span>
          <span>{{item.al.name}}</span>
        </div>
      </div>
    </div>
    <!-- 专辑 -->
    <div v-if="flag==2">
      <div
        v-for="(item,index) in actical.hotAlbums"
        :key="item.id"
        class="d-flex jc-around"
        @click="goZhuanJiDetail(item.id)"
      >
        <h2 class="pl-2 pr-2 text-gray2">{{index+1}}</h2>
        <div class="img pl-1" style="width:80px;">
          <img :src="item.picUrl" width="100%" />
        </div>
        <div style="width:80%" class="text-left pl-2">
          <h4 class="mb-1">{{item.name}}</h4>
          <span>{{item.size}}</span>
        </div>
      </div>
    </div>
    <!-- mv -->
    <div v-if="flag==3">
      <div v-for="item in actical.mvs" :key="item.id" class="d-flex jc-around">
        <div class="img pl-1 pos-r" style="width:100px;">
          <img :src="item.imgurl" width="100%" />
          <div class="pos-a top-0 right-0 text-xs text-gray2">
            <i class="fa fa-play-circle" style="width:12px!important"></i>
            {{item.playCount}}
          </div>
        </div>
        <div style="width:80%" class="text-left pl-2">
          <h5 class="mb-1 mt-2">{{item.name}}</h5>
          <span>{{item.publishTime}}</span>
        </div>
      </div>
    </div>
    <!-- 歌手描述 -->
    <div v-if="flag==4">
      <div class="desc">
        <div class="text-xs text-left text-gray2">{{actical.briefDesc}}</div>
        <div v-for="(item,index) in actical.introduction" :key="index">
          <h4 class="text-left">{{item.ti}}</h4>
          <div class="text-xs text-left text-gray2">{{item.txt}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    actical: {
      required: true
    },
    flag: {
      type: Number,
      required: true
    }
  },
  methods: {
    goZhuanJiDetail(id) {
      this.$router.push({ name: "ZhuanjiDetail", params: { id: id } });
    },
    goPlaySong(id, img) {
      this.$router.push({ name: "PlaySong", params: { id: id, img: img } });
    }
  }
};
</script>
<style>
.singeractical span {
  border: 1px solid #aaa;
  padding: 2px 5px;
  border-radius: 5px;
  font-size: 12px;
  color: #aaa;
  margin: 5px;
}
</style>