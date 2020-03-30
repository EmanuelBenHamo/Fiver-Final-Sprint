<template>
  <section class="message-container">
    <h2>No Messages to Show</h2>
    <!-- <h2 v-if="!messages">No Messages to Show</!-->
    <!-- <ul v-if="messages" class="message-list clean-list"> -->
    <ul class="message-list clean-list">
      <li v-for="(message, idx) in msgs" class="message-preview-container" :key="idx">
        <message-preview :message="message"></message-preview>
      </li>
    </ul>
  </section>
</template>
<script>
import messagePreview from "./message-preview.vue";
export default {
  props: ["user"],
  components: {
    messagePreview
  },
  data() {
    return {
      // messagesToDisplay: this.messages,
      messagesForDisplay: [{ txt: "msg1" }, { txt: "msg2" }],
      clickedMessage: null
    };
  },
  created() {
    console.log(this.user);
    socket.setup();
    // socket.emit("GET_USER_MESSAGES" loggedInUser._id);
    socket.on("USER_INBOX", this.addMsg);

    socket.on("chat addMsg", this.addMsg);
  },
  // destroyed() {
  //   socket.off("chat addMsg", this.addMsg);
  //   socket.terminate();
  // },
  computed: {
    msgs() {
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
  }
};
</script>

<style>
</style>