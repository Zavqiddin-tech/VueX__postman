<template>
  <div class="auth">
    <div class="box">
      <h4 class="mb-20">Tizimga kirish</h4>
      <form class="form" name="login" @submit.prevent="postLogin()">
        <div class="mb-20">
          <input
            class="input"
            type="text"
            v-model="login"
            placeholder="Login"
          />
        </div>
        <div class="mb-20">
          <input
            class="input"
            type="password"
            v-model="password"
            placeholder="Mahfiy kalit"
          />
        </div>
      </form>
      <a class="link" href="#">Royhatdan o'tish</a>
      <button class="btn success" @click="postLogin()">Kirish</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    login: "",
    password: "",
    name: "",
  }),

  computed: {
    posts() {
      return this.$store.getters.posts;
    },
  },

  methods: {
    async postLogin() {
      if (this.login && this.password) {

        this.$store.dispatch('login', {
          login: this.login,
          password: this.password,
        }) 


        // let res = await axios
        //   .post(`http://95.130.227.52:3112/auth/login`, {
        //     login: this.login,
        //     password: this.password,
        //   })
        //   .catch((e) => {});
        // if (res.status == 200) {
        //   let { token, user } = res.data;
        //   this.$cookies.set("hospital-token", token);
        //   this.$cookies.set("hospital-user", user);

        //   this.$emit('successLogin')
        // }
      }
    },
  },
};
</script>

<style lang="scss">
.auth {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    width: 500px;
    max-width: 500px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0px 5px 10px #727272;
  }
}
</style>
