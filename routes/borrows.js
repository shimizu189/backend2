const express = require('express');
const router = express.Router();


// Borrow routes
router.get('/borrows', function(req, res, next) {
    // Retrieve all borrows
  });
  
  router.post('/borrows', function(req, res, next) {
    // Create a new borrow
  });
  
  router.get('/borrows/:id', function(req, res, next) {
    // Retrieve a single borrow by id
  });
  
  router.put('/borrows/:id', function(req, res, next) {
    // Update a borrow by id
  });
  
  router.delete('/borrows/:id', function(req, res, next) {
    // Delete a borrow by id
  });
  