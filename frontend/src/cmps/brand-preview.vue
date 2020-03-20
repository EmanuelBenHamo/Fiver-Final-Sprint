<template>
  <section class="brand-preview">
    <h1 class="brand-name">{{brand.name}}</h1>
    <p class="brand-type">{{brand.customersCount}}</p>
    <p class="in-stock">{{brand.marketValue}}</p>
    <div class="preview-btns">
      <router-link :to="'/brandDetails/' + brand._id">
        <button class="brand-details-btn">Details</button>
      </router-link>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    brand: {
      type: Object
    }
  },
  methods: {
  },
  
};
</script>
