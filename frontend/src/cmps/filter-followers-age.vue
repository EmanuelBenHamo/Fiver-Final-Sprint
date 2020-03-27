<template>
 <div class="filter-followers-age-container followers-silder select-age-range">
        <label>Average Age</label>
        <div class="followers-age-slider">
        <el-slider
            v-model="followersAvgAge"
            range
            show-stops
            :marks="marks"
            :step="5"
            :min="15"
            :max="50">
        </el-slider>
        </div>
    </div>
</template>

<script>
export default {
    name: 'filter-followers-age',
    data(){
        return{ 
       followersAvgAge: null,
       age:[15, 50],
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
    watch: {
        followersAvgAge(){
            this.$emit('setFollowersAge', this.followersAvgAge)
        }
    }
}
</script>