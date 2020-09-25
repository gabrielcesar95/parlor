import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    birthDate: Date;

    @Column()
    password: string;
}