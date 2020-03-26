<template>
  <section class="influencer-socials-list-container flex align-center">
    <influencer-social-preview v-for="(social, index) in socials.slice(0,2)" :social="social" :key="index" />
  </section>
</template>

<script>
import influencerSocialPreview from "./influencer-social-preview";
export default {
  name: "influencer-socials-list",
  props: {
    socials: Array
  },
  components: {
    influencerSocialPreview
  }
};
</script>

<style>
</style>