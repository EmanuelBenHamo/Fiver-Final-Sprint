<template>
  <section class="offer-list-container" v-if="offers">
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
  data() {
    return {
      offers: null
    };
  },
  created() {
    this.loadOffers(this.$route.params.id);
    this.offers = this.$store.getters.offer;
  },
  methods: {
    async loadOffers(influencerId) {
      const offers = await this.$store.dispatch("loadOffers", { influencerId });
      this.offers = offers;
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