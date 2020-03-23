<template>
  <div id="app" class="main-layout">
    <app-header/>
    <user-msg></user-msg>
    <router-view class="main-app" />
  </div>
</template>

<script>
import appHeader from './views/app-header.vue';
import userMsg from './cmps/user-msg-modal.vue'
export default {
  name: 'App',
  components: {
    appHeader,
    userMsg
    }
}
</script>

<style lang="scss"></style>
