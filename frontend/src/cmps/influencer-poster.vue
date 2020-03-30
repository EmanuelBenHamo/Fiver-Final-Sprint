<template>
  <section class="influencer-poster-container ratio-poster">
    <img class="poster-photo" :src="photo" />
    <section>
      <influencer-poster-data class="influencer-poster-data" :influencer="influencer" />
    </section>
  </section>
</template>  

<script>
import influencerPosterData from "./influencer-poster-data";
export default {
  name: "influencer-poster",
  props: {
    influencer: Object
  },
  computed: {
    photo() {
      
      
      // TODO: optimization - load the small image when created and replace the thumb image with
      // the small image when this loaded
      return this.influencer.profilePhoto.thumb;
    }
  },
  components: {
    influencerPosterData
  }
};
</script>

<style>
</style>