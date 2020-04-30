<template>
  <div class="login">
    <div class="songdetail-header text-primary" style="position:fixed;top:0;left:0">
      <button @click="goBack()"></button>
    </div>
    <form style="padding-top:50px">
      <div class="d-flex j-between mt-3 mb-3">
        <label for="user">用户名</label>
        <input type="text" placeholder="手机号" id="user" v-model="SelectUser" />
      </div>
      <div v-if="userflag" class="mt-top mb-2" style="color:red;box-shadow: 5px 5px 5px 10px rgba(255,255,0,0.5);height:30px;line-height:30px">
        <i class="fa fa-exclamation-circle text-md"></i> 电话号码格式错误！
      </div>
      <div class="d-flex j-between mt-3 mb-3">
        <label for="password">密码</label>
        <input type="passwo" placeholder="密码" id="passw" v-model="SelectPassword" />
      </div>
      <div v-if="passflag" class="mt-2 mb-2" style="color:red;box-shadow: 5px 5px 5px 10px rgba(255,255,0,0.5);height:30px;line-height:30px">
        <i class="fa fa-exclamation-circle text-md"></i> 密码错误！
      </div>
      <div class="d-flex j-around mt-3 mb-3">
        <button @click="reset()">取消</button>
        <button @click="submit()" style="background:#1c73e8">确定</button>
      </div>
    </form>
  </div>

  <!-- <vue-canvas-nest></!-->
</template>


<script>
export default {
  data() {
    return {
      userflag: false,
      passflag: false,
      user: "",
      password: "",
      SelectUser:null,
      SelectPassword:null
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    goBack() {
      //   if (localStorage.getItem('userId')) {
      //     localStorage.removeItem('playSong');
      //   }
      //       var url=this.song
      //       console.log('返回',url)
      //       window.localStorage.setItem('playSong',url)

      history.back();
    },
    handleChangeUser(value) {
      if (value === "") {
        this.userflag = false;
        // console.log('空',value);
        return false;
      } else if (/^1[3456789]\d{9}$/.exec(value)) {
        this.userflag = false;
        this.user = value;
      } else {
        this.userflag = true;
      }
      console.log(value);
    },
    handleChangePass(value) {
      if (value === "") {
        this.passflag = false;
        // console.log('空',value);
        return false;
      } else if (/^(\w){6,20}$/.exec(value)) {
        this.passflag = false;
        this.password = value;
      } else {
        this.passflag = true;
      }
      console.log(value);
    },
    async submit(){
         const res = await this.$http.get("/search/hot/detail");
      this.hots = res.data.data;
      console.log(this.hots);
    }
  },
  watch: {
    SelectUser(curVal) {
      // 实现input连续输入，只发一次请求
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.handleChangeUser(curVal);
      }, 500);
    },
    SelectPassword(curVal) {
      // 实现input连续输入，只发一次请求
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.handleChangePass(curVal);
      }, 500);
    }
  }
};
</script>


<style scoped>
.login input {
  width: 85%;
  border: 1px solid #aaa;
  height: 30px;
  line-height: 30px;
  border-radius: 10px;
  padding-left: 10px;
}
.login label {
  line-height: 30px;
}
.login form div {
  padding: 0 10px;
}
.login form button {
  border: 0;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: red;
  color: #fff;
}
</style>
