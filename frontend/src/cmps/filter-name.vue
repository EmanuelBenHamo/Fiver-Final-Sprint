<template>
    <div class="filterBy-name flex align-center">
      <label>Name</label>
      <input type="text" v-model="name" placeholder="Who's Your Influencer?"  class="filter-name-input"/>
    </div>
</template>

<script>
export default {
    name: 'filter-gender',
    data(){
        return{ 
            name: null
        }
    },
    watch: {
        name(){
            this.$emit('setName', this.name)
        }
    }
}
</script>