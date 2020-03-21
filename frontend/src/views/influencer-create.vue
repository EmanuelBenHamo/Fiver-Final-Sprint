<template>
  <section class="influencer-create-container flex column" >
    <h1>Signup as an Influencer</h1>
    <label>First Name: <input type="text" v-model="user.firstName"></label>
    <label>Last Name: <input type="text" v-model="user.lastName"></label>
    <label>Email <input type="email" v-model="user.email"></label>
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
    <label>Price per post <input type="number" v-model="user.pricePerPost"> </label>
    <button @click="saveUser" class="btn">Save</button>
   
    <pre>{{user}}</pre>
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

</style>