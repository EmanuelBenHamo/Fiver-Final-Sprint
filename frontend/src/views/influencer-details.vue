<template>
<section class="influencer-details-container">
  <h1>Influencer Details</h1>
</section>
</template>

<script>
export default {
    name: 'influencer-details',
    data() {
    return {
      influencerId: null,
      currInfluencer: null
    };
  },
created() {
    this.influencerId = this.$route.params.id;
    this.getinfluencerById();
  },
  methods: {
    async getinfluencerById() {
      const influencer = await this.$store.dispatch({
        type: 'getinfluencerById',
        influencerId: this.influencerId
      });
      this.currInfluencer = influencer;
    },
  }
}
</script>

<style>

</style>