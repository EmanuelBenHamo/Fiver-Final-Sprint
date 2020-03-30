<template>
  <section class="header">
    <nav class="navbar flex space-between">
      <div>
        <label @click="$router.push('/')">Trendzly</label>
        <router-link class="home-page-btn nav-btn" to="/">Home</router-link>
        <router-link class="nav-btn" to="/login">Login</router-link>
        <router-link class="nav-btn" to="/signup">Signup</router-link>
      </div>
      <div class="demo-login-btn">
        <router-link to @click.native="login">influencer login</router-link>
      </div>
    </nav>
  </section>
</template>
<script>
export default {
  name: "app-header",
  //for demo purposes
  data() {
    return {
      loggedInUser: null,
      demoUser: {
        credentials: {
          username: "vsmorthiti",
          password: "KOMFvSj0iwWq"
        }
      }
    };
  },
  // "userType": "influencer",
  //         "username": "abrisco7",
  //         "password": "fgVbJO"
  methods: {
    login() {
      this.demoUser = this.$store.getters.demoInfluencer;
      console.log(this.demoUser);
      this.loggedInUser = this.$store.dispatch({
        type: "login",
        credentials: this.demoUser
      });
      this.$router.push("/backoffice");
    }
  }
};
</script>

<style>
</style>