<template>
  <section class="influencer-details-socials-container">
    <influencer-details-socials-header class="influencer-details-socials-hero" :socials="socials" />
    <section class="influencer-details-socials-expanded flex align-center justify-center">socials</section>
    <section class="send-offer-container flex justify-center">
      <button class="send-offer-btn">make an offer</button>
    </section>
  </section>
</template>

<script>
import influencerDetailsSocialsHeader from "./influencer-details-socials-header";
export default {
  name: "influencer-details-socials",
  props: {
    socials: Array
  },
  components: {
    influencerDetailsSocialsHeader
  }
};
</script>

<style>
</style>