import { Body, Controller, Delete, Get, HttpException, Param, Post, Put } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    List(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    async Create(@Body() user: UserDto): Promise<User> {
        console.log(await this.userService.findByEmail(user.email))

        if (await this.userService.findByEmail(user.email)) {
            throw new HttpException({ message: ['E-mail already used'] }, 400);
        }

        return this.userService.create(user);
    }

    @Get(':id')
    Find(@Param('id') id: string): Promise<User> {
        return this.userService.find(id);
    }

    @Put(':id')
    Update(@Param('id') id: string, @Body() user: UserDto): Promise<User> {
        return this.userService.update(id, user);
    }

    @Delete(':id')
    Delete(@Param('id') id: string) {
        return this.userService.delete(id);
    }
}
