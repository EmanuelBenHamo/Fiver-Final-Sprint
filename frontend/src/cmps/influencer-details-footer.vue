<template>
  <section class="influencer-details-footer-container">
    <section class="followers-interests-container flex column">
      <div class="followers-interests-title-container flex align-center justify-center">
        <img
          class="followers-interests-icon"
          src="../assets/icons/interests.svg"
          alt="Followers interests"
          title="Followers interests"
        />
        <div class="followers-interests-title">Followers interests</div>
      </div>
      <div class="followers-interests">{{interests}}</div>
    </section>

    <section class="price-per-post-container flex column align-center space-between">
      <div class="price-per-post-title-container flex align-center justify-center">
        <img
          class="price-icon"
          src="../assets/icons/price.svg"
          alt="Price per post"
          title="Price per post"
        />
        <div class="price-per-post-title">Price per post</div>
      </div>
      <div class="price">{{price}}</div>
    </section>
  </section>
</template>

<script>
export default {
  name: "influencer-details-footer",
  props: {
    followersInterests: Array,
    pricePerPost: Number
  },
  computed: {
    interests() {
      return this.followersInterests
        .slice(0, 4) // will return new array
        .sort() // will sort the array and return sorted array (can't sort first, because can't mutate props)
        .join(", ");
    },
    price() {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(this.pricePerPost);
    }
  }
};
</script>

<style>
</style>