<template>
  <section class="message-preview">{{message.txt}}</section>
</template>
<script>
export default {
  props: ["message"],

  data() {
    return {
      elPreview: null
    };
  },
  created() {
    console.log(this.message);
  }
};
</script>

<style>
</style>