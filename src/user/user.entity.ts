import { Column, Entity, ObjectID, ObjectIdColumn, Unique } from "typeorm";

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    birthDate: Date;

    @Column()
    password: string;
}