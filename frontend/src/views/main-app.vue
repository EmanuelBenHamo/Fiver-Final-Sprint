<template>
  <section class="main-app">
    <list v-if="itemsList" :itemsList="itemsList" :userType="this.loggedInUser.type" />
  </section>
</template>
<script>
import influencerService from "../services/influencer.service.js";
import campaignService from "../services/campaign.service.js";
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
    getItemsListByUserType();
  },
  methods: {
    async getItemsListByUserType() {
      this.itemsList = await this.$store.dispatch({
        type: "getUserItems"
      });
    }
  },
  components: {
    list
  }
};
</script>

<style>
</style>