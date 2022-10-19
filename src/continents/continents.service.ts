import { Get, Injectable, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Continents, ContientsDocument } from 'src/continent/schema/contients.schema';

@Injectable()
export class ContinentsService {
    constructor(@InjectModel(Continents.name) 
    private continentModel:Model<ContientsDocument>,
    ){}

    async getAll():Promise<Continents[]>{
        return this.continentModel.find().exec();
    }

    async create(contients:Continents){

        const newContinent = new this.continentModel(contients);

        return newContinent.save();
    }

    async getById(id:string){

        return this.continentModel.findById(id).exec();
    }

    
    async update(id:string, contients:Continents ){

        return await this.continentModel.findByIdAndUpdate(id, contients, {new:true})
    }

    async delet(id: string){

        await this.continentModel.findByIdAndRemove(id);
    }

    async findByFilter(@Query() query): Promise<Continents[]> {
        return this.continentModel.find().exec();
    }

} 
