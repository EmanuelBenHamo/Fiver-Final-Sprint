<template>
<section class="main-filter-container">

<div v-if="isAdvance" class="filter-container filter-container-simple flex space-between">
    
    <!-- NAME -->
    <div class="filterBy-name flex align-center">
        <label>Name</label>
    <input type="text" v-model="filterBy.name" placeholder="Search By Name">
    </div>

    <!-- GENDER -->
    <div class="select-btns gender-radio-btn flex align-center">
        <label>Gender</label>
        <label class="radio-container radio-All">
            <input type="radio" value="All" v-model="filterBy.gender">
            <span class="checkmark">All</span>
        </label>
        <label class="radio-container radio-male">
            <input type="radio" value="Male" v-model="filterBy.gender">
            <span class="checkmark fa fa-mars fa-2x"></span>
        </label>
        <label class="radio-container radio-female">
            <input type="radio" value="Female" v-model="filterBy.gender">
            <span class="checkmark fa fa-venus fa-2x"></span>
        </label>
    </div>

    <!-- SOCIAL TYPE -->
    <div class="select-btns social-checkbox-btn flex align-center">
        <label>Social Networks</label>
        <label class="checkbox-container checkbox-instagram">
            <input type="checkbox" value="instagram" v-model="filterBy.socials.type">
            <span class="checkmark fa fa-instagram fa-2x"></span>
        </label>
        <label class="checkbox-container checkbox-snapchat">
            <input type="checkbox" value="snapchat" v-model="filterBy.socials.type">
            <span class="checkmark fa fa-snapchat fa-2x"></span>
        </label>
        <label class="checkbox-container checkbox-tiktok">
            <input type="checkbox" value="tiktok" v-model="filterBy.socials.type ">
            <span class="checkmark">Tiktok</span>
        </label>
    </div>
    <button class="filter-btn btn" @click="setFilterBy">Filter</button>
    <button @click="isAdvance =!isAdvance" class="filter-type-btn advance-btn">Advance</button>
</div>


<section v-else  class="filter-container filter-container-advance flex column">
    <div class="filter-header flex space-between" >
    <h3>Who is your next influencer?</h3>
    <button @click="isAdvance =!isAdvance" class="filter-type-btn simple-btn">Simple</button>
        </div>
    <!-- NAME -->
    <div class="filterBy-name">
        <label>Name</label>
    <input type="text" v-model="filterBy.name" placeholder="Search By Name">
    </div>

    <!-- GENDER -->
    <div class="select-btns gender-radio-btn flex">
        <label>Gender</label>
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

    <!-- SOCIAL TYPE -->
    <div class="select-btns social-checkbox-btn flex">
        <label>Social Networks</label>
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

    <!-- INFLUENCER AGE -->
    <div class="followers-silder filter-by-age">
        <label>Influencer's Age Range</label>
        <el-slider
            v-model="filterBy.age"
            range
            show-stops
            :marks="marks"
            :step="5"
            :min="15"
            :max="50">
        </el-slider>
    </div>

    <!-- TAGS -->
    <tags-select @setTags="setTags"></tags-select>

    <!-- POSTS, STORIES, PRICE -->
    <div class="filter-by-nums flex space-around">
        <input type="number" v-model="filterBy.socials.posts" placeholder="Minimum Number of Posts">
        <input type="number" v-model="filterBy.socials.stories" placeholder="Minimum Number of Stories">
        <input type="number" v-model="filterBy.pricePerPost" placeholder="What is your max price?">
    </div>

    <!-- FOLLOWERS COUNT -->
    <div class="followers-silder followers-count">
        <label>Followers </label>
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

    <!-- FOLLOWERS PERCENTAGE -->
    <div class="men-followers-percentage flex space-between align-center">
        <label>Men</label>
        <div class="men-followers-percentage-silder">
            <el-slider 
                v-model="filterBy.socials.menFollowersPercentage"
                :format-tooltip="showMenPercentage">
            </el-slider>
        </div>
        <label>Women</label>
    </div>

    <!-- FOLLOWEWRS AGE -->
    <div class="followers-silder select-age-range">
        <label>Folloewrs Average Age</label>
        <el-slider
            v-model="filterBy.socials.followersAvgAge"
            range
            show-stops
            :marks="marks"
            :step="5"
            :min="15"
            :max="50">
        </el-slider>
    </div>

    <button class="filter-btn btn" @click="setFilterBy">Filter</button>

</section>
</section>
</template>

<script>
import tagsSelect from './tags-select.vue'
export default {
    data(){
        return{
        isAdvance: true,
        filterBy: {
            gender: 'All',
            socials: {
                type:[]
            }
        },
        marks: {
            15: '15',
            20: '20',
            25: '25',
            30: '30',
            35: '35',
            40: '40',
            45: '45',
            50: '50'
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
    },
    setTags(selectedTags) {
        console.log('selectedTags', selectedTags);
        this.filterBy.tags = selectedTags
        
    }
    },
components:{
    tagsSelect
}
}
</script>

<style>
</style>