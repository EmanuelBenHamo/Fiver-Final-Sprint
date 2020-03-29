<template>
  <section v-if="social" class="social-details-container">
    <section class="social-details-header flex space-between align-center">
      <div class="social-name">{{social.type}}</div>
      <div v-if="isClassIcon" :class="[socialIcon, iconClass]" />
      <img v-if="isImgIcon" class="social-icon-img" :src="iconImgSrc" />
    </section>

    <section class="social-details-body">
      <section class="followers-info-container">
        <div class="followers-title">Followers</div>
        <div class="followers-age-container flex space-between">
          <div class="followers-age-title">Average age</div>
          <span class="followers-age">{{social.followersAvgAge}}</span>
        </div>

        <section class="followers-gender-container">
          <section class="followers-gender-count men-followers flex space-between">
            <div class="gender-title">Men</div>
            <div class="gender-followers">{{social.menFollowers | followersCount}}</div>
          </section>
          <section class="followers-gender-count women-followers flex space-between">
            <div class="gender-title">Women</div>
            <div class="gender-followers">{{social.womenFollowers | followersCount}}</div>
          </section>
        </section>
      </section>

      <section class="social-activity-container">
        <div class="social-activity-title">Social activity</div>
        <label class="flex space-between">
          Posts
          <div class="posts-count">{{social.posts | number}}</div>
        </label>
        <label class="flex space-between">
          Stories
          <div class="posts-count">{{social.stories | number}}</div>
        </label>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    social: Object
  },
  data() {
    return {
      socialIcon: "social-icon",
      isClassIcon: false,
      iconClass: null,
      isImgIcon: false,
      iconImgSrc: null
    };
  },
  created() {
    this.setIconType();
  },
  methods: {
    setIconType() {
      if (
        this.social.type === "instagram" ||
        this.social.type === "snapchat" ||
        this.social.type === "facebook"
      ) {
        this.isClassIcon = true;
        this.iconClass = `fa fa-${this.social.type}`;
      } else if (this.social.type === "tiktok") {
        this.iconImgSrc = require("../assets/icons/tiktok.svg");
        this.isImgIcon = true;
      }
    }
  }
};
</script>

<style>
</style>