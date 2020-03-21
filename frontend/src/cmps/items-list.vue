<template>
  <section class="list">
    <div v-if="userType === 'influencer'" class="campaign-list">
      <campaign-preview v-for="campaign in items" :key="campaign._id" :campaign="campaign" />
    </div>
    <div v-if="userType === 'brand'" class="influencers-list">
      <influencer-preview v-for="influencer in items" :key="influencer._id" :influencer="influencer"/>
    </div>
  </section>
</template>
<script>
import influencerPreview from "./influencer-preview";
import campaignPreview from "./campaign-preview";
export default {
  name: 'items-list',
  props: {
    userType: {
      type: String
    },
    itemsList: {
      type: Array
    }
  },
  components: {
    campaignPreview,
    influencerPreview
  },
  computed: {
    items() {
      return this.itemsList;
    }
  },
  created() {
    console.log(this.itemsList);
    console.log(this.userType);
  }
};
</script>
