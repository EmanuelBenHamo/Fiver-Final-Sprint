<template>
  <section v-if="loggedInUser" class="backoffice-page-container">
    <dash-board  :user="loggedInUser"></dash-board>
    <div class="backoffice-navbar">
      <!-- <button class="btn" @click="toggle('offer')">offers</button>
      <button class="btn" @click="toggle('message')">messeges</button> -->
      <offer-list v-if="offerShow" :user="loggedInUser"></offer-list>
      <message-list  v-if="messageShow" :user="loggedInUser"></message-list>
    </div>
    <router-view></router-view>
  </section>
</template>
<script>
import { eventBus } from "../services/event.bus.service.js";
import dashBoard from "../cmps/dash-board.vue";
import offerList from "../cmps/offer-list.vue";
import messageList from "../cmps/message-list.vue";
import socket from "../services/socket.service.js";
export default {
  name: "backoffice-page",
  data() {
    return {
      loggedInUser: null,
      offerShow: false,
      messageShow: true,
      credentials: null
    };
  },
  created() {
    socket.setup();
    this.credentials = this.$store.getters.demoInfluencer;
    
    this.login()
    

  },
  methods: {
    async login() {
      let loggedInUser = await this.$store.dispatch({
        type: "login",
          credentials: this.credentials
        });
        this.loggedInUser = loggedInUser;
    },
    toggle(el) {
      if (el === "offer") {
        this.offerShow = !this.offerShow;
        this.messageShow = false;
      }
      if (el === "message") {
        this.offerShow = false;
        this.messageShow = !this.messageShow;
      }
    },
  },
  computed: {
    userId() {
      if (this.loggedInUser) return this.loggedInUser._id;
      else return " ";
    }
  },
  components: {
    dashBoard,
    offerList,
    messageList
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


