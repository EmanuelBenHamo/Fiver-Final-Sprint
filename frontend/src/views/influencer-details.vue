<template>
<section class="influencer-details-container flex column" v-if="currInfluencer">
  <div class="influencer-details flex space-around">
  <div class="influencer-info">
    <h2>{{fullname}}</h2>
    <h3>Date Of Birth: {{currInfluencer.dateOfBirth | date}}</h3>
    <h2 :class="`fa fa-${genderIcon} fa-lg`"></h2>
    <h3>{{currInfluencer.email}}</h3>
    <img :src="currInfluencer.imgUrl" alt="Profile Picture">
    
    <ul class="tags clean-list">
      Tags:
      <li v-for="(tag, idx) in currInfluencer.tags" :key="idx" >{{tag}}</li>
    </ul>
  </div>
  <div class="socials flex column">
    <ul class="social-info clean-list" v-for="(social, idx) in currInfluencer.socials" :key="idx">
      <li><span :class="`fa fa-${social.type}`"></span>{{social.type}}</li>
      <li>Men: {{social.menFollowers}}</li>
      <li>Women: {{social.womenFollowers}}</li>
      <li>Posts: {{social.posts}}</li>
      <li>Stories: {{social.stories}}</li>
      <li>Avrage Followers Age: {{social.followersAvgAge}}</li>
      <li>Post Price: {{social.pricePerPost}}</li>
    </ul>
  </div>
  </div>

  <div class="campaign-offer flex justify-center">
    <button  
      @click="isMakingOffer = !isMakingOffer"
      class="make-offer btn">
      Make an Offer
    </button>
  </div>
  <div v-if="isMakingOffer"
    @click="isMakingOffer = !isMakingOffer"
    class="screen" >
  </div>
  <campaign-list
    v-if="isMakingOffer"
    @close="isMakingOffer = !isMakingOffer"
    @sendOffer="sendOffer"
  />
</section>
</template>

<script>
import { eventBus } from "../services/event.bus.service.js";
import campaignList from '../cmps/campaign-list.vue';
export default {
  name: 'influencer-details',
    data() {
    return {
      influencerId: null,
      currInfluencer: null,
      isMakingOffer: false,
    };
  },
  computed:{
    genderIcon(){
      return (this.currInfluencer.gender === "Male") ?'mars': 'venus';
       },
    fullname(){
      return this.currInfluencer.firstName + ' ' + this.currInfluencer.lastName;
    }
  },
  created() {
    this.influencerId = this.$route.params.id;
    this.getInfluencerById();
  },
  methods: {
    async getInfluencerById() {
      const influencer = await this.$store.dispatch({
        type: 'getInfluencerById',
        influencerId: this.influencerId
      });
      this.currInfluencer = influencer;  
    },
    async sendOffer(campaign) {
        const sentOffer = await this.$store.dispatch({
        type: 'sendOffer',
        campaign,
        influencer: this.currInfluencer
      })
      eventBus.$emit('showMsg',{txt:'Your offer has been sent'})
    }
  },
  components:{
    campaignList
  }
}
</script>

<style>
.gender{
  font-weight: bolder;
  font-family: fantasy;
}
.social-info span{
  font-size: 2rem;
}
</style>