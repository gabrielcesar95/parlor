import { Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UserController {
    @Get()
    Index(): string {
        return 'index de usuários'
    }

    @Get('new')
    NewForm(): string {
        return 'Cadastro de usuário (página)'
    }

    @Get(':id')
    UpdateForm(@Param() params): string {
        return `Página de atualização do usuário ${params.id}`
    }

    @Post('new')
    Create(): string {
        return 'Cadastro de usuário'
    }

    @Put('ID')
    Update(): string {
        return 'Update de usuário'
    }
}
