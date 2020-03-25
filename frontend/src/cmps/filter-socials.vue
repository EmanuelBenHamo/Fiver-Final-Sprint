<template>
    <div class="select-btns social-checkbox-btn flex align-center">
      <label class="checkbox-container checkbox-instagram">
        <input type="checkbox" value="instagram" v-model="socials.type" />
        <span class="checkmark fa fa-instagram"></span>
      </label>
      <label class="checkbox-container checkbox-snapchat">
        <input type="checkbox" value="snapchat" v-model="socials.type" />
        <span class="checkmark fa fa-snapchat"></span>
      </label>
      <label class="checkbox-container checkbox-tiktok">
        <input type="checkbox" value="tiktok" v-model="socials.type " />
        <span class="checkmark">
          <img src="../assets/icons/tik-tok.svg" class="tiktok-icon" />
        </span>
      </label>
    </div>
</template>

<script>
export default {
    name: 'filter-socials',
    data(){
        return{ 
            socials: {
              type: []
            }
        }
    },
    watch: {
        'socials.type'(){
            this.$emit('setSocials', this.socials)
        }
    }
}
</script>