const router = require('express').Router();
const { Workout } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all locations
router.get('/', async (req, res) => {
  try {
    const workoutData = await Workout.findAll();
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

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


router.post('/', withAuth, async (req, res) => {
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
