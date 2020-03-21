<template>
  <section class="campaign-preview">
      <h1>{{campaign.name}}</h1>
        <h3>Brand: {{campaign.miniBrand.name}}</h3>
        <h3>Product Name: {{campaign.product}}</h3>
        <h3>Budget: {{campaign.budget | currency}}</h3>
        <h4>Start date:{{campaign.startDate | date}}</h4>
        <h4>End date:{{campaign.endDate |date}}</h4>
        <router-link :to="'/campaign/' + campaign._id">
            <button class="btn">Details</button>
      </router-link>
  </section>
</template>
<script>
export default {
  props: {
    campaign: {
      type: Object
    }
  },
  methods: {},
};
</script>
