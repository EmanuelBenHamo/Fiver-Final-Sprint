import campaignService from "../../services/campaignService.js";

export default {
  state: {
    //
  },
  getters: {},
  actions: {
    submitCampaign(context, { campaign }) {
      var savedCampign = campaignService.saveCampaign(campaign);
      console.log("Campaign has been saved!", savedCampign);
    },
    getEmptyCampaign() {
      return campaignService.getEmptyCampaign();
    }
  },
  modules: {}
};
