import { IsEmail, IsISO8601, IsNotEmpty, IsOptional, IsString, Length } from "class-validator"

export class UserCreateDto {
    readonly id?: string

    @IsNotEmpty()
    @IsString()
    @Length(2, 255)
    name: string

    @IsNotEmpty()
    @IsEmail()
    @Length(3, 255)
    email: string

    @IsISO8601({ strict: true })
    @IsOptional()
    readonly birthDate?: Date

    @IsNotEmpty()
    password: string
}
