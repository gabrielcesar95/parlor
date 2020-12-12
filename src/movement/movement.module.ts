import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { MovementService } from './movement.service'
import { MovementController } from './movement.controller'
import { MovementProviders } from './schemas/movement.schema'

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [MovementController],
  providers: [
    MovementService,
    ...MovementProviders
  ]
})
export class MovementModule { }
