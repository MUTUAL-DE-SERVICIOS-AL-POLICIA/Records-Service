import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRecordBeneficiaries1757962412640
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'records_beneficiaries',
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
      CREATE INDEX idx_records_beneficiaries_affiliate_id
      ON records.records_beneficiaries (((input->'user'->>'affiliateId')::bigint));
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX IF EXISTS idx_records_beneficiaries_affiliate_id`,
    );

    await queryRunner.dropTable('records_beneficiaries');
  }
}
