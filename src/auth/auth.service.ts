import { Injectable } from '@nestjs/common'
import { UserService } from 'src/user/user.service'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private userService: UserService) { }

    async validateUser(email: string, pass: string): Promise<any> {
        console.log(email)
        console.log(pass)

        const user = await this.userService.findByEmail(email)
        console.log(user)

        if (user && user.password === await bcrypt.hash(pass, 10)) {
            const { password, ...result } = user
            return result
        }
        return null
    }
}