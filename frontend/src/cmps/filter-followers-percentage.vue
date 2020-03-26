<template>
<section class="men-followers-percentage-container">
<label>Gender</label>
   <div class="men-followers-percentage flex space-between align-center">
        <label>Men</label>
        <div class="men-followers-percentage-silder">
            <el-slider 
                v-model="menFollowersPercentage"
                :format-tooltip="showMenPercentage">
            </el-slider>
        </div>
        <label>Women</label>
    </div>
</section>
</template>

<script>
export default {
    name: 'filter-followers-percentage',
    data(){
        return{ 
       menFollowersPercentage: 0
        }    
    },
    methods: {
       showMenPercentage(value) {
        return value + '%   '
    },
    },
    watch: {
        menFollowersPercentage(){
            this.$emit('setFollowersPercentage', this.menFollowersPercentage)
        }
    }
}
</script>