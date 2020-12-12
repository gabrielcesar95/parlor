import { Inject, Injectable } from '@nestjs/common'
import { MovementCreateDto } from './dto/create-movement.dto'
import { Model } from 'mongoose'
import { Movement } from './interfaces/movement.interface'

@Injectable()
export class MovementService {
  // TODO: Find a way to create a CURRENT_TIMESTAMP() equivalent on mongoDB
  // TODO: find a way to relate documents on mongoDB. In this case, movements and users

  constructor(
    @Inject('MOVEMENT_MODEL')
    private movementModel: Model<Movement>,
  ) { }


  async create(movementData: MovementCreateDto): Promise<Movement> {
    const createdMovement = await new this.movementModel(movementData).save()

    return createdMovement
  }

  // TODO: see about getting the user with a decorator
  async findAll(userId?: string): Promise<Movement[]> {
    // TODO: get only the movements for the current authenticated user (@Request() req.user)

    return this.movementModel.find().exec()
  }

  findOne(id: number) {
    return `This action returns a #${id} movement`
  }

  remove(id: number) {
    return `This action removes a #${id} movement`
  }
}
