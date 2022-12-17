import { Vaccination } from "src/controllers/vaccination/entities/vaccination.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Drug {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  minDose: number;

  @Column()
  maxDose: number;

  @Column()
  approved: boolean;

  @Column()
  availableAt: Date;

  @OneToMany(type => Vaccination, vaccination => vaccination.drug)
  vaccinations: Vaccination[];

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updated_at: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
