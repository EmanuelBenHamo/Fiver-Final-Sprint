<template>
  <section>
    <influencer-photos-carousel v-if="currInfluencer" :photosUrls="getInfluencerPhotosUrls()" />
  </section>
</template>

<script>
import influencerPhotosCarousel from "./influencer-photos-carousel";
export default {
  name: "influencer-details-new",
  data() {
    return {
      influencerId: null,
      currInfluencer: null
    };
  },
  created() {
    this.influencerId = this.$route.params.id;
    this.getInfluencerById();
  },
  methods: {
    getInfluencerPhotosUrls() {
      return this.currInfluencer.photos.map(currPhoto => {
        return currPhoto.regular;
      });
    },
    async getInfluencerById() {
      const influencer = await this.$store.dispatch({
        type: "getInfluencerById",
        influencerId: this.influencerId
      });
      this.currInfluencer = influencer;
    },
    async sendOffer(campaign) {
      const sentOffer = await this.$store.dispatch({
        type: "sendOffer",
        campaign,
        influencer: this.currInfluencer
      });
      console.log("Offer Sent", sentOffer);
      // alert('Your offer has been sent');
      eventBus.$emit("showMsg", { txt: "Your offer has been sent" });
    }
  },
  components: {
    influencerPhotosCarousel
  }
};
</script>

<style>
</style>