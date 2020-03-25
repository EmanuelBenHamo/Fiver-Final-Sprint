<template>
  <section class="preview-carousel-container ratio-poster">
    <img class="carousel-photo" :src="photo" />
    <section class="carousel-info-container">
      <carousel-info class="carousel-info" :previewItem="previewItem"></carousel-info>
    </section>
  </section>
</template>

<script>
import carouselInfo from "./carousel-info";
export default {
  name: "preview-carousel",
  props: {
    previewItem: Object
  },
  computed: {
    photo() {
      return this.previewItem.photos[0].url;
    }
  },
  components: {
    carouselInfo
  }
};
</script>

<style>
</style>