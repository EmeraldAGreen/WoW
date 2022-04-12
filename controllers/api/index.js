const router = require('express').Router();
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/workouts', workoutRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
