<template>
  <section class="influencer-poster-data-container flex column align-center space-between">
    <div class="influencer-fullname">{{fullname}}</div>
    <section class="social-details-container flex column align-center">
      <section class="social-networks-info-container flex">
        <div class="social-network-info flex column">
          <span class="social-network-name">{{influencer.socials[0].type}}</span>
          <span class="social-network-followers-count">{{firstSocialFollowersCount}}</span>
        </div>
        <div class="social-network-info flex column">
          <span class="social-network-name">{{influencer.socials[1].type}}</span>
          <span class="social-network-followers-count">{{secondSocialFollowersCount}}</span>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: "influencer-poster-data",
  props: {
    influencer: Object
  },
  computed: {
    fullname() {
      return `${this.influencer.firstName} ${this.influencer.lastName}`;
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
        this.influencer.socials[index].menFollowers +
        this.influencer.socials[index].womenFollowers;
      followersCount = Math.round(followersCount / 1000);
      followersCount = `${followersCount}k`;
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