<template>
  <section class="backoffice-page-container">
      <h1>Welcome to the Back Office</h1>
      <div class="backoffice-navbar">
          <router-link to="dashboard" class="dashboard">Dashboard</router-link> |
          <router-link to="offer" class="offers">Offers</router-link> |
          <router-link to="dashCampaign" class="campaign">Campaigns</router-link> |
          <router-link to="message" class="message">Messages</router-link>
      </div>
      <router-view></router-view>
  </section>
</template>

<script>

export default {
    name: 'backoffice-page',
    created(){
        
    }
}
</script>

<style>

</style>