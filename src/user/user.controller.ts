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
    async List(): Promise<any[]> {
        const users = await this.userService.findAll()

        const response = users.map((user: User) => {
            const { password, ...result } = user

            return result
        })

        return response
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
    async Find(@Param('id', IdPipe) id: string): Promise<any> {
        const user = await this.userService.find(id)

        if (user) {
            const { password, ...response } = user

            return response
        }

        throw new NotFoundException()
    }

    @Put(':id')
    async Update(@Param('id', IdPipe) id: string, @Body() user: UserUpdateDto): Promise<any> {
        if (await this.userService.find(id)) {
            const updatedUser = (await this.userService.update(id, user)).toObject()

            const { password, ...response } = updatedUser

            return updatedUser
        }

        throw new NotFoundException()
    }

    @Delete(':id')
    async Delete(@Param('id', IdPipe) id: string) {
        if (await this.userService.find(id)) {
            return await this.userService.delete(id)
        }

        throw new NotFoundException()
    }
}
