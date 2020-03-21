<template>
  <section class="brand-preview">
    <h1 class="brand-name">{{brand.name}}</h1>
    <p class="brand-type"><span>Customers:</span>{{brand.customersCount}}</p>
    <p class="in-stock"><span><Customers></Customers>:</span>{{brand.marketValue}}</p>
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
