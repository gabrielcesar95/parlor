import { IsDateString, IsEmail, IsNotEmpty, IsString, Length } from "class-validator";
import { ObjectID } from "typeorm";

export class UserDto {
    // @IsMongoId()
    readonly id?: ObjectID;

    @IsNotEmpty()
    @IsString()
    @Length(2, 255, { message: "O tamanho de nome deve ser entre 2 e 255" })
    readonly name: string;

    @IsNotEmpty()
    @IsEmail()
    @Length(3, 255)
    readonly email: string;

    @IsNotEmpty()
    @IsDateString()
    readonly birthDate: Date;

    @IsNotEmpty()
    readonly password: string;
}
