import { IsDateString, IsEmail, IsNotEmpty, IsString, Length } from "class-validator"
import { ObjectID } from "typeorm"

export class UserUpdateDto {
    readonly id?: ObjectID

    @IsString()
    @Length(2, 255)
    name: string

    @IsEmail()
    @Length(3, 255)
    email: string

    @IsDateString()
    birthDate: Date

    password?: string
}