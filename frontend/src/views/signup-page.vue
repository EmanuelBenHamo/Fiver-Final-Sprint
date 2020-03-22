<template>
<section class="signup-container">
    <h1>signup</h1>
    signup as 
    <button class="btn" @click="setUsesrType('influencer')">Influencer</button>
    <button class="btn" @click="setUsesrType('brand')">Brand</button>
        <component v-if="userType" :is="`${userType}Create`" class="user-signup"></component>
</section>
</template>

<script>
import influencerCreate from '../cmps/influencer-create.vue'
import brandCreate from '../cmps/brand-create.vue'
export default {
    name: 'signup-page',
    data(){
        return{
            userType: null
        }
    },
    methods:{
        setUsesrType(userType){
            this.userType = userType;
        }
    },
    components:{
        influencerCreate,
        brandCreate
    }
}
</script>

<style>

</style>