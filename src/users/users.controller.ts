import { Controller, Body, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../models/User.schema';
import { UserDTO } from './user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()
    async findAll() : Promise<User[]> {
        return await this.usersService.findAll();
    }
    @Post()
    async create(@Body() userDTO: UserDTO): Promise<User> {
        return await this.usersService.create(userDTO); 
    }
}
