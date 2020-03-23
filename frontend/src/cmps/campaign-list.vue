<template>
<section class="campaign-list-container" v-if="campaigns">
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
        v-for="campaign in campaigns"
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
    props: {
        campaigns:{
            type: Array
        }
    },
    components:{
        campaignPreview
    }
}
</script>

<style>

</style>