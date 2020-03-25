<template>
  <section class="preview-carousel-container ratio-poster">
    <img class="carousel-photo" :src="photo" />
    <section class="carousel-info-container">
      <carousel-dots-bar class="carousel-dots-bar"></carousel-dots-bar>
      <carousel-nav class="carousel-nav"></carousel-nav>
      <carousel-info class="carousel-info" :previewItem="previewItem"></carousel-info>
    </section>
  </section>
</template>

<script>
import carouselDotsBar from "./carousel-dots-bar";
import carouselNav from "./carousel-nav";
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
    carouselDotsBar,
    carouselNav,
    carouselInfo
  }
};
</script>

<style>
</style>