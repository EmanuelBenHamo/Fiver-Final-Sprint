<template>
  <section class='main-app'>
    <influencer-list
      v-if='influencerList'
      :influencers='influencerList'
      @setFilterBy="loadInfluencers"
    />
  </section>
</template>
<script>
import influencerService from '../services/influencer.service.js';
import influencerList from '../cmps/influencer-list.vue';
export default {
  name: 'main-app',
  data() {
    return {
      loggedInUser: null,
      influencerList: null
    };
  },
  async created() {
    await this.getLoggetInUser();
    await this.loadInfluencers();
    await this.loadBrands();
  },
  methods: {
    async loadBrands() {
      await this.$store.dispatch({ type: 'loadBrands' });
    },
    async loadInfluencers(filterBy) {
      await this.$store.dispatch({ 
        type: 'loadInfluencers', 
        filterBy
        });
      this.influencerList = this.$store.getters.influencers;
    },
    async getLoggetInUser(){
      this.loggedInUser = this.$store.getters.loggedInUser;
      if(!this.loggedInUser){
       this.loggedInUser = await this.$store.dispatch('getLoggedInUser');
      }
    }
  },
  components: {
    influencerList,
  }
};
</script>

<style>
</style>