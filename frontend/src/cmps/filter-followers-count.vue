<template>
     <div class="followers-count-conatiner">
        <label>Amount</label>
        <div class="followers-count flex space-between align-center">
        <label>50K</label>
            <div class="followers-count-slider">
            <el-slider
                v-model="followersCount"
                :format-tooltip="localeString"
                range
                label='Followers'
                :steps="100"
                :min="50000"
                :max="500000">
            </el-slider>
            </div>
        <label>500K</label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'filter-followers-count',
    data(){
        return{ 
            followersCount: null
        } 
    },
    methods: {
        localeString(value){
            if(!value)return
            return value.toLocaleString('en-US')
        }
    },
    watch: {
        followersCount: {
            deep: true,
            handler(){
                this.$emit('setFollowersCount', this.followersCount)
            }
        }
        
    }
}
</script>