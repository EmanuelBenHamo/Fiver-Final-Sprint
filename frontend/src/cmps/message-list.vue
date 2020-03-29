<template>
  <section class="message-container">
    <h2 v-if="!messages">No Messages to Show</h2>
    <ul v-if="messages" class="message-list clean-list">
      <li v-for="(message, idx) in messages" class="message-preview-container" :key="idx">
        <message-preview :message="message"></message-preview>
      </li>
    </ul>
  </section>
</template>
<script>
import messagePreview from "./message-preview.vue";
export default {
  props: ["messages"],
  components: {
    messagePreview
  },
  data() {
    return {
      messagesToDisplay: this.messages,
      clickedMessage: null
    };
  }
};
</script>

<style>
</style>