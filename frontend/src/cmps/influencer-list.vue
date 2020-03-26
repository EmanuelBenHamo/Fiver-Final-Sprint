<template>
  <section class="list">
    <influencer-filter @setFilterBy="setFilterBy"></influencer-filter>
    <div v-if="influencers" class="influencers-list">
      <influencer-preview  v-for="influencer in influencers" :key="influencer._id" :influencer="influencer"/>
    </div>
  </section>
</template>
<script>
import influencerPreview from "./influencer-preview";
import influencerFilter from "./influencer-filter";
export default {
  name: "influencer-list",
  props: {
    influencers: Array
  },
  methods: {
    setFilterBy(filterBy) {
      this.$emit("setFilterBy", filterBy);
    }
  },
  components: {
    influencerPreview,
    influencerFilter
  }
};
</script>
