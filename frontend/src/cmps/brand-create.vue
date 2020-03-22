<template>
  <section class="brand-create-container flex column">
    <h1>signup as a Brand</h1>
    <div class="text-info">
      <label>Username: </label>
      <input type="text" v-model="user.credentials.username">
    </div>
    <div class="text-info">
      <label>password </label>
      <input type="password" v-model="user.credentials.password">
    </div>
    <div class="text-info">
      <label>Name: </label>
      <input type="text" v-model="user.lastName">
    </div>
    <div class="text-info">
      <label>Email </label>
      <input type="email" v-model="user.email">
    </div>
    <div class="text-info upload-photo">
      <label>Upload Photo </label>
    <input type="file" @change="uploadImg($event)" class="input-file">
    </div>
    <label>Subjects</label>
    <!-- Add multypile subjects choises -->
    <button @click="saveUser" class="btn">Save</button>
  </section>
</template>

<script>
import CloudinaryService from '../services/CloudinaryService.js';
export default {
    name: 'brand-create',
    data(){
      return {
        user: {
          credentials:{
            userType: 'brand'
          }
        }
      }
    },
     methods:{
        async saveUser(){
            const savedUser = await this.$store.dispatch({
                type: 'addBrand',
                brand: this.user
            })
            console.log('Saved!', savedUser);
            this.$router.push('/app')
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
.brand-create-container > *{
        margin-bottom: 20px;
    }
</style>