<template>
  <section v-if="currInfluencer" class="influencer-details-container">
    <influencer-details-header class="influencer-header" :fullName="fullName" :age="age" />
    <influencer-photos-carousel
      class="influencer-photos-carousel"
      :photosUrls="getInfluencerPhotosUrls()"
    />
    <influencer-details-footer
      class="influencer-details-footer"
      :followersInterests="currInfluencer.tags"
      :pricePerPost="currInfluencer.pricePerPost"
    />
    <influencer-details-socials
      class="influencer-details-socials"
      :socials="currInfluencer.socials"
    />
    <div v-if="isMakingOffer" @click="onMakeOffer" class="screen"></div>
    <campaign-list v-if="isMakingOffer" @close="onMakeOffer" @sendOffer="sendOffer" />
  </section>
</template>

<script>
import moment from "moment";
import { eventBus } from "../services/event.bus.service.js";
import influencerDetailsHeader from "../cmps/influencer-details-header";
import influencerPhotosCarousel from "../cmps/influencer-photos-carousel";
import influencerDetailsFooter from "../cmps/influencer-details-footer";
import influencerDetailsSocials from "../cmps/influencer-details-socials";
import campaignList from "../cmps/campaign-list.vue";
export default {
  name: "influencer-details-new",
  data() {
    return {
      influencerId: null,
      currInfluencer: null,
      isMakingOffer: false
    };
  },
  created() {
    this.influencerId = this.$route.params.id;
    this.getInfluencerById();
    eventBus.$on("makeOffer", this.onMakeOffer);
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
    onMakeOffer() {
      this.isMakingOffer = !this.isMakingOffer;
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
      eventBus.$emit("showMsg", { txt: "Your offer has been sent" });
    }
  },
  components: {
    influencerDetailsHeader,
    influencerPhotosCarousel,
    influencerDetailsFooter,
    influencerDetailsSocials,
    campaignList
  }
};
</script>

<style>
</style>