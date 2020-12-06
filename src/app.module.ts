import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { AppController } from './app.controller'
import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from './auth/jwt-auth.guard'
import { MovementModule } from './movement/movement.module'
import { Movement } from './movement/entities/movement.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: '',
      password: '',
      database: 'parlor',
      entities: [
        Movement
      ],
      synchronize: true,
      useUnifiedTopology: true
    }),
    UserModule,
    AuthModule,
    MovementModule
  ],
  controllers: [AppController],
  providers: [{
    provide: APP_GUARD,
    useClass: JwtAuthGuard
  }],
})
export class AppModule { }
