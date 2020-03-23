import campaignService from "../../services/campaign.service.js";

export default {
    state: {
        campaignsToShow: []
    },
    mutations: {
        setCampaigns(state, { campaignsToShow }) {
            state.campaignsToShow = campaignsToShow;
        },
    },
    getters: {
        campaignsToShow(state) {
            return state.campaignsToShow;
        },
    },
    actions: {
        async loadCampaigns(context, { filterBy }) {
            
            const campaignsToShow = await campaignService.query(filterBy)
            context.commit({ type: 'setCampaigns', campaignsToShow })
            return campaignsToShow
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