<template>
  <div class="main">
    <main-header
    title='Function Music'
    @nav-click="toPath"/>
    <router-link :to="{ name: 'Login' }" class="pos-a top-0 right-2 text-primary text-weight-7 text-md" style="top:3px"><i class="fa fa-user-o"></i></router-link>
    <Recommend v-if="flag"/>
    <PlayMini/>
    <router-view/>
  </div>
</template>

<script>
import Recommend from '@/views/Recommend'
import MainHeader from '@/components/main/MainHeader'
import PlayMini from '@/components/main/play/PlayMini'
export default {
  data(){
    return{
      flag:true
    }
  },
  name: 'Main',
  components: {
    MainHeader,PlayMini,Recommend
  },
  methods:{
    toPath(path){
      this.flag=false
      this.$router.push(path);
    },
    login(){
       this.$router.push({ name: "ZhuanjiDetail" });
    }
  }
}
</script>
<style>
.main-header{
  background-color: #fff;
  padding-bottom: 10px;
  z-index: 999;
}
</style>
