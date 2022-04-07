const router = require('express').Router();
const { Workout, Comment, Tag, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all locations
// /api/workouts
router.get('/', async (req, res) => {
  try {
    const workoutData = await Workout.findAll({
      attributes: [], 
      order: [['created', 'DESC']],
      include: [
        { model: User, attributes: ['name'] },
        {
          model: Comment,
          attributes: [
            'id',
            'comment',
            'workout_id',
            'user_id',
            'created_at',
          ],
          include: { model: User, attributes: ['name'] }
        },
      ],
    });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// THIS WAS ORIGINALLY IN HOMEROUTES
// router.get('/workout/:id', async (req, res) => {
//   try {
//     const workoutData = await workout.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const workout = workoutData.get({ plain: true });

//     res.render('workout', {
//       ...workout,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// /api/workouts/:id
// GET a single location
// router.get('/:id', async (req, res) => {
//   try {
//     const workoutData = await Workout.findByPk(req.params.id, {
//       // JOIN with travellers, using the Trip through table
//       include: [{ model: Traveller, through: Trip, as: 'location_travellers' }]
//     });

//     if (!locationData) {
//       res.status(404).json({ message: 'No location found with this id!' });
//       return;
//     }

//     res.status(200).json(locationData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Create a new workout post
// /api/workouts/new
router.post('/new', withAuth, async (req, res) => {
  try {
    const newWorkout = await Workout.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a workout by ID
// /api/workouts/:id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const workoutData = await Workout.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!workoutData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
