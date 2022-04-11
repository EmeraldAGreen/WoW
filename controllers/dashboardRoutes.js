const router = require('express').Router();
const { Workout, Comment, Tag, User } = require('../models');
const withAuth = require('../utils/auth');

// render (get) all workout w/ comments (not user specific)

router.get('/', async (req, res) => {
    try {
        // Get all workouts and JOIN with user data
        const workoutData = await Workout.findAll({
            attributes: ['id', 'name', 'description', 'duration', 'tag_id', 'user_id', 'created_at'],
            include: [
                {
                    model: Comment,
                    attributes: [
                        'id',
                        'title',
                        'comment',
                        'workout_id',
                        'user_id',
                        'created_at'
                    ],
                    include: {
                        model: User,
                        attributes: ['name'],
                    },
                },
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        console.log(workoutData);
        // Serialize data so the template can read it
        const workouts = workoutData.map((allWorkouts) => allWorkouts.get({ plain: true }));
        console.log(workouts);
        // Pass serialized data and session flag into template
        res.render('dashboard', {
            workouts,
            logged_in: req.session.logged_in,
            username: req.session.name,
        });
    } catch (err) {
        res.status(500).json(err.message);
    }
});

module.exports = router;