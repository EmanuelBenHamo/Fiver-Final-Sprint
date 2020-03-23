<template>
  <section v-if="currCampaign" class="campaign-container text-center">
    <div class="campaign-info-container flex justify-center">
      <div class="campaign-info">
        <h2>Campaign Name: {{currCampaign.name}}</h2>
        <h3>Brand: {{currCampaign.miniBrand.name}}</h3>
        <h3>Product Name: {{currCampaign.product}}</h3>
        <h3>Budget: {{currCampaign.budget | currency}}</h3>
        <h4>From: {{currCampaign.startDate | date}} To: {{currCampaign.endDate |date}}</h4>
      </div>
      <img :src="currCampaign.imgUrl" alt="Brand Logo" />
    </div>
    <p>{{currCampaign.description}}</p>
    <h4>Campaign Status: {{currCampaign.status}}</h4>
    <h4>Tags:</h4>
    <ul class="tags clean-list">
      <li v-for="(tag, idx) in currCampaign.tags" :key="idx">{{tag}}</li>
    </ul>
    <div class="target-audience">
      <h1>Campaign Audience</h1>
      <h3>Age: {{currCampaign.audience.minAge}} - {{currCampaign.audience.maxAge}}</h3>

      <h4>Targets:</h4>
      <ul class="targets clean-list">
        <li v-for="(target, idx) in currCampaign.audience.targets" :key="idx">{{target}}</li>
      </ul>
      <h4>Gender: {{gender}}</h4>
    </div>
  </section>
</template>

<script>
export default {
  name: "campaign-details",
  data() {
    return {
      campaignId: null,
      currCampaign: null,
      loggedInUser: null
    };
  },
  computed: {
    gender() {
      var gender = this.currCampaign.audience.gender;
      if (
        (gender.menOnly && gender.menOnly) ||
        (!gender.menOnly && !gender.menOnly)
      ) {
        return "All";
      } else if (gender.menOnly && !gender.womenOnly) {
        return "Men";
      } else {
        return "Women";
      }
    }
  },
  created() {
    var campaignId = this.$route.params.id;
    this.campaignId = campaignId;
    this.getcampaignById();
  },
  methods: {
    async getcampaignById() {
      const campaign = await this.$store.dispatch({
        type: 'getcampaignById',
        campaignId: this.campaignId
      });
      this.currCampaign = campaign;
    },
    async sendOffer() {
      const sentOffer = await this.$store.dispatch({
        type: 'sendOffer',
        campaign : this.currCampaign,
        // TODO - get influencer from the logged in user
        influencer: this.loggedInUser
      })
      console.log('Offer Sent', sentOffer);
      alert('Your offer has been sent')
      
    }
  }
};
</script>

<style>

</style>