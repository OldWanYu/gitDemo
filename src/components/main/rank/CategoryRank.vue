<template>
  <div class="categoryrank">
    <div style="width:100%;">
      <div
        v-for="item in classify"
        :key="item.id"
        @click="getType(item.id)"
        class="rankList"
      >{{item.content}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      typee: 0,
      classify: [
        { id: 0, content: "云音乐新歌榜" },
        { id: 1, content: "云音乐热歌榜" },
        { id: 2, content: "网易原创歌曲榜" },
        { id: 3, content: "云音乐飙升榜" },
        { id: 4, content: "云音乐电音榜" },
        { id: 5, content: "UK排行榜周榜" },
        { id: 6, content: "美国Billboard周榜" },
        { id: 7, content: "KTV嗨榜" },
        { id: 8, content: "iTunes榜" },
        { id: 9, content: "Hit FM Top榜" },
        { id: 10, content: "日本Oricon周榜" },
        { id: 11, content: "韩国Melon排行榜周榜" },
        { id: 12, content: "韩国Mnet排行榜周榜" },
        { id: 13, content: "韩国Melon原声周榜" },
        { id: 14, content: "中国TOP排行榜(港台榜)" },
        { id: 15, content: "中国TOP排行榜(内地榜)" },
        { id: 16, content: "香港电台中文歌曲龙虎榜" },
        { id: 17, content: "华语金曲榜" },
        { id: 18, content: "中国嘻哈榜" },
        { id: 19, content: "法国 NRJ EuroHot 30周榜" },
        { id: 20, content: "台湾Hito排行榜" },
        { id: 21, content: "Beatport全球电子舞曲榜" },
        { id: 22, content: "云音乐ACG音乐榜" },
        { id: 23, content: "云音乐说唱榜" },
        { id: 24, content: "云音乐古典音乐榜" },
        { id: 25, content: "云音乐电音榜" },
        { id: 26, content: "抖音排行榜" },
        { id: 27, content: "新声榜" },
        { id: 28, content: "云音乐韩语榜" },
        { id: 29, content: "英国Q杂志中文版周榜" },
        { id: 30, content: "电竞音乐榜" },
        { id: 31, content: "云音乐欧美热歌榜" },
        { id: 32, content: "云音乐欧美新歌榜" },
        { id: 33, content: "说唱TOP榜" }
      ],
      List:[],
    };
  },
  methods:{
    getType(id) {
       this.$router.push({ name: "RankDetail", params: { idx: id} });
    },
  }
};
</script>
<style>
.categoryrank .rankList {
  width: 100px;
  height: 100px;
  background-color: #aaa;
  color: white;
  font-size: 15px;
  text-align: center;
  margin:5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>