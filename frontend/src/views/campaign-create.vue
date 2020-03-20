<template>
  <section class="campaign-create-container">
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
    </div>
    <div class="target-audience">
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
    <button @click="submit">Save</button>
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
      }
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
    }
  }
};
</script>

<style scoped>
.campaign-create-container > * {
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 50%;
  margin: auto;
}
label {
  margin: 10px 0;
}
</style>
