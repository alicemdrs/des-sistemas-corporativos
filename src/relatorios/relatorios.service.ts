import { Injectable, NotFoundException } from '@nestjs/common';
import { SolicitacoesService } from '../solicitacoes/solicitacoes.service';

type StatusSolicitacao = 'pendente' | 'aprovada';

type Relatorio = {
  id: number;
  total: number;
  porStatus: StatusSolicitacao;
};

@Injectable()
export class RelatoriosService {
  private readonly relatorios: Relatorio[] = [
    { id: 1, total: 1, porStatus: 'pendente' },
  ];

  buscarPorId(id: number) {
    const relatorio = this.relatorios.find((item) => item.id === id);

    if (!relatorio) {
      throw new NotFoundException('relatorio não encontrado');
    }

    return relatorio;
  }
}