import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common'
import { ObjectID } from "mongodb"

@Injectable()
export class IdPipe implements PipeTransform {
    transform(param: string | number, metadata: ArgumentMetadata = { type: 'param', metatype: String }) {
        if (!ObjectID.isValid(param)) {
            throw new BadRequestException({ statusCode: 400, message: ['Invalid id'], error: 'Bad Request' })
        }

        return param
    }
}