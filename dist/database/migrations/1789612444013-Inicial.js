"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inicial1789612444013 = void 0;
class Inicial1789612444013 {
    name = 'Inicial1789612444013';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "solicitacoes" ("id" SERIAL NOT NULL, "titulo" character varying(150) NOT NULL, "centro_custo" character varying(30) NOT NULL, "prioridade" character varying(10) NOT NULL DEFAULT 'normal', "status" character varying(20) NOT NULL DEFAULT 'pendente', "versao" integer NOT NULL, "criada_em" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "atualizada_em" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_795aaa33114295368cac771de45" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "solicitacoes"`);
    }
}
exports.Inicial1789612444013 = Inicial1789612444013;
//# sourceMappingURL=1789612444013-Inicial.js.map