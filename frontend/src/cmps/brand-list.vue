<template>
  <section class="brand-list">
      <h1>Brands</h1>
    <brand-preview v-for="brand in brandsForDisplay" :key="brand._id" :brand="brand" />
  </section>
</template>
<script>
import brandPreview from './brand-preview';
export default {
  props: {
    brands: {
      type: Array
    }
  },
  components: {
    brandPreview
  },
  computed: {
    brandsForDisplay() {
      return this.$store.getters.brands;
    }
  },
  created() {
    this.$store.dispatch({ type: 'loadBrands' });
  }
};
</script>
