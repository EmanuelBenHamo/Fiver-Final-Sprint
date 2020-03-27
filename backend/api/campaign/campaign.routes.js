const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { getCampaign, addCampaign, getCampaigns, deleteCampaign, updateCampaign } = require('./campaign.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getCampaigns)
router.get('/:id', getCampaign)
router.post('/', addCampaign);
router.put('/:id', requireAuth, updateCampaign)
router.delete('/:id', requireAuth, deleteCampaign)

module.exports = router