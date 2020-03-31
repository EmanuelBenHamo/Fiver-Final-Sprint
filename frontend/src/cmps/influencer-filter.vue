<template>
<section class="main-filter-container">

    <div class="filter-container">
        <!-- <keep-alive> -->
        <simple-filter 
            @setSimpleFilter="setSimpleFilter">
            <button class="filter-btn btn"
            @click="setFilterBy">Filter</button>
        </simple-filter> 
        <!-- </keep-alive> -->
    </div>


    <div class="advance-filter-tabs flex space-between">
        <!-- INFLUENCER AGE -->
        <div>
            <label 
            class="filter-tab-btn nav-btn"
            @click.stop="onToggle('age')">Age</label>
            <!-- <transition name="fade"> -->
                <keep-alive>
                    <filter-age
                    :class="{active:activeFilter === 'age'}"
                    class="filter-modal" 
                    @setAge="setAge"/>
                </keep-alive>
            <!-- </transition>     -->
        </div>
        
        <!-- MEADIA ACTIVITY -->
        <div >
            <label class="filter-tab-btn nav-btn"
            @click.stop="onToggle('media')">Media Activity</label>
            <!-- <transition name="fade"> -->
                <keep-alive>
                    <filter-media-activity
                    :class="{active:activeFilter === 'media'}"
                    class="filter-modal"
                    @setMediaActivity="setMediaActivity" />
                </keep-alive>
            <!-- </transition> -->
        </div>
        <!-- PRICE -->  
        <div >
            <label class="filter-tab-btn nav-btn"
             @click.stop="onToggle('price')">Price</label>
            <!-- <transition name="fade"> -->
                <keep-alive>
                    <filter-price
                    :class="{active:activeFilter === 'price'}"
                    class="filter-modal"
                    @setPrice="setPrice"/>
                </keep-alive>
            <!-- </transition> -->
        </div>
        <!-- TAGS -->
        <div>
            <label class="filter-tab-btn nav-btn"
             @click.stop="onToggle('tags')">Tags</label>
            <!-- <transition name="fade"> -->
                <keep-alive>
                    <filter-tags
                    :class="{active:activeFilter === 'tags'}"
                    class="filter-modal"
                    @setTags="setTags" />
                </keep-alive>
            <!-- </transition> -->
        </div>
        <!-- FOLLOWERS -->
        <div>
            <label class="filter-tab-btn nav-btn"
            @click.stop="onToggle('followers')">Followers</label>
           
                <keep-alive>
                    <filter-followers
                    :class="{active:activeFilter === 'followers'}"
                    class="filter-modal"
                    @setFollowers="setFollowers" />
                </keep-alive>
      
        </div>
    </div>
</section>
</template>

<script>
import simpleFilter from './simple-filter.vue'
import filterAge from './filter-age.vue'
import filterTags from './filter-tags.vue'
import filterFollowers from './filter-followers.vue'
import filterPrice from './filter-price';
import filterMediaActivity from './filter-media-activity';

export default {
    data(){
        return{
        activeFilter: null,
        filterBy: {
            age:[],
            socials: {
                posts:null,
                stories:null,
                types: []
            }
        }
    }
},
methods: {
    setSimpleFilter({name, gender, types}){
            this.filterBy.name = name;
            this.filterBy.gender = gender;
            this.filterBy.socials.types = types;         
    },
    setFollowers({ followersCount, menFollowersPercentage, followersAvgAge }){
        this.filterBy.socials.followersCount = followersCount;
        this.filterBy.socials.menFollowersPercentage = menFollowersPercentage;
        this.filterBy.socials.sociafollowersAvgAgels = followersAvgAge;
    },
    setAge(age){
        this.filterBy.age = age;   
    },
    setTags(tags) {
        this.filterBy.tags = tags;
    },
    setPrice(price) {
        this.filterBy.price = price;
    },
    setMediaActivity({posts, stories}) {
        this.filterBy.socials.posts = posts;
        this.filterBy.socials.stories = stories;
    },
    setFilterBy(filterBy) {
        this.$emit('setFilterBy', this.filterBy)
        this.activeFilter = null;
    },
    onToggle(filterType) { 
        if (this.activeFilter === filterType) {
          this.activeFilter = null;
        } else {
          this.activeFilter = filterType;
        }
      }
   
},
components:{
    simpleFilter,
    filterAge,
    filterTags,
    filterFollowers,
    filterPrice,
    filterMediaActivity
}
}
</script>

<style>
</style>