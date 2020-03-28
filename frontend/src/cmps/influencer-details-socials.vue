<template>
  <section class="influencer-details-socials-container">
    <influencer-details-socials-hero
      class="influencer-details-socials-hero"
      @toggleExpandedDetails="toggleDetails"
      :socials="sortedSocials"
      :isExpandedDetailsShown="isExpandedDetailsShown"
    />
    <influencerDetailsSocialsExpanded
      :socials="sortedSocials"
      :class="{
        'influencer-details-socials-expanded':true,
        flex:true,
        'show-details': isExpandedDetailsShown
       }"
    />
    <section class="send-offer-container flex justify-center">
      <button class="send-offer-btn" @click="onMakeOffer">make an offer</button>
    </section>
  </section>
</template>

<script>
import influencerDetailsSocialsHero from "./influencer-details-socials-hero";
import influencerDetailsSocialsExpanded from "./influencer-details-socials-expanded";
import { eventBus } from "../services/event.bus.service.js";
export default {
  name: "influencer-details-socials",
  props: {
    socials: Array
  },
  data() {
    return {
      isExpandedDetailsShown: false
    };
  },
  components: {
    influencerDetailsSocialsHero,
    influencerDetailsSocialsExpanded
  },
  computed: {
    sortedSocials() {
      let socialsCopy = this.socials.slice(0, this.socials.length);
      socialsCopy.sort(this.sortDesByFollowersCount);
      return socialsCopy;
    }
  },
  methods: {
    sortDesByFollowersCount(firstSocial, secondSocial) {
      let firstSocialFollowersCount =
        firstSocial.menFollowers + firstSocial.womenFollowers;
      let secondSocialFollowersCount =
        secondSocial.menFollowers + secondSocial.womenFollowers;

      return secondSocialFollowersCount - firstSocialFollowersCount;
    },
    toggleDetails() {
      this.isExpandedDetailsShown = !this.isExpandedDetailsShown;
    },
    onMakeOffer() {
      eventBus.$emit("makeOffer");
    }
  }
};
</script>

<style>
</style>