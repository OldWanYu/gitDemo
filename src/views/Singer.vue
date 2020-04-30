<template>
  <div class="singer">
    <Category/>
  </div>
</template>

<script>
import Category from '@/components/main/singer/Category'
export default {
  components: {
    Category
  },
  data(){
    return{

    }
  },
  methods: {
    async SingCate() {
      const res = await this.$http.get("/top/playlist");
      //  console.log(res.data.playlists);
      this.songlists = res.data.playlists;
      // console.log(this.songlists);
    }
  },
  created() {
    this.SingCate();
  }
}
</script>
<style>

</style>