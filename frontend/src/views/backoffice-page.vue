<template>
  <section class="backoffice-page-container">
    <h1>Welcome to the Back Office</h1>
    <div class="backoffice-navbar">
      <router-link :to="'/dashboard/' + loggedInUser._id" class="dashboard">Dashboard</router-link>
      <router-link :to="'/offer/' + loggedInUser._id" class="offers">Offers</router-link>
      <!-- <router-link :to="'/dashCampaign/' + loggedInUser._id" class="campaign">Campaigns | </router-link> -->
      <router-link :to="'/message/' + loggedInUser._id" class="message">Messages</router-link>
    </div>
    <router-view></router-view>
  </section>
</template>
<script>
import { eventBus } from "../services/event.bus.service.js";
export default {
  name: "backoffice-page",
  data() {
    return {
      loggedInUser: null
    };
  },
  created() {
    this.loadLoggedInUser();
    // eventBus.$on("offerStatusChange", offerData => {
    //   this.$store.dispatch({ type: "updateOffer", offerData });
    // });
    this.$router.push("/dashboard/" + this.loggedInUser._id);
  },
  methods: {
    loadLoggedInUser() {
      this.loggedInUser = this.$store.getters.loggedInUser;
    }
  }
};
</script>