type StatusSolicitacao = 'pendente' | 'aprovada';
type Relatorio = {
    id: number;
    total: number;
    porStatus: StatusSolicitacao;
};
export declare class RelatoriosService {
    private readonly relatorios;
    buscarPorId(id: number): Relatorio;
}
export {};
