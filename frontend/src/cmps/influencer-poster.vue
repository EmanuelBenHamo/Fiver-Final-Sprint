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
      return this.influencer.photos[0].url;
    }
  },
  components: {
    influencerPosterData
  }
};
</script>

<style>
</style>