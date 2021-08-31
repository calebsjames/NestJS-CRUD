import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Issue extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    url!: string;

    @Column()
    description!: string;

    @Column()
    labels!: string;

    @Column()
    author!: string;

    @Column()
    comment_count!: number;

    @Column({ default: true })
    isActive: boolean;
}