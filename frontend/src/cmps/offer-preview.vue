<template>
  <section class="offer-preview-container">
      <!-- <h1>Offer Preview</h1> -->
      <div class="offers-preview flex space-between">
      <span>{{offer.miniCampaign.product}}</span>
      <span>{{offer.miniCampaign.startDate | date}} - {{offer.miniCampaign.endDate | date}}</span>
      <span>{{offer.status}}</span>
  </div>
    <!-- {{offer}} -->
  </section>
</template>

<script>
export default {
props:['offer']
}
</script>

<style>
.offers-preview{
    width: 90%;
    border: 1px solid gray;
    padding: 10px;
    margin-bottom: 5px;
}
</style>