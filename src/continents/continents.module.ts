import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Continents, ContinentsSchema } from 'src/continent/schema/contients.schema';
import { ContinentsController } from './continents.controller';
import { ContinentsService } from './continents.service';

@Module({
    imports:[
        MongooseModule.forFeature([{
            name: Continents.name,
            schema: ContinentsSchema,
        }]),
    ],
    exports: [ContinentsService],
    providers: [ContinentsService],
    controllers:[ContinentsController]
})
export class ContinentsModule {}
