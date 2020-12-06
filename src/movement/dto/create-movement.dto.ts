import { IsMongoId, IsNotEmpty, IsNumber, IsOptional } from "class-validator"

export class MovementCreateDto {
    readonly id?: string

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
