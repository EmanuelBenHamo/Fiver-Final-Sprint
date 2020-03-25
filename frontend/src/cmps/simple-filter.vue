<template>
  <div class="filter-container-simple flex space-between">

    <div class="border-line"></div>

    <!-- GENDER -->
    <div class="select-btns gender-radio-btn flex align-center">
      <label class="radio-container radio-all">
        <input type="radio" value="All" v-model="filterBy.gender" />
        <span class="checkmark">All</span>
      </label>
      <label class="radio-container radio-male">
        <input type="radio" value="Male" v-model="filterBy.gender" />
        <span class="checkmark fa fa-mars"></span>
      </label>
      <label class="radio-container radio-female">
        <input type="radio" value="Female" v-model="filterBy.gender" />
        <span class="checkmark fa fa-venus"></span>
      </label>
    </div>

    <div class="border-line"></div>

    <!-- SOCIAL TYPE -->
    <div class="select-btns social-checkbox-btn flex align-center">
      <label class="checkbox-container checkbox-instagram">
        <input type="checkbox" value="instagram" v-model="filterBy.socials.type" />
        <span class="checkmark fa fa-instagram"></span>
      </label>
      <label class="checkbox-container checkbox-snapchat">
        <input type="checkbox" value="snapchat" v-model="filterBy.socials.type" />
        <span class="checkmark fa fa-snapchat"></span>
      </label>
      <label class="checkbox-container checkbox-tiktok">
        <input type="checkbox" value="tiktok" v-model="filterBy.socials.type " />
        <span class="checkmark">
          <img src="../assets/icons/tik-tok.svg" class="tiktok-icon" />
        </span>
      </label>
    </div>
    <button class="filter-btn btn" @click="$emit('setFilterBy',filterBy)">Filter</button>
    <button @click="isAdvance =!isAdvance" class="filter-type-btn advance-btn">Advance</button>
  </div>
</template>

<script>
import filterName from './filter-name.vue'
export default {
    data(){
        return{
            filterBy: {
                socials: {
                    type: []
                }
            }
        }
    }
};
</script>

<style>
</style>