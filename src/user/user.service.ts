import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserCreateDto, UserUpdateDto } from 'src/dto/user.dto'
import { Repository } from 'typeorm'
import { User } from './user.entity'
import * as bcrypt from 'bcrypt'
@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        const users = await this.userRepository.find()

        return users
    }

    async create(createdUser: UserCreateDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(createdUser.password, 10)

        createdUser = {
            ...createdUser,
            password: hashedPassword
        }

        return await this.userRepository.save(createdUser)
    }

    async find(id: string): Promise<User> {
        return await this.userRepository.findOne(id)
    }

    async findByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne({ where: { email: email } })
    }

    async update(id: string, updatedUser: UserUpdateDto): Promise<User> {

        if (updatedUser.password) {
            const hashedPassword = await bcrypt.hash(updatedUser.password, 10)

            updatedUser = {
                ...updatedUser,
                password: hashedPassword
            }
        }

        await this.userRepository.update(id, updatedUser)
        return await this.userRepository.findOne(id)
    }

    async delete(id: string) {
        const deleteAttempt = await this.userRepository.delete(id)

        return deleteAttempt
    }

}
