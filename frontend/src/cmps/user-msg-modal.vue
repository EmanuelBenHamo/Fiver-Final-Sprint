<template>
  <transition name="fade">
    <section v-if="isShown" class="msg-container">
      <h1>{{msg.txt}}</h1>
    </section>
  </transition>
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
      // console.log(msg);
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