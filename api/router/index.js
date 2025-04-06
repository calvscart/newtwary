const express = require('express');
const router = express.Router();

// Import sub-routes
const randomWordRoute = require('./papkitsu');

// Mount them
router.use(randomWordRoute);
router.use(anotherEndpointRoute);

module.exports = router;