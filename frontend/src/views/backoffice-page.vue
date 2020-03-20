<template>
  <section class="backoffice-page-container">
      <h1>Welcome to the Back Office</h1>
      <div class="backoffice-navbar">
          <router-link to="" class="dashboard">Deshboard</router-link> |
          <router-link to="offer" class="offers">Offers</router-link> |
          <router-link to="" class="campaigns">Campaigns</router-link> |
          <router-link to="" class="messages">Messages</router-link>
      </div>
      <router-view></router-view>
  </section>
</template>

<script>
import offerService from '../services/offer.service.js';
export default {
    name: 'backoffice-page',
    created(){
        
    }
}
</script>

<style>

</style>