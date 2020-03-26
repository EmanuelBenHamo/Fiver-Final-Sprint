<template>
    <div class="select-btns gender-radio-btn flex align-center">
      <label class="radio-container radio-all">
        <input type="radio" value="All" v-model="gender" />
        <span class="checkmark">All</span>
      </label>
      <label class="radio-container radio-male">
        <input type="radio" value="Male" v-model="gender" />
        <span class="checkmark fa fa-mars"></span>
      </label>
      <label class="radio-container radio-female">
        <input type="radio" value="Female" v-model="gender" />
        <span class="checkmark fa fa-venus"></span>
      </label>
    </div>
</template>

<script>
export default {
    name: 'filter-gender',
    data(){
        return{ 
            gender: 'All'
        }
    },
    watch: {
        gender(){
            this.$emit('setGender', this.gender)
        }
    }
}
</script>