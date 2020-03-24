<template>
  <section v-if="influencer" class="influencer-preview">
    <router-link :to="'/influencer/' + influencer._id">
      <section class="carousel-container ratio-poster">
        <img class="influencer-photo flex" :src="photo" />

        <section class="flex column space-between carousel-info-container">
          <div class="flex carousel-dots-bar">dots bar</div>
          <section class="carousel-nav-btns flex space-between">
            <button class="carousel-nav-btn carousel-prev-btn">prev</button>
            <button class="carousel-nav-btn carousel-next-btn">next</button>
          </section>
          <section class="influencer-info-container flex column align-center">
            <div class="influencer-fullname">{{fullname}}</div>
            <section class="flex column align-center social-details-container">
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
        </section>
      </section>
    </router-link>
  </section>
</template>

<script>
export default {
  props: {
    influencer: {
      type: Object
    }
  },
  computed: {
    photo() {
      return this.influencer.photos[0].url;
    },
    fullname() {
      return `${this.influencer.firstName} ${this.influencer.lastName}`;
    },
    tags() {
      const str = this.influencer.tags.slice(0, 2).join(" | ");
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
        this.influencer.socials[index].menFollowers +
        this.influencer.socials[index].womenFollowers;
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

    