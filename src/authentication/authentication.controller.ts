import { Controller, Body, Get, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CredentialsDTO } from './credentials.dto';
import { AuthenticationService } from './authentication.service';
import { UserDTO } from '../users/user.dto';

@Controller('auth')
export class AuthenticationController {

    constructor(private readonly usersService: UsersService, 
                private readonly authService: AuthenticationService) {}

    @Get("/login")
    async login(@Body() credentialsDTO: CredentialsDTO): Promise<any> {
        return this.authService.login(credentialsDTO);
    }

    @Post("/register")
    async register(@Body() userDTO: UserDTO): Promise<any> {
        return this.authService.register(userDTO);
    }
}
