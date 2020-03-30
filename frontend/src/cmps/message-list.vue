<template>
  <section class="message-container">
    <!-- <h2>No Messages to Show</h2> -->
    <!-- <h2 v-if="!messages">No Messages to Show</!-->
    <!-- <ul v-if="messages" class="message-list clean-list"> -->
    <ul class="message-list clean-list">
      <li v-for="(message, idx) in messages" class="message-preview-container" :key="idx">
        <message-preview :message="message"></message-preview>
      </li>
    </ul>
  </section>
</template>
<script>
import messagePreview from "./message-preview.vue";
import socket from "../services/socket.service.js";
export default {
  props: ["user"],
  components: {
    messagePreview
  },
  data() {
    return {
      messagesForDisplay: [],
      clickedMessage: null,
      loggedInUser: null
    };
  },
  created() {
    socket.setup();
    socket.emit("MESSAGE_SESSION", this.user._id); //====
    socket.emit("GET_USER_MESSAGES", this.user._id);
    socket.on("USER_MESSAGES", messages => {
      this.$store.dispatch("setUserMessages", messages);
      this.messagesForDisplay = messages;
    });
  },
  computed: {
    messages() {
      return this.messagesForDisplay;
    }
  },
  methods: {
    async getInfluencerById() {
      const influencer = await this.$store.dispatch({
        type: "getInfluencerById",
        influencerId: this.influencerId
      });
      this.currInfluencer = influencer;
    }
  },
  destroyed() {
    socket.off("ADD_MESSAGE", this.addMsg);
    // socket.terminate();
  }
};
</script>

<style>
</style>