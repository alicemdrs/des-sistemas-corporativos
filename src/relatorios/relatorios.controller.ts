import { Controller, Get, Param, Patch, ParseIntPipe, UseGuards } from '@nestjs/common';
import { RelatoriosService } from './relatorios.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('relatorio')
export class RelatoriosController {
  constructor(private readonly relatorioService: RelatoriosService) { }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('gestor', 'auditor')
  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.relatorioService.buscarPorId(id);
  }
}