<template>
  <section class="header">
    <nav class="navbar flex">
      <router-link class='home-page-btn btn' to="/">Home</router-link>
      <router-link class="btn" to="/login">Login</router-link>
      <router-link class="btn" to="/signup">Signup</router-link>
    </nav>
  </section>
</template>

<script>
export default {
  name: "app-header"
};
</script>

<style>
</style>