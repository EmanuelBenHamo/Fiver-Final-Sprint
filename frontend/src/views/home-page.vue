<template>
  <section class="home-page-container">
    <div class="home-page-content">
      <h1>Mediaqueriz</h1>
      <p>Connecting Brands and Influencers has never been easier</p>
      <button class="btn" @click="redirect('brand')">I am a brand</button>
      <button class="btn" @click="redirect('influencer')">I am an influencer</button>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    redirect(userType) {
      if(userType === 'brand')
      this.$router.push('/app');
      else if(userType === 'influencer')
      this.$router.push('/backOffice');
    }
  }
};
</script>

<style></style>
