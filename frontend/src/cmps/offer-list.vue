<template>
<section class="offer-list-container">
  <h1>Offer List</h1>
    <offer-preview ></offer-preview>
</section>
</template>

<script>
import offerPreview from './offer-preview.vue';
export default {
    name: 'offer-list',
    created(){
        this.getOffers()
    },
    methods:{
        // getOffers(){

        // }
    },
    components: {
        offerPreview
    }
}
</script>

<style>

</style>