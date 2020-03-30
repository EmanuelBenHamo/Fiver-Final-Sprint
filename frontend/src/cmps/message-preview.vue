<template>
  <section class="message-preview">
    <pre>{{message}}</pre>
  </section>
</template>
<script>
export default {
  props: ["message"],
  data() {
    return {
      elPreview: null
    };
  },
  created() {}
};
</script>

<style>
</style>