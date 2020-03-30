<template>
  <section class="offer-list-container" v-if="offers">
    <h2 v-if="!offers">No offers so far</h2>
    <div class="offers-topbar">
      <span class="offer-list-title">Product</span>
      <span class="offer-list-title">Dates</span>
      <span class="offer-list-title">Status</span>
    </div>
    <offer-preview v-for="offer in offers" :key="offer._id" :offer="offer" />
  </section>
</template>
<script>
import offerPreview from "./offer-preview.vue";
import offerService from "../services/offer.service.js";
export default {
  name: "offer-list",
  props: {
    user: Object
  },
  data() {
    return {
      loggedInUser: null,
      offers: null
    };
  },
  async created() {
    await this.getLoggetInUser();
    // await this.loadOffers(this.loggedInUser._id);
    // if (this.user)
    // await this.loadOffers(this.user._id);
    // this.offers = await this.$store.getters.offer;
  },
  methods: {
    async loadOffers(influencerId) {
      const offers = await this.$store.dispatch("loadOffers", { influencerId });
      this.offers = offers;
    },
    async getLoggetInUser() {
      this.loggedInUser = this.$store.getters.loggedInUser;
      if (!this.loggedInUser) {
        this.loggedInUser = await this.$store.dispatch("getLoggedInUser");
      }
    }
  },
  components: {
    offerPreview
  }
};
</script>

<style>
.offers-topbar {
  width: 90%;
  border: 2px solid gray;
  padding: 10px;
}
</style>