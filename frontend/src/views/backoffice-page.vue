<template>
  <section class="backoffice-page-container">
    <!-- <h1>Back Office</h1> -->
    <dash-board :user="loggedInUser"></dash-board>
    <div class="backoffice-navbar">
      <!-- <offer-list :user="this.loggedInUser"></offer-list> -->
      <router-link :to="'/offer/' + userId" class="btn offers">Offers</router-link>
      <router-link :to="'/message/'" class="btn message">Messages</router-link>
    </div>
    <router-view></router-view>
  </section>
</template>
<script>
import { eventBus } from "../services/event.bus.service.js";
import dashBoard from "../cmps/dash-board.vue";
import offerList from "../cmps/offer-list.vue";
export default {
  name: "backoffice-page",
  data() {
    return {
      loggedInUser: null
    };
  },
  async created() {
    await this.getLoggetInUser();
  },
  methods: {
    async getLoggetInUser() {
      this.loggedInUser = this.$store.getters.loggedInUser;
      if (!this.loggedInUser) {
        this.loggedInUser = await this.$store.dispatch("getLoggedInUser");
      }
    }
  },
  computed: {
    userId() {
      if (this.loggedInUser) return this.loggedInUser._id;
      else return " ";
    }
  },
  components: {
    dashBoard,
    // offerList
  }
};
//add to created(){}
//change offer status by clicking the
//offer toggle button.
//event bus catches the offerStatusChange
//even and changes the relavent offer to its new status
// eventBus.$on("offerStatusChange", offerData => {
//   this.$store.dispatch({ type: "updateOffer", offerData });
// });
// this.$router.push("/dashboard/" + this.loggedInUser._id);
</script>


