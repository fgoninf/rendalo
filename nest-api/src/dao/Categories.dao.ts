import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { Drivers } from "./Drivers.dao";

@Entity("Categories")
export class Categories {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 250 })
    name: string;
}