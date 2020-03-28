<template>
  <div id="app" class="main-layout">
    <app-header/>
    <user-msg></user-msg>
    <router-view class="main-app" />
    <app-footer/>
  </div>
</template>

<script>
import appHeader from './views/app-header.vue';
import appFooter from './views/app-footer.vue';
import userMsg from './cmps/user-msg-modal.vue'
export default {
  name: 'App',
  components: {
    appHeader,
    appFooter,
    userMsg
    }
}
</script>

<style lang="scss"></style>
