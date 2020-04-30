<template>
  <div class="hotsearch">
    <div class="search-header pos-r">
      <input type="text" :placeholder="placeholder" v-model="selectName" />
      <i class="pos-a right-1 fa fa-search"></i>
      <div class="searchresult" v-if="flag">
        <SearchResult :result="result"/>
      </div>
    </div>
    <div v-for="(item,i) in hots" :key="i" class="d-flex jc-around" style="padding:5px;">
      <span :class="{'hotcolor':i<3,'mt-3':true,'text-lg':true}">{{i+1}}</span>
      <div style="padding-left:5px" class="text-left">
        <h4 class="mt-1 mb-1 d-flex jc-around">
          <div style="width:70%">{{item.searchWord}}</div>
          <div style="width:25px;height:12px" v-if="item.iconUrl">
            <img :src="item.iconUrl" width="100%" height="100%" />
          </div>
        </h4>
        <div class="text-xs text-gray2">{{item.content}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import SearchResult from '@/components/main/search/SearchResult'
export default {
  components:{
    SearchResult
  },
  data() {
    return {
      hots: [],
      default: [],
      placeholder: "",
      selectName: null,
      result:[],
      flag:false
    };
  },
  methods: {
    async getHotSearch() {
      const res = await this.$http.get("/search/hot/detail");
      this.hots = res.data.data;
      console.log(this.hots);
    },
    async getdefaultSearch() {
      const res = await this.$http.get("/search/default");
      this.default = res.data.data;
      this.placeholder = this.default.showKeyword;
      console.log(this.hots);
    },
    async getSearchresult(value) {
          const res = await this.$http.get("/search",{
            params:{
              keywords:value
            } 
          });
          this.result=res.data.result.songs
          console.log(res,this.result);
        },
     handleChangeName(value) {
      if (value === "") {
        this.flag=false;
        // console.log('空',value);
        return false;
      }
      else{
        this.getSearchresult(value)
        this.flag=true
      }
      console.log(value);
    }
  },
  created() {
    this.getHotSearch();
    this.getdefaultSearch();
  },
  watch: {
    selectName(curVal) {
      // 实现input连续输入，只发一次请求
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.handleChangeName(curVal);
      }, 500);
    }
  }
};
</script>
<style>
.hotcolor {
  color: red;
}
.hotsearch .search-header input {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  border: 2px solid #aaa;
  padding-left: 10px;
  color: #ccc;
}
.hotsearch .search-header i {
  font-size: 20px;
  color: #aaa;
  top: 10px;
}

.hotsearch .search-header .searchresult{
  width: 100%;
  outline: #aaa;
  border: 2px solid #aaa;
  position: fixed;
  top: 130px;
  left: 0px;
}
</style>