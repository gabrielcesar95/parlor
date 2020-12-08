import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { User } from '../user/interfaces/user.interface'
import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser(email: string, pass: string): Promise<User> {
        const user = await this.userService.findByEmail(email, true)

        console.log(user)

        if (user && await bcrypt.compare(pass, user.password)) {
            return user
        }
        return null
    }

    async login(user: User) {
        const payload = { email: user.email, sub: user.id }
        return {
            accessToken: this.jwtService.sign(payload),
        }
    }
}