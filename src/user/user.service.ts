import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dto/user.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    create(user: UserDto): Promise<UserDto> {
        return this.userRepository.save(user);
    }

    find(id: string): Promise<User> {
        return this.userRepository.findOne(id);
    }

    findByEmail(email: string): Promise<User> {
        return this.userRepository.findOne({ where: { email: email } })
    }

    update(id: string, user: UserDto) {
        return this.userRepository.update(id, user);
    }

    delete(id: string) {
        this.userRepository.delete(id);
    }

}
