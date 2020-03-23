<template>
  <section class="home-page-container flex align-center space-between">
    <div class="home-page-content">
      <h1>Get Influenced</h1>
      <p>Bringing Your Brand Forward</p>
      <button class="btn" @click="redirect('brand')">I am a brand</button>
    </div>
    <div class="img-container">
    <img  src="../assets/img/woman_beach.jpg" alt="">
    </div>
  </section>
</template>
<script>
export default {
  created(){
    this.$store.dispatch({ type: 'setUserType', userType:null });
  },
  data(){
    return{
      demoUser:{
        credentials:{
          username:'c',
          password:'d'
        }
      }
    }
  },
  methods: {
    redirect(userType) {
      if(userType === 'brand'){
        this.$store.dispatch({ type: 'login', credentials:this.demoUser.credentials });
        this.$router.push('/app');
      }
      else if(userType === 'influencer'){
        this.$store.dispatch({ type: 'setUserType', userType });
        this.$router.push('/backOffice');
      }
        console.log(userType)
    }
  }
};
</script>

<style></style>
