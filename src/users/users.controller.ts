import { Controller, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../models/User.schema';
import { UserDTO } from './user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    async findAll() : Promise<User[]> {
        return await this.usersService.findAll();
    }

    async create(@Body() userDTO: UserDTO): Promise<User> {
        return await this.usersService.create(userDTO); 
    }
}
