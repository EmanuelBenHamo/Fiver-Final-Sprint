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
  </section>
</template>

<script>
import moment from "moment";
import influencerDetailsHeader from "../cmps/influencer-details-header";
import influencerPhotosCarousel from "../cmps/influencer-photos-carousel";
import influencerDetailsFooter from "../cmps/influencer-details-footer";
import influencerDetailsSocials from "../cmps/influencer-details-socials";
import { eventBus } from "../services/event.bus.service.js";
import socket from "../services/socket.service.js";
export default {
  name: "influencer-details",
  data() {
    return {
      influencerId: null,
      currInfluencer: null,
      loggedInUser: null
    };
  },
  created() {
    this.influencerId = this.$route.params.id;
    this.loggedInUser = this.$store.getters.loggedInUser;
    this.getInfluencerById();
    socket.setup();
    socket.emit("MSG_TOPIC", this.influencerId);
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
      eventBus.$emit("showMsg", {
        txt: `Offer has been sent to ${this.currInfluencer.firstName} ${this.currInfluencer.lastName}`
      });
      if (this.loggedInUser) {
        let offer = {
          from: this.loggedInUser._id,
          to: this.currInfluencer._id,
          timeSent: Date.now(),
          type: "offer",
          subject: "offer from" + " " + this.loggedInUser.name,
          content: `${this.loggedInUser.name} wants to promote their campaign with you. 
          watch their full details and contact the sender to make it happen.
          `
        };

        socket.emit("ADD_MESSAGE", offer);
      }
    },
    async getInfluencerById() {
      const influencer = await this.$store.dispatch({
        type: "getInfluencerById",
        influencerId: this.influencerId
      });
      this.currInfluencer = influencer;
    }
  },
  destroyed() {
    socket.off("ADD_MESSAGE", this.addMsg);
    socket.terminate();
  },
  components: {
    influencerDetailsHeader,
    influencerPhotosCarousel,
    influencerDetailsFooter,
    influencerDetailsSocials
  }
};
</script>

<style>
</style>