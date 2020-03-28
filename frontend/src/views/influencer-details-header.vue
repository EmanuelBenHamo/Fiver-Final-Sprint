<template>
  <header class="influencer-details-header-container flex space-between">
    <div class="influencer-name">{{fullName}}</div>
    <div class="influencer-age">{{age}}</div>
  </header>
</template>

<script>
export default {
  name: "influencer-details-header",
  props: {
    fullName: String,
    age: Number
  }
};
</script>

<style>
</style>