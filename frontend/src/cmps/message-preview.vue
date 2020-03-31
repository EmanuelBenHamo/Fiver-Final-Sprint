<template >
  <section class="message-container-wrapper" @click="toggleExpandContent">
    <section class="message-preview-container flex space-between">
      <div class="message-time">{{messageTime}}</div>
      <div class="message-subject">{{message.subject}}</div>
      <section class="action-btns flex space-between">
        <button class="action-btn accept-btn" @click.stop="acceptOffer">Accept</button>
        <button class="action-btn decline-btn" @click.stop="declineOffer">Decline</button>
      </section>
    </section>
    <section v-if="showExpandedContent" class="flex message-content">{{message.content}}</section>
  </section>
</template>
<script>
import moment from "moment";

export default {
  props: {
    message: Object
  },
  data() {
    return {
      elPreview: null,
      showExpandedContent: false
    };
  },
  computed: {
    messageTime() {
      let msgTime = new Date(this.message.timeSent);
      return `${msgTime.toDateString()} ${msgTime.toLocaleTimeString()}`;
    }
  },
  methods: {
    toggleExpandContent() {
      this.showExpandedContent = !this.showExpandedContent;
    },
    acceptOffer() {
      this.message.type = "message";
      console.log("offer accepted",this.message);
    },
    declineOffer() {
      console.log("offer rejected");
    }
  }
};
</script>

<style>
</style>