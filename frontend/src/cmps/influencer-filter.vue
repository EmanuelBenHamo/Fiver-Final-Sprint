<template>
<section class="filter-container">
<h3>Who is your next influencer?</h3>
  <input type="text" v-model="filterBy.name" placeholder="Search By Name">
  
  <div class="select-btns gender-radio-btn flex">
    <label class="radio-container radio-All">
        <input type="radio" value="All" v-model="filterBy.gender">
        <span class="checkmark">All</span>
    </label>
    <label class="radio-container radio-male">
        <input type="radio" value="Male" v-model="filterBy.gender">
        <span class="checkmark">Male</span>
    </label>
    <label class="radio-container radio-female">
        <input type="radio" value="Female" v-model="filterBy.gender">
        <span class="checkmark">Female</span>
    </label>
  </div>
  <!-- Multy tags selector -->
  <input type="number" v-model="filterBy.pricePerPost" placeholder="What is your max price?">


    <div class="select-btns social-checkbox-btn flex">
       <label class="checkbox-container checkbox-instagram">
            <input type="checkbox" value="instagram" v-model="filterBy.socials.type">
            <span class="checkmark">Instagram</span>
        </label>
         <label class="checkbox-container checkbox-snapchat">
            <input type="checkbox" value="snapchat" v-model="filterBy.socials.type">
            <span class="checkmark">Snapchat</span>
        </label>
        <label class="checkbox-container checkbox-tiktok">
            <input type="checkbox" value="tiktok" v-model="filterBy.socials.type ">
            <span class="checkmark">Tiktok</span>
        </label>
    </div>
    <div class="followersCount">
        <label>Folloewrs </label>
        <span>- choose a range</span>
        <el-slider
            v-model="filterBy.socials.followersCount"
            :format-tooltip="localeString"
            range
            label='Followers'
            :steps="100"
            :max="1000000">
        </el-slider>
    </div>
    <div class="menFollowersPercentage flex space-between align-center">
        <label>Men</label>
        <div class="menFollowersPercentageSilder">
            <el-slider 
                v-model="filterBy.socials.menFollowersPercentage"
                :format-tooltip="showMenPercentage">
            </el-slider>
        </div>
        <label>Women</label>
    </div>
    <input type="number" v-model="filterBy.socials.posts" placeholder="Minimum Number of Posts">
    <input type="number" v-model="filterBy.socials.stories" placeholder="Minimum Number of Stories">
    <input type="number" v-model="filterBy.socials.followersAvgAge" placeholder="Followers Avrage Age">
    <button class="btn" @click="setFilterBy">Filter</button>




<!-- <pre>{{filterBy}}</pre> -->
</section>
</template>

<script>
export default {
data(){
    return{
        filterBy: {
            gender: 'All',
            socials: {
                type:[]
            }
        }
    }
},
methods: {
    localeString(value){
        if(!value)return
        return value.toLocaleString('en-US')
    },
    showMenPercentage(value) {
        return value + '%   '
    },
    setFilterBy() {
        this.$emit('setFilterBy', this.filterBy)
    }
}
}
</script>

<style>

</style>