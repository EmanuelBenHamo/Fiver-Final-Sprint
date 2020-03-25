<template>
    <div class="filterBy-name flex align-center">
      <label>Name</label>
      <input type="text" v-model="name" placeholder="Who's you influencer" />
    </div>
</template>

<script>
export default {
    data(){
        return{ 
            name:{

            }
        }
    },
    watch: {
        name(){
            this.$emit('setName', this.name)
        }
    }
}
</script>