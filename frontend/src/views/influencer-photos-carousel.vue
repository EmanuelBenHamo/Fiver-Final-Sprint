<template>
  <section class="carousel-container">
    <div class="photo prev-photo" ref="prev-photo">
      <section class="ratio-square">
        <img v-if="loadedPhotos.length > 1" :src="loadedPhotos[this.prevPhotoIndex].src" />
      </section>
    </div>

    <div class="photo curr-photo" ref="curr-photo">
      <section class="ratio-square">
        <img v-if="loadedPhotos.length > 0" :src="loadedPhotos[this.currPhotoIndex].src" />
      </section>
    </div>

    <div class="photo next-photo" ref="next-photo">
      <section class="ratio-square">
        <img v-if="loadedPhotos.length > 1" :src="loadedPhotos[this.nextPhotoIndex].src" />
      </section>
    </div>
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
      prevPhotoIndex: 0,
      currPhotoIndex: 0,
      nextPhotoIndex: 0,
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
      const photoDisplayTime = 6000;
      this.playInterval = setInterval(() => {
        this.next();
      }, photoDisplayTime);
    },
    next() {
      this.$refs["curr-photo"].classList.add("slide-out");
      this.nextPhotoIndex = this.getUpdateIndex(this.nextPhotoIndex, 1);
      this.$refs["next-photo"].classList.add("slide-in");
      setTimeout(() => {
        this.prevPhotoIndex = this.currPhotoIndex;
        this.currPhotoIndex = this.getUpdateIndex(this.currPhotoIndex, 1);
        this.$refs["curr-photo"].classList.remove("slide-out");
        this.$refs["next-photo"].classList.remove("slide-in");
      }, 3000);
    },
    prev() {
      this.prevPhotoIndex = this.getUpdateIndex(this.prevPhotoIndex, -1);
      this.currPhotoIndex = this.getUpdateIndex(this.currPhotoIndex, -1);
      this.nextPhotoIndex = this.getUpdateIndex(this.nextPhotoIndex, -1);
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