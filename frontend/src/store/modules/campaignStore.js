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
        async loadCampaigns(context) {
            const campaigns = await campaignService.query()
            context.commit({ type: 'setCampaigns', campaigns })
        },
        addCampaign(context, { campaign }) {
            var savedCampign = campaignService.add(campaign);
            console.log("Campaign has been saved!", savedCampign);
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