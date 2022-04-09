const router = require('express').Router();
// const dashboardRoutes = require('./dashboardRoutes');
const myworkoutRoutes = require('./myworkoutRoutes');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/my-workouts', myworkoutRoutes)
module.exports = router;
