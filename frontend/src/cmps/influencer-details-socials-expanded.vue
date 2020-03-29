<template>
  <section v-if="socials" class="influencer-details-socials-expanded-container">
    <social-details
      class="social-details"
      v-for="(social,index) in socials"
      :key="index"
      :social="social" 
    />
  </section>
</template>

<script>
import socialDetails from "./social-details";
export default {
  props: {
    socials: Array
  },
  components: {
    socialDetails
  }
};
</script>

<style>
</style>