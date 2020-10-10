import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema({timestamps: true})
export class Contas extends Document{
    @Prop({required: true})
    titulo:string;

    @Prop({required:true})
    valor:number;

    @Prop({required: true, default: null})
    tipo:string;
}

export const ContasSchema = SchemaFactory.createForClass(Contas);