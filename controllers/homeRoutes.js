const router = require('express').Router();
const { Workout, Comment, Tag, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  console.log('we made it! ')
  try {
      // Get all workouts and JOIN with user data
      const workoutData = await Workout.findAll({
        attributes: ['id', 'name', 'description', 'duration', 'tag_id', 'user_id', 'created_at'],
        include: [
          {
            model: Comment,
            attributes: [
                'id', 
                'comment', 
                'workout_id', 
                'user_id', 
                'created_at'],
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
    res.render('home', {
      workouts, 
      logged_in: req.session.logged_in, 
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get('/dashboard', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/my');
    return;
  }

  res.render('login');
});

// router.get('/workouts', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});


module.exports = router;
