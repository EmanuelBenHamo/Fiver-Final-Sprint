<template>
     <div class="followers-silder followers-count">
        <label>Followers </label>
        <span>- choose a range</span>
        <el-slider
            v-model="followersCount"
            :format-tooltip="localeString"
            range
            label='Followers'
            :steps="100"
            :max="1000000">
        </el-slider>
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
        followersCount(){
            this.$emit('setFollowersCount', this.followersCount)
        }
    }
}
</script>