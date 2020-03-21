<template>
<section class="influencer-details-container" v-if="currInfluencer">
  <h1>Influencer Details</h1>
  <h2>{{currInfluencer.firstName}} {{currInfluencer.lastName}}</h2>
  <h3>Date Of Birth: {{currInfluencer.dateOfBirth | date}}</h3>
  <h2 class="gender">{{gender}}</h2>
  <h3>{{currInfluencer.email}}</h3>
  <img :src="currInfluencer.imgUrl" alt="Profile Picture">
  <ul class="tags clean-list">
    Tags:
    <li v-for="(tag, idx) in currInfluencer.tags" :key="idx" >{{tag}}</li>
  </ul>
  <div class="insagram flex">
    <ul class="social-info clean-list" v-for="(social, idx) in currInfluencer.socials" :key="idx">
      <li>{{social.type}}</li>
      <li>Men: {{social.menFollowers}}</li>
      <li>Women: {{social.womenFollowers}}</li>
      <li>Posts: {{social.posts}}</li>
      <li>Stories: {{social.stories}}</li>
      <li>Avrage Followers Age: {{social.avgAge}}</li>
      <li>Post Price: {{social.pricePerPost}}</li>
    </ul>
  </div>
  <div class="campaign-offer flex">
  <button  
    @click="isMakingOffer = !isMakingOffer"
    class="make-offer btn">
    Make an Offer
  </button>
  <select 
    v-if="isMakingOffer"
    @change="sendOffer($event)"
    class="campaign-list">
      <option 
        v-for="campaign in campaigns"
        :key="campaign._id"
        :value="campaign._id">
        {{campaign.name}}
      </option>
  </select>
  </div>
</section>
</template>

<script>
export default {
  name: 'influencer-details',
    data() {
    return {
      influencerId: null,
      currInfluencer: null,
      campaigns: [],
      isMakingOffer: false
    };
  },
  computed:{
    gender(){
      return (this.currInfluencer.gender === "Male") ?'♂': '♀';
       },
    loggedInUser(){
      return this.$store.getters.loggedInUser
    }
  },
  created() {
    this.influencerId = this.$route.params.id;
    this.getInfluencerById();
    this.loadCampaigns()
  },
  methods: {
    async getInfluencerById() {
      const influencer = await this.$store.dispatch({
        type: 'getInfluencerById',
        influencerId: this.influencerId
      });
      this.currInfluencer = influencer;  
    },
    async loadCampaigns(){
     this.campaigns =  await this.$store.dispatch('loadCampaigns')
    },
    async sendOffer(ev) {
      const campaignId = ev.target.value;
      const campaign = await this.$store.dispatch({
        type: 'getcampaignById',
        campaignId
      })
      const sentOffer = await this.$store.dispatch({
        type: 'sendOffer',
        campaign,
        influencer: this.currInfluencer
      })
    }
  }
}
</script>

<style>
.gender{
  font-weight: bolder;
  font-family: fantasy;
}
</style>