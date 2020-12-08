import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { UserUpdateDto } from './dto/update-user.dto'
import { UserCreateDto } from './dto/create-user.dto'
import { Model } from 'mongoose'
import { User } from './interfaces/user.interface'
@Injectable()
export class UserService {

    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<User>,
    ) { }

    async findAll(): Promise<User[]> {
        //TODO: filters and pagination
        return this.userModel.find().exec()
    }

    async create(userData: UserCreateDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(userData.password, 10)

        userData = {
            ...userData,
            password: hashedPassword
        }

        const createdUser = await new this.userModel(userData).save()

        return createdUser
    }

    async find(id: string): Promise<User> {
        return (await this.userModel.findById(id))?.execPopulate()
    }

    async findByEmail(email: string, password = false): Promise<User> {
        return (await this.userModel.findOne({ email: email }).select(password ? 'password' : ''))?.execPopulate()
    }

    async update(id: string, userData: UserUpdateDto): Promise<User> {
        if (userData.email) {
            const existentUser = (await this.findByEmail(userData.email))?.toObject()

            if (existentUser && existentUser._id != id) {
                throw new BadRequestException({ statusCode: 400, message: ['E-mail already used'], error: 'Bad Request' })
            }
        }

        if (userData.password) {
            const hashedPassword = await bcrypt.hash(userData.password, 10)

            userData = {
                ...userData,
                password: hashedPassword
            }
        }

        if (await this.userModel.findOneAndUpdate({ _id: id }, userData)) {
            return this.find(id)
        }
    }

    async delete(id: string) {
        return this.userModel.findOneAndDelete({ _id: id })
    }

}
