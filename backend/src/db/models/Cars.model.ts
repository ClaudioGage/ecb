import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";
@Entity('cars')
export class Car extends BaseEntity{
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
}
