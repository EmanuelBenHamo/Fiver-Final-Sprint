<template>
  <section class="social-network-info-container flex column">
    <i :class="[socialIconLogo, socialIcon]"></i>
    <span class="social-network-followers-count">{{followersCount}}</span>
  </section>
</template>

<script>
export default {
  name: "influencer-social-preview",
  props: {
    social: Object
  },
  data() {
    return {
      socialIconLogo: "",
      socialIcon: "social-icon"
    };
  },
  created() {
    this.socialIconLogo = `fa fa-${this.social.type.toLowerCase()}`;
  },
  computed: {
    followersCount() {
      return `${Math.floor(
        (this.social.menFollowers + this.social.womenFollowers) / 1000
      )}K`;
    }
  }
};
</script>

<style>
</style>