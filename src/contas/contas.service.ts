import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contas } from './contas.schema';
import { ContaDto } from 'src/dto/conta.dto';
@Injectable()
export class ContasService {
  constructor(
    @InjectModel(Contas.name) private readonly model: Model<Contas>,
  ) {}

  async criar(conta: ContaDto): Promise<Contas> {
    return await this.model.create(conta);
  }

  async buscarTodos(): Promise<Contas[]> {
    return await this.model.find({});
  }

  async buscarPorID(id: string): Promise<Contas> {
    return await this.model.findOne({ _id: id });
  }

  async excluir(id: string): Promise<Contas> {
    return await this.model.findOneAndDelete({ _id: id });
  }

  async atualizar(_id: string, content: ContaDto): Promise<Contas> {
    return await this.model.findOneAndUpdate({ _id }, content);
  }
}
