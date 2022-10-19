import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Continents } from 'src/continent/schema/contients.schema';
import { ContinentsService } from './continents.service';

@Controller('continent')
export class ContinentsController {

    constructor(private continentsService:ContinentsService){}

    @Get()
    async getAll(){

        return this.continentsService.getAll();
    }

    @Post()
    async createContient(@Body() continent:Continents){
    
        return this.continentsService.create(continent);
    }

    @Get("/:id")
    async getById(@Param('id') id:string){

        return this.continentsService.getById(id);
    }

    @Put('/:id')
    async updateContinent(@Param('id') id:string, @Body() continents:Continents){

        return await this.continentsService.update(id, continents);
    }

    @Delete('/:id')
    async deletContinent(@Param('id') id:string){
 
        await this.continentsService.delet(id);
    }
    

    @Get('search/:name')
    async filterByRole(@Query('name') name: string = Continents.name) { 

        console.log(name);
    }
}
