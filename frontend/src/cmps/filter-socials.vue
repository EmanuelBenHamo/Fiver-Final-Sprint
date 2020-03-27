<template>
    <div class="select-btns social-checkbox-btn flex align-center">
      <label class="checkbox-container checkbox-facebook">
        <input type="checkbox" value="facebook" v-model="types" />
        <span class="checkmark fa fa-facebook"></span>
      </label>
      <label class="checkbox-container checkbox-instagram">
        <input type="checkbox" value="instagram" v-model="types" />
        <span class="checkmark fa fa-instagram"></span>
      </label>
      <label class="checkbox-container checkbox-snapchat">
        <input type="checkbox" value="snapchat" v-model="types" />
        <span class="checkmark fa fa-snapchat"></span>
      </label>
      <label class="checkbox-container checkbox-tiktok">
        <input type="checkbox" value="tiktok" v-model="types " />
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
          types: []
        }
    },
    watch: {
        types: {
          deep: true,
          handler(){
            console.log('!!!');
            
            // console.log('TYPE HAS CHANGED', this.types);
            this.$emit('setTypes', this.types)
          }
        }
    }
}
</script>