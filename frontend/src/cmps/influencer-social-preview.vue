<template>
  <section class="social-network-info-container flex column">
    {{social}}
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
      return `${social.menFollowers + social.womenFollowers}k`;
    }
  }
};
</script>

<style>
</style>