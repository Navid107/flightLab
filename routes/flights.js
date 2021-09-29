var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');
const destinationCtrl = require('../controllers/destination');

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.showTheScheduled);
router.post('/', flightsCtrl.create);
router.post('/:id', destinationCtrl.create);

module.exports = router;