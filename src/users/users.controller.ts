import { Controller, Body, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../models/User.schema';
import { UserDTO } from './user.dto';
import { JwtStrategy } from 'src/authentication/jwt.strategy';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
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
