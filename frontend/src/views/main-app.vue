<template>
  <section class="main-app">
    <items-list v-if="itemsList" :itemsList="itemsList" :userType="this.loggedInUser.credentials.userType" />
  </section>
</template>
<script>
import influencerService from "../services/influencer.service.js";
import campaignService from "../services/campaign.service.js";
import itemsList from '../cmps/items-list.vue';
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
    this.getItemsListByUserType();
  },
  methods: {
    async getItemsListByUserType() {
      this.itemsList = await this.$store.dispatch({
        type: "getUserItems"
      });
    }
  },
  components: {
    itemsList
  }
};
</script>

<style>
</style>