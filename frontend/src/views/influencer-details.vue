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
</section>
</template>

<script>
export default {
    name: 'influencer-details',
    data() {
    return {
      influencerId: null,
      currInfluencer: null
    };
  },
  computed:{
    gender(){
      return (this.currInfluencer.gender === "Male") ?'♂': '♀';
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
  }
}
</script>

<style>
.gender{
  font-weight: bolder;
  font-family: fantasy;
}
</style>