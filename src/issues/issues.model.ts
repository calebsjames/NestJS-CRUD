import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class IssueModel extends Model {
    @Column
    title!: string;

    @Column
    url!: string;

    @Column
    description!: string;

    @Column
    labels!: string;

    @Column
    author!: string;

    @Column
    comment_count!: number;

    @Column({ defaultValue: true })
    isActive: boolean;
}