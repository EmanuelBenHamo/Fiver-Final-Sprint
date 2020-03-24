<template>
  <section class='main-app'>
    <influencer-list
      v-if='influencerList'
      :influencerList='influencerList'
    />
  </section>
</template>
<script>
import influencerService from '../services/influencer.service.js';
import campaignService from '../services/campaign.service.js';
import influencerList from '../cmps/influencer-list.vue';
export default {
  name: 'main-app',
  data() {
    return {
      loggedInUser: null,
      influencerList: null
    };
  },
  created() {
    this.loggedInUser = this.$store.getters.loggedInUser;
    this.loadInfluencers();
    this.loadBrands();
    this.loadCampaigns();
  },
  methods: {
    async loadBrands() {
      await this.$store.dispatch({ type: 'loadBrands' });
    },
    async loadInfluencers() {
      await this.$store.dispatch({ type: 'loadInfluencers' });
      this.influencerList = this.$store.getters.influencers;
    },
    async loadCampaigns() {
      await this.$store.dispatch({ 
        type: "loadCampaigns",
        filterBy: {userId: this.loggedInUser._id}
        });
    }
  },
  components: {
    influencerList,
  }
};
</script>

<style>
</style>