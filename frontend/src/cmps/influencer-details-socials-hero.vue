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
    <button
      class="show-more-social-details-btn"
      @click="toggleExpandedDetails"
    >{{fullDetailsBtnText}}</button>
  </section>
</template>

<script>
export default {
  name: "influencer-details-socials-header",
  props: {
    socials: Array,
    isExpandedDetailsShown: Boolean
  },
  computed: {
    fullDetailsBtnText() {
      if (this.isExpandedDetailsShown) {
        return "Close full details";
      } else {
        return "Watch full details";
      }
    },
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
  },
  methods: {
    toggleExpandedDetails() {
      this.$emit("toggleExpandedDetails");
    }
  }
};
</script>

<style>
</style>