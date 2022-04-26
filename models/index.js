const User = require('./User');
const Workout = require('./Workout');
const Comment = require('./Comment');
const Tag = require('./Tag');
const WorkoutTag = require('./WorkoutTag');

User.hasMany(Workout, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Workout.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Workout.belongsToMany(Tag, {
  through: WorkoutTag
});

Tag.belongsToMany(Workout, {
  through: WorkoutTag
});

Workout.hasMany(Comment, {
  foreignKey: 'workout_id',
  onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Workout, {
  foreignKey: 'workout_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Workout, Tag, Comment, WorkoutTag};
