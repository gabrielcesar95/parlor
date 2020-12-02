import { IsDateString, IsEmail, IsNotEmpty, IsString, Length } from "class-validator";
import { ObjectID } from "typeorm";

export class UserDto {
    readonly id?: ObjectID;

    @IsNotEmpty()
    @IsString()
    @Length(2, 255, { message: "O tamanho de nome deve ser entre 2 e 255" })
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @Length(3, 255)
    email: string;

    @IsNotEmpty()
    @IsDateString()
    birthDate: Date;

    @IsNotEmpty()
    password: string;
}
