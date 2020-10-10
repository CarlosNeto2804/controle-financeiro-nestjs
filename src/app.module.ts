import { Module } from '@nestjs/common';
import { ContasModule } from './contas/contas.module';
import { MongooseModule } from '@nestjs/mongoose';
const uri = process.env.MONGO_URL || ''
@Module({
  imports: [MongooseModule.forRoot(uri), ContasModule],
})
export class AppModule {}
