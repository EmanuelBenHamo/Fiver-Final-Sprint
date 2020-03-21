<template>
  <section class="campaign-create-container text-center">
    <h1>Create a Campaign</h1>
    <div class="campaing-info">
      <label
        >Name<input
          type="text"
          v-model="campaign.name"
          placeholder="Campaign name"
      /></label>
      <label
        >Product<input
          type="text"
          v-model="campaign.product"
          placeholder="Product Name"
      /></label>
      <label>Start Date<input type="date" v-model="campaign.startDate"/></label>
      <label>End Date<input type="date" v-model="campaign.endDate"/></label>
      <label>Budget<input type="number" v-model="campaign.budget"/></label>
      <label
        >Description<textarea
          v-model="campaign.description"
          placeholder="Say something about your campaign..."
      /></label>
      <label
        >Minimum Age<input type="number" v-model="campaign.audience.minAge"
      /></label>
      <label
        >Maximum Age<input type="number" v-model="campaign.audience.maxAge"
      /></label>
      <div class="targets">
        <input
          type="checkbox"
          value="sport"
          v-model="campaign.audience.targets"
        /><label>Sport</label>
        <input
          type="checkbox"
          value="Fashion"
          v-model="campaign.audience.targets"
        /><label>Fashion</label>
      </div>
      <div class="gender">
        <input
          type="checkbox"
          name="men"
          v-model="campaign.audience.gender.menOnly"
        /><label>Men</label>
        <input
          type="checkbox"
          name="women"
          v-model="campaign.audience.gender.womenOnly"
        /><label>Women</label>
      </div>
    </div>
    <button @click="submit" class="btn">Save</button>

    <button @click="getTemplateCampaigns" class="btn">Choose Template</button>
    <select
    v-if="templateCampaigns && templateCampaigns.length" 
    @change="setTemplateCampaign($event)">
      <option 
        v-for="template in templateCampaigns"
        :key="template._id"
        :value="template._id">{{template.name}}</option>
    </select>
  </section>
</template>

<script>
export default {
  name: "campaign-create",
  data() {
    return {
      campaign: {
        name: "",
        product: "",
        startDate: "",
        endDate: "",
        budget: 0,
        description: "",
        audience: {
          minAge: 0,
          maxAge: 0,
          targets: [],
          gender: {
            menOnly: false,
            womenOnly: false
          }
        }
      },
      templateCampaigns: []
    };
  },
  methods: {
    async submit() {
      this.$store.dispatch({
        type: "addCampaign",
        campaign: this.campaign
      });
      this.getEmptyCampaign();
    },
    async getEmptyCampaign() {      
      const emptyCampaign = await this.$store.dispatch('getEmptyCampaign')
      this.campaign = emptyCampaign;
    },
    async setTemplateCampaign(ev){
     var campaign = await this.$store.dispatch({
        type: 'getcampaignById',
        campaignId:ev.target.value
        })
        campaign.startDate = new Date(+campaign.startDate).toISOString().slice(0,10)  ;
        campaign.endDate = new Date(+campaign.endDate).toISOString().slice(0,10)  ;
      this.campaign = JSON.parse(JSON.stringify(campaign))
    },
    async getTemplateCampaigns() {
      const templateCampaigns = await this.$store.dispatch('loadCampaigns');
      this.templateCampaigns = templateCampaigns.slice(4, 7)
    }
  }
};
</script>

<style scoped>

</style>
