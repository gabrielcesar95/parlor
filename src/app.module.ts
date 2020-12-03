import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user/user.entity'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { AppController } from './app.controller'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: '',
      password: '',
      database: 'test',
      entities: [
        User,
      ],
      synchronize: true,
    }),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
