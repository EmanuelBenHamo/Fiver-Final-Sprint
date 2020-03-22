<template>
  <section class="main-app">
    <items-list
      v-if="itemsList"
      :itemsList="itemsList"
    />
  </section>
</template>
<script>
import influencerService from "../services/influencer.service.js";
import campaignService from "../services/campaign.service.js";
import itemsList from "../cmps/items-list.vue";
export default {
  name: "main-app",
  data() {
    return {
      loggedInUser: null,
      itemsList: null
    };
  },
  created() {
    // this.loggedInUser = this.$store.getters.loggedInUser;
    this.loadInfluencers();
    this.loadBrands();
    this.loadCampaigns();
    console.log(this.itemsList)
  },
  methods: {
    async loadBrands() {
      await this.$store.dispatch({ type: "loadBrands" });
    },
    async loadInfluencers() {
      await this.$store.dispatch({ type: "loadInfluencers" });
      this.itemsList = this.$store.getters.influencers;
    },
    async loadCampaigns() {
      await this.$store.dispatch({ type: "loadCampaigns" });
    }
  },
  components: {
    itemsList
  }
};
</script>

<style>
</style>