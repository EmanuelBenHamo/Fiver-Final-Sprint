<template>
  <section class="influencer-create-container flex column" >
    <h1>Signup as an Influencer</h1>
    <div class="text-info">
        <label>First Name: </label>
        <input type="text" v-model="user.firstName">
    </div>
    <div class="text-info">
        <label>Last Name: </label>
        <input type="text" v-model="user.lastName">
    </div>
    <div class="text-info">
        <label>Email </label>
        <input type="email" v-model="user.email">
    </div>
    <div class="gender-select">
        <input type="radio"  value="man" v-model="user.gender">
        <label>Man</label>
        <input type="radio" value="woman" v-model="user.gender">
        <label>Woman</label>
    </div>
    <input type="file" @change="uploadImg($event)">
    <!-- Support Claudinary -->
    <label>Tags</label>
    <!-- Add multypile tags choises -->
    <div class="socials-select">
        <label>Social Networks  </label>
        <input type="checkbox" value="instagram" v-model="user.socials"><label class="fa fa-instagram fa-2x"></label>
        <input type="checkbox" value="snapchat" v-model="user.socials"><label class="fa fa-snapchat fa-2x"></label>
        <input type="checkbox" value="tiktok" v-model="user.socials"><label>Tiktok</label>
    </div>
    <div class="text-info">
        <label>Price per post </label>
        <input type="number" v-model="user.pricePerPost">
    </div>
    <button @click="saveUser" class="btn">Save</button>
  </section>
</template>

<script>
import CloudinaryService from '../services/CloudinaryService.js';
export default {
    name: 'influencer-create',
    data(){
        return{
            user: {
                socials: []
            }
        }
    },
    methods:{
        async saveUser(){
            const savedUser = await this.$store.dispatch({
                type: 'addInfluencer',
                influencer: this.user
            })
            console.log('Saved!', savedUser);
        },
        async uploadImg(ev) {
      // Cloudinary upload img  
      const res = await CloudinaryService.uploadImg(ev);
      const { url } = res;
      this.user.imgUrl = url;
    }
    }
}
</script>

<style>
    .influencer-create-container > *{
        margin-bottom: 20px;
    }
</style>