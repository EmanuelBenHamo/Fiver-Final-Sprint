<template>
  <section v-if="currInfluencer" class="influencer-details-container">
    <influencer-details-header class="influencer-header" :fullName="fullName" :age="age" />
    <influencer-photos-carousel
      class="influencer-photos-carousel"
      :photosUrls="getInfluencerPhotosUrls()"
    />
  </section>
</template>

<script>
import moment from "moment";
import influencerDetailsHeader from "./influencer-details-header";
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
  computed: {
    fullName() {
      return `${this.currInfluencer.firstName} ${this.currInfluencer.lastName}`;
    },
    age() {
      return moment().diff(
        new Date(+this.currInfluencer.dateOfBirth * 1000),
        "years",
        false
      );
    }
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
    influencerDetailsHeader,
    influencerPhotosCarousel
  }
};
</script>

<style>
</style>