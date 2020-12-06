import { IsEmail, IsISO8601, IsOptional, IsString, Length } from "class-validator"

export class UserUpdateDto {
    readonly id?: string

    @IsString()
    @Length(2, 255)
    name: string

    @IsEmail()
    @Length(3, 255)
    email: string

    @IsISO8601({ strict: true })
    @IsOptional()
    readonly birthDate?: Date

    password?: string
}