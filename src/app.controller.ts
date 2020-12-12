import { Controller, Request, UseGuards, Get } from '@nestjs/common'
import { JwtAuthGuard } from './auth/jwt-auth.guard'
import { Public } from './decorators/public.decorator'

@Controller()
export class AppController {
    @Public()
    @Get('healthcheck')
    healthCheck(): any {
        return { message: 'nothing but clear skyes up ahead' }
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        console.log(req.user)

        return req.user
    }
}
