<template>
  <section class="header">
    <nav class="navbar flex space-between">
      <div>
        <label @click="$router.push('/')">Trendzly</label>
        <router-link class="home-page-btn nav-btn" to="/">Home</router-link>
        <router-link class="nav-btn" to="/login">Login</router-link>
        <router-link class="nav-btn" to="/signup">Signup</router-link>
      </div>
      <div>
        <router-link class="demo-login-btn" to="" @click.native="login">influencer login</router-link>
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
          username: "thearley0",
          password: "ykR0KU"
        }
      }
    };
  },
  methods: {
    login() {
      this.loggedInUser = this.$store.dispatch({
        type: "login",
        credentials: this.demoUser.credentials
      });
      this.$router.push("/backoffice");
    }
  }
};
</script>

<style>
</style>