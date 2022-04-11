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
        // Serialize data so the template can read it
        const workouts = workoutData.map((allWorkouts) => allWorkouts.get({ plain: true }));
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

router.get('/new', async (req, res) => {
        res.render('add-workout', {
            logged_in: req.session.logged_in,
            username: req.session.name,
        });
});

// Create a new workout post
router.post('/new', withAuth, async (req, res) => {
    try {
      const newWorkout = await Workout.create(req.body);
      req.session.save(() => {
        req.session.user_id = newWorkout.id;
        req.session.logged_in = true;
        res.render('add-workout', { newWorkout, logged_in: true, username: req.session.name });
      });
      console.log(newWorkout);
        const workout = newWorkout.get({ plain: true });
        
            res.render('dashboard', {
              ...workout,
              logged_in: req.session.logged_in
            });
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;