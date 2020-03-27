<template>
      <div class="filter-media-activity flex space-around">
        <div class="filter-posts flex column align-start">
            <label>Posts</label>
            <input type="number" v-model="mediaActivity.posts" placeholder="Minimum Number of Posts" class="media-activity">
        </div>
        <div class="filter-stories flex column align-start">
            <label>Stories</label>
            <input type="number" v-model="mediaActivity.stories" placeholder="Minimum Number of Stories" class="media-activity">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
        mediaActivity: {}
        }
    },
    watch :{
        mediaActivity: {
            deep: true,
            handler(){
                this.$emit('setMediaActivity', this.mediaActivity)
        }
        }
    }

}
</script>

<style>

</style>