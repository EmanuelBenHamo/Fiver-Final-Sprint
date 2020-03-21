<template>
  <section class="main-app">
    <span>hello from main app cmp</span>
    <!-- <list :items="itemsList" v-if="itemsList"></list> VOVA PLEASE ENTER HERE THE LIST YOU CREATED AND PASS THE ITEMSLIST AS PROPS, ALSO THE TYPE OF THE USER -->
  </section>
</template>

<script>
import influencerService from '../services/influencer.service.js';
import campaignService from '../services/campaign.service.js';
export default {
  name: "main-app",
  data() {
    return {
      loggedInUser: null,
      itemsList: null
    };
  },
  created() {
    this.loggedInUser = this.$store.getters.loggedInUser;
    if (this.loggedInUser.type === "influencer") {
        this.itemsList = await campaignService.query();
    } else if (this.loggedInUser.type === "brand") {
        this.itemsList = await influencerService.query();
    }
  }
};
</script>

<style>
</style>