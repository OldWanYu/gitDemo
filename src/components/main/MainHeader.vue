<template>
  <div class="main-header">
    <div class="title text-primary text-lg text-weight-7 text-center">{{title}}</div>
    <div class="nav-list">
      <ul class="d-flex jc-around pt-3 text-md text-gray2">
        <li
          v-for="(item,index) in navList"
          :key="index"
          :class="{'nav-active':isActive(item.path)}"
          @click="navClick(item.path)"
        >{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Function Music"
    }
  },
  data() {
    return {
      navList: [
        { path: "/recommend", name: "推荐" },
        { path: "/singer", name: "歌手" },
        { path: "/rank", name: "排行" },
        { path: "/search", name: "搜索" }
      ]
    };
  },
  methods: {
    navClick(path) {
      this.$emit("nav-click", path);
    },
    isActive(path) {
      if (path === this.$route.path) return true;
      if (path === "/recommend" && this.$route.path === "/") {
        return true;
      }
      return false;
    }
  }
};
</script>

<style>
ul {
  display: flex;
  justify-content: space-around;
}
</style>