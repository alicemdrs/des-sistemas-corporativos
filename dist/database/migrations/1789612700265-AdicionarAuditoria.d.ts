import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AdicionarAuditoria1789612700265 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
