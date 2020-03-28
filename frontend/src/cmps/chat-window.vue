<template>
  <section class="chat-window form-container">
    <button class="chat-btn" @click="toggleChat"></button>
    <div v-if="isChatOpen" class="chat-popup">
      <ul class="chat-msg-list clean-list" ref="chatMsgs">
        <li v-for="(message, idx) in messages" :key="idx">{{message.txt}}</li>
      </ul>
      <div class="m-container">
        <label for="msg"></label>
        <input type="text" name id class="chat-input" v-model="currntMsg.txt" @keyup.enter="send" />
        <button type="submit" class="btn" @click.prevent="send">Send</button>
        <button type="button" class="btn" @click.prevent="toggleChat">Close</button>
      </div>
    </div>
  </section>
</template>
<script>
import socket from "../services/socket.service.js";
export default {
  name: "chat-window",
  data() {
    return {
      messages: [],
      isChatOpen: false,
      currntMsg: { txt: "" }
    };
  },
  created() {
    socket.setup();
    socket.on("chat newMsgs", msgs => {
      console.log(msgs);
      this.messages = msgs;
      // });
    });
  },
  mounted: () => {
    socket.on("chat msg", msg => {
      app.messages.push(msg);
    });
  },
  methods: {
    toggleChat() {
      this.isChatOpen = !this.isChatOpen;
    },
    send() {
      let msgCpy = JSON.parse(JSON.stringify(this.currntMsg));
      this.messages.push(msgCpy);
      this.currntMsg.txt = null;
      socket.emit("chat msg", msgCpy);
      // this.$refs.chatMsgs.scrollIntoView(false);
    }
  },
  computed: {
    msgs() {
      return this.$store.getters.messages;
    }
  }
};
</script>
