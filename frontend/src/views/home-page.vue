<template>
  <section class="home-page-container flex align-center space-between">
    <div class="home-page-content">
      <h1>Get Influenced</h1>
      <p>Bringing Your Brand Forward</p>
      <button class="btn" @click="login">I am a brand</button>
    </div>
    <div class="img-container">
      <img src="../assets/img/woman_beach.jpg" alt />
    </div>
  </section>
</template>
<script>
export default {
  created() {},
  data() {
    return {
      demoUser: {
        credentials: {
          username: "c",
          password: "d"
        }
      }
    };
  },
  methods: {
    login() {
      this.$store.dispatch({
        type: "login",
        credentials: this.demoUser.credentials
      });
      this.$router.push("/app");
    }
  }
};
</script>

