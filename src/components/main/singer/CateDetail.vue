<template>
  <div class="catedetail">
    <ul>
      <li
        v-for="item in List"
        :key="item.id"
        class="d-flex jc-around"
        @click="getSingerSong(item.id)"
      >
        <div class="text-left" style="width:100px;">
          <img :src="item.picUrl" width="100%" height="100%" style="border-radius: 50px;" />
        </div>
        <div class="text-right" style="padding-left:10px;line-height:100px;">{{item.name}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    List: {
      type: Array,
      required: true
    }
  },
  methods: {
    getSingerSong(id) {
      for (let i = 0; i < this.List.length; i++) {
        if (id == this.List[i].id) {
          this.img=this.List[i].picUrl
        }
      }
      this.$router.push({
        name: "SingerSong",
        params: { id: id,songImg:this.img }
      });
    }
  },
  data() {
    return {
      img: []
    };
  }
};
</script>
<style>
</style>