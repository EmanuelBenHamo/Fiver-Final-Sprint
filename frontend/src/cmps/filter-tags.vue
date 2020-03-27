<template>
  <!-- <section class="  flex"> -->
      <div class=" filter-tags-container tags-choises select-btns">
        <label v-for="(tag, idx) in tagsByName" class="checkbox-container" :key="idx">
            <input type="checkbox" :value="tag" v-model="selectedTags">
            <span class="checkmark">{{tag}}</span>
        </label>
      </div>
  <!-- </section> -->
</template>

<script>
export default {
  data() { 
    return {
        selectedTags: [],
        tags: [
        "Books",
        "Garden",
        "Sports",
        "Industrial",
        "Health",
        "Music",
        "Movies",
        "Automotive",
        "Computers",
        "Electronics",
        "Grocery",
        "Kids",
        "Jewelery",
        "Baby",
        "Clothing",
        "Beauty",
        "Shoes",
        "Tools",
        "Home",
        "Animals",
        "Games",
        "Toys",
        "Outdoors",
        "Traveling",
        "Cooking"
      ]
    };
  },
  computed:{
    tagsByName(){
      return JSON.parse(JSON.stringify(this.tags)).sort()
    }
  },
  watch: {
      selectedTags(){
          this.$emit('setTags', this.selectedTags);
      }
  },  
};
</script>

<style>
</style>