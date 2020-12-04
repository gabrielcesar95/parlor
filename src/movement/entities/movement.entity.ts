import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm"

@Entity({ name: 'movements' })
export class Movement {
    @ObjectIdColumn()
    id: ObjectID

    @ObjectIdColumn()
    userId: string

    @ObjectIdColumn({ nullable: true })
    transactionId: string

    @Column({ nullable: true })
    value: number

    @Column()
    createdAt: Date
}