<template>
  <section class="influencer-create-container flex column">
    <h1>Signup as an Influencer</h1>
    <div class="text-info">
      <label>Username:</label>
      <input type="text" v-model="user.credentials.username" />
    </div>
    <div class="text-info">
      <label>password</label>
      <input type="password" v-model="user.credentials.password" />
    </div>
    <div class="text-info">
      <label>First Name:</label>
      <input type="text" v-model="user.firstName" />
    </div>
    <div class="text-info">
      <label>Last Name:</label>
      <input type="text" v-model="user.lastName" />
    </div>
    <div class="text-info">
      <label>Email</label>
      <input type="email" v-model="user.email" />
    </div>
    <div class="text-info upload-photo">
      <label>Profile Picture</label>
      <input type="file" @change="uploadImg($event)" class="input-file" />
    </div>
    <div class="gender-select-container flex">
      <label>I am a</label>
      <div class="gender-select">
        <input type="radio" value="man" v-model="user.gender" />
        <label>Man</label>
        <input type="radio" value="woman" v-model="user.gender" />
        <label>Woman</label>
      </div>
    </div>
    <!-- Add multypile tags choises -->
    <div class="socials-select-container flex align-center">
      <label>Social Networks</label>
      <div class="socials-select">
        <input type="checkbox" value="instagram" v-model="user.socials" />
        <label class="fa fa-instagram fa-2x"></label>
        <input type="checkbox" value="snapchat" v-model="user.socials" />
        <label class="fa fa-snapchat fa-2x"></label>
        <input type="checkbox" value="tiktok" v-model="user.socials" />
        <label>Tiktok</label>
      </div>
    </div>
    <label>Tags</label>
    <div class="text-info">
      <label>Price per post</label>
      <input type="number" v-model="user.pricePerPost" />
    </div>
    <button @click="saveUser()" class="btn">Save</button>
    <button @click="saveUser('demo')" class="btn">Demo sign up</button>
  </section>
</template>

<script>
import CloudinaryService from "../services/CloudinaryService.js";
export default {
  name: "influencer-create",
  data() {
    return {
      user: {
        credentials: {
          userType: "influencer"
        },
        socials: []
      }
    };
  },
  methods: {
    async saveUser(signupType = null) {
      if (signupType === "demo") {
        this.user.credentials.username = "demo";
        this.user.credentials.password = "demo";
        this.user.firstName = "demo";
        this.user.lastName = "demo";
        this.user.imgUrl = "http://dummyimage.com/250x250.jpg/cc0000/ffffff";
        this.user.socials.push("instagram");
      }
      const savedUser = await this.$store.dispatch({
        type: "addInfluencer",
        influencer: this.user
      });
      console.log("Saved!", savedUser);
      this.$router.push("/app");
    },
    async uploadImg(ev) {
      // Cloudinary upload img
      const res = await CloudinaryService.uploadImg(ev);
      const { url } = res;
      this.user.imgUrl = url;
    }
  }
};
</script>

<style scoped>
.influencer-create-container > * {
  margin-bottom: 20px;
}
.gender-select {
  margin-left: 35%;
}
.socials-select {
  margin-left: 15%;
}
.socials-select > label {
  margin-right: 2.5rem;
}
</style>