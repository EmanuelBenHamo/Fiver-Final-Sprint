import campaignService from "../../services/campaign.service.js";

export default {
    state: {
        campaigns: []
    },
    mutations: {
        setCampaigns(state, { campaigns }) {
            state.campaigns = campaigns;
        },
    },
    getters: {
        campaigns(state) {
            return state.campaigns;
        },
    },
    actions: {
        async loadCampaigns(context, { loggedInUser }) {
            const campaigns = await campaignService.query(loggedInUser)
            context.commit({ type: 'setCampaigns', campaigns })
            return campaigns
        },
        addCampaign(context, { campaign }) {
            var savedCampaign = campaignService.add(campaign);
            console.log("Campaign has been saved!", savedCampaign);
        },
        getEmptyCampaign() {
            return campaignService.getEmptyCampaign();
        },
        getcampaignById(context, { campaignId }) {
            return campaignService.getById(campaignId)
        }
    },
    modules: {}
};