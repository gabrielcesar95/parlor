import { Column, Entity, ObjectIdColumn } from "typeorm"

@Entity({ name: 'movements' })
export class Movement {
    @ObjectIdColumn()
    id: string

    @ObjectIdColumn()
    userId: string

    @ObjectIdColumn({ nullable: true })
    transactionId: string

    @Column({ nullable: true })
    value: number

    @Column()
    createdAt: Date
}