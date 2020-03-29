<template>
  <section>
    <form
      class="login-form-container flex column"
      v-if="credentials.userType"
      @submit.prevent="login"
    >
      <div class="login-type-btns">
        <button class="btn" @click="credentials.userType='influencer'">I am an influencer</button>
        <button class="btn" @click="credentials.userType='brand'">I am a brand</button>
      </div>
      <span
        class="login-type-txt"
        v-if="credentials.userType"
      >You are about to login as {{credentials.userType}}</span>
      <div class="login-input">
        <input type="password" placeholder="password" />
      </div>
      <div class="login-input">
        <input type="text" placeholder="username" />
      </div>
      <div class="login-btn">
        <button class="btn login-btn" type="submit">Sign In</button>
      </div>
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
        userType: null,
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