<template>
  <section class="home-page-container flex align-center space-between">
    <div class="home-page-content flex column justify-end">
      <h1>Get Influenced</h1>
      <div class="sub-content flex column ">
        <p>Find the right influencer to promote your Brand</p>
        <button class="go-btn btn" @click="redirect('brand')">Lets Go</button>
      </div>
    </div>
    <div class="home-page-imgs-container">
      <div class="imgs-container ratio-post">
        <img class="carousel-img home-pic-1"  src="../assets/img/man_sprite.jpg" alt="">
        <img class="carousel-img home-pic-2"  src="../assets/img/woman_bag.jpg" alt="">
        <img class="carousel-img home-pic-3"  src="../assets/img/chef influencer.jpg" alt="">
        <img class="carousel-img home-pic-4"  src="../assets/img/woman lipstick.jpg" alt="">
      </div>
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
