<template>
  <section v-if="influencer" class="influencer-preview">
    <router-link :to="'/influencer/' + influencer._id">
      <influencer-poster :influencer="influencer" />
    </router-link>
  </section>
</template> 
 
<script>
import influencerPoster from "./influencer-poster";
export default {
  props: {
    influencer: Object
  },
  components: {
    influencerPoster
  }
};
</script>