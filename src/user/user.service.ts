import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dto/user.dto';
import { InsertResult, Repository } from 'typeorm';
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

    create(user: UserDto): Promise<InsertResult> {
        return this.userRepository.insert(user);
    }

    find(id: string): Promise<User> {
        return this.userRepository.findOne(id);
    }

    update(id: string, user: UserDto) {
        this.userRepository.update(id, user);
        return this.userRepository.findOne(id);
    }

    delete(id: string) {
        this.userRepository.delete(id);
    }

}
