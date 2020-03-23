<template>
<section class="campaign-list-container" v-if="campaignsToShow">
  <button class="close-list-btn" @click="$emit('close')">Back</button>
  <table class="campaign-table-container">
      <thead>
          <tr>
            <th>Campaign</th>
            <th>Product</th>
            <th>Dates</th>
            <th colspan="2">Budget</th>
          </tr>
      </thead>
      <tbody>
        <campaign-preview
        v-for="campaign in campaignsToShow"
        :campaign="campaign"
        :key="campaign._id"
        @sendOffer="$emit('sendOffer', campaign)">
        </campaign-preview>
      </tbody>
  </table>
</section>
</template>

<script>
import campaignPreview from './campaign-preview.vue';
export default {
    name: 'campaign-list',
    data(){
      return {
        campaignsToShow: []
      }
    },
    created(){
      this.loadCampaigns()
    },
    methods: {
      async loadCampaigns(){
          this.campaignsToShow =  await this.$store.getters.campaignsToShow
      },
    },
    components:{
        campaignPreview
    }
}
</script>

<style>

</style>