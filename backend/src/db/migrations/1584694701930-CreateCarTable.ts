import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCarTable1584694701930 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        return await queryRunner.createTable(new Table({
            name: "movies",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: "description",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "make",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "model",
                    type: "text",
                    isNullable: false
                },
                {
                    name: "image",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "status",
                    type: "boolean",
                    isNullable: false,
                },
                {
                    name: "km",
                    type: "integer",
                    isNullable: false
                }
            ]
        }), true);
    }
    public async down(queryRunner: QueryRunner): Promise<any> {
        return await queryRunner.dropTable("cars");
    }

}
