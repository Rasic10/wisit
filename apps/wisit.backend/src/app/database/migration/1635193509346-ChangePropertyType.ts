import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangePropertyType1635193509346 implements MigrationInterface {
    name = 'ChangePropertyType1635193509346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" integer NOT NULL`);
    }

}
