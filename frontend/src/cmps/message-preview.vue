<template >
  <section class="message-container-wrapper">
    <section class="message-preview-container flex space-between">
      <div class="message-time">{{messageTime}}</div>
      <div class="message-subject">{{message.subject}}</div>
      <section class="action-btns flex space-between">
        <button class="action-btn accept-btn">Accept</button>
        <button class="action-btn decline-btn">Decline</button>
      </section>
    </section>
      <section class="flex message-content">{{message.content}}</section>
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
      elPreview: null
    };
  },
  computed: {
    messageTime() {
      let msgTime = new Date(this.message.timeSent);
      return `${msgTime.toDateString()} ${msgTime.toLocaleTimeString()}`;
    }
  }
};
</script>

<style>
</style>