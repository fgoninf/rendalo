import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Categories } from "./Categories.dao";

@Entity("Drivers")
export class Drivers {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 200 })
    name: string;
    @Column({ length: 200 })
    lastName: string;
    @Column()
    categoryId: number;
    @ManyToOne(type => Categories, category => category.id)
    category: Categories;
}