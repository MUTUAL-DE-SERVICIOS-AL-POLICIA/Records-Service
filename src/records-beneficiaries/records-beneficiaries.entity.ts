import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class RecordsBeneficiaries {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'jsonb', nullable: true })
  user: any;

  @Column({ type: 'varchar', length: 150 })
  action: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'jsonb', nullable: true })
  input: any;

  @Column({ type: 'jsonb', nullable: true })
  output: any;

  @Column({ type: 'bigint', nullable: true })
  personId: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
