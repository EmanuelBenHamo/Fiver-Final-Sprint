<template>
  <section class="header flex align-center">
    <label @click="$router.push('/')">Trendzly</label>
    <nav class="navbar">
      <router-link class='home-page-btn nav-btn' to="/">Home</router-link>
      <router-link class="nav-btn" to="/login">Login</router-link>
      <router-link class="nav-btn" to="/signup">Signup</router-link>
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