<template>
<section class="home-page-container flex column">

  <section class="home-page-hero flex align-center space-between">
    <div class="home-page-content flex column justify-end">
      <h1>Get Promoted</h1>
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
  <section class="top-rated-list">
    <h1>Our Most Popular Influencers</h1>
    <div v-if="topRatedList" class="influencers-list">
      <influencer-preview  v-for="influencer in topRatedList" :key="influencer._id" :influencer="influencer"/>
    </div>
  </section>
</section>
</template>


<script>
import influencerPreview from "../cmps/influencer-preview.vue";
export default {
  
  created(){
    this.$store.dispatch({ type: 'setUserType', userType:null });
    this.loadInfluencers();
  },
  data(){
    return{
      demoUser:{
        credentials:{
          userType: 'brand',
          username:'c',
          password:'d'
        }
      },
      topRatedList: [],
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
    },
    async loadInfluencers() {
      await this.$store.dispatch({ 
        type: 'loadInfluencers', 
        filterBy: {topRated: 5}
        });
        this.topRatedList = this.$store.getters.influencers;
    }
  },
  components: {
    influencerPreview
  }
}
</script>

