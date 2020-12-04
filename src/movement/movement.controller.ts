import { Controller, Request, Get, Post, Body, Param, Delete } from '@nestjs/common'
import { MovementService } from './movement.service'
import { MovementCreateDto } from './dto/create-movement.dto'
import { Movement } from './entities/movement.entity'


@Controller('movements')
export class MovementController {
  constructor(private readonly movementService: MovementService) { }

  @Post()
  async Create(@Body() movement: MovementCreateDto): Promise<Movement> {
    const createdMovement = await this.movementService.create(movement)

    return createdMovement
  }

  @Get()
  async List(@Request() req): Promise<Movement[]> {
    const movements = await this.movementService.findAll(req.user.id)

    return movements
  }

  @Get(':id')
  FindOne(@Param('id') id: string) {
    return this.movementService.findOne(+id)
  }

  @Delete(':id')
  Remove(@Param('id') id: string) {
    return this.movementService.remove(+id)
  }
}
