import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ContasService } from './contas.service';
import { ContaDto } from 'src/dto/conta.dto';

@Controller('contas')
export class ContasController {
  constructor(private readonly contaService: ContasService) {}

  // POST criar
  // localhost:3000/contas
  @Post()
  async criarNovaConta(@Body() body: ContaDto) {
    return this.contaService.criar(body);
  }

  // GET buscar contas
  @Get()
  async buscarTodos() {
    return this.contaService.buscarTodos();
  }

  @Get(':id')
  async buscaPorID(@Param('id') id: string) {
    return this.contaService.buscarPorID(id);
  }
  // DELETE conta
  @Delete(':id')
  async excluir(@Param('id') id: string) {
    return this.contaService.excluir(id);
  }
  // PUT atualizar conta

  @Put(':id')
  async editar(@Param('id') id: string, @Body() body: ContaDto) {
    return this.contaService.atualizar(id, body);
  }
}
