<template>
  <section class="main-app">
    <list v-if="itemsList" :itemsList="itemsList" :userType="this.loggedInUser.type" />
  </section>
</template>
<script>
import influencerService from "../services/influencer.service.js";
import campaignService from "../services/campaign.service.js";
import list from "../cmps/list.cmp.vue";
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
      campaignService.query()
      .then(res => {
        this.itemsList = res;
      });
      console.log(this.itemsList);
    } else if (this.loggedInUser.type === "brand") {
      this.itemsList = influencerService.query()
            .then(res => {
              this.itemsList = res;
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