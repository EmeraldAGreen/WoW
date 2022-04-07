const router = require('express').Router();
const { Workout, Comment, Tag, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
      // Get all workouts and JOIN with user data
      const workoutData = await workout.findAll({
        attributes: ['id', 'name', 'description', 'duration', 'tag_id', 'user_id', 'created'],
        include: [
          {
            model: User,
            attributes: ['name'],
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
    res.render('homepage', {
      workouts, 
      logged_in: req.session.logged_in, 
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/workout/:id', async (req, res) => {
  try {
    const workoutData = await workout.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const workout = workoutData.get({ plain: true });

    res.render('workout', {
      ...workout,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: workout }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('signup');
});

router.get('/home', (req, res) => {
  res.render('home');
});

module.exports = router;
