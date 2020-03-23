<template>
  <section class="list">
    <div class="influencers-list">
      <influencer-preview v-for="influencer in items" :key="influencer._id" :influencer="influencer"/>
    </div>
  </section>
</template>
<script>
import influencerPreview from "./influencer-preview";
export default {
  name: 'influencer-list',
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
  },
};
</script>
