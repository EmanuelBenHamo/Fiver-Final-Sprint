<template>
<section class="men-followers-percentage-container">
<label>Followers Gender</label>
   <div class="men-followers-percentage flex space-between align-center">
        <label class="fa fa-mars"></label>
        <div class="men-followers-percentage-silder">
            <el-slider 
                v-model="menFollowersPercentage"
                :format-tooltip="showMenPercentage">
            </el-slider>
        </div>
        <label class="fa fa-venus"></label>
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