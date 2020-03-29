<template>
  <section class="influencer-details-socials-container">
    <influencer-details-socials-hero
      class="influencer-details-socials-hero"
      :socials="sortedSocials"
    />
    <influencerDetailsSocialsExpanded
      :socials="sortedSocials"
      class="influencer-details-socials-expanded flex"
    />
  </section>
</template>

<script>
import influencerDetailsSocialsHero from "./influencer-details-socials-hero";
import influencerDetailsSocialsExpanded from "./influencer-details-socials-expanded";
export default {
  name: "influencer-details-socials",
  props: {
    socials: Array
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
    }
  }
};
</script>

<style>
</style>