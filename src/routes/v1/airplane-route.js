const express = require('express');
const { AirplaneController } = require('../../controllers');
const { AirplaneMiddleware } = require('../../middlewares');

const router = express.Router();

// Create an airplane
router.post('/', AirplaneMiddleware.validateCreateRequest, AirplaneController.createAirplane);

// Get all airplanes
router.get('/', AirplaneController.getAllAirplanes);

// Get a specific airplane by ID
router.get('/:id', AirplaneController.getAirplane);

// Update an airplane by ID
router.put('/:id', AirplaneMiddleware.validateUpdateRequest, AirplaneController.updateAirplane);

// Delete an airplane by ID
router.delete('/:id', AirplaneController.deleteAirplane);

module.exports = router;
