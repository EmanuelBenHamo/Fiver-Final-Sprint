<template>
  <section v-if="isShown" class="msg-container">
    <transition name="fade">
      <h1 v-if="isShown">{{msg.txt}}</h1>
    </transition>
  </section>
</template>

<script>
import { eventBus } from "../services/event.bus.service.js";
export default {
  data() {
    return {
      isShown: false,
      msg: {}
    };
  },
  created() {
    eventBus.$on("showMsg", msg => {
      console.log(msg);
      this.msg = msg;
      this.isShown = true;
      setTimeout(() => {
        this.isShown = false;
      }, 1000);
    });
  }
};
</script>

<style>
</style>