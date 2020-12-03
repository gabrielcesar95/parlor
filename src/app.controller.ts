import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common'
import { AuthService } from './auth/auth.service'
import { JwtAuthGuard } from './auth/jwt-auth.guard'
import { LocalAuthGuard } from './auth/local-auth.guard'
import { Public } from './decorators/public.decorator'

@Controller()
export class AppController {
    constructor(private authService: AuthService) { }

    // TODO: Register endpoint

    @Public()
    @Get('healthcheck')
    healthCheck(): any {
        return { message: 'nothing but clear skyes up ahead' }
    }

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user)
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user
    }
}
