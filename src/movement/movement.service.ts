import { Injectable } from '@nestjs/common'
import { MovementCreateDto } from './dto/create-movement.dto'
import { MovementUpdateDto } from './dto/update-movement.dto'

@Injectable()
export class MovementService {
  create(createMovementDto: MovementCreateDto) {
    return 'This action adds a new movement'
  }

  findAll() {
    return `This action returns all movement`
  }

  findOne(id: number) {
    return `This action returns a #${id} movement`
  }

  update(id: number, updateMovementDto: MovementUpdateDto) {
    return `This action updates a #${id} movement`
  }

  remove(id: number) {
    return `This action removes a #${id} movement`
  }
}
