<template>
    <tr class="campaign-preview-container" v-if="campaign">
        <td>{{campaign.name}}</td>
        <td>{{campaign.product}}</td>
        <td>{{campaign.startDate |date}} - {{campaign.endDate |date}}</td>
        <td>{{campaign.budget | currency}}</td>
        <td>
          <button class="btn" @click="$emit('sendOffer', campaign )">
            Send Offer
          </button>
        </td>
    </tr>
  
</template>
<script>
  export default {
  props: {
    campaign: {
      type: Object
    }
  },
  data(){
    return {
     
    }
  },
  created(){
   
  },
  methods: {
    
  }
};
</script>
