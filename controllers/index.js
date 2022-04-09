const router = require('express').Router();

// const apiRoutes = require('./api');np
const homeRoutes = require('./homeRoutes');

// router.use('/api', apiRoutes);
router.use('/', homeRoutes);


module.exports = router;
