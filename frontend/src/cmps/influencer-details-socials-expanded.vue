<template>
  <section v-if="socials" class="influencer-details-socials-expanded-container flex wrap">{{socials}}</section>
</template>

<script>
export default {
  props: {
    socials: Array
  }
};
</script>

<style>
</style>