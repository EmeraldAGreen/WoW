const router = require('express').Router();
// const dashboardRoutes = require('./dashboardRoutes');
const myworkoutRoutes = require('./myworkoutRoutes');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/my-workouts', myworkoutRoutes);
router.use('/dashboard', dashboardRoutes);
module.exports = router;
