<template>
  <div class="filter-container-simple flex space-between">
    <filter-name @setName="setName" class="filter-name" />
    
        <div class="border-line"></div>

    <filter-gender @setGender="setGender"/>

        <div class="border-line border-2"></div>

    <filter-socials @setTypes="setTypes"/>
    <slot></slot>
  </div>
</template>

<script>
import filterName from './filter-name.vue'
import filterGender from './filter-gender.vue'
import filterSocials from './filter-socials.vue'
export default {
    data(){
        return{
            simpleFilter: {
                name:'',
                gender: 'All',
                types: []
            }
        }
    },
    methods: {
        setName(name){
            this.simpleFilter.name = name
        },
        setGender(gender){
            this.simpleFilter.gender = gender
        },
        setTypes(types){
            this.simpleFilter.types = types
        },
    },
    watch: {
        simpleFilter: {
            deep: true,
            handler() {
                this.$emit('setSimpleFilter', this.simpleFilter)
            }
        }
    },
    components: {
        filterName,
        filterGender,
        filterSocials
    }
};
</script>
