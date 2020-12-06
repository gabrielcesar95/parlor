import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { UserProviders } from './schemas/user.schema'
import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [UserController],
  providers: [
    UserService,
    ...UserProviders
  ],
  exports: [UserService]
})
export class UserModule { }
