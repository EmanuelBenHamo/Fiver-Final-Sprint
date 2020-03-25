<template>
  <section class='main-app'>
    <!-- <user-msg></user-msg> -->
    <influencer-list
      v-if='influencerList'
      :influencers='influencerList'
      @setFilterBy="loadInfluencers"
    />
  </section>
</template>
<script>
import influencerService from '../services/influencer.service.js';
import campaignService from '../services/campaign.service.js';
import influencerList from '../cmps/influencer-list.vue';
// import userMsg from '../cmps/user-msg-modal.vue'
export default {
  name: 'main-app',
  data() {
    return {
      loggedInUser: null,
      influencerList: null
    };
  },
  async created() {
    await this.getLoggetInUser();
    this.loadInfluencers();
    this.loadBrands();
    this.loadCampaigns();
  },
  methods: {
    async loadBrands() {
      await this.$store.dispatch({ type: 'loadBrands' });
    },
    async loadInfluencers(filterBy) {
      console.log('filterBy!!', filterBy);
      await this.$store.dispatch({ 
        type: 'loadInfluencers', 
        filterBy
        });
      this.influencerList = this.$store.getters.influencers;
    },
    async loadCampaigns() {
      await this.$store.dispatch({ 
        type: "loadCampaigns",
        filterBy: {userId: this.loggedInUser._id}
        });
    },
    async getLoggetInUser(){
      this.loggedInUser = this.$store.getters.loggedInUser;
      if(!this.loggedInUser){
       this.loggedInUser = await this.$store.dispatch('getLoggedInUser');
      }
    }
  },
  components: {
    influencerList,
  }
};
</script>

<style>
</style>