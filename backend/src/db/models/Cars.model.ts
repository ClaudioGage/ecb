import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";
@Entity('cars')
export class Cars extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    make: string;
    @Column()
    model: string;
    @Column()
    description: string;
    @Column()
    km: number;
    @Column()
    image: string;
    @Column()
    status: boolean;
}
