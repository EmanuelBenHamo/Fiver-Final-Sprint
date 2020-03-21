<template>
  <section class="main-app"></section>
  <!-- <list :items="itemsList" v-if="itemsList"></list> -->
</template>

<script>
export default {
  name: "main-app",
  data() {
    return {
      loggedInUser: null,
      itemsList: null
    };
  },
  created() {
    this.loggedInUser = this.$store.getters.loggedInUser;
    if (this.loggedInUser.type === "influencer") {
        // set items list to be campaigns list
    } else if (this.loggedInUser.type === "brand") {
        // set items list to be influencers list
    }
  }
};
</script>

<style>
</style>