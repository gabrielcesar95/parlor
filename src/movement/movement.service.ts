import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { MovementCreateDto } from './dto/create-movement.dto'
import { Movement } from './entities/movement.entity'
import { ObjectID } from "typeorm"

@Injectable()
export class MovementService {

  // TODO: Find a way to create a CURRENT_TIMESTAMP() equivalent on mongoDB
  // TODO: find a way to relate documents on mongoDB. In this case, movements and users

  constructor(
    @InjectRepository(Movement)
    private movementRepository: Repository<Movement>,
  ) { }

  async create(createdMovement: MovementCreateDto): Promise<Movement> {

    return await this.movementRepository.save(createdMovement)
  }

  // TODO: see about getting the user with a decorator
  async findAll(userId?: ObjectID): Promise<Movement[]> {
    // TODO: get only the movements for the current authenticated user (@Request() req.user)
    const movements = await this.movementRepository.find()

    return movements
  }

  findOne(id: number) {
    return `This action returns a #${id} movement`
  }

  remove(id: number) {
    return `This action removes a #${id} movement`
  }
}
