<template>
  <div id="app" class="main-layout">
    <app-header></app-header>
    <router-view />
  </div>
</template>

<script>
import appHeader from './views/app-header.vue';
export default {
  name: 'App',
  components: {
    appHeader
    }
}
</script>

<style lang="scss"></style>
