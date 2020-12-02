import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dto/user.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async create(user: UserDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(user.password, 10);

        user = {
            ...user,
            password: hashedPassword
        }

        return this.userRepository.save(user);
    }

    find(id: string): Promise<User> {
        return this.userRepository.findOne(id);
    }

    findByEmail(email: string): Promise<User> {
        return this.userRepository.findOne({ where: { email: email } })
    }

    async update(id: string, user: UserDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(user.password, 10);

        user = {
            ...user,
            password: hashedPassword
        }

        await this.userRepository.update(id, user);
        return await this.userRepository.findOne(id);
    }

    delete(id: string) {
        this.userRepository.delete(id);
    }

}
