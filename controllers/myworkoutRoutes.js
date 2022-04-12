const router = require('express').Router();
const { Workout, Comment, Tag, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const workoutData = await Workout.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ['id', 'name', 'description', 'duration', 'tag_id', 'user_id', 'created_at'],
      // order: [['created_at', 'DESC']],
      include: [
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
    const workouts = workoutData.map((allWorkouts) => allWorkouts.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('my-workouts', {
      workouts,
      logged_in: req.session.logged_in,
      username: req.session.name,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Create a new workout post
// /api/workouts/new
// router.post('/new', withAuth, async (req, res) => {
//   try {
//     const newWorkout = await Workout.create(req.body);
//     req.session.save(() => {
//       req.session.user_id = newWorkout.id;
//       req.session.logged_in = true;
//       res.render('add-workout', { newWorkout, logged_in: true, username: req.session.name });
//     });

//     res.status(200).json(newWorkout);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// Delete a workout by ID
// /api/workouts/:id
// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const workoutData = await Workout.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!workoutData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(projectData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


module.exports = router;
