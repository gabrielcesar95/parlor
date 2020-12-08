import { BadRequestException, NotFoundException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { IdPipe } from '../pipes/id.pipe'
import { UserCreateDto } from './dto/create-user.dto'
import { UserUpdateDto } from './dto/update-user.dto'
import { User } from './interfaces/user.interface'
import { UserService } from './user.service'
import { Public } from '../decorators/public.decorator'

@Public()
@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    async List(): Promise<User[]> {
        const users = await this.userService.findAll()

        return users
    }

    @Post()
    async Create(@Body() user: UserCreateDto): Promise<User> {
        if (await this.userService.findByEmail(user.email)) {
            throw new BadRequestException({ statusCode: 400, message: ['E-mail already used'], error: 'Bad Request' })
        }

        const createdUser = await this.userService.create(user)

        return createdUser
    }

    @Get(':id')
    async Find(@Param('id', IdPipe) id: string): Promise<User> {
        const user = await this.userService.find(id)

        if (user) {
            return user
        }

        throw new NotFoundException()
    }

    @Put(':id')
    async Update(@Param('id', IdPipe) id: string, @Body() user: UserUpdateDto): Promise<User> {
        if (await this.userService.find(id)) {
            const updatedUser = (await this.userService.update(id, user))

            return updatedUser
        }

        throw new NotFoundException()
    }

    @Delete(':id')
    async Delete(@Param('id', IdPipe) id: string) {
        if (await this.userService.find(id)) {
            const deletedUser = await this.userService.delete(id)

            return {
                deletedUser
            }
        }

        throw new NotFoundException()
    }
}
