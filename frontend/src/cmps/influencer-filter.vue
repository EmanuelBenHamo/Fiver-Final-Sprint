<template>
<section class="main-filter-container">

    <div v-if="isAdvance" class="filter-container">
        <simple-filter 
        @setFilterBy="setFilterBy"
        @isAdvance="isAdvance = !isAdvance"
        /> 
    </div>

    <div v-else  class="filter-container">
    <advance-filter 
        @setFilterBy="setFilterBy"
        @isAdvance="isAdvance = !isAdvance"
    />
</div>

</section>
</template>

<script>
import simpleFilter from './simple-filter.vue'
import advanceFilter from './advance-filter.vue'
export default {
    data(){
        return{
        isAdvance: true,
    }
},
methods: {

   
    setFilterBy(filterBy) {
        this.$emit('setFilterBy', filterBy)
    },
   
    },
components:{
    simpleFilter,
    advanceFilter
}
}
</script>

<style>
</style>