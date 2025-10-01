import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRecordAppMobile1757954840839 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'records_app_mobile',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'user',
                    type: 'jsonb',
                    isNullable: true,
                },
                {
                    name: 'action',
                    type: 'varchar',
                    length: '150',
                    isNullable: false,
                },
                {
                    name: 'description',
                    type: 'text',
                    isNullable: true,
                },
                {
                    name: 'input',
                    type: 'jsonb',
                    isNullable: true,
                },
                {
                    name: 'output',
                    type: 'jsonb',
                    isNullable: true,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
            ],
        }),
        true,
    );

    await queryRunner.query(`
        CREATE INDEX idx_records_app_mobile_person_id
        ON records.records_app_mobile (((input->'user'->>'personId')::bigint));
    `);

    await queryRunner.query(`
        CREATE INDEX idx_records_app_mobile_affiliate_id
        ON records.records_app_mobile (((input->'user'->>'affiliateId')::bigint));
    `);

    await queryRunner.query(`
        CREATE INDEX idx_records_app_mobile_person_affiliate
        ON records.records_app_mobile (
            ((input->'user'->>'personId')::bigint),
            ((input->'user'->>'affiliateId')::bigint)
        );
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
        `DROP INDEX IF EXISTS idx_records_app_mobile_person_affiliate`,
        );
        await queryRunner.query(
        `DROP INDEX IF EXISTS idx_records_app_mobile_affiliate_id`,
        );
        await queryRunner.query(
        `DROP INDEX IF EXISTS idx_records_app_mobile_person_id`,
        );

        await queryRunner.dropTable('records_app_mobile');
    }
}
