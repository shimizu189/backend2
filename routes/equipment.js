const express = require('express');
const router = express.Router();


// Equipment routes
router.get('/equipment', function(req, res, next) {
    // Retrieve all equipment
  });
  
  router.post('/equipment', function(req, res, next) {
    // Create new equipment
  });
  
  router.get('/equipment/:id', function(req, res, next) {
    // Retrieve a single equipment item by id
  });
  
  router.put('/equipment/:id', function(req, res, next) {
    // Update an equipment item by id
  });
  
  router.delete('/equipment/:id', function(req, res, next) {
    // Delete an equipment item by id
  });