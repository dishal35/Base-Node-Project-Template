const {Logger} =require('../config')
class CrudRepository{
    constructor(model){
        this.model=model
    }
    async create(data){
        const response=await this.model.create(data);
        return response;
    }
    async destroy(data){
        try{
        const response=await this.model.destroy({
            where:{
                id:data
            }
        });
        return response;
        }
        catch(error){
            Logger.error("Crud Repo Error:destroy")
            throw error;
        }
    }
    async get(data){
        try{
        const response=await this.model.findbyPk(data)
        return response;
        }
        catch(error){
            Logger.error("Crud Repo Error:get")
            throw error;
        }
    }
    async getAll(){
        try{
        const response=await this.model.findAll()
        return response;
        }
        catch(error){
            Logger.error("Crud Repo Error:get")
            throw error;
        }
    }
    async update(id,data){
        try{
        const response=await this.model.update(data,{
            where:{
                id:id
            }
        })
        return response;
        }
        catch(error){
            Logger.error("Crud Repo Error:Update")
            throw error;
        }
    }

}
module.exports=CrudRepository