import { Controller, Post, UseGuards, Request, Body, BadRequestException } from '@nestjs/common'
import { Public } from '../decorators/public.decorator'
import { UserCreateDto } from '../user/dto/create-user.dto'
import { User } from '../user/entities/user.entity'
import { UserService } from '../user/user.service'
import { AuthService } from './auth.service'
import { LocalAuthGuard } from './local-auth.guard'

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private userService: UserService
    ) { }

    @Public()
    @Post('register')
    async register(@Body() user: UserCreateDto): Promise<User> {
        if (await this.userService.findByEmail(user.email)) {
            throw new BadRequestException({ statusCode: 400, message: ['E-mail already used'], error: 'Bad Request' })
        }

        const createdUser = await this.userService.create(user)

        const { password, ...response } = createdUser

        return response
    }

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user)
    }

}
