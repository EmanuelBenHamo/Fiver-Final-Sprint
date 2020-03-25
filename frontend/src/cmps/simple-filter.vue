<template>
  <div class="filter-container-simple flex space-between">
    <filter-name @setName="setName"/>
    
        <div class="border-line"></div>

    <filter-gender @setGender="setGender"/>

        <div class="border-line"></div>

    <filter-socials @setSocials="setSocials"/>
    
    <button class="filter-btn btn" @click="$emit('setFilterBy',filterBy)">Filter</button>
    <button @click="$emit('isAdvance')" class="filter-type-btn advance-btn">Advance</button>
  </div>
</template>

<script>
import filterName from './filter-name.vue'
import filterGender from './filter-gender.vue'
import filterSocials from './filter-socials.vue'
export default {
    data(){
        return{
            filterBy: {
                gender: 'All',
            }
        }
    },
    methods: {
        setName(name){
            this.filterBy.name = name
        },
        setGender(gender){
            this.filterBy.gender = gender
        },
        setSocials(socials){
            this.filterBy.socials = socials
        },
    },
    components: {
        filterName,
        filterGender,
        filterSocials
    }
};
</script>
