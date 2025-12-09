import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateColumnPersonIdRBeneficiaries1761664589314
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE records.records_beneficiaries
            ADD COLUMN person_id BIGINT NULL;
        `);

    await queryRunner.query(`
            UPDATE records.records_beneficiaries rb
            SET person_id = pa.person_id
            FROM beneficiaries.person_affiliates pa
            WHERE pa.type = 'affiliates'
                AND (rb.input->'params'->>'affiliateId')::bigint = pa.type_id;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE records.records_beneficiaries
            DROP COLUMN person_id;
        `);
  }
}
