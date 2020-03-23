<template>
  <section v-if="influencer" class="influencer-preview">
    <router-link :to="'/influencer/' + influencer._id">
      <section class="carousel-container ratio-poster">
        <img class="influencer-photo flex" :src="photo" />

        <section class="flex column carousel-info-container">
          <div class="flex carousel-dots-bar">dots bar</div>
          <section class="flex space-between carousel-nav-btns">
            <button>prev</button>
            <button>next</button>
          </section>
          <section class="influencer-info-container">
            <div class="influencer-fullname">{{fullname}}</div>
          </section>
        </section>
      </section>
    </router-link>
  </section>
</template>

<script>
export default {
  props: {
    influencer: {
      type: Object
    }
  },
  created() {
    // debugger
    console.log("url", this.influencer.photos[0].url);
  },
  computed: {
    photo() {
      return this.influencer.photos[0].url;
    },
    fullname() {
      return `${this.influencer.firstName} ${this.influencer.lastName}`;
    }
  }
};
</script>

    