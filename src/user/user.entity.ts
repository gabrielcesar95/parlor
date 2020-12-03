import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm"

//TODO: change collection name to "users"
@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @Column({ nullable: true })
    birthDate?: Date

    @Column({ nullable: true })
    password?: string
}