<template>
  <div class="playmv">
    <video
      :preload="preload"
      :poster="videoImg"
      :height="height"
      :width="width"
      align="center"
      :controls="controls"
      :autoplay="autoplay"
    >
      <source :src="videoSrc" type="video/mp4" />
    </video>
    <div class="d-flex text-xs" style="justify-content: space-around">
        <span>{{mv.artistName}}</span>
        <span class="text-weight-7">{{mv.name}}</span>
        <span>播放量：{{mv.playCount}}</span>
        <span>{{mv.publishTime}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  data() {
    return {
      mv: [],
      videoSrc: "",
      videoImg: "",
      playStatus: "",
      muteStatus: "",
      isMute: true,
      isPlay: false,
      width: "100%", // 设置视频播放器的显示宽度（以像素为单位）
      height: "100%", // 设置视频播放器的显示高度（以像素为单位）
      preload: "auto", //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
      controls: true, // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
      autoplay: ""
    };
  },

  // 自动播放属性,muted:静音播放
  // autoplay: 'muted',
  methods: {
    async getMV() {
      const res = await this.$http.get("/mv/detail?mvid=" + this.$route.params.mv);
      this.mv = res.data.data;
      console.log(this.mv);
      this.videoSrc=this.mv.brs['240'];
      this.videoImg=this.mv.cover
    }
  },
  created(){
      this.getMV()
  }
};
</script>

<style>

</style>