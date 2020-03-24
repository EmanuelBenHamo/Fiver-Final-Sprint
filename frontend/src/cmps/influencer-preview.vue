<template>
  <section v-if="influencer" class="influencer-preview">
    <router-link :to="'/influencer/' + influencer._id">
      <preview-carousel :previewItem="influencer" />
    </router-link>
  </section>
</template>

<script>
import previewCarousel from "./preview-carousel";
export default {
  props: {
    influencer: {
      type: Object
    }
  },
  components: {
    previewCarousel
  }
};
</script>