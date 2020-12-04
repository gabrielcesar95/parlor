import { IsMongoId, IsNotEmpty, IsNumber, IsOptional } from "class-validator"
import { ObjectID } from "typeorm"

export class MovementCreateDto {
    readonly id?: ObjectID

    @IsNotEmpty()
    @IsMongoId()
    userId: string

    @IsOptional()
    @IsMongoId()
    transactionId?: string

    @IsNotEmpty()
    @IsNumber()
    value: number

    readonly createdAt?: Date
}
