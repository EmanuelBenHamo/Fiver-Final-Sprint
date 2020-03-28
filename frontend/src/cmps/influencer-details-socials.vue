<template>
  <section class="influencer-details-socials-container">
    <section class="influencer-details-socials-hero flex align-center justify-center">hero</section>
    <section class="influencer-details-socials-details flex align-center justify-center">socilas</section>
    <section class="send-offer-container flex align-center justify-center">
      <button class="send-offer-btn">make an offer</button>
    </section>
  </section>
</template>

<script>
export default {
  name: "influencer-details-socials",
  props: {
    socials: Array
  }
};
</script>

<style>
</style>