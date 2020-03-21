<template>
  <section class="influencer-preview">
    <img :src="influencer.imgUrl" alt="Influencer Logo" />
    <h1>{{influencer.lastName}} {{influencer.firstName}}</h1>
    <ul class="clean-list">
      <li v-for="(social, idx) in influencer.socials" :key="idx">{{social.type}}</li>
    </ul>
    <ul class="clean-list">
      <li v-for="(tag, idx) in influencer.tags" :key="idx">{{tag}}</li>
    </ul>
    <ul class="clean-list">
      <li v-for="(target, idx) in influencer.targets" :key="idx">{{target}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    influencer: {
      type: Object
    }
  }
};
</script>
