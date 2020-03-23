<template>
  <section>
      <div v-if="isShown" class="msg-container"></div>
    <transition name="fade">
      <h1>hello maafaka{{msg.txt}}</h1>
    </transition>
  </section>
</template>

<script>
import { eventBus } from "../services/event.bus.js";
export default {
  data() {
    return {
      isShown: false,
      msg: {}
    };
  },
  created() {
    eventBus.$on("showMsg", msg => {
      this.msg = msg;
      this.isShown = true;
      setTimeout(() => {
        this.isShown = false;
      }, 2000);
    });
  }
};
</script>

<style>
</style>