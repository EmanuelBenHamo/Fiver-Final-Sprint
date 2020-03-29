<template>
  <section v-if="influencer" @click="demoInfluencer" class="influencer-preview">
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
  },
  methods: {
    async demoInfluencer() {
      let credentials = this.influencer.credentials;
      try {
        await this.$store.dispatch({
          type: "demoLogin",
          credentials
        });
      } catch (error) {
        // console.log("wrong login detials");
        // console.log("ERROR = ", error);
      }
    }
  }
};
</script>