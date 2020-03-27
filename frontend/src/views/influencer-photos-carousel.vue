<template>
  <section class="ratio-square">
    <img
      class="photo prev-photo"
      ref="prev-photo"
      v-if="loadedPhotos.length > 1"
      :src="loadedPhotos[this.prevPhotoIndex].src"
    />

    <img
      class="photo curr-photo"
      ref="curr-photo"
      v-if="loadedPhotos.length > 0"
      :src="loadedPhotos[this.currPhotoIndex].src"
    />

    <img
      class="photo next-photo"
      ref="next-photo"
      v-if="loadedPhotos.length > 1"
      :src="loadedPhotos[this.nextPhotoIndex].src"
    />
  </section>
</template>

<script>
export default {
  name: "influencer-photos-carousel",
  props: {
    photosUrls: Array
  },
  data() {
    return {
      loadedPhotos: [],
      prevPhotoIndex: 0,
      currPhotoIndex: 0,
      nextPhotoIndex: 0,
      playInterval: null,
      photosDisplayTime: 6000
    };
  },
  created() {
    this.loadPhotos();
    this.playPhotos();
  },
  methods: {
    loadPhotos() {
      let images = this.photosUrls.map(currPhotoUrl => {
        let image = new Image();
        image.onload = () => {
          this.loadedPhotos.push(image);
        };
        image.src = currPhotoUrl;
        return image;
      });
    },
    playPhotos() {
      this.playInterval = setInterval(() => {
        this.next();
      }, this.photosDisplayTime);
    },
    next() {
      this.$refs["curr-photo"].classList.add("slide-out-left");
      this.nextPhotoIndex = this.getUpdateIndex(this.nextPhotoIndex, 1);
      this.$refs["next-photo"].classList.add("slide-in");
      setTimeout(() => {
        this.prevPhotoIndex = this.currPhotoIndex;
        this.currPhotoIndex = this.getUpdateIndex(this.currPhotoIndex, 1);
        this.$refs["curr-photo"].classList.remove("slide-out-left");
        this.$refs["next-photo"].classList.remove("slide-in");
      }, this.photosDisplayTime / 2);
    },
    prev() {
      this.$refs["curr-photo"].classList.add("slide-out-right");
      this.prevPhotoIndex = this.getUpdateIndex(this.prevPhotoIndex, -1);
      this.$refs["prev-photo"].classList.add("slide-in");
      setTimeout(() => {
        this.nextPhotoIndex = this.currPhotoIndex;
        this.currPhotoIndex = this.getUpdateIndex(this.currPhotoIndex, -1);
        this.$refs["curr-photo"].classList.remove("slide-out-right");
        this.$refs["prev-photo"].classList.remove("slide-in");
      }, this.photosDisplayTime / 2);
    },
    getUpdateIndex(index, diff) {
      index += diff;
      if (index >= this.loadedPhotos.length) {
        index = 0;
      } else if (index < 0) {
        index = this.loadedPhotos.length - 1;
      }

      return index;
    }
  },
  beforeDestroy() {
    clearInterval(this.playInterval);
  }
};
</script>

<style>
</style>