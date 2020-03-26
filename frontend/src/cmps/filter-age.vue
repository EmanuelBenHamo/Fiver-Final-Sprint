<template>
    <div class="followers-silder filter-by-age">
        <label>Influencer's Age Range</label>
        <el-slider
            v-model="age"
            range
            show-stops
            :marks="marks"
            :step="5"
            :min="15"
            :max="50">
        </el-slider>
    </div>
</template>

<script>
export default {
    name: 'filter-age',
    data(){
        return{ 
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
        age(){
            this.$emit('setAge', this.age)
        }
    }
}
</script>