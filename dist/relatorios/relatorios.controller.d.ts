import { RelatoriosService } from './relatorios.service';
export declare class RelatoriosController {
    private readonly relatorioService;
    constructor(relatorioService: RelatoriosService);
    buscarPorId(id: number): {
        id: number;
        total: number;
        porStatus: "pendente" | "aprovada";
    };
}
