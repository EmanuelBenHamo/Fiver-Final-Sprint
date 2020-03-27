<template>
  <section class="influencer-photos-carousel-container ratio-square">
    <img
      v-if="loadedPhotos.length > 0"
      :src="loadedPhotos[this.currPhotoIndex].src"
      class="influencer-photo"
    />
  </section>
</template>

<script>
export default {
  name: "influencer-photos-carousel",
  props: {
    influencer: Object
  },
  data() {
    return {
      loadedPhotos: [],
      currPhotoIndex: 0,
      playInterval: null
    };
  },
  created() {
    this.loadPhotos();
    this.playPhotos();
  },
  methods: {
    loadPhotos() {
      let images = this.influencer.photos.map(influencerPhoto => {
        let image = new Image();
        image.onload = () => {
          this.loadedPhotos.push(image);
        };
        image.src = influencerPhoto.regular;
        return image;
      });
    },
    playPhotos() {
      const photoDisplayTime = 5000;
      this.playInterval = setInterval(() => {
        this.next();
      }, photoDisplayTime);
    },
    next() {
      this.currPhotoIndex++;
      if (this.currPhotoIndex >= this.loadedPhotos.length) {
        this.currPhotoIndex = 0;
      }
    },
    prev() {
      this.currPhotoIndex--;
      if (this.currPhotoIndex < 0) {
        this.currPhotoIndex = this.loadedPhotos.length - 1;
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.playInterval);
  }
};
</script>

<style>
</style>