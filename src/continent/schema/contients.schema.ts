import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ContientsDocument = Continents & Document;

@Schema()

export class Continents {

    @Prop()
    name: String;
    
    @Prop()
    code:String;

    @Prop()
    image:String
}

export const ContinentsSchema = SchemaFactory.createForClass(Continents);
