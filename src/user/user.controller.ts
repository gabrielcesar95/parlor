import { BadRequestException, NotFoundException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { UserCreateDto, UserUpdateDto } from '../dto/user.dto'
import { User } from './user.entity'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    List(): Promise<User[]> {
        return this.userService.findAll()
    }

    @Post()
    async Create(@Body() user: UserCreateDto): Promise<User> {
        if (await this.userService.findByEmail(user.email)) {
            throw new BadRequestException({ statusCode: 400, message: ['E-mail already used'], error: 'Bad Request' })
        }

        return this.userService.create(user)
    }

    @Get(':id')
    async Find(@Param('id') id: string): Promise<User> {
        const user = await this.userService.find(id)

        if (user) {
            return user
        }

        throw new NotFoundException()
    }

    @Put(':id')
    async Update(@Param('id') id: string, @Body() user: UserUpdateDto): Promise<User> {
        if (await this.userService.find(id)) {
            return this.userService.update(id, user)
        }

        throw new NotFoundException()
    }

    @Delete(':id')
    async Delete(@Param('id') id: string) {
        if (await this.userService.find(id)) {
            return await this.userService.delete(id)
        }

        throw new NotFoundException()
    }
}
