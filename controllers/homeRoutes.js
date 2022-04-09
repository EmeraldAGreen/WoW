const router = require('express').Router();
const { Workout, Comment, Tag, User } = require('../models');
const withAuth = require('../utils/auth');

// /home
router.get('/', async (req, res) => {
  // Pass serialized data and session flag into template
  res.render('home');
});

// /dashboard
router.get('/', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/my-workouts');
    return;
  }

  res.render('login');
});

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
