/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../models/User.schema';
import { Model } from 'mongoose';
import { UserDTO } from './user.dto';
const bcrypt = require('bcryptjs');

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private readonly usersModel: Model<User>) {}

    async findAll() : Promise<User[]> { 
        try {
            return await this.usersModel.find();
        }catch (err) {
            return err;
        }
    }

    async create(userDTO: UserDTO): Promise<User> {

        try {
            const hashPassword = await bcrypt.hashSync(userDTO.password, 10);
            return await this.usersModel.create({...userDTO, password: hashPassword});
        }catch(err) {
            return err;
        }
    }

    async findByUsername(username: string): Promise<User> {
        try {
            return await this.usersModel.findOne({username});
        }catch(err) {
            return err;
        }
    }

}
