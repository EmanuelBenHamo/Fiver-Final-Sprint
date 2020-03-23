<template>
  <section v-if="influencer" class="influencer-preview">
    <div class="ratio-poster">
      <img class="influencer-photo" :src="influencer.photos[0].url" />
    </div>
    <router-link :to="'/influencer/' + influencer._id">Link</router-link>
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
    imgUrl() {
      return this.influencer.photos[0].url;
    }
  }
};
</script>

    