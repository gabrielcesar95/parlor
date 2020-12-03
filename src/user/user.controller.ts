import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserCreateDto, UserUpdateDto } from '../dto/user.dto';
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
    async Create(@Body() user: UserCreateDto): Promise<User> {
        if (await this.userService.findByEmail(user.email)) {
            throw new BadRequestException({ statusCode: 400, message: ['E-mail already used'], error: 'Bad Request' });
        }

        return this.userService.create(user);
    }

    @Get(':id')
    Find(@Param('id') id: string): Promise<User> {
        return this.userService.find(id);
    }

    @Put(':id')
    Update(@Param('id') id: string, @Body() user: UserUpdateDto): Promise<User> {
        return this.userService.update(id, user);
    }

    @Delete(':id')
    Delete(@Param('id') id: string) {
        return this.userService.delete(id);
    }
}
