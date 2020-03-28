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
    <button class="show-more-social-details-btn">Watch full details</button>
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
      let socialsCopy = this.socials.slice(0, this.socials.length);
      socialsCopy.sort(this.sortDesByFollowersCount);
      socialsCopy = socialsCopy.slice(0, 2);
      let socialsNames = socialsCopy.map(
        social => social.type.charAt(0).toUpperCase() + social.type.slice(1)
      );
      let socialsStr = socialsNames.join(", ");
      return ` ${socialsStr} `;
    },
    activeSocialsCount() {
      let socialsCopy = this.socials.slice(0, this.socials.length);
      socialsCopy.sort(this.sortDesByFollowersCount);
      let leadingSocialFollowersCount =
        socialsCopy[0].menFollowers + socialsCopy[0].womenFollowers;
      return ` ${Math.floor(leadingSocialFollowersCount / 1000)}k followers`;
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