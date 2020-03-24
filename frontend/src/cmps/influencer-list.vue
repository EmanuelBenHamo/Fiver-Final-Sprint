<template>
  <section class="list">
    <div class="influencers-list">
      <!-- <influencer-preview v-for="influencer in items" :key="influencer._id" :influencer="influencer"/> -->
      <influencer-preview :key="influencerList[0]._id" :influencer="influencerList[0]" />
    </div>
  </section>
</template>
<script>
import influencerPreview from "./influencer-preview";
export default {
  name: "influencer-list",
  props: {
    userType: {
      type: String
    },
    influencerList: {
      type: Array
    }
  },
  components: {
    influencerPreview
  },
  computed: {
    items() {
      return this.influencerList;
    }
  }
};
</script>
