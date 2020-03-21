<template>
  <section>
    <button @click="credentials.loginType='influencer'">I am influencer</button>
    <button @click="credentials.loginType='brand'">We are brand</button>
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
      <button type="submit">Sign In</button>
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
        if (loggedInUser.type === "influencer") {
          this.$router.push("/campaign");
        } else if (loggedInUser.type === "brand") {
          this.$router.push("/influencer");
        }
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