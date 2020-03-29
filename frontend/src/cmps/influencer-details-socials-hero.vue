<template>
  <section class="influencer-details-socials-hero-container flex column align-center">
    <div class="active-socials-names-text">
      <span>Active in</span>
      <span class="social-names">{{activeSocialsNames}}</span>
      <span>and more</span>
    </div>
    <div class="active-socials-count-text">
      <span>With more than</span>
      <span class="socials-count">{{activeSocialsCount}}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "influencer-details-socials-header",
  props: {
    socials: Array
  },
  computed: {
    activeSocialsNames() {
      let socialsNames = this.socials
        .slice(0, 2)
        .map(
          social => social.type.charAt(0).toUpperCase() + social.type.slice(1)
        );
      let socialsStr = socialsNames.join(", ");
      return ` ${socialsStr} `;
    },
    activeSocialsCount() {
      let leadingSocialFollowersCount =
        this.socials[0].menFollowers + this.socials[0].womenFollowers;
      return ` ${Math.floor(leadingSocialFollowersCount / 1000)}k followers`;
    }
  }
};
</script>

<style>
</style>