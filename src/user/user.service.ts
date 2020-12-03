import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCreateDto, UserUpdateDto } from 'src/dto/user.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    // TODO: create a decorator for all the "delete user.password" instructions

    async findAll(): Promise<User[]> {
        const users = await this.userRepository.find();

        users.map((user: User) => {
            delete user.password;

            return user;
        })

        return users;
    }

    async create(createdUser: UserCreateDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(createdUser.password, 10);

        createdUser = {
            ...createdUser,
            password: hashedPassword
        }

        const user = await this.userRepository.save(createdUser);

        if (user) {
            delete user.password;
        }

        return user;
    }

    async find(id: string): Promise<User> {
        const user = await this.userRepository.findOne(id);

        if (user) {
            delete user.password;
        }

        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.userRepository.findOne({ where: { email: email } })

        if (user) {
            delete user.password;
        }

        return user;
    }

    async update(id: string, updatedUser: UserUpdateDto): Promise<User> {

        if (updatedUser.password) {
            const hashedPassword = await bcrypt.hash(updatedUser.password, 10);

            updatedUser = {
                ...updatedUser,
                password: hashedPassword
            }
        }


        await this.userRepository.update(id, updatedUser);
        const user = await this.userRepository.findOne(id);

        if (user) {
            delete user.password;
        }

        return user;
    }

    delete(id: string) {
        this.userRepository.delete(id);
    }

}
