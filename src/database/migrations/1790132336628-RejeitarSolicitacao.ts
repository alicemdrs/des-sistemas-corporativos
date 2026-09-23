import { MigrationInterface, QueryRunner } from "typeorm";

export class RejeitarSolicitacao1790132336628 implements MigrationInterface {
public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "solicitacoes"
      ADD CONSTRAINT "chk_solicitacoes_status"
      CHECK (
        "status" IN (
          'pendente',
          'aprovada',
          'rejeitada',
          'cancelada'
        )
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "solicitacoes"
      DROP CONSTRAINT "chk_solicitacoes_status"
    `);
  }
}