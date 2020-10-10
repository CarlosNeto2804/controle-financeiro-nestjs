import { Module } from '@nestjs/common';
import { ContasController } from './contas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Contas, ContasSchema } from './contas.schema';
import { ContasService } from './contas.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Contas.name, schema: ContasSchema }])],
  controllers: [ContasController],
  providers: [ContasService]
})
export class ContasModule {}
