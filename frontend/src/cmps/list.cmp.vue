<template>
  <section class="brand-list">
    <brand-preview v-for="brand in brandsForDisplay" :key="brand._id" :brand="brand"/>
    <campaign-preview v-for="campaign in campaignsForDisplay" :key="campaign._id" :campaign="campaign"/>
    <influencer-preview v-for="influencer in influencersForDisplay" :key="influencer._id" :influencer="influencer"/>
  </section>
</template>
<script>
import brandPreview from './brand-preview';
import influencerPreview from './influencer-preview';
import campaignPreview from './campaign-preview';
export default {
  props: {
    userType: {
      type: String
    },
    items:{
        type:Array
    },
  },
  components: {
    brandPreview,
    campaignPreview,
    influencerPreview
  },
  computed: {
    brandsForDisplay() {
      return this.$store.getters.brands;
    },
     campaignsForDisplay() {
      return this.$store.getters.campaigns;
    },
    influencersForDisplay(){
        return this.$store.getters.influencers;
    }
  },
  created() {
    this.$store.dispatch({ type: 'loadBrands' });
    this.$store.dispatch({ type: 'loadCampaigns' });
    this.$store.dispatch({ type: 'loadInfluencers' });
  }
};
</script>
