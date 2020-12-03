import { IsDateString, IsEmail, IsNotEmpty, IsString, Length } from "class-validator"
import { ObjectID } from "typeorm"

export class UserCreateDto {
    readonly id?: ObjectID

    @IsNotEmpty()
    @IsString()
    @Length(2, 255)
    name: string

    @IsNotEmpty()
    @IsEmail()
    @Length(3, 255)
    email: string

    @IsDateString()
    birthDate: Date

    @IsNotEmpty()
    password: string
}

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
