import { Module } from '@nestjs/common'
import { MovementService } from './movement.service'
import { MovementController } from './movement.controller'
import { CategoryModule } from './category/category.module'

@Module({
  controllers: [MovementController],
  providers: [MovementService],
  imports: [CategoryModule]
})
export class MovementModule { }
