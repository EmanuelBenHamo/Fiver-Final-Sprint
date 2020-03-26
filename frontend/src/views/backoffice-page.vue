<template>
  <section class="backoffice-page-container">
    <h1>Back Office</h1>
    <dash-board :user="loggedInUser"></dash-board>
    <div class="backoffice-navbar">
      <router-link :to="'/offer/' + this.loggedInUser._id" class="btn offers">Offers</router-link>
      <router-link :to="'/message/'" class="btn message">Messages</router-link>
    </div>
    <router-view></router-view>
  </section>
</template>
<script>
import { eventBus } from "../services/event.bus.service.js";
import dashBoard from "../cmps/dash-board.vue";
export default {
  name: "backoffice-page",
  data() {
    return {
      loggedInUser: null
    };
  },
  created() {
    this.loadLoggedInUser();

    //change offer status by clicking the
    //offer toggle button.
    //event bus catches the offerStatusChange
    //even and changes the relavent offer to its new status.

    // eventBus.$on("offerStatusChange", offerData => {
    //   this.$store.dispatch({ type: "updateOffer", offerData });
    // });
    // this.$router.push("/dashboard/" + this.loggedInUser._id);
  },
  computed: {
    showLoggedInUser() {
      return this.loggedInUser;
    }
  },
  methods: {
    loadLoggedInUser() {
      this.loggedInUser = this.$store.getters.loggedInUser;
    }
  },
  components: {
    dashBoard
  }
};
</script>