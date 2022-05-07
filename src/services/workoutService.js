const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`<h3>Get all workouts</h3>`);
});

router.get('/:workoutId', (req, res) => {
  res.send(`<h3>Get workout with id(existing) ${req.params.workoutId}</h3>`);
} );

router.post('/', (req, res) => {
  res.send(`<h3>Create new workout</h3>`);
});

router.patch('/:workoutId', (req, res) => {
  res.send(`<h3>Update workout with id(existing) ${req.params.workoutId}</h3>`);
} );

router.delete('/:workoutId', (req, res) => {
  res.send(`<h3>Delete workout with id(existing) ${req.params.workoutId}</h3>`);
} );
