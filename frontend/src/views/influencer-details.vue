<template>
  <section v-if="currInfluencer" class="influencer-details-container">
    <influencer-details-header class="influencer-header" :fullName="fullName" :age="age" />
    <influencer-photos-carousel
      class="influencer-photos-carousel"
      :photosUrls="getInfluencerPhotosUrls()"
    />
    <influencer-details-socials
      class="influencer-details-socials"
      :socials="currInfluencer.socials"
    />
    <section class="influencer-details-right-side-bar">
      <influencer-details-footer
        class="influencer-details-footer"
        :followersInterests="currInfluencer.tags"
        :pricePerPost="currInfluencer.pricePerPost"
      />
      <section class="send-offer-container flex justify-center">
        <button class="send-offer-btn" @click="onMakeOffer">make an offer</button>
      </section>
    </section>

    <div v-if="isMakingOffer" @click="onMakeOffer" class="screen"></div>
  </section>
</template>

<script>
import moment from "moment";
import influencerDetailsHeader from "../cmps/influencer-details-header";
import influencerPhotosCarousel from "../cmps/influencer-photos-carousel";
import influencerDetailsFooter from "../cmps/influencer-details-footer";
import influencerDetailsSocials from "../cmps/influencer-details-socials";
import { eventBus } from "../services/event.bus.service.js";
export default {
  name: "influencer-details",
  data() {
    return {
      influencerId: null,
      currInfluencer: null,
      isMakingOffer: false,
      loggedInUser: null
    };
  },
  created() {
    this.influencerId = this.$route.params.id;
    this.getInfluencerById();
    this.loggedInUser = this.$store.getters.loggedInUser;

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
      console.log('HEREREEE');
      this.isMakingOffer = !this.isMakingOffer;
      this.sendOffer()
    },
    async getInfluencerById() {
      const influencer = await this.$store.dispatch({
        type: "getInfluencerById",
        influencerId: this.influencerId
      });
      this.currInfluencer = influencer;
    },
    async sendOffer() {
      
      const sentOffer = await this.$store.dispatch({
        type: "sendOffer",
        influencer: this.currInfluencer,
        brand: this.loggedInUser
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
  }
};
</script>

<style>
</style>