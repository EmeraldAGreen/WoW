const router = require('express').Router();
const { Workout, Comment, Tag, User } = require('../models');
const withAuth = require('../utils/auth');

// /home
router.get('/', async (req, res) => {
  // Pass serialized data and session flag into template
  res.render('home', { logged_in: req.session.logged_in });
});

// /dashboard
router.get('/', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login', { logged_in: req.session.logged_in });
});

router.get('/', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/my-workouts');
    return;
  }
  res.render('login', { logged_in: req.session.logged_in });
});

// logs the user in
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login', { logged_in: req.session.logged_in });
});

router.get('/signup', (req, res) => {
  res.render('signup');
});


module.exports = router;
