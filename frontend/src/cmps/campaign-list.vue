<template>
  <section class="campaign-list">
    <campaign-preview v-for="campaign in campaignsForDisplay" :key="campaign._id" :campaign="campaign"/>
  </section>
</template>

<script>
import campaignPreview from './campaign-preview';
export default {
  props: {
    campaigns: {
      type: Array
    }
  },
  components: {
    campaignPreview
  },
  computed: {
    campaignsForDisplay() {
      return this.$store.getters.campaigns;
    }
  },
  created() {
    this.$store.dispatch({ type: 'loadCampaigns' });
  }
};
</script>
