<template>
  <section class="influencer-poster-data-container flex column align-center space-between">
    <div class="influencer-fullname">{{fullname}}</div>
    <influencer-socials-list class="influencers-socials-list" :socials="influencer.socials" />
  </section>
</template>

<script>
import influencerSocialsList from "./influencer-socials-list";
export default {
  name: "influencer-poster-data",
  props: {
    influencer: Object
  },
  computed: {
    fullname() {
      return `${this.influencer.firstName} ${this.influencer.lastName}`;
    }
  },
  components: {
    influencerSocialsList
  }
};
</script>

<style>
</style>