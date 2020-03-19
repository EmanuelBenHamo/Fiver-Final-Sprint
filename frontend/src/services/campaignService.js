/* eslint-disable no-unused-vars */
"use strict";

const KEY = "campaign";

var gCampaigns = [];
getCampaigns();

function getCampaigns() {
  const campaigns = JSON.parse(localStorage.getItem(KEY));
  if (!campaigns || !campaigns.length) {
    gCampaigns.push({});
    localStorage.setItem(KEY, JSON.stringify(gCampaigns));
  }
  gCampaigns = campaigns;
}

function saveCampaign(campaign) {
  gCampaigns.push(campaign);
  localStorage.setItem(KEY, JSON.stringify(gCampaigns));
  return campaign;
}

function getEmptyCampaign() {
const campaign = {
    name: "",
    product: "",
    startDate: "",
    endDate: "",
    budget: 0,
    description: "",
    audience: {
      minAge: 0,
      maxAge: 0,
      targets: [],
      gender: {
        menOnly: false,
        womenOnly: false
      }
    }
  };
  return campaign;
}

export default {
  saveCampaign,
  getEmptyCampaign
};
