<template>
  <section class="brand-create-container flex column">
      <h1>signup as a Brand</h1>
      <label>Name: <input type="text" v-model="user.lastName"></label>
      <label>Email <input type="email" v-model="user.email"></label>
       <input type="url"><button class="btn">Uplaod Img</button>
    <!-- Support Claudinary -->
        <label>Subjects</label>
    <!-- Add multypile subjects choises -->
    <button @click="saveUser" class="btn">Save</button>
    <pre>{{this.user}}</pre>
  </section>
</template>

<script>
export default {
    name: 'brand-create',
    data(){
      return {
        user: {}
      }
    },
     methods:{
        async saveUser(){
            const savedUser = await this.$store.dispatch({
                type: 'addBrand',
                brand: this.user
            })
            console.log('Saved!', savedUser);
        }
    } 

}
</script>

<style>

</style>