const express = require('express')
const router = express.Router();
const SampleInvoice = require('../Controllers/sampleinvoice')


router.get('/sampleinvoice',SampleInvoice.findOne)

module.exports = router