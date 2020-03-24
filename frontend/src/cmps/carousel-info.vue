<template>
  <section class="influencer-info-container flex column align-center">
    <div class="influencer-fullname">{{fullname}}</div>
    <section class="flex column align-center social-details-container">
      <section class="social-networks-info-container flex">
        <div class="social-network-info flex column">
          <span class="social-network-name">{{previewItem.socials[0].type}}</span>
          <span class="social-network-followers-count">{{firstSocialFollowersCount}}</span>
        </div>
        <div class="social-network-info flex column">
          <span class="social-network-name">{{previewItem.socials[1].type}}</span>
          <span class="social-network-followers-count">{{secondSocialFollowersCount}}</span>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: "carousel-info",
  props: {
    previewItem: Object
  },
  computed: {
    fullname() {
      return `${this.previewItem.firstName} ${this.previewItem.lastName}`;
    },
    tags() {
      const str = this.previewItem.tags.slice(0, 2).join(" | ");
      return str;
    },
    firstSocialFollowersCount() {
      return this.getFollowersCountBySocialIndex(0);
    },
    secondSocialFollowersCount() {
      return this.getFollowersCountBySocialIndex(1);
    }
  },
  methods: {
    getFollowersCountBySocialIndex(index) {
      let followersCount =
        this.previewItem.socials[index].menFollowers +
        this.previewItem.socials[index].womenFollowers;
      followersCount = Math.round(followersCount / 1000);
      followersCount = `${followersCount}K`;
      return followersCount;
    },
    compareSocials(firstSocial, secondSocial) {
      return (
        firstSocial.menFollowers +
        firstSocial.womenFollowers -
        secondSocial.menFollowers +
        secondSocial.womenFollowers
      );
    }
  }
};
</script>

<style>
</style>