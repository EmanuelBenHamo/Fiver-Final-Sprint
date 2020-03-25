<template>
  <section class="social-network-info-container flex column">
    <span class="social-network-name">{{social.type}}</span>
    <span class="social-network-followers-count">{{followersCount}}</span>
  </section>
</template>

<script>
export default {
  name: "influencer-social-preview",
  props: {
    social: Object
  },
  computed: {
    followersCount() {
      return `${this.social.menFollowers + this.social.womenFollowers}k`;
    }
  }
};
</script>

<style>
</style>