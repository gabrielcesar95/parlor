import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

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
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
