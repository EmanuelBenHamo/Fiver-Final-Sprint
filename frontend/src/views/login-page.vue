<template>
  <section>
    <button class="btn" @click="credentials.loginType='influencer'">I am an influencer</button>
    <button class="btn" @click="credentials.loginType='brand'">I am a brand</button>
    <span v-if="credentials.loginType">You are about to login as {{credentials.loginType}}</span>
    <form v-if="credentials.loginType" @submit="login">
      <label>
        username:
        <input type="text" placeholder="username" v-model="credentials.username" />
      </label>
      <label>
        password:
        <input type="password" placeholder="password" v-model="credentials.password" />
      </label>
      <button class="btn" type="submit">Sign In</button>
    </form>
  </section>
</template>

<script>
import userService from "../services/user.service.js";

export default {
  name: "login-page",
  data() {
    return {
      credentials: {
        loginType: null,
        username: null,
        password: null
      }
    };
  },
  methods: {
    async login() {
      try {
        let loggedInUser = await this.$store.dispatch({
          type: "login",
          credentials: this.credentials
        });
        this.$router.push("/app");
      } catch (error) {
        console.log("wrong login detials");
        console.log("ERROR = ", error);
      }
    }
  }
};
</script>

<style>
</style>