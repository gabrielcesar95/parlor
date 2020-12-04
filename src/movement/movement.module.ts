import { Module } from '@nestjs/common'
import { MovementService } from './movement.service'
import { MovementController } from './movement.controller'
import { Movement } from './entities/movement.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forFeature([Movement])
  ],
  controllers: [MovementController],
  providers: [MovementService]
})
export class MovementModule { }
