var express = require('express');
var router = express.Router();

// User routes
router.get('/users', function(req, res, next) {
  // Retrieve all users
});

router.post('/users', function(req, res, next) {
  // Create a new user
});

router.get('/users/:id', function(req, res, next) {
  // Retrieve a single user by id
});

router.put('/users/:id', function(req, res, next) {
  // Update a user by id
});

router.delete('/users/:id', function(req, res, next) {
  // Delete a user by id
});
