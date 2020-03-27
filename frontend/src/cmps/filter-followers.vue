<template>
      <div class="filter-followers-container">
        <!-- FOLLOWERS COUNT -->
        <filter-followers-count @setFollowersCount="setFollowersCount"/>

        <!-- FOLLOWERS PERCENTAGE -->
        <filter-followers-percentage @setFollowersPercentage="setFollowersPercentage"/>

        <!-- FOLLOWEWRS AGE -->
        <filter-followers-age @setFollowersAge="setFollowersAge"/>
    </div>
</template>

<script>
import filterFollowersCount from './filter-followers-count.vue'
import filterFollowersPercentage from './filter-followers-percentage.vue'
import filterFollowersAge from './filter-followers-age.vue'
export default {
    data(){
        return{
            socials: {
                followersCount:[],
                menFollowersPercentage:null,
                followersAvgAge:[]
            }
        }
    },
    methods: {
        setFollowersCount(followersCount){
        this.socials.followersCount = followersCount;
        },
        setFollowersPercentage(menFollowersPercentage){
        this.socials.menFollowersPercentage = menFollowersPercentage;
        },
        setFollowersAge(followersAvgAge){
        this.socials.followersAvgAge = followersAvgAge;
        },
    },
    watch: {
        socials: {
            deep:true,
            handler(){
                this.$emit('setFollowers', this.socials)
            }
        }
    },
    components: {
        filterFollowersCount,
        filterFollowersPercentage,
        filterFollowersAge
    }


}
</script>

<style>

</style>