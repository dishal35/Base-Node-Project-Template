const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const { AppError } = require("../utils/errors/app-error");
const airplanerepository=new AirplaneRepository();
async function createAirplane(data){
    try{
        const airplane=await airplanerepository.create(data);
        return airplane;
    }
    catch(error){
        if(error.name=='TypeError'){
            throw new AppError('Cannot Create Airplane',StatusCodes.BAD_REQUEST)
        }
        throw error;
    }
}
async function getAirplane(id) {
    try {
        const airplane = await airplanerepository.get(id);
        if (!airplane) {
            throw new AppError('Airplane not found', StatusCodes.NOT_FOUND);
        }
        return airplane;
    } catch (error) {
        throw error;
    }
}

async function getAllAirplanes() {
    try {
        const airplanes = await airplanerepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError('Error retrieving airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane(id, data) {
    try {
        const updatedAirplane = await airplanerepository.update(id, data);
        if (updatedAirplane[0] === 0) {
            throw new AppError('Airplane not found or no changes made', StatusCodes.NOT_FOUND);
        }
        return updatedAirplane;
    } catch (error) {
        throw error;
    }
}

async function deleteAirplane(id) {
    try {
        const deleted = await airplanerepository.destroy(id);
        if (deleted === 0) {
            throw new AppError('Airplane not found', StatusCodes.NOT_FOUND);
        }
        return deleted;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createAirplane,
    getAirplane,
    getAllAirplanes,
    updateAirplane,
    deleteAirplane
  };