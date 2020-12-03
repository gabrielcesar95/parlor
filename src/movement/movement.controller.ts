import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common'
import { MovementService } from './movement.service'
import { MovementCreateDto } from './dto/create-movement.dto'
import { MovementUpdateDto } from './dto/update-movement.dto'

@Controller('movement')
export class MovementController {
  constructor(private readonly movementService: MovementService) { }

  @Post()
  create(@Body() createMovementDto: MovementCreateDto) {
    return this.movementService.create(createMovementDto)
  }

  @Get()
  findAll() {
    return this.movementService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movementService.findOne(+id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMovementDto: MovementUpdateDto) {
    return this.movementService.update(+id, updateMovementDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movementService.remove(+id)
  }
}
