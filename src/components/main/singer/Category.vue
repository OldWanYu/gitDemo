<template>
  <div class="category">
    <ul>
      <li class="Type">
        <span @click="getType (-1) " :class="{'catedetail-active':(type==-1)}" type="-1">全部</span>
        <span @click="getType (1) " :class="{'catedetail-active':(type==1)}" type="1">男</span>
        <span @click="getType (2) " :class="{'catedetail-active':(type==2)}" type="2">女</span>
        <span @click="getType (3) " :class="{'catedetail-active':(type==3)}" type="3">组合</span>
      </li>
      <li class="Type">
        <span @click="getArea (-1) " :class="{'catedetail-active':(area==-1)}" area="-1">全部</span>
        <span @click="getArea (7) " :class="{'catedetail-active':(area==7)}" area="7">华语</span>
        <span @click="getArea (96) " :class="{'catedetail-active':(area==96)}" area="96">欧美</span>
        <span @click="getArea (8) " :class="{'catedetail-active':(area==8)}" area="8">日本</span>
        <span @click="getArea (16) " :class="{'catedetail-active':(area==16)}" area="16">韩国</span>
        <span @click="getArea (0) " :class="{'catedetail-active':(area==0)}" area="0">其他</span>
      </li>
    </ul>
    <CateDetail :List="List"/>
  </div>
</template>
<script>
import CateDetail from "@/components/main/singer/CateDetail";
import axios from 'axios'
export default {
  data() {
    return {
      List: [],
      type: -1,
      area: -1,
      active: false
    };
  },
  methods: {
    async SingerList(x,y) {
     axios.get("http://localhost:3000/artist/list",{
        params:{
            type:x,
            area:y
        }
     })
     .then((response)=>{
        //   console.log(response)
        this.List = response.data.artists;
      })
     .catch(function(error){
         console.log(error)
     })
    },
    getType: function(type) {
    //   console.log(type, this);
      this.type=type;
      this.SingerList(type,this.area)
    },
    getArea: function(area) {
    //   console.log(area, this);
      this.area=area;
      this.SingerList(this.type,area)
    }
  },
  created() {
    this.SingerList(-1,-1);
  },
  components: {
    CateDetail
  }
};
</script>
<style>
.category ul {
  display: block;
}
.category ul li {
  text-align: left;
  padding: 10px;
}
.category ul li span {
  padding: 5px 10px;
}
.catedetail-active {
  background-color: #1a73e8;
  color: #fff;
  border-radius: 5px;
}
</style>