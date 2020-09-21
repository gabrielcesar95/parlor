import { Controller, Delete, Get, HttpException, NotAcceptableException, Param, ParseIntPipe, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
    @Get()
    UsersList(): string {
        return 'listagem de usuários';
    }

    @Post()
    CreateUser(): string {
        return 'criar usuário';
    }

    @Get(':id')
    GetUser(@Param('id', ParseIntPipe) id: number ): number {
        return id;
    }
    
    @Post(':id')
    UpdateUser(@Param() params): string {
        return `adquirir usuário ID: ${params.id}`;
    }
    
    @Delete(':id')
    DeleteUser(@Param() params): string {
        return `adquirir usuário ID: ${params.id}`;
    }
}
