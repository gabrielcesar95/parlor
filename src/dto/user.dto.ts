import { Type } from "class-transformer";
import { ArrayMinSize, IsDateString, IsEmail, IsMongoId, IsNotEmpty, IsNotEmptyObject, IsString, Length, Min, ValidateNested } from "class-validator";

export class UserDto {
    // @IsMongoId()
    readonly id?: string;

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
