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
  data() {
    return {
      imageUrl: null,
      highQualityImage: null
    };
  },
  created() {
    this.loadImages();
  },
  computed: {
    photo() {
      return this.imageUrl;
    }
  },
  methods: {
    loadImages() {
      this.imageUrl = this.influencer.profilePhoto.thumb;
      this.highQualityImage = new Image();
      this.highQualityImage.onload = () => {
        this.imageUrl = this.highQualityImage.src;
      };
      this.highQualityImage.src = this.influencer.profilePhoto.small;
    }
  },
  components: {
    influencerPosterData
  }
};
</script>

<style>
</style>