import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Inicial1789612444013 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
