import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContinentsController } from './continents/continents.controller';
import { ContinentsModule } from './continents/continents.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://continent_user:EQuTSwJ37JU0zGVV@cluster0.ubwvlac.mongodb.net/AngularDB"),
    ContinentsModule
  ],
})
export class AppModule {}
