<template>
  <section class="header">
    <nav class="navbar-container flex row flex-start ">
      
        <label @click="$router.push('/').catch(err => {})">Trendzly</label>

      <div class="navbar flex  align-center">
        <div 
        @click="isShowen = !isShowen"
        class="hamburger-btn fa fa-bars"></div>


          <div 
           :class="{showen: isShowen}"
          @click="isShowen = !isShowen"
          class="screen">
          </div>

        <div @click="isShowen = !isShowen" :class="{showen: isShowen}" class="navbar-btns flex align-center space-between">
          <div class="navbar-routings">
            <router-link class="home-page-btn nav-btn" to="/">Home</router-link>
            <router-link class="nav-btn" to="/login">Login</router-link>
            <router-link class="nav-btn" to="/signup">Signup</router-link>
          </div>
          <router-link to @click.native="login" class="demo-login-btn">influencer login</router-link>

        </div>
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
      },
      isShowen: false
    };
  },
  // "userType": "influencer",
  //         "username": "abrisco7",
  //         "password": "fgVbJO"
  methods: {
    login() {
      this.demoUser = this.$store.getters.demoInfluencer;
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