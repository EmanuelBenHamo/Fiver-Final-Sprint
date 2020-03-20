import campaignService from "../../services/campaign.service.js";

export default {
  state: {
    //
  },
  getters: {},
  actions: {
    addCampaign(context, { campaign }) {
      var savedCampign = campaignService.add(campaign);
      console.log("Campaign has been saved!", savedCampign);
    },
    getEmptyCampaign() {
      return campaignService.getEmptyCampaign();
    },
    getcampaignById(context, { campaignId }){
      return campaignService.getById(campaignId)
    }
  },
  modules: {}
};
