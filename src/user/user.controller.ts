import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
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
    Create(@Body() user: UserDto): Promise<InsertResult> {
        return this.userService.create(user);
    }

    @Get(':id')
    Find(@Param('id') id: string) {
        return this.userService.find(id);
    }

    @Put(':id')
    Update(@Param('id') id: string, @Body() user: UserDto) {
        return this.userService.update(id, user);
    }

    @Delete(':id')
    Delete(@Param('id') id: string) {
        return this.userService.delete(id);
    }
}
