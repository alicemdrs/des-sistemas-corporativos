import { Repository } from 'typeorm';
import { CriarSolicitacaoDto } from './dto/criar-solicitacao.dto';
import { FiltrarSolicitacoesDto } from './dto/filtrar-solicitacao.dto';
import { Solicitacao } from './solicitacao.entity';
import { DataSource } from 'typeorm';
export declare class SolicitacoesService {
    private readonly repository;
    private readonly dataSource;
    constructor(repository: Repository<Solicitacao>, dataSource: DataSource);
    listar(filtros: FiltrarSolicitacoesDto): Promise<Solicitacao[]>;
    buscarPorId(id: number): Promise<Solicitacao>;
    criar(dto: CriarSolicitacaoDto): Promise<Solicitacao>;
    aprovar(id: number, versaoEsperada: number, atorId: number): Promise<Solicitacao>;
}
