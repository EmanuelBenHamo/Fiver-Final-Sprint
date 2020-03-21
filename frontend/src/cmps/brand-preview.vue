<template>
  <section class="brand-preview">
    <h1>{{brand.name}}</h1>
    <img :src="brand.imgUrl" alt="Brand Logo"/>
    <ul class="clean-list">
      <li v-for="(subject, idx) in brand.subjects" :key="idx">{{subject}}</li>
    </ul>
    <p><span>Customers:</span>{{brand.customersCount}}</p>
      <router-link :to="'/brandDetails/' + brand._id">
        <button class="btn">Details</button>
      </router-link>
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
