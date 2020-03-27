<template>
<section class="filter-container-advance flex column">
    <div class="filter-header flex space-between" >
        <h3>Who is your next influencer?</h3>
        <button @click="$emit('isAdvance')" class="filter-type-btn simple-btn">Simple</button>
    </div>

    <div class="basic-filter-section flex space-around">
        <!-- NAME -->
       <filter-name @setName="setName"/>
        <!-- GENDER -->
        <filter-gender @setGender="setGender"/>
        <!-- SOCIAL TYPE -->
       <filter-socials @setSocials="setSocials"/>
    </div>

    <div class="border-line"></div>

        <!-- INFLUENCER AGE -->
    <filter-age @setAge="setAge"/>

        <!-- POSTS, STORIES, PRICE -->
    <div class="filter-by-nums flex space-around">
        <input type="number" v-model="filterBy.socials.posts" placeholder="Minimum Number of Posts">
        <input type="number" v-model="filterBy.socials.stories" placeholder="Minimum Number of Stories">
        <input type="number" v-model="filterBy.pricePerPost" placeholder="What is your max price?">
    </div>

    <!-- TAGS -->
    <filter-tags @setTags="setTags"></tags-select>

    <label class="filter-followers-label">Followers</label>
    <!-- FOLLOWERS COUNT -->
    <filter-followers-count @setFollowersCount="setFollowersCount"/>

    <!-- FOLLOWERS PERCENTAGE -->
    <filter-followers-percentage @setFollowersPercentage="setFollowersPercentage"/>

    <!-- FOLLOWEWRS AGE -->
    <filter-followers-age @setFollowersAge="setFollowersAge"/>
    
    <button class="filter-btn btn" @click="$emit('setFilterBy',filterBy)">Filter</button>

</section>
</template>

<script>
import filterName from './filter-name.vue'
import filterGender from './filter-gender.vue'
import filterSocials from './filter-socials.vue'
import filterAge from './filter-age.vue'
import tagsSelect from './tags-select.vue'
import filterFollowersCount from './filter-followers-count.vue'
import filterFollowersPercentage from './filter-followers-percentage.vue'
import filterFollowersAge from './filter-followers-age.vue'

export default {
    name: 'advance-followersCount',
    data(){
        return{
            filterBy: {
                gender: 'All',
                socials: {
                    type: []
                }
            }
        }
    },
    methods: {
        setName(name){
            this.filterBy.name = name;
        },
        setGender(gender){
            this.filterBy.gender = gender;
        },
        setSocials(socials){
            this.filterBy.socials = socials;
        },
        setAge(age){
            this.filterBy.age = age;
        },
        setTags(tags) {
        this.filterBy.tags = tags;
        },
        setFollowersCount(followersCount){
            this.filterBy.socials.followersCount = followersCount;
        },
        setFollowersPercentage(menFollowersPercentage){
            this.filterBy.socials.menFollowersPercentage = menFollowersPercentage;
        },
        setFollowersAge(followersAvgAge){
            this.filterBy.socials.followersAvgAge = followersAvgAge;
        }
    },
    components: {
        filterName,
        filterGender,
        filterSocials,
        filterAge,
        tagsSelect,
        filterFollowersCount,
        filterFollowersPercentage,
        filterFollowersAge
    }
};
</script>
