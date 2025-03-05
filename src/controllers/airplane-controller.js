const { AirplaneService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const {SuccessResponse,ErrorResponse}=require('../utils/common')

async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        });
        SuccessResponse.data=airplane;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = error;
        return res
            .status(error.StatusCodes)
            .json(ErrorResponse);
    }
}
async function getAirplane(req, res) {
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = error.message;
        return res
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
    }
}
async function getAllAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAllAirplanes();
        SuccessResponse.data = airplanes;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = error.message;
        return res
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
    }
}
async function updateAirplane(req, res) {
    try {
        const updatedAirplane = await AirplaneService.updateAirplane(req.params.id, req.body);
        SuccessResponse.data = updatedAirplane;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = error.message;
        return res
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
    }
}
async function deleteAirplane(req, res) {
    try {
        const deleted = await AirplaneService.deleteAirplane(req.params.id);
        SuccessResponse.data = deleted;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = error.message;
        return res
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
    }
}

module.exports = {
    createAirplane,
    getAirplane,
    getAllAirplanes,
    updateAirplane,
    deleteAirplane
};
